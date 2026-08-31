// Elementos del DOM
const markdownInput = document.getElementById('markdown-input');
const previewOutput = document.getElementById('preview-output');
const noteTitle = document.getElementById('note-title');
const notesList = document.getElementById('notes-list');
const searchInput = document.getElementById('search-notes');
const uploadForm = document.getElementById('upload-form');
const noteFileInput = document.getElementById('note-file');

// Botones de acción
const btnSave = document.getElementById('btn-save');
const btnNewNote = document.getElementById('btn-new-note');
const btnGrammar = document.getElementById('btn-grammar');
const btnDownload = document.getElementById('btn-download');
const btnDelete = document.getElementById('btn-delete');
const btnTheme = document.getElementById('btn-theme');
const btnCloseGrammar = document.getElementById('btn-close-grammar');
const btnCopyHtml = document.getElementById('btn-copy-html');
const grammarDrawer = document.getElementById('grammar-drawer');
const grammarContent = document.getElementById('grammar-content');
const saveStatus = document.getElementById('save-status');

// Estadísticas
const statWords = document.getElementById('stat-words');
const statChars = document.getElementById('stat-chars');
const statLines = document.getElementById('stat-lines');

// Estado de la aplicación
let currentNoteFilename = null;
let todasLasNotas = [];
let isUnsaved = false;

// Inicialización de Marked.js con resaltado de sintaxis
if (window.marked) {
  marked.setOptions({
    breaks: true, // saltos de línea automáticos
    gfm: true,    // GitHub Flavored Markdown
    highlight: function(code, lang) {
      if (window.hljs) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
      return code;
    }
  });
}

// --------------------------------------------------------------------------
// 1. RENDERIZADO EN TIEMPO REAL
// --------------------------------------------------------------------------
function renderizarMarkdown() {
  const texto = markdownInput.value;
  
  if (!texto.trim()) {
    previewOutput.innerHTML = '<p style="color: var(--text-muted); font-style: italic;">La vista previa aparecerá aquí conforme vayas escribiendo...</p>';
  } else {
    // 1. Convertir Markdown a HTML
    const htmlCrudo = marked.parse(texto);
    // 2. Sanitizar con DOMPurify para prevenir XSS
    const htmlLimpio = window.DOMPurify ? DOMPurify.sanitize(htmlCrudo) : htmlCrudo;
    // 3. Insertar en el contenedor
    previewOutput.innerHTML = htmlLimpio;
  }

  actualizarEstadisticas(texto);
}

// Escuchar cambios al escribir en el textarea (Evento INPUT = Tiempo Real)
markdownInput.addEventListener('input', () => {
  renderizarMarkdown();
  marcarModificado();
});

// Scroll sincronizado entre el editor y la vista previa
let isSyncingLeftScroll = false;
let isSyncingRightScroll = false;

markdownInput.addEventListener('scroll', () => {
  if (!isSyncingLeftScroll) {
    isSyncingRightScroll = true;
    const porcentaje = markdownInput.scrollTop / (markdownInput.scrollHeight - markdownInput.clientHeight || 1);
    previewOutput.scrollTop = porcentaje * (previewOutput.scrollHeight - previewOutput.clientHeight);
  }
  isSyncingLeftScroll = false;
});

previewOutput.addEventListener('scroll', () => {
  if (!isSyncingRightScroll) {
    isSyncingLeftScroll = true;
    const porcentaje = previewOutput.scrollTop / (previewOutput.scrollHeight - previewOutput.clientHeight || 1);
    markdownInput.scrollTop = porcentaje * (markdownInput.scrollHeight - markdownInput.clientHeight);
  }
  isSyncingRightScroll = false;
});

// --------------------------------------------------------------------------
// 2. ESTADÍSTICAS DEL DOCUMENTO
// --------------------------------------------------------------------------
function actualizarEstadisticas(texto) {
  const caracteres = texto.length;
  const palabras = texto.trim() ? texto.trim().split(/\s+/).length : 0;
  const lineas = texto ? texto.split('\n').length : 1;

  statWords.textContent = `${palabras} ${palabras === 1 ? 'palabra' : 'palabras'}`;
  statChars.textContent = `${caracteres} caracteres`;
  statLines.textContent = `${lineas} líneas`;
}

