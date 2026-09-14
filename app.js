const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Asegurarse de que la carpeta uploads y .versions existan
const uploadsDir = path.join(__dirname, 'uploads');
const versionsDir = path.join(uploadsDir, '.versions');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}
if (!fs.existsSync(versionsDir)) {
    fs.mkdirSync(versionsDir, { recursive: true });
}

// Helper: Resolución segura de rutas para prevenir Path Traversal
function resolveSafeNotePath(noteRelPath) {
    if (!noteRelPath) throw new Error('Ruta de nota inválida');
    const safeRel = path.normalize(noteRelPath).replace(/^(\.\.[\/\\])+/, '');
    const fullPath = path.resolve(uploadsDir, safeRel);
    if (!fullPath.startsWith(uploadsDir)) {
        throw new Error('Intento de Path Traversal detectado');
    }
    return fullPath;
}

// Helper: Escaneo recursivo de archivos .md excluyendo .versions y archivos ocultos
function getNotesRecursive(dir, base = '') {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        if (item.name.startsWith('.')) continue; // Ignorar .versions y ocultos
        const relPath = base ? path.join(base, item.name).replace(/\\/g, '/') : item.name;
        if (item.isDirectory()) {
            results = results.concat(getNotesRecursive(path.join(dir, item.name), relPath));
        } else if (item.isFile() && item.name.endsWith('.md')) {
            results.push(relPath);
        }
    }
    return results;
}

// Helper: Clave sanitizada para almacenar versiones
function getNoteVersionKey(relPath) {
    return encodeURIComponent(relPath.replace(/\\/g, '/')).replace(/%/g, '_');
}

// Configurar almacenamiento de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const sanitizedName = path.basename(file.originalname);
        cb(null, sanitizedName);
    }
});
const upload = multer({ storage });

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se ha subido ningún archivo');
    }
    console.log('Archivo recibido y guardado:', req.file.filename);
    res.send('Archivo recibido y guardado');
});

app.post('/grammar', async (req, res) => {
    const texto = req.body.text;
    const idioma = req.body.language || 'es';
    
    if (!texto) {
        return res.status(400).send('Texto no proporcionado');
    }

    try {
        const respuesta = await fetch('https://api.languagetool.org/v2/check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                text: texto,
                language: idioma
            })
        });

        if (!respuesta.ok) {
            return res.status(respuesta.status).send('Error en el servicio de LanguageTool');
        }

        const resultadoJSON = await respuesta.json();
        res.json(resultadoJSON);
    } catch (error) {
        res.status(500).send('Error de red: ' + error.message);
    }
});

// ==========================================================================
// 1. GESTIÓN DE CARPETAS
// ==========================================================================
app.get('/folders', (req, res) => {
    try {
        const items = fs.readdirSync(uploadsDir, { withFileTypes: true });
        const folders = items
            .filter(item => item.isDirectory() && !item.name.startsWith('.'))
            .map(item => item.name)
            .sort();
        res.json(folders);
    } catch (error) {
        res.status(500).send('Error al leer carpetas: ' + error.message);
    }
});

app.post('/folders/create', (req, res) => {
    const { folderName } = req.body;
    if (!folderName || !folderName.trim()) {
        return res.status(400).send('El nombre de la carpeta es obligatorio');
    }
    const cleanName = path.basename(folderName.trim());
    if (!cleanName || cleanName.startsWith('.')) {
        return res.status(400).send('Nombre de carpeta inválido');
    }
    try {
        const targetDir = path.join(uploadsDir, cleanName);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        res.json({ message: 'Carpeta creada con éxito', folder: cleanName });
    } catch (err) {
        res.status(500).send('Error al crear la carpeta: ' + err.message);
    }
});

// ==========================================================================
// 2. BÚSQUEDA GLOBAL EN TEXTO COMPLETO (Full-Text Search)
// ==========================================================================
app.get('/notes/search', (req, res) => {
    const query = (req.query.q || '').trim();
    if (!query) {
        return res.json([]);
    }

    try {
        const notes = getNotesRecursive(uploadsDir);
        const lowerQ = query.toLowerCase();
        const results = [];

        for (const relPath of notes) {
            const fullPath = path.join(uploadsDir, relPath);
            const content = fs.readFileSync(fullPath, 'utf-8');
            const title = path.basename(relPath, '.md');
            const dir = path.dirname(relPath);
            const folder = dir === '.' ? '' : dir.replace(/\\/g, '/');

            // Proteger notas cifradas: no exponer snippets del payload cifrado
            if (content.startsWith('<!-- ENCRYPTED_NOTE_V1 -->')) {
                if (relPath.toLowerCase().includes(lowerQ)) {
                    results.push({
                        filename: relPath,
                        folder: folder,
                        title: title,
                        matches: ['🔒 [Nota cifrada / Encrypted note]']
                    });
                }
                continue;
            }

            const lowerContent = content.toLowerCase();
            let index = lowerContent.indexOf(lowerQ);
            const matches = [];

            while (index !== -1 && matches.length < 3) {
                const start = Math.max(0, index - 40);
                const end = Math.min(content.length, index + query.length + 40);
                let snippet = content.substring(start, end).replace(/\n/g, ' ');
                
                const qRegex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                snippet = snippet.replace(qRegex, '<mark>$1</mark>');
                
                if (start > 0) snippet = '...' + snippet;
                if (end < content.length) snippet = snippet + '...';
                
                matches.push(snippet);
                index = lowerContent.indexOf(lowerQ, index + query.length);
            }

            if (matches.length > 0 || relPath.toLowerCase().includes(lowerQ)) {
                results.push({
                    filename: relPath,
                    folder: folder,
                    title: title,
                    matches: matches
                });
            }
        }

        res.json(results);
    } catch (err) {
        res.status(500).send('Error buscando notas: ' + err.message);
    }
});

