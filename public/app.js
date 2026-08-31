// ==========================================================================
// DICCIONARIO DE INTERNACIONALIZACIÓN (i18n: ES / EN)
// ==========================================================================
const i18n = {
  es: {
    appTitle: "Markdown Studio",
    btnSave: "Guardar",
    btnGrammar: "Gramática",
    btnPresentation: "Presentar",
    btnExportPdf: "PDF",
    btnDownload: "Descargar",
    btnNewNote: "Nueva Nota",
    searchPlaceholder: "Buscar notas...",
    uploadLabel: "Subir archivo .md",
    titlePlaceholder: "Título de la nota (ej: Mi primera nota)...",
    untitledNote: "Nota sin título",
    editorSubtitle: "Edición en tiempo real",
    editorPlaceholder: "Escribe o pega aquí tu contenido en Markdown...",
    previewTitle: "Vista Previa",
    btnCopyHtml: "Copiar HTML",
    savedStatus: "✓ Todos los cambios guardados",
    unsavedStatus: "● Cambios sin guardar",
    savingStatus: "Guardando...",
    errorSavingStatus: "Error al guardar",
    grammarDrawerTitle: "Revisión Gramatical",
    grammarEmptyState: 'Presiona "Gramática" para analizar la nota con LanguageTool.',
    grammarAnalyzing: "⏳ Analizando texto con LanguageTool...",
    grammarSuccessTitle: "¡Texto impecable!",
    grammarSuccessMsg: "No se detectaron faltas de ortografía ni problemas gramaticales.",
    grammarObservations: (count) => `Se encontraron ${count} ${count === 1 ? 'observación' : 'observaciones'}:`,
    grammarApplyFix: "Aplicar corrección:",
    grammarApplied: "✓ Aplicado",
    grammarEmptyInput: "Escribe algo en la nota para poder revisarla",
    prevSlide: "Anterior",
    nextSlide: "Siguiente",
    slideNavHint: "para navegar",
    slideExitHint: "para salir",
    btnPrint: "Imprimir",
    toolUl: "• Lista",
    toolOl: "1. Lista",
    toolTask: "☑ Tarea",
    toolTable: "▦ Tabla",
    noNotesFound: "No se encontraron notas",
    words: (count) => `${count} ${count === 1 ? 'palabra' : 'palabras'}`,
    chars: (count) => `${count} caracteres`,
    lines: (count) => `${count} ${count === 1 ? 'línea' : 'líneas'}`,
    deleteConfirm: (name) => `¿Estás seguro de que deseas eliminar "${name}"?`,
    toastSaveSuccess: "¡Nota guardada con éxito!",
    toastSaveError: (msg) => `Error al guardar: ${msg}`,
    toastTitleRequired: "Por favor escribe un título para la nota",
    toastDeleteSuccess: "Nota eliminada correctamente",
    toastDeleteError: (msg) => `Error al eliminar: ${msg}`,
    toastDownloadSuccess: "Archivo Markdown descargado",
    toastPdfStart: "Generando documento PDF...",
    toastPdfSuccess: "¡PDF descargado con éxito!",
    toastPdfError: "Error al generar el PDF",
    toastCopySuccess: "HTML copiado al portapapeles",
    toastCopyError: "No se pudo copiar el HTML",
    toastUploadStart: "Subiendo archivo...",
    toastUploadSuccess: "Archivo subido con éxito",
    toastUploadError: "Error al subir el archivo",
    toastReplacementApplied: (oldW, newW) => `Reemplazado "${oldW}" por "${newW}"`,
    previewEmptyPlaceholder: "La vista previa aparecerá aquí conforme vayas escribiendo...",
    defaultNoteContent: `# Bienvenido a tu nueva nota

Empieza a escribir tus ideas aquí usando **Markdown** en tiempo real.

- [x] Crear una nota
- [ ] Explorar las herramientas
- [ ] Revisar la gramática
- [ ] Probar el modo Presentación (F5)

---

# Diapositiva 2: Formato

Puedes separar diapositivas fácilmente usando tres guiones \`---\`.

> *"La simplicidad es la máxima sofisticación."*
`
  },
  en: {
    appTitle: "Markdown Studio",
    btnSave: "Save",
    btnGrammar: "Grammar",
    btnPresentation: "Present",
    btnExportPdf: "PDF",
    btnDownload: "Download",
    btnNewNote: "New Note",
    searchPlaceholder: "Search notes...",
    uploadLabel: "Upload .md file",
    titlePlaceholder: "Note title (e.g., My First Note)...",
    untitledNote: "Untitled Note",
    editorSubtitle: "Real-time editing",
    editorPlaceholder: "Type or paste your Markdown content here...",
    previewTitle: "Live Preview",
    btnCopyHtml: "Copy HTML",
    savedStatus: "✓ All changes saved",
    unsavedStatus: "● Unsaved changes",
    savingStatus: "Saving...",
    errorSavingStatus: "Error saving note",
    grammarDrawerTitle: "Grammar & Spell Check",
    grammarEmptyState: 'Click "Grammar" to inspect note with LanguageTool.',
    grammarAnalyzing: "⏳ Analyzing text with LanguageTool...",
    grammarSuccessTitle: "Flawless text!",
    grammarSuccessMsg: "No spelling or grammatical issues detected.",
    grammarObservations: (count) => `Found ${count} ${count === 1 ? 'issue' : 'issues'}:`,
    grammarApplyFix: "Apply correction:",
    grammarApplied: "✓ Applied",
    grammarEmptyInput: "Write something in the note before checking grammar",
    prevSlide: "Previous",
    nextSlide: "Next",
    slideNavHint: "to navigate",
    slideExitHint: "to exit",
    btnPrint: "Print",
    toolUl: "• List",
    toolOl: "1. List",
    toolTask: "☑ Task",
    toolTable: "▦ Table",
    noNotesFound: "No notes found",
    words: (count) => `${count} ${count === 1 ? 'word' : 'words'}`,
    chars: (count) => `${count} characters`,
    lines: (count) => `${count} ${count === 1 ? 'line' : 'lines'}`,
    deleteConfirm: (name) => `Are you sure you want to delete "${name}"?`,
    toastSaveSuccess: "Note saved successfully!",
    toastSaveError: (msg) => `Error saving: ${msg}`,
    toastTitleRequired: "Please enter a title for the note",
    toastDeleteSuccess: "Note deleted successfully",
    toastDeleteError: (msg) => `Error deleting: ${msg}`,
    toastDownloadSuccess: "Markdown file downloaded",
    toastPdfStart: "Generating PDF document...",
    toastPdfSuccess: "PDF downloaded successfully!",
    toastPdfError: "Error generating PDF",
    toastCopySuccess: "HTML copied to clipboard",
    toastCopyError: "Could not copy HTML",
    toastUploadStart: "Uploading file...",
    toastUploadSuccess: "File uploaded successfully",
    toastUploadError: "Error uploading file",
    toastReplacementApplied: (oldW, newW) => `Replaced "${oldW}" with "${newW}"`,
    previewEmptyPlaceholder: "Live preview will appear here as you type...",
    defaultNoteContent: `# Welcome to your new note

Start jotting down your thoughts here using **Markdown** in real-time.

- [x] Create a note
- [ ] Explore formatting tools
- [ ] Check grammar & spelling
- [ ] Try Presentation mode (F5)

---

# Slide 2: Formatting

You can easily separate slides by using three dashes \`---\`.

> *"Simplicity is the ultimate sophistication."*
`
  }
};