function marcarModificado() {
  isUnsaved = true;
  saveStatus.textContent = '● Cambios sin guardar';
  saveStatus.style.color = 'var(--warning)';
}

function marcarGuardado() {
  isUnsaved = false;
  saveStatus.textContent = '✓ Todos los cambios guardados';
  saveStatus.style.color = 'var(--text-muted)';
}

// --------------------------------------------------------------------------
// 3. BARRA DE HERRAMIENTAS MARKDOWN
// --------------------------------------------------------------------------
document.querySelectorAll('.tool-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    insertarFormato(action);
  });
});

function insertarFormato(action) {
  const start = markdownInput.selectionStart;
  const end = markdownInput.selectionEnd;
  const texto = markdownInput.value;
  const seleccionado = texto.substring(start, end);

  let reemplazo = '';
  let cursorOffset = 0;

  switch (action) {
    case 'h1':
      reemplazo = `# ${seleccionado || 'Encabezado 1'}`;
      break;
    case 'h2':
      reemplazo = `## ${seleccionado || 'Encabezado 2'}`;
      break;
    case 'h3':
      reemplazo = `### ${seleccionado || 'Encabezado 3'}`;
      break;
    case 'bold':
      reemplazo = `**${seleccionado || 'texto en negrita'}**`;
      cursorOffset = seleccionado ? 0 : -2;
      break;
    case 'italic':
      reemplazo = `*${seleccionado || 'texto en cursiva'}*`;
      cursorOffset = seleccionado ? 0 : -1;
      break;
    case 'strike':
      reemplazo = `~~${seleccionado || 'texto tachado'}~~`;
      break;
    case 'quote':
      reemplazo = `> ${seleccionado || 'Cita de texto'}`;
      break;
    case 'code':
      reemplazo = `\`${seleccionado || 'código'}\``;
      break;
    case 'codeblock':
      reemplazo = `\`\`\`javascript\n${seleccionado || '// Tu código aquí'}\n\`\`\``;
      break;
    case 'link':
      reemplazo = `[${seleccionado || 'Texto del enlace'}](https://ejemplo.com)`;
      break;
    case 'ul':
      reemplazo = `- ${seleccionado || 'Elemento de lista'}`;
      break;
    case 'ol':
      reemplazo = `1. ${seleccionado || 'Primer elemento'}`;
      break;
    case 'task':
      reemplazo = `- [ ] ${seleccionado || 'Tarea pendiente'}`;
      break;
    case 'table':
      reemplazo = `\n| Encabezado 1 | Encabezado 2 |\n| :--- | :--- |\n| Fila 1 | Dato 1 |\n| Fila 2 | Dato 2 |\n`;
      break;
  }

  // Insertar en la posición del cursor
  markdownInput.setRangeText(reemplazo, start, end, 'end');
  markdownInput.focus();
  
  if (cursorOffset !== 0) {
    markdownInput.setSelectionRange(markdownInput.selectionEnd + cursorOffset, markdownInput.selectionEnd + cursorOffset);
  }

  renderizarMarkdown();
  marcarModificado();
}

// Permitir sangría con la tecla Tab dentro del editor
markdownInput.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    markdownInput.setRangeText('  ', start, end, 'end');
    renderizarMarkdown();
  }
  
  // Atajo Ctrl+S / Cmd+S para Guardar
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    guardarNota();
  }

  // Atajo Ctrl+B para Negrita
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault();
    insertarFormato('bold');
  }

  // Atajo Ctrl+I para Cursiva
  if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
    e.preventDefault();
    insertarFormato('italic');
  }
});

// --------------------------------------------------------------------------
// 4. GESTIÓN DE NOTAS (CRUD)
// --------------------------------------------------------------------------