// ==========================================================================
// 3. HISTORIAL DE VERSIONES
// ==========================================================================
app.get('/notes/versions', (req, res) => {
    const filename = req.query.filename;
    if (!filename) return res.status(400).send('Falta filename');
    
    try {
        const noteKey = getNoteVersionKey(filename);
        const noteVersionDir = path.join(versionsDir, noteKey);
        if (!fs.existsSync(noteVersionDir)) {
            return res.json([]);
        }
        const files = fs.readdirSync(noteVersionDir)
            .filter(f => f.endsWith('.md'))
            .sort((a, b) => parseInt(b) - parseInt(a));
        
        const list = files.map(f => {
            const ts = parseInt(f.replace('.md', ''));
            const stat = fs.statSync(path.join(noteVersionDir, f));
            return {
                id: f.replace('.md', ''),
                timestamp: new Date(ts).toISOString(),
                size: stat.size
            };
        });
        res.json(list);
    } catch (err) {
        res.status(500).send('Error al listar versiones: ' + err.message);
    }
});

app.get('/notes/versions/:versionId', (req, res) => {
    const filename = req.query.filename;
    const versionId = path.basename(req.params.versionId);
    if (!filename || !versionId) return res.status(400).send('Parámetros faltantes');

    try {
        const noteKey = getNoteVersionKey(filename);
        const versionFile = path.join(versionsDir, noteKey, `${versionId}.md`);
        if (!fs.existsSync(versionFile)) {
            return res.status(404).send('Versión no encontrada');
        }
        const content = fs.readFileSync(versionFile, 'utf-8');
        res.type('text/plain').send(content);
    } catch (err) {
        res.status(500).send('Error al leer versión: ' + err.message);
    }
});

app.post('/notes/versions/:versionId/restore', (req, res) => {
    const { filename } = req.body;
    const versionId = path.basename(req.params.versionId);
    if (!filename || !versionId) return res.status(400).send('Parámetros faltantes');

    try {
        const noteKey = getNoteVersionKey(filename);
        const versionFile = path.join(versionsDir, noteKey, `${versionId}.md`);
        if (!fs.existsSync(versionFile)) {
            return res.status(404).send('Versión no encontrada');
        }
        const versionContent = fs.readFileSync(versionFile, 'utf-8');
        const targetPath = resolveSafeNotePath(filename);

        // Guardar snapshot de la nota actual antes de restaurar
        if (fs.existsSync(targetPath)) {
            const currentContent = fs.readFileSync(targetPath, 'utf-8');
            const now = Date.now();
            fs.writeFileSync(path.join(versionsDir, noteKey, `${now}.md`), currentContent, 'utf-8');
        }

        fs.writeFileSync(targetPath, versionContent, 'utf-8');
        res.json({ message: 'Versión restaurada con éxito', filename, content: versionContent });
    } catch (err) {
        res.status(500).send('Error al restaurar versión: ' + err.message);
    }
});

// ==========================================================================
// 4. RUTAS CRUD DE NOTAS (Con soporte de carpetas y metadatos)
// ==========================================================================
app.get('/notes', (req, res) => {
    try {
        const notas = getNotesRecursive(uploadsDir);
        res.json(notas);
    } catch (error) {
        res.status(500).send('Error al leer los archivos: ' + error.message);
    }
});