let currentLang = localStorage.getItem('app_lang') || 'es';

// Elementos del DOM
const langSelect = document.getElementById('lang-select');
const markdownInput = document.getElementById('markdown-input');
const previewOutput = document.getElementById('preview-output');
const noteTitle = document.getElementById('note-title');
const notesList = document.getElementById('notes-list');
const searchInput = document.getElementById('search-notes');
const uploadForm = document.getElementById('upload-form');
const noteFileInput = document.getElementById('note-file');

// Botones de acción principales
const btnSave = document.getElementById('btn-save');
const btnNewNote = document.getElementById('btn-new-note');
const btnGrammar = document.getElementById('btn-grammar');
const btnPresentation = document.getElementById('btn-presentation');
const btnExportPdf = document.getElementById('btn-export-pdf');
const btnDownload = document.getElementById('btn-download');
const btnReader = document.getElementById('btn-reader');
const btnDelete = document.getElementById('btn-delete');
const btnTheme = document.getElementById('btn-theme');
const btnCloseGrammar = document.getElementById('btn-close-grammar');
const btnCopyHtml = document.getElementById('btn-copy-html');
const grammarDrawer = document.getElementById('grammar-drawer');
const grammarContent = document.getElementById('grammar-content');
const saveStatus = document.getElementById('save-status');