// Cargar listado de notas desde el servidor
async function cargarNotas() {
  try {
    const res = await fetch('/notes');
    if (!res.ok) throw new Error('Error al listar notas');
    
    todasLasNotas = await res.json();
    renderizarListaNotas(todasLasNotas);

    // Si hay notas y ninguna está abierta, abrir la primera
    if (todasLasNotas.length > 0 && !currentNoteFilename) {
      abrirNota(todasLasNotas[0]);
    } else if (todasLasNotas.length === 0 && !currentNoteFilename) {
      crearNuevaNota();
    }
  } catch (err) {
    console.error(err);
    mostrarToast('Error al cargar la lista de notas', 'error');
  }
}

function renderizarListaNotas(notas) {
  notesList.innerHTML = '';

  if (notas.length === 0) {
    notesList.innerHTML = `<li style="padding: 12px; color: var(--text-muted); font-size: 0.85rem; text-align: center;">No se encontraron notas</li>`;
    return;
  }

  notas.forEach(nota => {
    const li = document.createElement('li');
    li.className = `note-item ${currentNoteFilename === nota ? 'active' : ''}`;
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'note-item-title';
    titleSpan.innerHTML = `<span>📝</span> ${nota.replace(/\.md$/i, '')}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'note-item-actions';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'item-btn';
    deleteBtn.title = 'Eliminar nota';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      confirmarYEliminarNota(nota);
    };

    actionsDiv.appendChild(deleteBtn);
    li.appendChild(titleSpan);
    li.appendChild(actionsDiv);

    li.onclick = () => {
      if (currentNoteFilename !== nota) {
        abrirNota(nota);
      }
    };

    notesList.appendChild(li);
  });
}

// Abrir y cargar una nota en el editor
async function abrirNota(nombreArchivo) {
  try {
    const res = await fetch(`/notes/${encodeURIComponent(nombreArchivo)}/raw`);
    if (!res.ok) throw new Error('No se pudo obtener el contenido');

    const contenidoRaw = await res.text();
    
    currentNoteFilename = nombreArchivo;
    noteTitle.value = nombreArchivo.replace(/\.md$/i, '');
    markdownInput.value = contenidoRaw;
    
    btnDelete.style.display = 'inline-flex';
    renderizarMarkdown();
    marcarGuardado();
    renderizarListaNotas(todasLasNotas);

    // Cerrar drawer de gramática si estaba abierto
    grammarDrawer.classList.remove('open');
  } catch (err) {
    console.error(err);
    mostrarToast('Error al abrir la nota', 'error');
  }
}

// Guardar nota actual (o crear nueva)
async function guardarNota() {
  const titulo = noteTitle.value.trim();
  const contenido = markdownInput.value;

  if (!titulo) {
    mostrarToast('Por favor escribe un título para la nota', 'error');
    noteTitle.focus();
    return;
  }

  try {
    saveStatus.textContent = 'Guardando...';
    
    const res = await fetch('/notes/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: titulo, content: contenido })
    });

    if (!res.ok) {
      const errorMsg = await res.text();
      throw new Error(errorMsg);
    }

    const data = await res.json();
    currentNoteFilename = data.filename;
    btnDelete.style.display = 'inline-flex';
    marcarGuardado();
    mostrarToast('¡Nota guardada con éxito!', 'success');

    // Refrescar lista de notas
    const listRes = await fetch('/notes');
    if (listRes.ok) {
      todasLasNotas = await listRes.json();
      renderizarListaNotas(todasLasNotas);
    }
  } catch (err) {
    console.error(err);
    mostrarToast(`Error al guardar: ${err.message}`, 'error');
    saveStatus.textContent = 'Error al guardar';
  }
}

// Crear nueva nota en blanco
function crearNuevaNota() {
  currentNoteFilename = null;
  noteTitle.value = 'Nota sin título';
  markdownInput.value = `# Bienvenido a tu nueva nota

Empieza a escribir tus ideas aquí usando **Markdown** en tiempo real.

- [x] Crear una nota
- [ ] Explorar las herramientas
- [ ] Revisar la gramática

> *"La simplicidad es la máxima sofisticación."*
`;
  btnDelete.style.display = 'none';
  renderizarMarkdown();
  marcarModificado();
  renderizarListaNotas(todasLasNotas);
  markdownInput.focus();
}

// Eliminar nota
async function confirmarYEliminarNota(nombreArchivo) {
  if (!confirm(`¿Estás seguro de que deseas eliminar "${nombreArchivo}"?`)) {
    return;
  }

  try {
    const res = await fetch(`/notes/${encodeURIComponent(nombreArchivo)}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error('Error al eliminar la nota');

    mostrarToast('Nota eliminada correctamente', 'success');

    if (currentNoteFilename === nombreArchivo) {
      crearNuevaNota();
    }

    cargarNotas();
  } catch (err) {
    console.error(err);
    mostrarToast(`Error al eliminar: ${err.message}`, 'error');
  }
}

// Descargar nota en formato .md
function descargarNota() {
  const titulo = (noteTitle.value.trim() || 'nota') + '.md';
  const contenido = markdownInput.value;

  const blob = new Blob([contenido], { type: 'text/markdown;charset=utf-8' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = titulo;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(enlace.href);
  
  mostrarToast('Archivo descargado', 'success');
}

// Copiar HTML renderizado al portapapeles
btnCopyHtml.addEventListener('click', async () => {
  const html = previewOutput.innerHTML;
  try {
    await navigator.clipboard.writeText(html);
    mostrarToast('HTML copiado al portapapeles', 'success');
  } catch (err) {
    mostrarToast('No se pudo copiar el HTML', 'error');
  }
});

// Subida de archivos desde el input
noteFileInput.addEventListener('change', async () => {
  const archivo = noteFileInput.files[0];
  if (!archivo) return;

  const formData = new FormData();
  formData.append('file', archivo);

  try {
    mostrarToast('Subiendo archivo...', 'info');
    const res = await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error('Error en la subida');

    mostrarToast('Archivo subido con éxito', 'success');
    noteFileInput.value = '';
    
    // Recargar notas y abrir la recién subida
    const listRes = await fetch('/notes');
    if (listRes.ok) {
      todasLasNotas = await listRes.json();
      renderizarListaNotas(todasLasNotas);
      abrirNota(archivo.name);
    }
  } catch (err) {
    console.error(err);
    mostrarToast('Error al subir el archivo', 'error');
  }
});

// Búsqueda / Filtro de notas
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtradas = todasLasNotas.filter(nota => nota.toLowerCase().includes(query));
  renderizarListaNotas(filtradas);
});

// --------------------------------------------------------------------------
// 5. ASISTENTE DE GRAMÁTICA CON APLICACIÓN CON 1 CLIC
// --------------------------------------------------------------------------
btnGrammar.addEventListener('click', async () => {
  const texto = markdownInput.value.trim();

  if (!texto) {
    mostrarToast('Escribe algo en la nota para poder revisarla', 'error');
    return;
  }

  grammarDrawer.classList.add('open');
  grammarContent.innerHTML = `
    <div style="text-align: center; padding: 24px;">
      <p>⏳ Analizando texto con LanguageTool...</p>
    </div>
  `;

  try {
    const res = await fetch('/grammar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: texto })
    });

    if (!res.ok) throw new Error('Error al contactar el servicio de gramática');

    const data = await res.json();
    mostrarResultadosGramatica(data.matches || []);
  } catch (err) {
    console.error(err);
    grammarContent.innerHTML = `<p style="color: var(--danger);">Error: ${err.message}</p>`;
  }
});