app.get('/notes/metadata', (req, res) => {
    try {
        const notas = getNotesRecursive(uploadsDir);
        const tagRegex = /(?:^|\s)#([a-zA-Z0-9_\u00C0-\u017F-]+)/g;
        const linkRegex = /\[\[(.*?)\]\]/g;

        const resultado = notas.map(relPath => {
            const rutaArchivo = path.join(uploadsDir, relPath);
            try {
                const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
                const isEncrypted = contenido.startsWith('<!-- ENCRYPTED_NOTE_V1 -->');
                const tags = new Set();
                const links = new Set();

                if (!isEncrypted) {
                    let matchTag;
                    while ((matchTag = tagRegex.exec(contenido)) !== null) {
                        tags.add(matchTag[1].toLowerCase());
                    }

                    let matchLink;
                    while ((matchLink = linkRegex.exec(contenido)) !== null) {
                        let target = matchLink[1].trim();
                        if (!target.toLowerCase().endsWith('.md')) {
                            target += '.md';
                        }
                        links.add(target);
                    }
                }

                const dir = path.dirname(relPath);
                const folder = dir === '.' ? '' : dir.replace(/\\/g, '/');

                return {
                    filename: relPath,
                    folder: folder,
                    title: path.basename(relPath, '.md'),
                    isEncrypted: isEncrypted,
                    tags: Array.from(tags),
                    links: Array.from(links)
                };
            } catch (e) {
                return { filename: relPath, folder: '', title: path.basename(relPath, '.md'), isEncrypted: false, tags: [], links: [] };
            }
        });

        res.json(resultado);
    } catch (error) {
        res.status(500).send('Error al obtener metadatos: ' + error.message);
    }
});

app.get('/notes/:nombre/raw', (req, res) => {
    const rawPath = req.query.path || req.params.nombre;
    try {
        const rutaArchivo = resolveSafeNotePath(rawPath);
        if (!fs.existsSync(rutaArchivo)) {
            return res.status(404).send('Nota no encontrada');
        }
        const textoMarkdown = fs.readFileSync(rutaArchivo, 'utf-8');
        res.type('text/plain').send(textoMarkdown);
    } catch (err) {
        res.status(500).send('Error al leer el archivo: ' + err.message);
    }
});

app.get('/notes/:nombre/html', (req, res) => {
    const rawPath = req.query.path || req.params.nombre;
    try {
        const rutaArchivo = resolveSafeNotePath(rawPath);
        if (!fs.existsSync(rutaArchivo)) {
            return res.status(404).send('Nota no encontrada');
        }
        const textoMarkdown = fs.readFileSync(rutaArchivo, 'utf-8');
        const html = marked.parse(textoMarkdown);
        res.send(html);
    } catch (err) {
        res.status(500).send('Error al leer el archivo: ' + err.message);
    }
});

app.post('/notes/save', (req, res) => {
    let { title, content, folder } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).send('El título de la nota es obligatorio');
    }

    let nombreArchivo = path.basename(title.trim());
    if (!nombreArchivo.endsWith('.md')) {
        nombreArchivo += '.md';
    }

    let relPath = nombreArchivo;
    if (folder && folder.trim()) {
        const cleanFolder = path.basename(folder.trim());
        relPath = path.join(cleanFolder, nombreArchivo).replace(/\\/g, '/');
    }

    try {
        const rutaArchivo = resolveSafeNotePath(relPath);
        const folderDir = path.dirname(rutaArchivo);
        if (!fs.existsSync(folderDir)) {
            fs.mkdirSync(folderDir, { recursive: true });
        }

        // Si ya existía y el contenido cambió, guardar snapshot en .versions
        if (fs.existsSync(rutaArchivo)) {
            const oldContent = fs.readFileSync(rutaArchivo, 'utf-8');
            if (oldContent !== content) {
                const noteKey = getNoteVersionKey(relPath);
                const noteVersionDir = path.join(versionsDir, noteKey);
                if (!fs.existsSync(noteVersionDir)) {
                    fs.mkdirSync(noteVersionDir, { recursive: true });
                }
                const now = Date.now();
                fs.writeFileSync(path.join(noteVersionDir, `${now}.md`), oldContent, 'utf-8');

                // Mantener máximo 20 versiones
                const allVers = fs.readdirSync(noteVersionDir).sort();
                if (allVers.length > 20) {
                    const toDel = allVers.slice(0, allVers.length - 20);
                    toDel.forEach(f => fs.unlinkSync(path.join(noteVersionDir, f)));
                }
            }
        }

        fs.writeFileSync(rutaArchivo, content || '', 'utf-8');
        console.log(`Nota guardada: ${relPath}`);
        res.json({ message: 'Nota guardada con éxito', filename: relPath });
    } catch (error) {
        res.status(500).send('Error al guardar la nota: ' + error.message);
    }
});

app.delete('/notes/:nombre', (req, res) => {
    const rawPath = req.query.path || req.params.nombre;
    try {
        const rutaArchivo = resolveSafeNotePath(rawPath);
        if (!fs.existsSync(rutaArchivo)) {
            return res.status(404).send('Nota no encontrada');
        }
        fs.unlinkSync(rutaArchivo);
        console.log(`Nota eliminada: ${rawPath}`);
        res.json({ message: 'Nota eliminada correctamente' });
    } catch (error) {
        res.status(500).send('Error al eliminar la nota: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});