// Elementos del Modo Presentación
const presentationOverlay = document.getElementById('presentation-overlay');
const presentationProgressBar = document.getElementById('presentation-progress');
const presentationNoteTitle = document.getElementById('presentation-note-title');
const slideContent = document.getElementById('slide-content');
const slideCounter = document.getElementById('slide-counter');
const btnPrevSlide = document.getElementById('btn-prev-slide');
const btnNextSlide = document.getElementById('btn-next-slide');
const btnExitPresentation = document.getElementById('btn-exit-presentation');

// Elementos del Modo Lectura
const readerOverlay = document.getElementById('reader-overlay');
const readerNoteTitle = document.getElementById('reader-note-title');
const readerContent = document.getElementById('reader-content');
const btnCloseReader = document.getElementById('btn-close-reader');
const btnReaderPrint = document.getElementById('btn-reader-print');

// Estadísticas
const statWords = document.getElementById('stat-words');
const statChars = document.getElementById('stat-chars');
const statLines = document.getElementById('stat-lines');

// Estado de la aplicación
let currentNoteFilename = null;
let todasLasNotas = [];
let isUnsaved = false;

// Estado de la presentación
let slides = [];
let currentSlideIndex = 0;

// ==========================================================================
// GESTIÓN DE IDIOMA (i18n)
// ==========================================================================
function setLanguage(lang) {
  if (!i18n[lang]) lang = 'es';
  currentLang = lang;
  localStorage.setItem('app_lang', lang);
  if (langSelect) langSelect.value = lang;

  const t = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  if (isUnsaved) {
    saveStatus.textContent = t.unsavedStatus;
  } else {
    saveStatus.textContent = t.savedStatus;
  }

  renderizarMarkdown();
  renderizarListaNotas(todasLasNotas);
}

if (langSelect) {
  langSelect.value = currentLang;
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// ==========================================================================
// INICIALIZACIÓN DE MARKED.JS
// ==========================================================================
if (window.marked) {
  marked.setOptions({
    breaks: true,
    gfm: true,
    highlight: function(code, lang) {
      if (window.hljs) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
      return code;
    }
  });
}

// ==========================================================================
// 1. RENDERIZADO EN TIEMPO REAL
// ==========================================================================
function renderizarMarkdown() {
  const t = i18n[currentLang];
  const texto = markdownInput.value;
  
  if (!texto.trim()) {
    previewOutput.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">${t.previewEmptyPlaceholder}</p>`;
  } else {
    const htmlCrudo = marked.parse(texto);
    const htmlLimpio = window.DOMPurify ? DOMPurify.sanitize(htmlCrudo) : htmlCrudo;
    previewOutput.innerHTML = htmlLimpio;
  }

  actualizarEstadisticas(texto);
}

markdownInput.addEventListener('input', () => {
  renderizarMarkdown();
  marcarModificado();
});

// Scroll sincronizado
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

// ==========================================================================
// 2. ESTADÍSTICAS DEL DOCUMENTO
// ==========================================================================
function actualizarEstadisticas(texto) {
  const t = i18n[currentLang];
  const caracteres = texto.length;
  const palabras = texto.trim() ? texto.trim().split(/\s+/).length : 0;
  const lineas = texto ? texto.split('\n').length : 1;

  statWords.textContent = t.words(palabras);
  statChars.textContent = t.chars(caracteres);
  statLines.textContent = t.lines(lineas);
}

function marcarModificado() {
  const t = i18n[currentLang];
  isUnsaved = true;
  saveStatus.textContent = t.unsavedStatus;
  saveStatus.style.color = 'var(--warning)';
}

function marcarGuardado() {
  const t = i18n[currentLang];
  isUnsaved = false;
  saveStatus.textContent = t.savedStatus;
  saveStatus.style.color = 'var(--text-muted)';
}

// ==========================================================================
// 3. BARRA DE HERRAMIENTAS MARKDOWN
// ==========================================================================
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
      reemplazo = `# ${seleccionado || 'Heading 1'}`;
      break;
    case 'h2':
      reemplazo = `## ${seleccionado || 'Heading 2'}`;
      break;
    case 'h3':
      reemplazo = `### ${seleccionado || 'Heading 3'}`;
      break;
    case 'bold':
      reemplazo = `**${seleccionado || 'bold text'}**`;
      cursorOffset = seleccionado ? 0 : -2;
      break;
    case 'italic':
      reemplazo = `*${seleccionado || 'italic text'}*`;
      cursorOffset = seleccionado ? 0 : -1;
      break;
    case 'strike':
      reemplazo = `~~${seleccionado || 'strikethrough'}~~`;
      break;
    case 'quote':
      reemplazo = `> ${seleccionado || 'Quote'}`;
      break;
    case 'code':
      reemplazo = `\`${seleccionado || 'code'}\``;
      break;
    case 'codeblock':
      reemplazo = `\`\`\`javascript\n${seleccionado || '// Your code here'}\n\`\`\``;
      break;
    case 'link':
      reemplazo = `[${seleccionado || 'Link Text'}](https://example.com)`;
      break;
    case 'ul':
      reemplazo = `- ${seleccionado || 'List item'}`;
      break;
    case 'ol':
      reemplazo = `1. ${seleccionado || 'First item'}`;
      break;
    case 'task':
      reemplazo = `- [ ] ${seleccionado || 'Task item'}`;
      break;
    case 'table':
      reemplazo = `\n| Column 1 | Column 2 |\n| :--- | :--- |\n| Row 1 | Data 1 |\n| Row 2 | Data 2 |\n`;
      break;
  }

  markdownInput.setRangeText(reemplazo, start, end, 'end');
  markdownInput.focus();
  
  if (cursorOffset !== 0) {
    markdownInput.setSelectionRange(markdownInput.selectionEnd + cursorOffset, markdownInput.selectionEnd + cursorOffset);
  }

  renderizarMarkdown();
  marcarModificado();
}