function mostrarResultadosGramatica(matches) {
  grammarContent.innerHTML = '';

  if (matches.length === 0) {
    grammarContent.innerHTML = `
      <div style="text-align: center; padding: 30px;">
        <span style="font-size: 2.5rem;">🎉</span>
        <h4 style="margin: 10px 0; color: var(--success);">¡Texto impecable!</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">No se detectaron faltas de ortografía ni problemas gramaticales.</p>
      </div>
    `;
    return;
  }

  const resumen = document.createElement('p');
  resumen.style.fontSize = '0.85rem';
  resumen.style.color = 'var(--text-muted)';
  resumen.textContent = `Se encontraron ${matches.length} ${matches.length === 1 ? 'observación' : 'observaciones'}:`;
  grammarContent.appendChild(resumen);

  matches.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'grammar-card';

    const msg = document.createElement('div');
    msg.className = 'grammar-msg';
    msg.textContent = `${index + 1}. ${item.message}`;

    // Contexto con palabra marcada
    const ctx = document.createElement('div');
    ctx.className = 'grammar-context';
    
    // Resaltar el fragmento problemático
    const ctxText = item.context.text;
    const offset = item.context.offset;
    const length = item.context.length;
    const antes = ctxText.substring(0, offset);
    const palabraError = ctxText.substring(offset, offset + length);
    const despues = ctxText.substring(offset + length);

    ctx.innerHTML = `...${antes}<mark>${palabraError}</mark>${despues}...`;

    card.appendChild(msg);
    card.appendChild(ctx);

    // Sugerencias interactivas con 1 clic
    if (item.replacements && item.replacements.length > 0) {
      const sugContainer = document.createElement('div');
      sugContainer.className = 'grammar-suggestions';
      
      const sugLabel = document.createElement('span');
      sugLabel.style.fontSize = '0.75rem';
      sugLabel.style.color = 'var(--text-muted)';
      sugLabel.style.display = 'block';
      sugLabel.style.width = '100%';
      sugLabel.textContent = 'Aplicar corrección:';
      sugContainer.appendChild(sugLabel);

      item.replacements.slice(0, 3).forEach(rep => {
        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        chip.textContent = rep.value;
        chip.title = `Reemplazar "${palabraError}" por "${rep.value}"`;
        
        chip.onclick = () => {
          aplicarSugerencia(palabraError, rep.value);
          card.style.opacity = '0.4';
          card.style.pointerEvents = 'none';
          chip.textContent = '✓ Aplicado';
        };

        sugContainer.appendChild(chip);
      });

      card.appendChild(sugContainer);
    }

    grammarContent.appendChild(card);
  });
}

