const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Asegurarse de que la carpeta uploads exista
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configurar almacenamiento de multer para conservar el nombre original del archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        // Sanitizar el nombre original para evitar problemas de ruta
        const sanitizedName = path.basename(file.originalname);
        cb(null, sanitizedName);
    }
});
const upload = multer({ storage });

const app = express();
const PORT = 3000;

app.use(express.json());
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
        // Soporte multilingüe para LanguageTool (es, en-US, etc.)
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

// Obtener lista de notas
app.get('/notes', (req, res) => {
    try {
        const archivos = fs.readdirSync(uploadsDir);
        // Filtrar solo archivos .md o de texto si se desea, o todos los archivos en uploads
        const notas = archivos.filter(archivo => !archivo.startsWith('.'));
        res.json(notas);
    } catch (error) {
        res.status(500).send('Error al leer los archivos: ' + error.message);
    }
});

// Obtener metadatos y etiquetas (#tags) de todas las notas
app.get('/notes/metadata', (req, res) => {
    try {
        const archivos = fs.readdirSync(uploadsDir);
        const notas = archivos.filter(archivo => !archivo.startsWith('.'));
        const tagRegex = /(?:^|\s)#([a-zA-Z0-9_\u00C0-\u017F-]+)/g;

        const resultado = notas.map(nombre => {
            const rutaArchivo = path.join(uploadsDir, nombre);
            try {
                const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
                const tags = new Set();
                let match;
                while ((match = tagRegex.exec(contenido)) !== null) {
                    tags.add(match[1].toLowerCase());
                }
                return {
                    filename: nombre,
                    tags: Array.from(tags)
                };
            } catch (e) {
                return { filename: nombre, tags: [] };
            }
        });

        res.json(resultado);
    } catch (error) {
        res.status(500).send('Error al obtener metadatos: ' + error.message);
    }
});

// Obtener contenido crudo (Markdown original) de una nota para el editor
app.get('/notes/:nombre/raw', (req, res) => {
    const nombreSeguro = path.basename(req.params.nombre);
    const rutaArchivo = path.join(uploadsDir, nombreSeguro);

    try {
        if (!fs.existsSync(rutaArchivo)) {
            return res.status(404).send('Nota no encontrada');
        }
        const textoMarkdown = fs.readFileSync(rutaArchivo, 'utf-8');
        res.type('text/plain').send(textoMarkdown);
    } catch (err) {
        res.status(500).send('Error al leer el archivo: ' + err.message);
    }
});

// Obtener contenido convertido a HTML
app.get('/notes/:nombre/html', (req, res) => {
    const nombreSeguro = path.basename(req.params.nombre);
    const rutaArchivo = path.join(uploadsDir, nombreSeguro);

    try {
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

// Guardar o crear una nota directamente desde el editor
app.post('/notes/save', (req, res) => {
    let { title, content } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).send('El título de la nota es obligatorio');
    }

    // Asegurarse de que tenga extensión .md
    let nombreArchivo = path.basename(title.trim());
    if (!nombreArchivo.endsWith('.md')) {
        nombreArchivo += '.md';
    }

    const rutaArchivo = path.join(uploadsDir, nombreArchivo);

    try {
        fs.writeFileSync(rutaArchivo, content || '', 'utf-8');
        console.log(`Nota guardada: ${nombreArchivo}`);
        res.json({ message: 'Nota guardada con éxito', filename: nombreArchivo });
    } catch (error) {
        res.status(500).send('Error al guardar la nota: ' + error.message);
    }
});

// Eliminar una nota
app.delete('/notes/:nombre', (req, res) => {
    const nombreSeguro = path.basename(req.params.nombre);
    const rutaArchivo = path.join(uploadsDir, nombreSeguro);

    try {
        if (!fs.existsSync(rutaArchivo)) {
            return res.status(404).send('Nota no encontrada');
        }
        fs.unlinkSync(rutaArchivo);
        console.log(`Nota eliminada: ${nombreSeguro}`);
        res.json({ message: 'Nota eliminada correctamente' });
    } catch (error) {
        res.status(500).send('Error al eliminar la nota: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});