// ==========================================================================
// 4. GESTIÓN DE NOTAS (CRUD)
// ==========================================================================
async function cargarNotas() {
  try {
    const res = await fetch('/notes');
    if (!res.ok) throw new Error('Error fetching notes');
    
    todasLasNotas = await res.json();
    renderizarListaNotas(todasLasNotas);

    if (todasLasNotas.length > 0 && !currentNoteFilename) {
      abrirNota(todasLasNotas[0]);
    } else if (todasLasNotas.length === 0 && !currentNoteFilename) {
      crearNuevaNota();
    }
  } catch (err) {
    console.error(err);
  }
}

function renderizarListaNotas(notas) {
  const t = i18n[currentLang];
  notesList.innerHTML = '';

  if (notas.length === 0) {
    notesList.innerHTML = `<li style="padding: 12px; color: var(--text-muted); font-size: 0.85rem; text-align: center;">${t.noNotesFound}</li>`;
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
    deleteBtn.title = 'Delete note';
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

async function abrirNota(nombreArchivo) {
  try {
    const res = await fetch(`/notes/${encodeURIComponent(nombreArchivo)}/raw`);
    if (!res.ok) throw new Error('Could not fetch note content');

    const contenidoRaw = await res.text();
    
    currentNoteFilename = nombreArchivo;
    noteTitle.value = nombreArchivo.replace(/\.md$/i, '');
    markdownInput.value = contenidoRaw;
    
    btnDelete.style.display = 'inline-flex';
    renderizarMarkdown();
    marcarGuardado();
    renderizarListaNotas(todasLasNotas);

    grammarDrawer.classList.remove('open');
  } catch (err) {
    console.error(err);
  }
}

async function guardarNota() {
  const t = i18n[currentLang];
  const titulo = noteTitle.value.trim();
  const contenido = markdownInput.value;

  if (!titulo) {
    mostrarToast(t.toastTitleRequired, 'error');
    noteTitle.focus();
    return;
  }

  try {
    saveStatus.textContent = t.savingStatus;
    
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
    mostrarToast(t.toastSaveSuccess, 'success');

    const listRes = await fetch('/notes');
    if (listRes.ok) {
      todasLasNotas = await listRes.json();
      renderizarListaNotas(todasLasNotas);
    }
  } catch (err) {
    console.error(err);
    mostrarToast(t.toastSaveError(err.message), 'error');
    saveStatus.textContent = t.errorSavingStatus;
  }
}

function crearNuevaNota() {
  const t = i18n[currentLang];
  currentNoteFilename = null;
  noteTitle.value = t.untitledNote;
  markdownInput.value = t.defaultNoteContent;
  btnDelete.style.display = 'none';
  renderizarMarkdown();
  marcarModificado();
  renderizarListaNotas(todasLasNotas);
  markdownInput.focus();
}

async function confirmarYEliminarNota(nombreArchivo) {
  const t = i18n[currentLang];
  if (!confirm(t.deleteConfirm(nombreArchivo))) {
    return;
  }

  try {
    const res = await fetch(`/notes/${encodeURIComponent(nombreArchivo)}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error('Error deleting note');

    mostrarToast(t.toastDeleteSuccess, 'success');

    if (currentNoteFilename === nombreArchivo) {
      crearNuevaNota();
    }

    cargarNotas();
  } catch (err) {
    console.error(err);
    mostrarToast(t.toastDeleteError(err.message), 'error');
  }
}

// Descargar archivo .md
function descargarNota() {
  const t = i18n[currentLang];
  const titulo = (noteTitle.value.trim() || 'note') + '.md';
  const contenido = markdownInput.value;

  const blob = new Blob([contenido], { type: 'text/markdown;charset=utf-8' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = titulo;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(enlace.href);
  
  mostrarToast(t.toastDownloadSuccess, 'success');
}

// Copiar HTML
btnCopyHtml.addEventListener('click', async () => {
  const t = i18n[currentLang];
  const html = previewOutput.innerHTML;
  try {
    await navigator.clipboard.writeText(html);
    mostrarToast(t.toastCopySuccess, 'success');
  } catch (err) {
    mostrarToast(t.toastCopyError, 'error');
  }
});

// Subida de archivos
noteFileInput.addEventListener('change', async () => {
  const t = i18n[currentLang];
  const archivo = noteFileInput.files[0];
  if (!archivo) return;

  const formData = new FormData();
  formData.append('file', archivo);

  try {
    mostrarToast(t.toastUploadStart, 'info');
    const res = await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error('Upload error');

    mostrarToast(t.toastUploadSuccess, 'success');
    noteFileInput.value = '';
    
    const listRes = await fetch('/notes');
    if (listRes.ok) {
      todasLasNotas = await listRes.json();
      renderizarListaNotas(todasLasNotas);
      abrirNota(archivo.name);
    }
  } catch (err) {
    console.error(err);
    mostrarToast(t.toastUploadError, 'error');
  }
});

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtradas = todasLasNotas.filter(nota => nota.toLowerCase().includes(query));
  renderizarListaNotas(filtradas);
});

// ==========================================================================
// 5. EXPORTACIÓN A PDF PROFESIONAL (html2pdf.js)
// ==========================================================================
async function exportarPDF() {
  const t = i18n[currentLang];
  const titulo = noteTitle.value.trim() || 'Documento';
  const texto = markdownInput.value.trim();

  if (!texto) {
    mostrarToast(t.grammarEmptyInput, 'error');
    return;
  }

  mostrarToast(t.toastPdfStart, 'info');

  // Crear contenedor temporal estilizado para exportación limpia
  const contenedorTemp = document.createElement('div');
  contenedorTemp.className = 'markdown-body';
  contenedorTemp.style.padding = '30px';
  contenedorTemp.style.background = '#ffffff';
  contenedorTemp.style.color = '#111827';
  contenedorTemp.style.fontFamily = 'Inter, sans-serif';

  // Añadir encabezado con título
  const h1Titulo = document.createElement('h1');
  h1Titulo.textContent = titulo;
  h1Titulo.style.borderBottom = '2px solid #4f46e5';
  h1Titulo.style.paddingBottom = '10px';
  h1Titulo.style.marginBottom = '20px';
  h1Titulo.style.color = '#1e293b';
  contenedorTemp.appendChild(h1Titulo);

  // Renderizar contenido
  const htmlContent = marked.parse(texto);
  const divContenido = document.createElement('div');
  divContenido.innerHTML = window.DOMPurify ? DOMPurify.sanitize(htmlContent) : htmlContent;
  contenedorTemp.appendChild(divContenido);

  const opciones = {
    margin: [12, 12, 12, 12],
    filename: `${titulo}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    if (window.html2pdf) {
      await html2pdf().set(opciones).from(contenedorTemp).save();
      mostrarToast(t.toastPdfSuccess, 'success');
    } else {
      // Fallback a impresión nativa
      window.print();
    }
  } catch (err) {
    console.error('Error generando PDF:', err);
    mostrarToast(t.toastPdfError, 'error');
  }
}

btnExportPdf.addEventListener('click', exportarPDF);

// ==========================================================================
// 6. MODO PRESENTACIÓN (SLIDESHOW)
// ==========================================================================
function iniciarPresentacion() {
  const texto = markdownInput.value.trim();
  if (!texto) {
    mostrarToast(i18n[currentLang].grammarEmptyInput, 'error');
    return;
  }

  // Dividir en diapositivas usando '---' o '___' o encabezados '# '
  let partes = texto.split(/\n\s*---\s*\n|\n\s*___\s*\n/);

  // Si no se usaron separadores '---', dividir inteligentemente por encabezados principales
  if (partes.length === 1 && texto.includes('\n# ')) {
    partes = texto.split(/(?=\n# )/);
  }

  slides = partes.map(p => p.trim()).filter(p => p.length > 0);
  if (slides.length === 0) slides = [texto];

  currentSlideIndex = 0;
  presentationNoteTitle.textContent = noteTitle.value.trim() || 'Presentación';
  
  presentationOverlay.style.display = 'flex';
  renderizarDiapositivaActual();
}

function renderizarDiapositivaActual() {
  if (slides.length === 0) return;

  const rawSlide = slides[currentSlideIndex];
  const htmlRaw = marked.parse(rawSlide);
  const htmlLimpio = window.DOMPurify ? DOMPurify.sanitize(htmlRaw) : htmlRaw;

  slideContent.innerHTML = htmlLimpio;
  slideCounter.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

  // Actualizar barra de progreso
  const porcentaje = ((currentSlideIndex + 1) / slides.length) * 100;
  presentationProgressBar.style.width = `${porcentaje}%`;

  // Deshabilitar botones en extremos
  btnPrevSlide.disabled = currentSlideIndex === 0;
  btnNextSlide.disabled = currentSlideIndex === slides.length - 1;
}

function siguienteDiapositiva() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    renderizarDiapositivaActual();
  }
}

function anteriorDiapositiva() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderizarDiapositivaActual();
  }
}

function cerrarPresentacion() {
  presentationOverlay.style.display = 'none';
}

btnPresentation.addEventListener('click', iniciarPresentacion);
btnNextSlide.addEventListener('click', siguienteDiapositiva);
btnPrevSlide.addEventListener('click', anteriorDiapositiva);
btnExitPresentation.addEventListener('click', cerrarPresentacion);

// ==========================================================================
// 7. MODO LECTURA LIMPIA (READER VIEW)
// ==========================================================================
function iniciarModoLectura() {
  const texto = markdownInput.value.trim();
  readerNoteTitle.textContent = noteTitle.value.trim() || 'Nota';
  
  const htmlRaw = marked.parse(texto);
  readerContent.innerHTML = window.DOMPurify ? DOMPurify.sanitize(htmlRaw) : htmlRaw;
  
  readerOverlay.style.display = 'flex';
}

function cerrarModoLectura() {
  readerOverlay.style.display = 'none';
}

btnReader.addEventListener('click', iniciarModoLectura);
btnCloseReader.addEventListener('click', cerrarModoLectura);
btnReaderPrint.addEventListener('click', () => window.print());

// ==========================================================================
// 8. ASISTENTE DE GRAMÁTICA (LanguageTool)
// ==========================================================================
btnGrammar.addEventListener('click', async () => {
  const t = i18n[currentLang];
  const texto = markdownInput.value.trim();

  if (!texto) {
    mostrarToast(t.grammarEmptyInput, 'error');
    return;
  }

  grammarDrawer.classList.add('open');
  grammarContent.innerHTML = `
    <div style="text-align: center; padding: 24px;">
      <p>${t.grammarAnalyzing}</p>
    </div>
  `;

  const langCode = currentLang === 'en' ? 'en-US' : 'es';

  try {
    const res = await fetch('/grammar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: texto, language: langCode })
    });

    if (!res.ok) throw new Error('Error contacting grammar service');

    const data = await res.json();
    mostrarResultadosGramatica(data.matches || []);
  } catch (err) {
    console.error(err);
    grammarContent.innerHTML = `<p style="color: var(--danger);">Error: ${err.message}</p>`;
  }
});