// Reemplazar la palabra observada en el textarea
function aplicarSugerencia(palabraOriginal, reemplazo) {
  const actual = markdownInput.value;
  // Reemplazar la primera ocurrencia de la palabra
  const nuevoTexto = actual.replace(palabraOriginal, reemplazo);
  markdownInput.value = nuevoTexto;
  renderizarMarkdown();
  marcarModificado();
  mostrarToast(`Reemplazado "${palabraOriginal}" por "${reemplazo}"`, 'success');
}

btnCloseGrammar.addEventListener('click', () => {
  grammarDrawer.classList.remove('open');
});

// --------------------------------------------------------------------------
// 6. TEMA OSCURO / CLARO
// --------------------------------------------------------------------------
const temaGuardado = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', temaGuardado);
btnTheme.textContent = temaGuardado === 'dark' ? '🌙' : '☀️';

btnTheme.addEventListener('click', () => {
  const actual = document.documentElement.getAttribute('data-theme');
  const nuevo = actual === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nuevo);
  localStorage.setItem('theme', nuevo);
  btnTheme.textContent = nuevo === 'dark' ? '🌙' : '☀️';
});

// --------------------------------------------------------------------------
// 7. TOAST NOTIFICATIONS
// --------------------------------------------------------------------------
function mostrarToast(mensaje, tipo = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.textContent = mensaje;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

// --------------------------------------------------------------------------
// 8. EVENTOS DE BOTONES SUPERIORES
// --------------------------------------------------------------------------
btnSave.addEventListener('click', guardarNota);
btnNewNote.addEventListener('click', crearNuevaNota);
btnDownload.addEventListener('click', descargarNota);
btnDelete.addEventListener('click', () => {
  if (currentNoteFilename) confirmarYEliminarNota(currentNoteFilename);
});

// Cargar notas al iniciar
cargarNotas();