function mostrarResultadosGramatica(matches) {
  const t = i18n[currentLang];
  grammarContent.innerHTML = '';

  if (matches.length === 0) {
    grammarContent.innerHTML = `
      <div style="text-align: center; padding: 30px;">
        <span style="font-size: 2.5rem;">🎉</span>
        <h4 style="margin: 10px 0; color: var(--success);">${t.grammarSuccessTitle}</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${t.grammarSuccessMsg}</p>
      </div>
    `;
    return;
  }

  const resumen = document.createElement('p');
  resumen.style.fontSize = '0.85rem';
  resumen.style.color = 'var(--text-muted)';
  resumen.textContent = t.grammarObservations(matches.length);
  grammarContent.appendChild(resumen);

  matches.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'grammar-card';

    const msg = document.createElement('div');
    msg.className = 'grammar-msg';
    msg.textContent = `${index + 1}. ${item.message}`;

    const ctx = document.createElement('div');
    ctx.className = 'grammar-context';
    
    const ctxText = item.context.text;
    const offset = item.context.offset;
    const length = item.context.length;
    const antes = ctxText.substring(0, offset);
    const palabraError = ctxText.substring(offset, offset + length);
    const despues = ctxText.substring(offset + length);

    ctx.innerHTML = `...${antes}<mark>${palabraError}</mark>${despues}...`;

    card.appendChild(msg);
    card.appendChild(ctx);

    if (item.replacements && item.replacements.length > 0) {
      const sugContainer = document.createElement('div');
      sugContainer.className = 'grammar-suggestions';
      
      const sugLabel = document.createElement('span');
      sugLabel.style.fontSize = '0.75rem';
      sugLabel.style.color = 'var(--text-muted)';
      sugLabel.style.display = 'block';
      sugLabel.style.width = '100%';
      sugLabel.textContent = t.grammarApplyFix;
      sugContainer.appendChild(sugLabel);

      item.replacements.slice(0, 3).forEach(rep => {
        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        chip.textContent = rep.value;
        chip.title = `Replace "${palabraError}" with "${rep.value}"`;
        
        chip.onclick = () => {
          aplicarSugerencia(palabraError, rep.value);
          card.style.opacity = '0.4';
          card.style.pointerEvents = 'none';
          chip.textContent = t.grammarApplied;
        };

        sugContainer.appendChild(chip);
      });

      card.appendChild(sugContainer);
    }

    grammarContent.appendChild(card);
  });
}

function aplicarSugerencia(palabraOriginal, reemplazo) {
  const t = i18n[currentLang];
  const actual = markdownInput.value;
  const nuevoTexto = actual.replace(palabraOriginal, reemplazo);
  markdownInput.value = nuevoTexto;
  renderizarMarkdown();
  marcarModificado();
  mostrarToast(t.toastReplacementApplied(palabraOriginal, reemplazo), 'success');
}

btnCloseGrammar.addEventListener('click', () => {
  grammarDrawer.classList.remove('open');
});

// ==========================================================================
// 9. ATAJOS DE TECLADO GLOBALES
// ==========================================================================
window.addEventListener('keydown', (e) => {
  // Modo Presentación controles de teclado
  if (presentationOverlay.style.display === 'flex') {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      siguienteDiapositiva();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      anteriorDiapositiva();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cerrarPresentacion();
    }
    return;
  }

  // Modo Lectura control de escape
  if (readerOverlay.style.display === 'flex') {
    if (e.key === 'Escape') {
      e.preventDefault();
      cerrarModoLectura();
    }
    return;
  }

  // F5 -> Iniciar Presentación
  if (e.key === 'F5') {
    e.preventDefault();
    iniciarPresentacion();
  }

  // Atajo Ctrl+P para Exportar a PDF
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    e.preventDefault();
    exportarPDF();
  }
});

// Atajos dentro del editor
markdownInput.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    markdownInput.setRangeText('  ', start, end, 'end');
    renderizarMarkdown();
  }
  
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    guardarNota();
  }

  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault();
    insertarFormato('bold');
  }

  if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
    e.preventDefault();
    insertarFormato('italic');
  }
});

// ==========================================================================
// 10. TEMA OSCURO / CLARO
// ==========================================================================
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

// ==========================================================================
// 11. TOAST NOTIFICATIONS
// ==========================================================================
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

// ==========================================================================
// 12. EVENTOS DE BOTONES
// ==========================================================================
btnSave.addEventListener('click', guardarNota);
btnNewNote.addEventListener('click', crearNuevaNota);
btnDownload.addEventListener('click', descargarNota);
btnDelete.addEventListener('click', () => {
  if (currentNoteFilename) confirmarYEliminarNota(currentNoteFilename);
});

// Inicializar
setLanguage(currentLang);
cargarNotas();