// ==========================================================================
// DICCIONARIO DE INTERNACIONALIZACIÓN (i18n: ES / EN)
// ==========================================================================
const i18n = {
  es: {
    appTitle: "Markdown Studio",
    btnSave: "Guardar",
    btnGrammar: "Gramática",
    btnToc: "Índice",
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
    headerReadyStatus: "Listo",
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
    toolDiagram: "📊 Diagrama",
    toolMath: "🧮 Fórmula",
    toolCallout: "💡 Alerta",
    noNotesFound: "No se encontraron notas",
    allNotes: "Ver todas",
    tagsTitle: "Etiquetas",
    noTags: "Sin etiquetas",
    tocTitle: "Tabla de Contenidos",
    tocEmpty: "No hay encabezados en esta nota",
    btnGraph: "Grafo",
    graphModalTitle: "Grafo de Conocimiento",
    graphSearchPlaceholder: "Buscar nodo o etiqueta...",
    graphNodes: "nodos",
    graphLinks: "enlaces",
    graphHint: "Haz clic en un nodo para abrir la nota • Rueda para zoom • Arrastra para explorar",
    btnDailyNote: "Hoy",
    btnTemplates: "Plantillas",
    autosaveLabel: "Autoguardado",
    templatesModalTitle: "Plantillas de Notas",
    templateDailyTitle: "Registro Diario",
    templateDailyDesc: "Planifica prioridades, tareas, notas rápidas y reflexión.",
    templateMeetingTitle: "Minuta de Reunión",
    templateMeetingDesc: "Objetivos, participantes, acuerdos y tareas asignadas.",
    templateProjectTitle: "Plan de Proyecto",
    templateProjectDesc: "Visión, hitos, diagrama Mermaid y entregables.",
    templateStudyTitle: "Ficha de Estudio (Cornell)",
    templateStudyDesc: "Conceptos clave, fórmulas matemáticas KaTeX y resumen.",
    templateBugTitle: "Reporte de Error (Bug)",
    templateBugDesc: "Pasos de reproducción, comportamiento esperado y logs.",
    templateApplyNew: "Crear nueva nota",
    templateApplyInsert: "Insertar aquí",
    btnGuide: "Guía",
    guideModalTitle: "Guía Rápida & Tutorial",
    guideTabStart: "🚀 Inicio Rápido",
    guideTabPower: "⚡ Superpoderes",
    guideTabGraph: "🕸️ Grafo & Enlaces",
    guideTabAdvanced: "📊 Fórmulas & Diagramas",
    guideTabSlides: "📽️ Presentación & PDF",
    guideTabShortcuts: "⌨️ Atajos",
    btnStartTour: "Iniciar Tour Guiado",
    tourBtnSkip: "Saltar Tour",
    tourBtnPrev: "Anterior",
    tourBtnNext: "Siguiente",
    tourBtnFinish: "¡Entendido! Finalizar",
    tourStepCount: (cur, tot) => `Paso ${cur} de ${tot}`,
    tourHint: (h) => `💡 Consejo: ${h}`,
    tourSteps: [
      {
        target: '.sidebar',
        title: "📁 Barra Lateral & Carpetas",
        desc: "Gestiona todas tus notas, crea carpetas, filtra por etiquetas (#tags) y accede a tu Nota Diaria de hoy o a la red 2D.",
        hint: "Haz clic en ➕ junto a Carpetas para crear una nueva categoría."
      },
      {
        target: '.search-box',
        title: "🔍 Paleta Universal & Búsqueda",
        desc: "Busca palabras dentro del contenido de todas tus notas o ejecuta cualquier acción del sistema sin levantar las manos del teclado.",
        hint: "Presiona Ctrl+K en cualquier momento para abrir la paleta."
      },
      {
        target: '.pane-editor',
        title: "✍️ Editor en Tiempo Real",
        desc: "Redacta en Markdown en el panel izquierdo y mira la vista previa sanitizada a 60 FPS. Tus notas se autoguardan solas en tu disco.",
        hint: "Puedes pegar imágenes directamente con Ctrl+V o arrastrarlas."
      },
      {
        target: '.markdown-toolbar',
        title: "🛠️ Barra de Herramientas Inteligente",
        desc: "Accede con un clic a encabezados, tablas, listas de tareas, fórmulas matemáticas KaTeX, diagramas Mermaid y alertas GitHub.",
        hint: "Selecciona texto y pulsa B (Ctrl+B) o I (Ctrl+I) para aplicar formato."
      },
      {
        target: '#btn-zen-mode',
        title: "🧘 Modo Zen & Pomodoro",
        desc: "Elimina distracciones con pantalla completa, temporizador Pomodoro integrado de 25 min y lluvia relajante procedural.",
        hint: "Presiona Ctrl+Shift+Z para entrar o salir rápidamente."
      },
      {
        target: '#btn-lock-note',
        title: "🔒 Cifrado & Seguridad",
        desc: "Protege notas confidenciales con contraseña militar AES-GCM 256 bits y viaja en el tiempo restaurando versiones anteriores.",
        hint: "Haz clic en el candado 🔓 para activar la protección con clave."
      }
    ],
    btnLoadPlayground: "Cargar Nota Playground de Ejemplo",
    toastPlaygroundLoaded: "¡Nota Playground cargada con éxito! ✨",
    toastDailyCreated: (date) => `Nota diaria para ${date} creada 📅`,
    toastTemplateApplied: "Plantilla aplicada con éxito 📋",
    toastPinned: "Nota fijada como favorita ⭐",
    toastUnpinned: "Nota desfijada",
    toastWikiLinkCreated: (name) => `Nota "${name}" creada mediante WikiLink 🔗`,
    pinTitle: "Fijar / Desfijar nota",
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
    toastImagePasted: "¡Imagen insertada desde el portapapeles!",
    toastImageDropped: "¡Imagen insertada correctamente!",
    toastImageTooLarge: "La imagen es demasiado grande (máximo 5MB)",
    toastReplacementApplied: (oldW, newW) => `Reemplazado "${oldW}" por "${newW}"`,
    foldersTitle: "Carpetas",
    newFolderTooltip: "Nueva Carpeta",
    allFolders: "Todas las notas",
    noFolders: "Sin carpetas",
    folderPrompt: "Nombre de la nueva carpeta:",
    folderCreatedSuccess: (name) => `Carpeta "${name}" creada con éxito`,
    palettePlaceholder: "Escribe un comando o busca en notas...",
    paletteHintNav: "Navegar",
    paletteHintSelect: "Seleccionar",
    paletteHintClose: "Cerrar",
    paletteGroupCommands: "Comandos",
    paletteGroupNotes: "Notas",
    paletteGroupContent: "Coincidencias en contenido",
    paletteNoResults: "No se encontraron resultados",
    versionsModalTitle: "Historial de Versiones",
    versionsSnapshotsTitle: "Revisiones guardadas",
    selectVersionPreview: "Selecciona una versión para previsualizar",
    btnRestoreVersion: "Restaurar esta versión",
    toastVersionRestored: "¡Versión restaurada correctamente!",
    noVersionsFound: "No hay versiones anteriores de esta nota",
    zenButtonTitle: "Modo Zen (Ctrl+Shift+Z)",
    lockNoteBtn: "Cifrar / Bloquear nota con contraseña",
    lockedNoteTitle: "Nota Cifrada y Protegida",
    lockedNoteDesc: "Esta nota está protegida con cifrado de extremo a extremo AES-GCM 256. Introduce tu contraseña para desbloquearla.",
    passwordPlaceholder: "Contraseña de la nota...",
    btnUnlock: "Desbloquear",
    wrongPassword: "❌ Contraseña incorrecta. Inténtalo de nuevo.",
    toastNoteUnlocked: "¡Nota desbloqueada con éxito! 🔓",
    encryptModalTitle: "Cifrado de Nota (AES-GCM 256)",
    encryptModalInfo: "Protege esta nota con una clave secreta. El contenido se cifrará de extremo a extremo en tu navegador antes de guardarse en el disco. Si olvidas la clave, no será posible recuperar el contenido.",
    lblPassword: "Contraseña:",
    lblConfirmPassword: "Confirmar contraseña:",
    btnRemoveEncryption: "Quitar Cifrado",
    btnApplyEncrypt: "Cifrar Nota",
    passwordMismatch: "Las contraseñas no coinciden",
    passwordRequired: "La contraseña no puede estar vacía",
    toastNoteEncrypted: "Nota cifrada y protegida con contraseña 🔒",
    toastEncryptionRemoved: "Protección eliminada. La nota se guardará en texto plano 🔓",
    zenRain: "Lluvia",
    btnExitZen: "Salir de Zen",
    zenPlaceholder: "Escribe con concentración total...",
    zenEscapeHint: "Presiona Esc para salir",
    readingTime: (mins) => `${mins} min de lectura`,
    pomodoroBreakTitle: "¡Tiempo de descanso! ☕ (5 min)",
    pomodoroWorkTitle: "¡Sesión Pomodoro completada! 🎉 (25 min)",
    cmdZenMode: "Activar Modo Zen (Ctrl+Shift+Z)",
    cmdEncryptNote: "Cifrar / Bloquear Nota Actual con Contraseña",
    cmdPomodoroToggle: "Iniciar / Pausar Pomodoro",
    cmdAmbientToggle: "Activar / Desactivar Sonido de Lluvia",
    previewEmptyPlaceholder: "La vista previa aparecerá aquí conforme vayas escribiendo...",
    defaultNoteContent: `# Bienvenido a Markdown Studio 🚀 #bienvenida #guia

Descubre las **herramientas de organización y edición avanzada**:

---

## 🏷️ 1. Etiquetas y Organización
Puedes usar hashtags como #trabajo, #estudio o #ideas en cualquier parte del texto. Aparecerán automáticamente en la barra lateral para filtrar tus notas.

---

## 🔗 2. Enlaces WikiLinks (estilo Obsidian)
Conecta tus notas escribiendo [[Mi Proyecto]] o [[Ideas]]. Al hacer clic en el enlace, abrirá o creará la nota al instante.

---

## ⭐ 3. Notas Favoritas y Fijadas
Usa el botón de estrella ⭐ arriba para fijar notas importantes al principio de tu lista.

---

## 📑 4. Tabla de Contenidos (TOC)
Presiona el botón **"Índice"** en la barra superior para ver la estructura de encabezados de tu nota y saltar rápidamente a cualquier sección.
`
  },
  en: {
    appTitle: "Markdown Studio",
    btnSave: "Save",
    btnGrammar: "Grammar",
    btnToc: "Outline",
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
    headerReadyStatus: "Ready",
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
    toolDiagram: "📊 Diagram",
    toolMath: "🧮 Math",
    toolCallout: "💡 Callout",
    noNotesFound: "No notes found",
    allNotes: "View all",
    tagsTitle: "Tags",
    noTags: "No tags",
    tocTitle: "Table of Contents",
    tocEmpty: "No headings in this note",
    btnGraph: "Graph",
    graphModalTitle: "Knowledge Graph",
    graphSearchPlaceholder: "Search node or tag...",
    graphNodes: "nodes",
    graphLinks: "links",
    graphHint: "Click a node to open note • Scroll to zoom • Drag to explore",
    btnDailyNote: "Today",
    btnTemplates: "Templates",
    autosaveLabel: "Autosave",
    templatesModalTitle: "Note Templates",
    templateDailyTitle: "Daily Log",
    templateDailyDesc: "Plan daily priorities, tasks, quick notes, and reflection.",
    templateMeetingTitle: "Meeting Notes",
    templateMeetingDesc: "Objectives, attendees, key discussions, and action items.",
    templateProjectTitle: "Project Planning",
    templateProjectDesc: "Vision, milestones, Mermaid diagram, and deliverables.",
    templateStudyTitle: "Cornell Study Notes",
    templateStudyDesc: "Key concepts, KaTeX math formulas, and summary.",
    templateBugTitle: "Bug Report",
    templateBugDesc: "Reproduction steps, expected behavior, and logs.",
    templateApplyNew: "Create new note",
    templateApplyInsert: "Insert here",
    btnGuide: "Guide",
    guideModalTitle: "Quick Guide & Tutorial",
    guideTabStart: "🚀 Quickstart",
    guideTabPower: "⚡ Superpowers",
    guideTabGraph: "🕸️ Graph & Links",
    guideTabAdvanced: "📊 Math & Diagrams",
    guideTabSlides: "📽️ Slideshow & PDF",
    guideTabShortcuts: "⌨️ Shortcuts",
    btnStartTour: "Start Guided Tour",
    tourBtnSkip: "Skip Tour",
    tourBtnPrev: "Previous",
    tourBtnNext: "Next",
    tourBtnFinish: "Got it! Finish",
    tourStepCount: (cur, tot) => `Step ${cur} of ${tot}`,
    tourHint: (h) => `💡 Tip: ${h}`,
    tourSteps: [
      {
        target: '.sidebar',
        title: "📁 Sidebar & Organization",
        desc: "Manage all your notes, create folders, filter by #tags, and jump to your Daily Note or 2D Knowledge Graph.",
        hint: "Click ➕ next to Folders to create a new category."
      },
      {
        target: '.search-box',
        title: "🔍 Universal Palette & Search",
        desc: "Deep search within note content across your entire vault or run system actions without touching the mouse.",
        hint: "Press Ctrl+K anytime to open the palette."
      },
      {
        target: '.pane-editor',
        title: "✍️ Zero-Latency Live Editor",
        desc: "Write Markdown in the left pane with instant 60 FPS sanitized preview. Your notes autosave directly to your local disk.",
        hint: "Paste images directly with Ctrl+V or drag & drop image files."
      },
      {
        target: '.markdown-toolbar',
        title: "🛠️ Smart Markdown Toolbar",
        desc: "1-click access to Headings, Tables, Task lists, KaTeX math formulas, Mermaid diagrams, and GitHub callouts.",
        hint: "Select text and press B (Ctrl+B) or I (Ctrl+I) for quick formatting."
      },
      {
        target: '#btn-zen-mode',
        title: "🧘 Zen Focus Mode & Pomodoro",
        desc: "Eliminate all distractions with full-screen focus, 25-min Pomodoro timer, and procedural relaxing rain ambient sound.",
        hint: "Press Ctrl+Shift+Z to toggle Zen Mode on and off."
      },
      {
        target: '#btn-lock-note',
        title: "🔒 Encryption & Security",
        desc: "Password-protect confidential notes with AES-GCM 256-bit encryption and travel back in time with automatic version snapshots.",
        hint: "Click the 🔓 lock icon to activate password protection."
      }
    ],
    btnLoadPlayground: "Load Playground Example Note",
    toastPlaygroundLoaded: "Playground Note loaded successfully! ✨",
    toastDailyCreated: (date) => `Daily note created for ${date} 📅`,
    toastTemplateApplied: "Template applied successfully 📋",
    toastPinned: "Note pinned to top ⭐",
    toastUnpinned: "Note unpinned",
    toastWikiLinkCreated: (name) => `Note "${name}" created via WikiLink 🔗`,
    pinTitle: "Pin / Unpin note",
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
    toastImagePasted: "Image pasted from clipboard!",
    toastImageDropped: "Image dropped successfully!",
    toastImageTooLarge: "Image is too large (maximum 5MB)",
    toastReplacementApplied: (oldW, newW) => `Replaced "${oldW}" with "${newW}"`,
    foldersTitle: "Folders",
    newFolderTooltip: "New Folder",
    allFolders: "All notes",
    noFolders: "No folders",
    folderPrompt: "New folder name:",
    folderCreatedSuccess: (name) => `Folder "${name}" created successfully`,
    palettePlaceholder: "Type a command or search notes...",
    paletteHintNav: "Navigate",
    paletteHintSelect: "Select",
    paletteHintClose: "Close",
    paletteGroupCommands: "Commands",
    paletteGroupNotes: "Notes",
    paletteGroupContent: "Content matches",
    paletteNoResults: "No results found",
    versionsModalTitle: "Version History",
    versionsSnapshotsTitle: "Saved Revisions",
    selectVersionPreview: "Select a version to preview",
    btnRestoreVersion: "Restore this version",
    toastVersionRestored: "Version restored successfully!",
    noVersionsFound: "No prior versions found for this note",
    zenButtonTitle: "Zen Mode (Ctrl+Shift+Z)",
    lockNoteBtn: "Encrypt / Lock note with password",
    lockedNoteTitle: "Encrypted & Protected Note",
    lockedNoteDesc: "This note is protected with end-to-end AES-GCM 256 encryption. Enter your password to unlock.",
    passwordPlaceholder: "Note password...",
    btnUnlock: "Unlock",
    wrongPassword: "❌ Incorrect password. Please try again.",
    toastNoteUnlocked: "Note unlocked successfully! 🔓",
    encryptModalTitle: "Note Encryption (AES-GCM 256)",
    encryptModalInfo: "Protect this note with a secret key. Content is encrypted end-to-end in your browser before saving to disk. If you forget the key, the content cannot be recovered.",
    lblPassword: "Password:",
    lblConfirmPassword: "Confirm password:",
    btnRemoveEncryption: "Remove Encryption",
    btnApplyEncrypt: "Encrypt Note",
    passwordMismatch: "Passwords do not match",
    passwordRequired: "Password cannot be empty",
    toastNoteEncrypted: "Note encrypted and password protected 🔒",
    toastEncryptionRemoved: "Protection removed. Note will be saved as plain text 🔓",
    zenRain: "Rain",
    btnExitZen: "Exit Zen",
    zenPlaceholder: "Write with total focus...",
    zenEscapeHint: "Press Esc to exit",
    readingTime: (mins) => `${mins} min read`,
    pomodoroBreakTitle: "Break time! ☕ (5 min)",
    pomodoroWorkTitle: "Pomodoro session complete! 🎉 (25 min)",
    cmdZenMode: "Toggle Zen Mode (Ctrl+Shift+Z)",
    cmdEncryptNote: "Encrypt / Lock Current Note with Password",
    cmdPomodoroToggle: "Start / Pause Pomodoro",
    cmdAmbientToggle: "Toggle Relaxing Rain Ambient Sound",
    previewEmptyPlaceholder: "Live preview will appear here as you type...",
    defaultNoteContent: `# Welcome to Markdown Studio 🚀 #welcome #guide

Explore our **organization and advanced editing features**:

---

## 🏷️ 1. Tags and Organization
You can use hashtags like #work, #study, or #ideas anywhere in your text. They will automatically appear in the sidebar tag cloud.

---

## 🔗 2. WikiLinks (Obsidian-style)
Connect your notes by writing [[My Project]] or [[Ideas]]. Clicking the link will open or create that note instantly.

---

## ⭐ 3. Favorite and Pinned Notes
Use the star icon ⭐ above to pin vital notes to the top of your list.

---

## 📑 4. Table of Contents (TOC)
Click the **"Outline"** button in the header to view your note structure and smoothly navigate to any section.
`
  }
};

let currentLang = localStorage.getItem('app_lang') || 'es';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Elementos del DOM
const langSelect = document.getElementById('lang-select');
const markdownInput = document.getElementById('markdown-input');
const previewOutput = document.getElementById('preview-output');
const noteTitle = document.getElementById('note-title');
const notesList = document.getElementById('notes-list');
const searchInput = document.getElementById('search-notes');
const uploadForm = document.getElementById('upload-form');
const noteFileInput = document.getElementById('note-file');
const tagsContainer = document.getElementById('tags-container');
const btnClearTag = document.getElementById('btn-clear-tag');
const btnPinActive = document.getElementById('btn-pin-active');

// Botones de acción principales
const btnSave = document.getElementById('btn-save');
const btnNewNote = document.getElementById('btn-new-note');
const btnDailyNote = document.getElementById('btn-daily-note');
const btnTemplates = document.getElementById('btn-templates');
const btnGrammar = document.getElementById('btn-grammar');
const btnToc = document.getElementById('btn-toc');
const btnGraph = document.getElementById('btn-graph');
const btnPresentation = document.getElementById('btn-presentation');
const btnExportPdf = document.getElementById('btn-export-pdf');
const btnDownload = document.getElementById('btn-download');
const btnReader = document.getElementById('btn-reader');
const btnGuide = document.getElementById('btn-guide');
const btnDelete = document.getElementById('btn-delete');
const btnTheme = document.getElementById('btn-theme');
const btnCloseGrammar = document.getElementById('btn-close-grammar');
const btnCopyHtml = document.getElementById('btn-copy-html');
const grammarDrawer = document.getElementById('grammar-drawer');
const grammarContent = document.getElementById('grammar-content');
const tocDrawer = document.getElementById('toc-drawer');
const tocList = document.getElementById('toc-list');
const btnCloseToc = document.getElementById('btn-close-toc');
const saveStatus = document.getElementById('save-status');

// Elementos de Guía / Tutorial
const guideModal = document.getElementById('guide-modal');
const btnCloseGuide = document.getElementById('btn-close-guide');
const guideContentBody = document.getElementById('guide-content-body');
const btnLoadPlayground = document.getElementById('btn-load-playground');

// Elementos de Plantillas y Autoguardado
const templatesModal = document.getElementById('templates-modal');
const btnCloseTemplates = document.getElementById('btn-close-templates');
const templatesGrid = document.getElementById('templates-grid');
const toggleAutosave = document.getElementById('toggle-autosave');

// Elementos de Vista de Grafo
const graphOverlay = document.getElementById('graph-overlay');
const btnCloseGraph = document.getElementById('btn-close-graph');
const btnGraphReset = document.getElementById('btn-graph-reset');
const graphSearchInput = document.getElementById('graph-search-input');
const graphNodeCount = document.getElementById('graph-node-count');
const graphLinkCount = document.getElementById('graph-link-count');
const graphCanvasContainer = document.getElementById('graph-canvas-container');

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

// Elementos de la Paleta de Comandos (Ctrl + K)
const commandPaletteModal = document.getElementById('command-palette-modal');
const paletteInput = document.getElementById('palette-input');
const paletteResults = document.getElementById('palette-results');
const searchPaletteTrigger = document.getElementById('search-palette-trigger');

// Elementos del Historial de Versiones
const btnHistory = document.getElementById('btn-history');
const versionsModal = document.getElementById('versions-modal');
const btnCloseVersions = document.getElementById('btn-close-versions');
const versionsList = document.getElementById('versions-list');
const versionPreviewMeta = document.getElementById('version-preview-meta');
const versionPreviewContent = document.getElementById('version-preview-content');
const btnRestoreVersion = document.getElementById('btn-restore-version');

// Elementos de Carpetas
const btnNewFolder = document.getElementById('btn-new-folder');
const foldersContainer = document.getElementById('folders-container');
const noteFolderBadge = document.getElementById('note-folder-badge');
const noteFolderName = document.getElementById('note-folder-name');

// Estadísticas
const statWords = document.getElementById('stat-words');
const statChars = document.getElementById('stat-chars');
const statLines = document.getElementById('stat-lines');

// Elementos del Modo Zen & Pomodoro
const btnZenMode = document.getElementById('btn-zen-mode');
const zenOverlay = document.getElementById('zen-overlay');
const zenNoteTitle = document.getElementById('zen-note-title');
const zenPomodoroDisplay = document.getElementById('zen-pomodoro-display');
const btnZenPomodoroToggle = document.getElementById('btn-zen-pomodoro-toggle');
const btnZenPomodoroReset = document.getElementById('btn-zen-pomodoro-reset');
const btnZenAmbientToggle = document.getElementById('btn-zen-ambient-toggle');
const zenAmbientIcon = document.getElementById('zen-ambient-icon');
const zenAmbientVolume = document.getElementById('zen-ambient-volume');
const btnExitZen = document.getElementById('btn-exit-zen');
const zenTextarea = document.getElementById('zen-textarea');
const zenStatWords = document.getElementById('zen-stat-words');
const zenStatReadingTime = document.getElementById('zen-stat-reading-time');
const zenFloatingBar = document.getElementById('zen-floating-bar');

// Elementos de Cifrado y Desbloqueo
const btnLockNote = document.getElementById('btn-lock-note');
const decryptScreen = document.getElementById('decrypt-screen');
const decryptPasswordInput = document.getElementById('decrypt-password-input');
const btnDecryptSubmit = document.getElementById('btn-decrypt-submit');
const decryptError = document.getElementById('decrypt-error');
const editorSplitContainer = document.getElementById('editor-split-container');
const encryptModal = document.getElementById('encrypt-modal');
const btnCloseEncrypt = document.getElementById('btn-close-encrypt');
const encryptPassword = document.getElementById('encrypt-password');
const encryptPasswordConfirm = document.getElementById('encrypt-password-confirm');
const encryptModalError = document.getElementById('encrypt-modal-error');
const btnRemoveEncryption = document.getElementById('btn-remove-encryption');
const btnCancelEncrypt = document.getElementById('btn-cancel-encrypt');
const btnApplyEncrypt = document.getElementById('btn-apply-encrypt');

// Estado de la aplicación
let currentNoteFilename = null;
let currentNoteFolder = '';
let todasLasNotas = [];
let metadataNotas = [];
let isUnsaved = false;

// Estado de Organización & Carpetas
let pinnedNotes = JSON.parse(localStorage.getItem('app_pinned_notes') || '[]');
let activeTagFilter = null;
let activeFolderFilter = null;
let carpetasDisponibles = [];

// Estado de Versiones
let selectedVersionId = null;

// Estado de la Paleta de Comandos
let paletteFilteredItems = [];
let paletteSelectedIndex = 0;
let paletteSearchTimeout = null;

// Estado del Modo Zen
let isZenModeActive = false;
let pomodoroSeconds = 25 * 60;
let pomodoroRunning = false;
let pomodoroInterval = null;
let isPomodoroBreak = false;
let audioCtx = null;
let ambientSource = null;
let ambientGain = null;
let isAmbientPlaying = false;

// Estado de Cifrado
let isCurrentNoteEncrypted = false;
let currentNotePassword = null;
let currentEncryptedRaw = '';
let isNoteUnlocked = true;

// Estado de la presentación
let slides = [];
let currentSlideIndex = 0;

// ==========================================================================
// INICIALIZACIÓN DE MERMAID Y MARKED
// ==========================================================================
if (window.mermaid) {
  mermaid.initialize({
    startOnLoad: false,
    theme: currentTheme === 'dark' ? 'dark' : 'default',
    securityLevel: 'loose',
    fontFamily: 'Inter, sans-serif'
  });
}

if (window.marked) {
  marked.setOptions({
    breaks: true,
    gfm: true,
    highlight: function(code, lang) {
      if (lang === 'mermaid') {
        return `<div class="mermaid">${code}</div>`;
      }
      if (window.hljs) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
      return code;
    }
  });
}

// ==========================================================================
// PROCESAMIENTO AVANZADO (KATEX, CALLOUTS, WIKILINKS, MERMAID)
// ==========================================================================

// 1. Renderizar Fórmulas Matemáticas (KaTeX)
function procesarKaTeX(texto) {
  if (!window.katex) return texto;

  let resultado = texto.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
    } catch (e) {
      return match;
    }
  });

  resultado = resultado.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
    } catch (e) {
      return match;
    }
  });

  return resultado;
}

// 2. Transformar WikiLinks [[NombreDeNota]] en enlaces interactivos
function procesarWikiLinks(texto) {
  return texto.replace(/\[\[([a-zA-Z0-9_\u00C0-\u017F\s\.\-]+)\]\]/g, (match, noteTarget) => {
    const cleanTarget = noteTarget.trim();
    const filename = cleanTarget.endsWith('.md') ? cleanTarget : cleanTarget + '.md';
    return `<a href="#" class="wikilink" data-target="${filename}" title="Abrir nota: ${cleanTarget}">[[${cleanTarget}]]</a>`;
  });
}

// 3. Transformar Alertas / Callouts
function procesarCallouts(html) {
  const iconMap = {
    NOTE: 'ℹ️',
    TIP: '💡',
    IMPORTANT: '📌',
    WARNING: '⚠️',
    CAUTION: '🛑'
  };

  return html.replace(/<blockquote>\s*<p>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([\s\S]*?)<\/blockquote>/gi, (match, type, content) => {
    const uppercaseType = type.toUpperCase();
    const icon = iconMap[uppercaseType] || '💡';
    const cleanContent = content.trim();

    return `
      <div class="callout callout-${type.toLowerCase()}">
        <div class="callout-header">
          <span class="callout-icon">${icon}</span>
          <span>${uppercaseType}</span>
        </div>
        <div class="callout-content">
          ${cleanContent}
        </div>
      </div>
    `;
  });
}

// 4. Renderizar Diagramas Mermaid
async function renderizarDiagramasMermaid(container) {
  if (!window.mermaid) return;

  const nodos = container.querySelectorAll('.mermaid, pre code.language-mermaid');
  if (nodos.length === 0) return;

  nodos.forEach((nodo) => {
    if (nodo.tagName.toLowerCase() === 'code') {
      const parentPre = nodo.parentElement;
      const div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = nodo.textContent;
      parentPre.replaceWith(div);
    }
  });

  try {
    await mermaid.run({
      nodes: container.querySelectorAll('.mermaid')
    });
  } catch (err) {
    console.warn('Error renderizando Mermaid:', err);
  }
}

// 5. Sanitización segura con DOMPurify
function sanitizarHTML(html) {
  if (!window.DOMPurify) return html;

  return DOMPurify.sanitize(html, {
    ADD_TAGS: [
      'svg', 'path', 'g', 'rect', 'circle', 'text', 'line', 'polygon', 'polyline', 'marker', 'defs', 'style', 'foreignObject',
      'math', 'semantics', 'mrow', 'mi', 'mo', 'mn', 'msup', 'msub', 'mfrac', 'msqrt', 'mroot', 'mtable', 'mtr', 'mtd', 'annotation',
      'span', 'div', 'mark', 'code', 'pre', 'a'
    ],
    ADD_ATTR: [
      'd', 'viewBox', 'fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'transform', 'class', 'id', 'xmlns',
      'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'width', 'height', 'marker-end', 'marker-start',
      'style', 'aria-hidden', 'role', 'title', 'data-action', 'data-target', 'href'
    ]
  });
}

// ==========================================================================
// 6. GESTIÓN DE ORGANIZACIÓN (TAGS, PINNED, WIKILINKS, TOC)
// ==========================================================================

// Extraer etiquetas #tag del texto
function extraerEtiquetas(texto) {
  const regex = /(?:^|\s)#([a-zA-Z0-9_\u00C0-\u017F-]+)/g;
  const tags = new Set();
  let match;
  while ((match = regex.exec(texto)) !== null) {
    tags.add(match[1].toLowerCase());
  }
  return Array.from(tags);
}

// Actualizar nube de etiquetas en la barra lateral
function actualizarNubeDeEtiquetas() {
  if (!tagsContainer) return;
  tagsContainer.innerHTML = '';

  const tagCounts = {};
  metadataNotas.forEach(item => {
    (item.tags || []).forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const tagsDisponibles = Object.keys(tagCounts).sort();

  if (tagsDisponibles.length === 0) {
    tagsContainer.innerHTML = `<span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">${i18n[currentLang].noTags}</span>`;
    btnClearTag.style.display = 'none';
    return;
  }

  if (activeTagFilter) {
    btnClearTag.style.display = 'inline-block';
  } else {
    btnClearTag.style.display = 'none';
  }

  tagsDisponibles.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = `tag-chip ${activeTagFilter === tag ? 'active' : ''}`;
    chip.innerHTML = `#${tag} <span class="tag-count">(${tagCounts[tag]})</span>`;
    
    chip.onclick = () => {
      if (activeTagFilter === tag) {
        activeTagFilter = null;
      } else {
        activeTagFilter = tag;
      }
      actualizarNubeDeEtiquetas();
      renderizarListaNotas();
    };

    tagsContainer.appendChild(chip);
  });
}

btnClearTag.addEventListener('click', () => {
  activeTagFilter = null;
  actualizarNubeDeEtiquetas();
  renderizarListaNotas();
});

// Fijar / Desfijar Nota ⭐
function togglePinNota(filename) {
  const t = i18n[currentLang];
  if (pinnedNotes.includes(filename)) {
    pinnedNotes = pinnedNotes.filter(f => f !== filename);
    mostrarToast(t.toastUnpinned, 'info');
  } else {
    pinnedNotes.push(filename);
    mostrarToast(t.toastPinned, 'success');
  }
  localStorage.setItem('app_pinned_notes', JSON.stringify(pinnedNotes));
  actualizarBotonPinActivo();
  renderizarListaNotas();
}

function actualizarBotonPinActivo() {
  if (!btnPinActive) return;
  if (currentNoteFilename && pinnedNotes.includes(currentNoteFilename)) {
    btnPinActive.textContent = '★';
    btnPinActive.classList.add('active');
  } else {
    btnPinActive.textContent = '☆';
    btnPinActive.classList.remove('active');
  }
}

btnPinActive.addEventListener('click', () => {
  if (currentNoteFilename) {
    togglePinNota(currentNoteFilename);
  }
});

// Navegación por WikiLinks [[Note]]
async function navegarAWikiLink(targetFilename) {
  const cleanTarget = targetFilename.replace(/\.md$/i, '');
  
  if (todasLasNotas.includes(targetFilename)) {
    abrirNota(targetFilename);
  } else {
    // Si la nota no existe, crearla y abrirla
    currentNoteFilename = targetFilename;
    noteTitle.value = cleanTarget;
    markdownInput.value = `# ${cleanTarget}\n\nNota creada automáticamente mediante [[WikiLink]].`;
    await guardarNota();
    mostrarToast(i18n[currentLang].toastWikiLinkCreated(cleanTarget), 'success');
  }
}

// Delegación global para clics en WikiLinks
document.addEventListener('click', (e) => {
  const wikilink = e.target.closest('.wikilink');
  if (wikilink) {
    e.preventDefault();
    const target = wikilink.dataset.target;
    if (target) navegarAWikiLink(target);
  }
});

// Tabla de Contenidos (TOC / Outline)
function actualizarTablaDeContenidos() {
  if (!tocList) return;
  const texto = markdownInput.value;
  const regex = /^(#{1,3})\s+(.+)$/gm;
  tocList.innerHTML = '';

  let match;
  let count = 0;

  while ((match = regex.exec(texto)) !== null) {
    count++;
    const level = match[1].length; // 1, 2, or 3
    const title = match[2].replace(/#.*$/, '').trim(); // Quitar hashtags del final si los hay

    const li = document.createElement('li');
    li.className = `toc-item toc-level-${level}`;
    li.textContent = title;
    
    li.onclick = () => scrollAEncabezado(title);
    tocList.appendChild(li);
  }

  if (count === 0) {
    tocList.innerHTML = `<li style="color: var(--text-muted); font-size: 0.85rem; padding: 12px; font-style: italic;">${i18n[currentLang].tocEmpty}</li>`;
  }
}

function scrollAEncabezado(titulo) {
  const headings = previewOutput.querySelectorAll('h1, h2, h3');
  for (let h of headings) {
    if (h.textContent.includes(titulo)) {
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      h.style.color = 'var(--accent-primary)';
      setTimeout(() => h.style.color = '', 1500);
      break;
    }
  }
}

btnToc.addEventListener('click', () => {
  actualizarTablaDeContenidos();
  tocDrawer.classList.toggle('open');
  grammarDrawer.classList.remove('open');
});

btnCloseToc.addEventListener('click', () => {
  tocDrawer.classList.remove('open');
});

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
  const headerStatus = document.getElementById('header-doc-status');
  if (headerStatus) {
    headerStatus.textContent = isUnsaved ? t.unsavedStatus : t.savedStatus;
  }

  actualizarNubeDeEtiquetas();
  actualizarTablaDeContenidos();
  renderizarMarkdown();
  renderizarListaNotas();
}

if (langSelect) {
  langSelect.value = currentLang;
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// ==========================================================================
// 7. RENDERIZADO EN TIEMPO REAL
// ==========================================================================
async function renderizarMarkdown() {
  const t = i18n[currentLang];
  const textoOriginal = markdownInput.value;
  
  if (!textoOriginal.trim()) {
    previewOutput.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">${t.previewEmptyPlaceholder}</p>`;
  } else {
    // 1. Procesar fórmulas matemáticas KaTeX
    const textoConMath = procesarKaTeX(textoOriginal);

    // 2. Procesar enlaces WikiLinks [[...]]
    const textoConWikiLinks = procesarWikiLinks(textoConMath);
    
    // 3. Parsear Markdown a HTML con Marked
    const htmlCrudo = marked.parse(textoConWikiLinks);
    
    // 4. Transformar Callouts / Alertas
    const htmlConCallouts = procesarCallouts(htmlCrudo);
    
    // 5. Sanitizar HTML
    const htmlLimpio = sanitizarHTML(htmlConCallouts);
    
    previewOutput.innerHTML = htmlLimpio;

    // 6. Renderizar Diagramas Mermaid asíncronamente
    await renderizarDiagramasMermaid(previewOutput);
  }

  actualizarEstadisticas(textoOriginal);
  actualizarTablaDeContenidos();
}

markdownInput.addEventListener('input', () => {
  renderizarMarkdown();
  marcarModificado();
  triggerAutosave();
});

noteTitle.addEventListener('input', () => {
  marcarModificado();
  triggerAutosave();
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
// 8. PEGAR Y ARRASTRAR IMÁGENES
// ==========================================================================
function insertarTextoEnCursor(textoInsertar) {
  const start = markdownInput.selectionStart;
  const end = markdownInput.selectionEnd;
  markdownInput.setRangeText(textoInsertar, start, end, 'end');
  markdownInput.focus();
  renderizarMarkdown();
  marcarModificado();
}

function procesarArchivoImagen(file, origen = 'paste') {
  const t = i18n[currentLang];
  if (!file || !file.type.startsWith('image/')) return;

  if (file.size > 5 * 1024 * 1024) {
    mostrarToast(t.toastImageTooLarge, 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    const nombre = file.name || 'image';
    const markdownImg = `\n![${nombre}](${dataUrl})\n`;
    
    insertarTextoEnCursor(markdownImg);
    mostrarToast(origen === 'paste' ? t.toastImagePasted : t.toastImageDropped, 'success');
  };
  reader.readAsDataURL(file);
}

markdownInput.addEventListener('paste', (e) => {
  const items = (e.clipboardData || e.originalEvent.clipboardData).items;
  for (let item of items) {
    if (item.kind === 'file' && item.type.startsWith('image/')) {
      e.preventDefault();
      const file = item.getAsFile();
      procesarArchivoImagen(file, 'paste');
      break;
    }
  }
});

markdownInput.addEventListener('dragover', (e) => {
  e.preventDefault();
  markdownInput.classList.add('dragover');
});

markdownInput.addEventListener('dragleave', () => {
  markdownInput.classList.remove('dragover');
});

markdownInput.addEventListener('drop', (e) => {
  e.preventDefault();
  markdownInput.classList.remove('dragover');
  
  if (e.dataTransfer && e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
      procesarArchivoImagen(file, 'drop');
    }
  }
});

// ==========================================================================
// 9. ESTADÍSTICAS DEL DOCUMENTO
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

  const headerStatus = document.getElementById('header-doc-status');
  const headerDot = document.getElementById('header-status-dot');
  if (headerStatus) headerStatus.textContent = t.unsavedStatus;
  if (headerDot) {
    headerDot.style.backgroundColor = 'var(--warning)';
    headerDot.style.boxShadow = '0 0 6px rgba(245, 158, 11, 0.7)';
  }
}

function marcarGuardado() {
  const t = i18n[currentLang];
  isUnsaved = false;
  saveStatus.textContent = t.savedStatus;
  saveStatus.style.color = 'var(--text-muted)';

  const headerStatus = document.getElementById('header-doc-status');
  const headerDot = document.getElementById('header-status-dot');
  if (headerStatus) headerStatus.textContent = t.savedStatus;
  if (headerDot) {
    headerDot.style.backgroundColor = 'var(--success)';
    headerDot.style.boxShadow = '0 0 6px rgba(16, 185, 129, 0.7)';
  }
}

// ==========================================================================
// 10. BARRA DE HERRAMIENTAS MARKDOWN
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
    case 'mermaid':
      reemplazo = `\n\`\`\`mermaid\ngraph TD\n    A[Inicio] --> B[Proceso]\n    B --> C[Fin]\n\`\`\`\n`;
      break;
    case 'math':
      reemplazo = `\n$$\\int_{a}^{b} f(x) dx = F(b) - F(a)$$\n`;
      break;
    case 'callout':
      reemplazo = `\n> [!NOTE]\n> ${seleccionado || 'Escribe aquí tu información destacada...'}\n`;
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
// 11. GESTIÓN DE NOTAS (CRUD + SORTING PINNED + TAG/FOLDER FILTERS)
// ==========================================================================
async function cargarNotas() {
  try {
    await cargarCarpetas();

    const resMeta = await fetch('/notes/metadata');
    if (resMeta.ok) {
      metadataNotas = await resMeta.json();
      todasLasNotas = metadataNotas.map(m => m.filename);
    } else {
      const res = await fetch('/notes');
      todasLasNotas = await res.json();
      metadataNotas = todasLasNotas.map(f => ({ filename: f, tags: [], folder: '' }));
    }

    actualizarNubeDeEtiquetas();
    actualizarCarpetasUI();
    renderizarListaNotas();

    if (todasLasNotas.length > 0 && !currentNoteFilename) {
      const notasOrdenadas = obtenerNotasOrdenadas(todasLasNotas);
      abrirNota(notasOrdenadas[0]);
    } else if (todasLasNotas.length === 0 && !currentNoteFilename) {
      crearNuevaNota();
    }
  } catch (err) {
    console.error('Error cargando notas:', err);
  }
}

function obtenerNotasOrdenadas(lista) {
  return [...lista].sort((a, b) => {
    const aPin = pinnedNotes.includes(a);
    const bPin = pinnedNotes.includes(b);
    if (aPin && !bPin) return -1;
    if (!aPin && bPin) return 1;
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  });
}

function renderizarListaNotas() {
  const t = i18n[currentLang];
  notesList.innerHTML = '';

  const query = searchInput.value.toLowerCase().trim();
  
  let notasFiltradas = todasLasNotas.filter(nota => {
    const coincideNombre = nota.toLowerCase().includes(query);
    if (!coincideNombre) return false;

    if (activeFolderFilter) {
      if (!nota.startsWith(activeFolderFilter + '/')) return false;
    }

    if (activeTagFilter) {
      const meta = metadataNotas.find(m => m.filename === nota);
      return meta && (meta.tags || []).includes(activeTagFilter);
    }
    return true;
  });

  const notasOrdenadas = obtenerNotasOrdenadas(notasFiltradas);

  if (notasOrdenadas.length === 0) {
    notesList.innerHTML = `<li style="padding: 12px; color: var(--text-muted); font-size: 0.85rem; text-align: center;">${t.noNotesFound}</li>`;
    return;
  }

  notasOrdenadas.forEach(nota => {
    const esPinned = pinnedNotes.includes(nota);
    const li = document.createElement('li');
    li.className = `note-item ${currentNoteFilename === nota ? 'active' : ''} ${esPinned ? 'pinned' : ''}`;
    
    const meta = metadataNotas.find(m => m.filename === nota);
    const esEncrypted = meta && meta.isEncrypted;
    const lockIcon = esEncrypted ? `<span class="note-locked-icon" title="${t.lockedNoteTitle}">🔒</span>` : '';
    const starIcon = esPinned ? `<span class="note-item-star">⭐</span>` : `<span>📝</span>`;
    
    // Indicador sutil de carpeta
    let folderBadge = '';
    let cleanName = nota.replace(/\.md$/i, '');
    if (nota.includes('/')) {
      const parts = nota.split('/');
      cleanName = parts.pop().replace(/\.md$/i, '');
      const folderPrefix = parts.join('/');
      folderBadge = `<span style="font-size:0.75rem; color:var(--text-muted); opacity:0.8; margin-right:4px;">[${folderPrefix}]</span>`;
    }
    
    titleSpan.innerHTML = `${lockIcon}${starIcon} ${folderBadge}${cleanName}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'note-item-actions';
    
    const pinBtn = document.createElement('button');
    pinBtn.className = `item-btn pin-btn ${esPinned ? 'active' : ''}`;
    pinBtn.title = t.pinTitle;
    pinBtn.innerHTML = esPinned ? '★' : '☆';
    pinBtn.onclick = (e) => {
      e.stopPropagation();
      togglePinNota(nota);
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'item-btn';
    deleteBtn.title = 'Delete note';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      confirmarYEliminarNota(nota);
    };

    actionsDiv.appendChild(pinBtn);
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
  const t = i18n[currentLang];
  try {
    const res = await fetch(`/notes/${encodeURIComponent(nombreArchivo)}/raw`);
    if (!res.ok) throw new Error('Could not fetch note content');

    const contenidoRaw = await res.text();
    currentNoteFilename = nombreArchivo;
    
    // Extraer carpeta si existe
    if (nombreArchivo.includes('/')) {
      currentNoteFolder = nombreArchivo.substring(0, nombreArchivo.lastIndexOf('/'));
      noteTitle.value = nombreArchivo.substring(nombreArchivo.lastIndexOf('/') + 1).replace(/\.md$/i, '');
      if (noteFolderBadge && noteFolderName) {
        noteFolderName.textContent = currentNoteFolder;
        noteFolderBadge.style.display = 'inline-flex';
      }
    } else {
      currentNoteFolder = '';
      noteTitle.value = nombreArchivo.replace(/\.md$/i, '');
      if (noteFolderBadge) noteFolderBadge.style.display = 'none';
    }

    // Verificar si es una nota protegida / cifrada
    if (contenidoRaw.startsWith('<!-- ENCRYPTED_NOTE_V1 -->')) {
      isCurrentNoteEncrypted = true;
      currentEncryptedRaw = contenidoRaw;

      let decrypted = null;
      if (currentNotePassword) {
        try {
          decrypted = await descifrarNota(contenidoRaw, currentNotePassword);
        } catch (e) {
          currentNotePassword = null;
        }
      }

      if (decrypted !== null) {
        isNoteUnlocked = true;
        markdownInput.value = decrypted;
        if (decryptScreen) decryptScreen.style.display = 'none';
        if (editorSplitContainer) editorSplitContainer.style.display = 'flex';
        actualizarBotonCandado(true, true);
      } else {
        isNoteUnlocked = false;
        markdownInput.value = '';
        if (decryptPasswordInput) decryptPasswordInput.value = '';
        if (decryptError) decryptError.style.display = 'none';
        if (editorSplitContainer) editorSplitContainer.style.display = 'none';
        if (decryptScreen) {
          decryptScreen.style.display = 'flex';
          setTimeout(() => decryptPasswordInput && decryptPasswordInput.focus(), 60);
        }
        actualizarBotonCandado(true, false);
        renderizarMarkdown();
        btnDelete.style.display = 'inline-flex';
        actualizarBotonPinActivo();
        marcarGuardado();
        renderizarListaNotas();
        return;
      }
    } else {
      isCurrentNoteEncrypted = false;
      currentNotePassword = null;
      currentEncryptedRaw = '';
      isNoteUnlocked = true;
      if (decryptScreen) decryptScreen.style.display = 'none';
      if (editorSplitContainer) editorSplitContainer.style.display = 'flex';
      actualizarBotonCandado(false, false);
      markdownInput.value = contenidoRaw;
    }
    
    btnDelete.style.display = 'inline-flex';
    actualizarBotonPinActivo();
    renderizarMarkdown();
    marcarGuardado();
    renderizarListaNotas();

    grammarDrawer.classList.remove('open');
    tocDrawer.classList.remove('open');
  } catch (err) {
    console.error(err);
  }
}

async function guardarNota() {
  const t = i18n[currentLang];
  const titulo = noteTitle.value.trim();

  // Si la nota está cifrada y aún no ha sido desbloqueada, no sobreescribir
  if (isCurrentNoteEncrypted && !isNoteUnlocked) {
    mostrarToast(t.lockedNoteTitle, 'error');
    return;
  }

  let contenido = markdownInput.value;

  // Si la nota está protegida con contraseña, cifrar antes de enviar al backend
  if (isCurrentNoteEncrypted && currentNotePassword) {
    try {
      contenido = await cifrarNota(contenido, currentNotePassword);
    } catch (err) {
      console.error('Error al cifrar nota:', err);
      mostrarToast('Error al cifrar la nota: ' + err.message, 'error');
      return;
    }
  }

  if (!titulo) {
    mostrarToast(t.toastTitleRequired, 'error');
    noteTitle.focus();
    return;
  }

  try {
    saveStatus.textContent = t.savingStatus;
    const headerStatus = document.getElementById('header-doc-status');
    const headerDot = document.getElementById('header-status-dot');
    if (headerStatus) headerStatus.textContent = t.savingStatus;
    if (headerDot) {
      headerDot.style.backgroundColor = 'var(--accent-primary)';
      headerDot.style.boxShadow = '0 0 6px var(--accent-glow)';
    }
    
    const res = await fetch('/notes/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: titulo, content: contenido, folder: currentNoteFolder })
    });

    if (!res.ok) {
      const errorMsg = await res.text();
      throw new Error(errorMsg);
    }

    const data = await res.json();
    currentNoteFilename = data.filename;
    btnDelete.style.display = 'inline-flex';
    actualizarBotonPinActivo();
    marcarGuardado();
    mostrarToast(t.toastSaveSuccess, 'success');

    // Refrescar metadatos, carpetas y etiquetas
    await cargarCarpetas();
    const metaRes = await fetch('/notes/metadata');
    if (metaRes.ok) {
      metadataNotas = await metaRes.json();
      todasLasNotas = metadataNotas.map(m => m.filename);
      actualizarNubeDeEtiquetas();
      actualizarCarpetasUI();
      renderizarListaNotas();
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
  currentNoteFolder = activeFolderFilter || '';
  isCurrentNoteEncrypted = false;
  currentNotePassword = null;
  currentEncryptedRaw = '';
  isNoteUnlocked = true;

  if (decryptScreen) decryptScreen.style.display = 'none';
  if (editorSplitContainer) editorSplitContainer.style.display = 'flex';
  actualizarBotonCandado(false, false);

  if (noteFolderBadge && noteFolderName) {
    if (currentNoteFolder) {
      noteFolderName.textContent = currentNoteFolder;
      noteFolderBadge.style.display = 'inline-flex';
    } else {
      noteFolderBadge.style.display = 'none';
    }
  }

  noteTitle.value = t.untitledNote;
  markdownInput.value = t.defaultNoteContent;
  btnDelete.style.display = 'none';
  actualizarBotonPinActivo();
  renderizarMarkdown();
  marcarModificado();
  renderizarListaNotas();
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

    // Si estaba fijada, remover
    pinnedNotes = pinnedNotes.filter(f => f !== nombreArchivo);
    localStorage.setItem('app_pinned_notes', JSON.stringify(pinnedNotes));

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
    
    await cargarNotas();
    abrirNota(archivo.name);
  } catch (err) {
    console.error(err);
    mostrarToast(t.toastUploadError, 'error');
  }
});

searchInput.addEventListener('input', () => {
  renderizarListaNotas();
});

// ==========================================================================
// 12. EXPORTACIÓN A PDF PROFESIONAL
// ==========================================================================
async function exportarPDF() {
  const t = i18n[currentLang];
  const titulo = noteTitle.value.trim() || 'Documento';
  const textoOriginal = markdownInput.value.trim();

  if (!textoOriginal) {
    mostrarToast(t.grammarEmptyInput, 'error');
    return;
  }

  mostrarToast(t.toastPdfStart, 'info');

  const contenedorTemp = document.createElement('div');
  contenedorTemp.className = 'markdown-body';
  contenedorTemp.style.padding = '30px';
  contenedorTemp.style.background = '#ffffff';
  contenedorTemp.style.color = '#111827';
  contenedorTemp.style.fontFamily = 'Inter, sans-serif';

  const h1Titulo = document.createElement('h1');
  h1Titulo.textContent = titulo;
  h1Titulo.style.borderBottom = '2px solid #4f46e5';
  h1Titulo.style.paddingBottom = '10px';
  h1Titulo.style.marginBottom = '20px';
  h1Titulo.style.color = '#1e293b';
  contenedorTemp.appendChild(h1Titulo);

  const textoMath = procesarKaTeX(textoOriginal);
  const textoWiki = procesarWikiLinks(textoMath);
  const htmlRaw = marked.parse(textoWiki);
  const htmlCallouts = procesarCallouts(htmlRaw);
  
  const divContenido = document.createElement('div');
  divContenido.innerHTML = sanitizarHTML(htmlCallouts);
  contenedorTemp.appendChild(divContenido);

  document.body.appendChild(contenedorTemp);
  await renderizarDiagramasMermaid(contenedorTemp);

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
      window.print();
    }
  } catch (err) {
    console.error('Error generando PDF:', err);
    mostrarToast(t.toastPdfError, 'error');
  } finally {
    contenedorTemp.remove();
  }
}

btnExportPdf.addEventListener('click', exportarPDF);

// ==========================================================================
// 13. MODO PRESENTACIÓN
// ==========================================================================
async function iniciarPresentacion() {
  const texto = markdownInput.value.trim();
  if (!texto) {
    mostrarToast(i18n[currentLang].grammarEmptyInput, 'error');
    return;
  }

  let partes = texto.split(/\n\s*---\s*\n|\n\s*___\s*\n/);
  if (partes.length === 1 && texto.includes('\n# ')) {
    partes = texto.split(/(?=\n# )/);
  }

  slides = partes.map(p => p.trim()).filter(p => p.length > 0);
  if (slides.length === 0) slides = [texto];

  currentSlideIndex = 0;
  presentationNoteTitle.textContent = noteTitle.value.trim() || 'Presentación';
  
  presentationOverlay.style.display = 'flex';
  await renderizarDiapositivaActual();
}

async function renderizarDiapositivaActual() {
  if (slides.length === 0) return;

  const rawSlide = slides[currentSlideIndex];
  const mathSlide = procesarKaTeX(rawSlide);
  const wikiSlide = procesarWikiLinks(mathSlide);
  const htmlRaw = marked.parse(wikiSlide);
  const htmlCallouts = procesarCallouts(htmlRaw);
  const htmlLimpio = sanitizarHTML(htmlCallouts);

  slideContent.innerHTML = htmlLimpio;
  slideCounter.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

  const porcentaje = ((currentSlideIndex + 1) / slides.length) * 100;
  presentationProgressBar.style.width = `${porcentaje}%`;

  btnPrevSlide.disabled = currentSlideIndex === 0;
  btnNextSlide.disabled = currentSlideIndex === slides.length - 1;

  await renderizarDiagramasMermaid(slideContent);
}

async function siguienteDiapositiva() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    await renderizarDiapositivaActual();
  }
}

async function anteriorDiapositiva() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    await renderizarDiapositivaActual();
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
// 14. MODO LECTURA LIMPIA
// ==========================================================================
async function iniciarModoLectura() {
  const textoOriginal = markdownInput.value.trim();
  readerNoteTitle.textContent = noteTitle.value.trim() || 'Nota';
  
  const mathText = procesarKaTeX(textoOriginal);
  const wikiText = procesarWikiLinks(mathText);
  const htmlRaw = marked.parse(wikiText);
  const htmlCallouts = procesarCallouts(htmlRaw);
  readerContent.innerHTML = sanitizarHTML(htmlCallouts);
  
  readerOverlay.style.display = 'flex';
  await renderizarDiagramasMermaid(readerContent);
}

function cerrarModoLectura() {
  readerOverlay.style.display = 'none';
}

btnReader.addEventListener('click', iniciarModoLectura);
btnCloseReader.addEventListener('click', cerrarModoLectura);
btnReaderPrint.addEventListener('click', () => window.print());

// ==========================================================================
// 14.B VISTA DE GRAFO DE CONOCIMIENTO INTERACTIVO (FORCE-GRAPH 2D)
// ==========================================================================
let graphInstance = null;
let graphData = { nodes: [], links: [] };
let hoverNode = null;
const highlightNodes = new Set();
const highlightLinks = new Set();
let graphSearchQuery = '';

function buildGraphData() {
  const nodesMap = new Map();
  const links = [];

  // 1. Crear nodos a partir de metadataNotas
  metadataNotas.forEach(note => {
    const id = note.filename;
    const cleanName = id.replace(/\.md$/i, '');
    const isCurrent = (currentNoteFilename === id);
    const isPinned = pinnedNotes.includes(id);

    nodesMap.set(id, {
      id,
      name: cleanName,
      tags: note.tags || [],
      isCurrent,
      isPinned,
      exists: true,
      val: 3
    });
  });

  // Si la nota activa aún no está en metadata
  if (currentNoteFilename && !nodesMap.has(currentNoteFilename)) {
    const cleanName = currentNoteFilename.replace(/\.md$/i, '');
    nodesMap.set(currentNoteFilename, {
      id: currentNoteFilename,
      name: cleanName,
      tags: extraerEtiquetas(markdownInput.value),
      isCurrent: true,
      isPinned: pinnedNotes.includes(currentNoteFilename),
      exists: true,
      val: 3
    });
  }

  // Extraer enlaces de la nota activa en tiempo real desde el editor
  const liveLinks = new Set();
  if (currentNoteFilename) {
    const linkRegex = /\[\[(.*?)\]\]/g;
    let m;
    while ((m = linkRegex.exec(markdownInput.value)) !== null) {
      let target = m[1].trim();
      if (!target.toLowerCase().endsWith('.md')) target += '.md';
      liveLinks.add(target);
    }
  }

  // 2. Crear enlaces a partir de los WikiLinks
  metadataNotas.forEach(note => {
    const source = note.filename;
    const noteLinks = (source === currentNoteFilename) ? Array.from(liveLinks) : (note.links || []);

    noteLinks.forEach(target => {
      // Si el destino no existe todavía en nodesMap, crearlo como nodo fantasma
      if (!nodesMap.has(target)) {
        nodesMap.set(target, {
          id: target,
          name: target.replace(/\.md$/i, ''),
          tags: [],
          isCurrent: false,
          isPinned: false,
          exists: false,
          val: 2
        });
      }

      links.push({
        source,
        target
      });

      // Incrementar peso/tamaño de los nodos conectados
      if (nodesMap.has(source)) nodesMap.get(source).val += 0.8;
      if (nodesMap.has(target)) nodesMap.get(target).val += 0.8;
    });
  });

  return {
    nodes: Array.from(nodesMap.values()),
    links
  };
}

function updateHighlight() {
  highlightNodes.clear();
  highlightLinks.clear();

  if (hoverNode) {
    highlightNodes.add(hoverNode.id);
    graphData.links.forEach(link => {
      const srcId = typeof link.source === 'object' ? link.source.id : link.source;
      const tgtId = typeof link.target === 'object' ? link.target.id : link.target;
      if (srcId === hoverNode.id || tgtId === hoverNode.id) {
        highlightLinks.add(link);
        highlightNodes.add(srcId);
        highlightNodes.add(tgtId);
      }
    });
  }
}

async function abrirGrafoModal() {
  try {
    const res = await fetch('/notes/metadata');
    if (res.ok) {
      metadataNotas = await res.json();
      todasLasNotas = metadataNotas.map(m => m.filename);
    }
  } catch (e) {
    console.warn('Usando metadatos en caché para el grafo:', e);
  }

  graphData = buildGraphData();
  if (graphNodeCount) graphNodeCount.textContent = graphData.nodes.length;
  if (graphLinkCount) graphLinkCount.textContent = graphData.links.length;
  if (graphSearchInput) graphSearchInput.value = '';
  graphSearchQuery = '';

  graphOverlay.style.display = 'flex';

  setTimeout(() => {
    inicializarGrafo();
  }, 50);
}

function cerrarGrafoModal() {
  graphOverlay.style.display = 'none';
  if (graphInstance) {
    graphInstance.pauseAnimation();
  }
}

function inicializarGrafo() {
  if (!window.ForceGraph) {
    graphCanvasContainer.innerHTML = `<div style="color: var(--danger); padding: 40px; text-align: center;">No se pudo cargar la biblioteca Force-Graph.</div>`;
    return;
  }

  const width = graphCanvasContainer.clientWidth;
  const height = graphCanvasContainer.clientHeight;

  if (!graphInstance) {
    graphInstance = ForceGraph()(graphCanvasContainer)
      .width(width)
      .height(height)
      .graphData(graphData)
      .nodeId('id')
      .nodeVal('val')
      .nodeRelSize(3)
      .linkSource('source')
      .linkTarget('target')
      .cooldownTicks(150)
      .d3AlphaDecay(0.02)
      .d3VelocityDecay(0.3)
      .onNodeHover(node => {
        hoverNode = node || null;
        updateHighlight();
        graphCanvasContainer.style.cursor = node ? 'pointer' : null;
      })
      .onNodeClick(node => {
        cerrarGrafoModal();
        if (node.exists) {
          abrirNota(node.id);
        } else {
          navegarAWikiLink(node.id);
        }
      })
      .onBackgroundClick(() => {
        hoverNode = null;
        updateHighlight();
      })
      .nodeCanvasObject((node, ctx, globalScale) => {
        const isHovered = hoverNode === node;
        const isHighlighted = highlightNodes.has(node.id);
        const matchesQuery = graphSearchQuery && (
          node.name.toLowerCase().includes(graphSearchQuery) ||
          (node.tags || []).some(t => t.toLowerCase().includes(graphSearchQuery))
        );

        let alpha = 1;
        if (hoverNode && !isHighlighted && !isHovered) {
          alpha = 0.2;
        } else if (graphSearchQuery && !matchesQuery) {
          alpha = 0.2;
        }

        ctx.save();
        ctx.globalAlpha = alpha;

        const currentThemeIsDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const r = Math.max(3.5, Math.sqrt(node.val || 3) * 2.8);

        // Colores según estado
        let fillColor = currentThemeIsDark ? '#818cf8' : '#6366f1';
        let strokeColor = currentThemeIsDark ? '#a5b4fc' : '#4f46e5';

        if (node.isCurrent) {
          fillColor = '#10b981'; // Esmeralda para nota activa
          strokeColor = '#34d399';
        } else if (node.isPinned) {
          fillColor = '#f59e0b'; // Ámbar para favorita
          strokeColor = '#fbbf24';
        } else if (!node.exists) {
          fillColor = currentThemeIsDark ? '#475569' : '#cbd5e1'; // Fantasma
          strokeColor = currentThemeIsDark ? '#64748b' : '#94a3b8';
        }

        if (matchesQuery) {
          fillColor = '#ec4899'; // Rosa para coincidencias de búsqueda
          strokeColor = '#f472b6';
        }

        // Sombra / Resplandor al hacer hover o si es la nota actual o búsqueda
        if (isHovered || node.isCurrent || matchesQuery) {
          ctx.shadowColor = strokeColor;
          ctx.shadowBlur = 12;
        }

        // Dibujar círculo del nodo
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
        ctx.fillStyle = fillColor;
        ctx.fill();

        ctx.lineWidth = (!node.exists) ? 1.2 : 1.8;
        ctx.strokeStyle = strokeColor;
        if (!node.exists) ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Dibujar texto de la etiqueta
        const fontSize = Math.max(10 / globalScale, 3.5);
        if (globalScale > 0.8 || isHovered || isHighlighted || node.isCurrent || matchesQuery) {
          ctx.shadowBlur = 0;
          ctx.font = `${node.isCurrent || isHovered ? '600 ' : '400 '}${fontSize}px Inter, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const textColor = currentThemeIsDark ? '#f8fafc' : '#0f172a';
          ctx.fillStyle = textColor;
          ctx.fillText(node.name, node.x, node.y + r + fontSize * 0.85);

          // Si tiene etiquetas, dibujar pequeño indicador
          if (node.tags && node.tags.length > 0 && (isHovered || matchesQuery)) {
            ctx.font = `300 ${fontSize * 0.75}px JetBrains Mono, monospace`;
            ctx.fillStyle = currentThemeIsDark ? '#94a3b8' : '#64748b';
            ctx.fillText(node.tags.map(t => `#${t}`).join(' '), node.x, node.y + r + fontSize * 1.85);
          }
        }

        ctx.restore();
      })
      .linkColor(link => {
        const isDarkTheme = document.documentElement.getAttribute('data-theme') !== 'light';
        const isHighlight = highlightLinks.has(link);

        if (hoverNode) {
          return isHighlight 
            ? (isDarkTheme ? 'rgba(165, 180, 252, 0.85)' : 'rgba(99, 102, 241, 0.85)') 
            : (isDarkTheme ? 'rgba(51, 65, 85, 0.12)' : 'rgba(203, 213, 225, 0.18)');
        }

        return isDarkTheme ? 'rgba(148, 163, 184, 0.28)' : 'rgba(100, 116, 139, 0.35)';
      })
      .linkWidth(link => (highlightLinks.has(link) ? 2.5 : 1.2))
      .linkDirectionalParticles(link => (highlightLinks.has(link) ? 3 : 0))
      .linkDirectionalParticleWidth(3)
      .linkDirectionalParticleSpeed(0.006);

    // Ajustar fuerzas físicas de d3-force
    graphInstance.d3Force('charge').strength(-140);
    graphInstance.d3Force('link').distance(75);

    // Ajustar vista inicial centrada
    setTimeout(() => {
      if (graphInstance) graphInstance.zoomToFit(400, 40);
    }, 300);
  } else {
    graphInstance
      .width(width)
      .height(height)
      .graphData(graphData)
      .resumeAnimation();

    setTimeout(() => {
      if (graphInstance) graphInstance.zoomToFit(400, 40);
    }, 200);
  }
}

// Búsqueda en el grafo
if (graphSearchInput) {
  graphSearchInput.addEventListener('input', (e) => {
    graphSearchQuery = e.target.value.toLowerCase().trim();
    if (graphInstance) {
      graphInstance.refresh();
    }
  });
}

// Botones del grafo
if (btnGraph) btnGraph.addEventListener('click', abrirGrafoModal);
if (btnCloseGraph) btnCloseGraph.addEventListener('click', cerrarGrafoModal);
if (btnGraphReset) {
  btnGraphReset.addEventListener('click', () => {
    if (graphInstance) {
      graphInstance.zoomToFit(400, 40);
    }
  });
}

// Resize del canvas del grafo
window.addEventListener('resize', () => {
  if (graphOverlay && graphOverlay.style.display === 'flex' && graphInstance) {
    graphInstance.width(graphCanvasContainer.clientWidth);
    graphInstance.height(graphCanvasContainer.clientHeight);
  }
});

// ==========================================================================
// 14.C SISTEMA DE PLANTILLAS & NOTAS DIARIAS & AUTOGUARDADO
// ==========================================================================
const templatesCatalog = [
  {
    id: 'daily',
    icon: '📅',
    titleKey: 'templateDailyTitle',
    descKey: 'templateDailyDesc',
    content: `# 📅 Registro Diario: {{date}} #diario #productividad

## 🎯 Prioridades del Día
- [ ] 1. 
- [ ] 2. 
- [ ] 3. 

---

## 📝 Registro de Tareas & Reuniones
* **{{time}}** — 

---

## 💡 Ideas & Notas Rápidas
> [!NOTE]
> Anota aquí pensamientos o enlaces importantes descubiertos hoy: [[Ideas]].

---

## 🌟 Reflexión del Cierre
* **¿Qué logré hoy?**: 
* **Para mañana**: 
`
  },
  {
    id: 'meeting',
    icon: '🤝',
    titleKey: 'templateMeetingTitle',
    descKey: 'templateMeetingDesc',
    content: `# 🤝 Minuta de Reunión: {{title}} #reunion #trabajo

> **Fecha:** {{date}} | **Hora:** {{time}}  
> **Participantes:** @persona1, @persona2  

---

## 🎯 Objetivo de la Sesión
* 

## 📋 Puntos Tratados
1. 
2. 

## ✅ Acciones Acordadas (Action Items)
- [ ] **@responsable:** Tarea a completar antes del [Fecha]
- [ ] **@responsable:** 

## 📌 Próxima Reunión
* **Fecha tentativa:** 
`
  },
  {
    id: 'project',
    icon: '🚀',
    titleKey: 'templateProjectTitle',
    descKey: 'templateProjectDesc',
    content: `# 🚀 Plan de Proyecto: {{title}} #proyecto #planificacion

> **Estado:** 🟡 En Progreso | **Fecha de Inicio:** {{date}}  

---

## 📌 1. Visión y Objetivos
* **Problema:** 
* **Solución propuesta:** 

---

## 📊 2. Flujo de Trabajo
\`\`\`mermaid
graph TD
    A[Requisitos] --> B[Diseño & Spec]
    B --> C[Implementación]
    C --> D[Pruebas]
    D --> E[Lanzamiento 🚀]
\`\`\`

---

## 🎯 3. Hitos Clave (Milestones)
- [ ] **M1:** Especificación técnica aprobada
- [ ] **M2:** Prototipo funcional
- [ ] **M3:** Lanzamiento v1.0
`
  },
  {
    id: 'study',
    icon: '🎓',
    titleKey: 'templateStudyTitle',
    descKey: 'templateStudyDesc',
    content: `# 🎓 Ficha de Estudio: {{title}} #estudio #conceptos

> **Materia / Tema:** {{title}} | **Fecha:** {{date}}  

---

## 💡 Conceptos Clave (Glosario)
* **Término 1:** Definición concisa.
* **Término 2:** 

---

## 📐 Fórmulas & Modelos
$$\\text{Eficiencia} = \\frac{\\text{Salida Útil}}{\\text{Entrada Total}} \\times 100\\%$$

---

## 📝 Notas Detalladas
> [!IMPORTANT]
> Punto crucial para el examen o aplicación práctica.

1. 
2. 

---

## 📌 Resumen (Método Cornell)
* En pocas palabras: 
`
  },
  {
    id: 'bug',
    icon: '🐞',
    titleKey: 'templateBugTitle',
    descKey: 'templateBugDesc',
    content: `# 🐞 Reporte de Error: {{title}} #bug #qa

> **Fecha:** {{date}} | **Severidad:** 🔴 Alta / 🟡 Media / 🟢 Baja  

---

## 📋 Descripción del Problema
* 

## 🔄 Pasos para Reproducir
1. Ir a '...'
2. Hacer clic en '...'
3. Observar el error:

## ❌ Comportamiento Actual
* 

## ✅ Comportamiento Esperado
* 

## 💻 Entorno & Logs
\`\`\`bash
# Logs o detalles del navegador/consola
\`\`\`
`
  }
];

function interpolarPlantilla(texto, tituloSugerido = '') {
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;
  
  const hh = String(hoy.getHours()).padStart(2, '0');
  const min = String(hoy.getMinutes()).padStart(2, '0');
  const timeStr = `${hh}:${min}`;

  const finalTitle = tituloSugerido || noteTitle.value.trim() || 'Nota';

  return texto
    .replace(/\{\{date\}\}/g, dateStr)
    .replace(/\{\{time\}\}/g, timeStr)
    .replace(/\{\{datetime\}\}/g, `${dateStr} ${timeStr}`)
    .replace(/\{\{title\}\}/g, finalTitle);
}

// 1. Notas Diarias (Hoy)
async function abrirNotaDiaria() {
  const t = i18n[currentLang];
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  const filename = `${yyyy}-${mm}-${dd}.md`;
  const cleanTitle = `${yyyy}-${mm}-${dd}`;

  if (todasLasNotas.includes(filename)) {
    abrirNota(filename);
  } else {
    const dailyTemplate = templatesCatalog.find(tpl => tpl.id === 'daily');
    const content = interpolarPlantilla(dailyTemplate.content, cleanTitle);
    
    currentNoteFilename = filename;
    noteTitle.value = cleanTitle;
    markdownInput.value = content;
    btnDelete.style.display = 'inline-flex';
    actualizarBotonPinActivo();
    renderizarMarkdown();
    
    await guardarNotaSilencioso();
    mostrarToast(t.toastDailyCreated(cleanTitle), 'success');
  }
}

if (btnDailyNote) btnDailyNote.addEventListener('click', abrirNotaDiaria);

// 2. Selector Modal de Plantillas
function abrirModalPlantillas() {
  if (!templatesModal) return;
  renderizarTarjetasPlantillas();
  templatesModal.style.display = 'flex';
}

function cerrarModalPlantillas() {
  if (templatesModal) templatesModal.style.display = 'none';
}

function renderizarTarjetasPlantillas() {
  if (!templatesGrid) return;
  const t = i18n[currentLang];
  templatesGrid.innerHTML = '';

  templatesCatalog.forEach(tpl => {
    const card = document.createElement('div');
    card.className = 'template-card';

    const icon = document.createElement('div');
    icon.className = 'template-card-icon';
    icon.textContent = tpl.icon;

    const title = document.createElement('div');
    title.className = 'template-card-title';
    title.textContent = t[tpl.titleKey] || tpl.titleKey;

    const desc = document.createElement('div');
    desc.className = 'template-card-desc';
    desc.textContent = t[tpl.descKey] || tpl.descKey;

    const actionHint = document.createElement('div');
    actionHint.className = 'template-card-action';
    actionHint.innerHTML = `<span>➕ ${t.templateApplyNew}</span>`;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(actionHint);

    card.onclick = async () => {
      cerrarModalPlantillas();
      await aplicarPlantilla(tpl);
    };

    templatesGrid.appendChild(card);
  });
}

async function aplicarPlantilla(tpl) {
  const t = i18n[currentLang];
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;

  let defaultName = `${t[tpl.titleKey]} (${dateStr})`;
  if (tpl.id === 'daily') defaultName = dateStr;

  const content = interpolarPlantilla(tpl.content, defaultName);
  
  currentNoteFilename = null;
  noteTitle.value = defaultName;
  markdownInput.value = content;
  btnDelete.style.display = 'none';
  actualizarBotonPinActivo();
  renderizarMarkdown();
  marcarModificado();
  renderizarListaNotas();
  markdownInput.focus();

  mostrarToast(t.toastTemplateApplied, 'success');
}

if (btnTemplates) btnTemplates.addEventListener('click', abrirModalPlantillas);
if (btnCloseTemplates) btnCloseTemplates.addEventListener('click', cerrarModalPlantillas);

// 3. Autoguardado con Debounce
let autosaveTimer = null;
let isAutosaveEnabled = localStorage.getItem('app_autosave') !== 'false';

if (toggleAutosave) {
  toggleAutosave.checked = isAutosaveEnabled;
  toggleAutosave.addEventListener('change', (e) => {
    isAutosaveEnabled = e.target.checked;
    localStorage.setItem('app_autosave', isAutosaveEnabled ? 'true' : 'false');
  });
}

function triggerAutosave() {
  if (!isAutosaveEnabled || !currentNoteFilename) return;
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(async () => {
    if (isUnsaved && noteTitle.value.trim()) {
      await guardarNotaSilencioso();
    }
  }, 1500);
}

async function guardarNotaSilencioso() {
  const t = i18n[currentLang];
  const titulo = noteTitle.value.trim();
  const contenido = markdownInput.value;

  if (!titulo) return;

  try {
    saveStatus.textContent = t.savingStatus;
    
    const res = await fetch('/notes/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: titulo, content: contenido })
    });

    if (res.ok) {
      const data = await res.json();
      currentNoteFilename = data.filename;
      btnDelete.style.display = 'inline-flex';
      actualizarBotonPinActivo();
      marcarGuardado();

      const metaRes = await fetch('/notes/metadata');
      if (metaRes.ok) {
        metadataNotas = await metaRes.json();
        todasLasNotas = metadataNotas.map(m => m.filename);
        actualizarNubeDeEtiquetas();
        renderizarListaNotas();
      }
    }
  } catch (err) {
    console.warn('Error en autoguardado:', err);
  }
}

// ==========================================================================
// 14.D MODAL DE GUÍA & TUTORIAL INTERACTIVO
// ==========================================================================
let activeGuideTab = 'start';

function obtenerContenidoGuia(tabId, lang) {
  const isEs = lang === 'es';

  switch (tabId) {
    case 'start':
      return `
        <div class="guide-card">
          <h4>${isEs ? '✍️ 1. Edición en Vivo sin Latencia' : '✍️ 1. Zero-Latency Live Editing'}</h4>
          <p>${isEs ? 'Escribe en el panel izquierdo y observa la vista previa HTML renderizada al instante con sanitización de seguridad contra XSS.' : 'Type in the left editor and view immediate, hardware-accelerated sanitized HTML preview.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '⏱️ 2. Autoguardado Inteligente' : '⏱️ 2. Intelligent Autosave'}</h4>
          <p>${isEs ? 'Tus notas se guardan automáticamente en tu disco local 1.5s después de escribir. Puedes apagarlo o encenderlo desde el interruptor en la barra inferior.' : 'Your notes are automatically saved to local disk 1.5s after typing pause. Toggle it on/off in the bottom status bar.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '📅 3. Notas Diarias & Plantillas' : '📅 3. Daily Notes & Templates'}</h4>
          <p>${isEs ? 'Pulsa <strong>"Hoy"</strong> para abrir tu registro diario con la fecha actual o <strong>"Plantillas"</strong> para crear minutas de reunión, proyectos o fichas Cornell.' : 'Click <strong>"Today"</strong> for your daily log or <strong>"Templates"</strong> for meeting notes, projects, and Cornell study notes.'}</p>
        </div>
      `;
    case 'power':
      return `
        <div class="guide-card">
          <h4>${isEs ? '🔍 1. Paleta de Comandos Universal & Búsqueda' : '🔍 1. Universal Command Palette & Search'}</h4>
          <p>${isEs ? 'Presiona <kbd>Ctrl+K</kbd> desde cualquier pantalla. Busca al instante notas, comandos de acción o busca <em>dentro del texto</em> de todas tus notas con fragmentos resaltados.' : 'Press <kbd>Ctrl+K</kbd> anywhere. Instantly find notes, execute actions, or search <em>deep within note content</em> with highlighted snippets.'}</p>
          <div class="guide-code-snippet">Ctrl + K  →  "reunión", "> Cambiar Tema", "> Grafo"</div>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '📁 2. Árbol de Carpetas Jerárquico' : '📁 2. Hierarchical Folders'}</h4>
          <p>${isEs ? 'Organiza tus notas en carpetas directas en disco con el botón <strong>➕</strong> en el sidebar. Filtra por categorías con un solo clic.' : 'Organize notes in folders directly on disk with the <strong>➕</strong> button in the sidebar. Filter by category with one click.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '🕒 3. Historial de Versiones Automático' : '🕒 3. Automatic Version History'}</h4>
          <p>${isEs ? 'Cada vez que guardas, se crea un snapshot histórico. Abre el panel <strong>⏳ Historial</strong> para comparar revisiones y restaurar con 1 clic.' : 'Every time you save, a snapshot is preserved. Open <strong>⏳ History</strong> to review and restore prior versions in 1 click.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '🧘 4. Modo Zen & Temporizador Pomodoro' : '🧘 4. Zen Mode & Pomodoro Timer'}</h4>
          <p>${isEs ? 'Presiona <kbd>Ctrl+Shift+Z</kbd> para activar la pantalla completa sin distracciones, temporizador Pomodoro de 25/5 min y lluvia relajante procedural.' : 'Press <kbd>Ctrl+Shift+Z</kbd> for full-screen focus, 25/5 min Pomodoro, and procedural ambient rain.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '🔒 5. Cifrado de Notas (AES-GCM 256)' : '🔒 5. Client-Side Note Encryption'}</h4>
          <p>${isEs ? 'Haz clic en el candado <strong>🔓</strong> para cifrar notas sensibles con contraseña militar. Se almacena 100% ininteligible en disco.' : 'Click the <strong>🔓</strong> lock icon to protect confidential notes with military AES-GCM 256. Stored 100% encrypted on disk.'}</p>
        </div>
      `;
    case 'graph':
      return `
        <div class="guide-card">
          <h4>${isEs ? '🔗 1. Enlaces WikiLinks Bidireccionales' : '🔗 1. Bidirectional WikiLinks'}</h4>
          <p>${isEs ? 'Conecta notas escribiendo <code>[[Nombre de Nota]]</code>. Al hacer clic, se abrirá o se creará la nota automáticamente.' : 'Connect notes by typing <code>[[Note Name]]</code>. Clicking jumps to or auto-creates the note.'}</p>
          <div class="guide-code-snippet">[[Mi Proyecto]] • [[Ideas]] • [[Arquitectura]]</div>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '🏷️ 2. Etiquetas Hashtags (#tags)' : '🏷️ 2. Dynamic Hashtags (#tags)'}</h4>
          <p>${isEs ? 'Usa hashtags como <code>#trabajo</code> o <code>#ideas</code> en cualquier parte. Aparecerán automáticamente en la nube lateral para filtrar notas.' : 'Add hashtags like <code>#work</code> or <code>#ideas</code> anywhere in your note to filter via sidebar chips.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '🕸️ 3. Grafo de Conocimiento 2D' : '🕸️ 3. 2D Knowledge Graph'}</h4>
          <p>${isEs ? 'Haz clic en <strong>"Grafo"</strong> en la cabecera para ver todas las conexiones físicas entre tus notas, con partículas animadas en hover y búsqueda en vivo.' : 'Click <strong>"Graph"</strong> in the header to explore the interactive 2D physics network with search and hover particle effects.'}</p>
        </div>
      `;
    case 'advanced':
      return `
        <div class="guide-card">
          <h4>${isEs ? '🧮 1. Fórmulas Matemáticas (KaTeX)' : '🧮 1. KaTeX Mathematical Formulas'}</h4>
          <p>${isEs ? 'Inserta fórmulas en línea con <code>$...$</code> o en bloques destacados con <code>$$...$$</code>.' : 'Insert inline equations with <code>$...$</code> or block equations with <code>$$...$$</code>.'}</p>
          <div class="guide-code-snippet">$$\\int_{a}^{b} f(x) dx = F(b) - F(a)$$</div>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '📊 2. Diagramas Mermaid.js' : '📊 2. Mermaid.js Diagrams'}</h4>
          <p>${isEs ? 'Dibuja diagramas de flujo, secuencias o estados usando bloques de código <code>\`\`\`mermaid</code>.' : 'Create flowcharts, sequences, and state diagrams using <code>\`\`\`mermaid</code> blocks.'}</p>
          <div class="guide-code-snippet">\`\`\`mermaid\ngraph TD\n    A[Inicio] --> B[Proceso]\n    B --> C[Fin]\n\`\`\`</div>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '💡 3. Alertas / Callouts (GitHub Style)' : '💡 3. GitHub-style Callouts'}</h4>
          <p>${isEs ? 'Resalta notas importantes con bloques de alerta.' : 'Highlight critical items with stylized callouts.'}</p>
          <div class="guide-code-snippet">> [!NOTE]\n> Información relevante para el lector.</div>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '📋 4. Pegar y Arrastrar Imágenes' : '📋 4. Image Clipboard Paste & Drop'}</h4>
          <p>${isEs ? 'Copia cualquier imagen y pégala con <strong>Ctrl+V</strong> en el editor o arrastra archivos de imagen directamente.' : 'Copy any image and press <strong>Ctrl+V</strong> in the editor or drag and drop image files.'}</p>
        </div>
      `;
    case 'slides':
      return `
        <div class="guide-card">
          <h4>${isEs ? '📽️ 1. Modo Presentación (F5)' : '📽️ 1. Presentation Slideshow (F5)'}</h4>
          <p>${isEs ? 'Convierte tu nota en diapositivas a pantalla completa pulsando <strong>F5</strong> o el botón "Presentar". Divide diapositivas usando <code>---</code> o encabezados <code>#</code>. Navega con <kbd>→</kbd> y <kbd>←</kbd>.' : 'Transform your note into fullscreen slides by pressing <strong>F5</strong>. Split slides with <code>---</code>. Navigate with arrow keys.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '📖 2. Modo Lectura Limpia' : '📖 2. Distraction-Free Reader Mode'}</h4>
          <p>${isEs ? 'Pulsa el icono del libro <strong>📖</strong> para ocultar paneles y leer con tipografía de libro.' : 'Click the <strong>📖</strong> book icon for clean typography reading without sidebars.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '📄 3. Exportación a PDF de Alta Definición' : '📄 3. HD PDF Export'}</h4>
          <p>${isEs ? 'Genera documentos A4 listos para imprimir con el botón <strong>"PDF"</strong>.' : 'Export clean A4 formatted documents with the <strong>"PDF"</strong> button.'}</p>
        </div>
        <div class="guide-card">
          <h4>${isEs ? '✨ 4. Corrector Gramatical (LanguageTool)' : '✨ 4. Grammar & Spell Checker'}</h4>
          <p>${isEs ? 'Revisa ortografía y gramática en español o inglés con reemplazo en 1 clic.' : 'Check spelling and grammar with 1-click suggestion replacements.'}</p>
        </div>
      `;
    case 'shortcuts':
      return `
        <div class="guide-card">
          <h4>${isEs ? '⌨️ Atajos de Teclado Principales' : '⌨️ Essential Keyboard Shortcuts'}</h4>
          <table class="shortcut-table">
            <thead>
              <tr>
                <th>${isEs ? 'Atajo' : 'Shortcut'}</th>
                <th>${isEs ? 'Acción' : 'Action'}</th>
                <th>${isEs ? 'Ámbito' : 'Scope'}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><kbd>Ctrl</kbd> + <kbd>K</kbd></td><td>${isEs ? 'Paleta de Comandos & Búsqueda' : 'Command Palette & Search'}</td><td>${isEs ? 'Global' : 'Global'}</td></tr>
              <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd></td><td>${isEs ? 'Modo Zen de Concentración' : 'Zen Focus Mode'}</td><td>${isEs ? 'Global' : 'Global'}</td></tr>
              <tr><td><kbd>Ctrl</kbd> + <kbd>S</kbd></td><td>${isEs ? 'Guardar Nota (Snapshot)' : 'Save Note (Snapshot)'}</td><td>Editor</td></tr>
              <tr><td><kbd>Ctrl</kbd> + <kbd>B</kbd></td><td>${isEs ? 'Negrita' : 'Bold Text'}</td><td>Editor</td></tr>
              <tr><td><kbd>Ctrl</kbd> + <kbd>I</kbd></td><td>${isEs ? 'Cursiva' : 'Italic Text'}</td><td>Editor</td></tr>
              <tr><td><kbd>Ctrl</kbd> + <kbd>P</kbd></td><td>${isEs ? 'Exportar a PDF' : 'Export to PDF'}</td><td>${isEs ? 'Global' : 'Global'}</td></tr>
              <tr><td><kbd>F5</kbd></td><td>${isEs ? 'Modo Presentación' : 'Launch Slideshow'}</td><td>${isEs ? 'Global' : 'Global'}</td></tr>
              <tr><td><kbd>Tab</kbd></td><td>${isEs ? 'Indentar 2 espacios' : 'Indent 2 spaces'}</td><td>Editor</td></tr>
              <tr><td><kbd>?</kbd></td><td>${isEs ? 'Abrir esta Guía' : 'Open this Guide'}</td><td>${isEs ? 'Global' : 'Global'}</td></tr>
              <tr><td><kbd>Esc</kbd></td><td>${isEs ? 'Cerrar cualquier modal' : 'Close any overlay'}</td><td>${isEs ? 'Global' : 'Global'}</td></tr>
            </tbody>
          </table>
        </div>
      `;
    default:
      return '';
  }
}

function abrirModalGuia() {
  if (!guideModal) return;
  activeGuideTab = 'start';
  actualizarPestanasGuia();
  guideModal.style.display = 'flex';
}

function cerrarModalGuia() {
  if (guideModal) guideModal.style.display = 'none';
}

function actualizarPestanasGuia() {
  document.querySelectorAll('.guide-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === activeGuideTab);
  });
  if (guideContentBody) {
    guideContentBody.innerHTML = obtenerContenidoGuia(activeGuideTab, currentLang);
  }
}

document.querySelectorAll('.guide-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activeGuideTab = btn.dataset.tab;
    actualizarPestanasGuia();
  });
});

if (btnGuide) btnGuide.addEventListener('click', abrirModalGuia);
if (btnCloseGuide) btnCloseGuide.addEventListener('click', cerrarModalGuia);

async function cargarNotaPlayground() {
  const t = i18n[currentLang];
  const isEs = currentLang === 'es';
  const nombre = isEs ? 'Playground & Tutorial.md' : 'Playground & Tutorial.md';
  const titulo = isEs ? 'Playground & Tutorial' : 'Playground & Tutorial';

  const contenido = isEs ? `# 🚀 Markdown Studio Playground & Tutorial #guia #tutorial

¡Bienvenido al **entorno interactivo de prueba** de Markdown Studio! Aquí puedes experimentar con todas las capacidades avanzadas de la app.

---

## 🔗 1. Enlaces Bidireccionales WikiLinks & Etiquetas
Escribe enlaces a otras notas como [[Mis Ideas]] o [[Plan de Proyecto]]. Al hacer clic en un enlace, se abrirá o creará la nota al instante.
También puedes usar hashtags como #productividad o #desarrollo para agrupar notas en la barra lateral.

---

## 🧮 2. Fórmulas Matemáticas (KaTeX)
Fórmulas en línea como $f(x) = ax^2 + bx + c$ o ecuaciones complejas:

$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$

---

## 📊 3. Diagramas de Flujo (Mermaid.js)

\`\`\`mermaid
graph TD
    A[💡 Idea / Requisito] --> B(📝 Escribir Nota Markdown)
    B --> C{¿Tiene WikiLinks?}
    C -->|Sí| D[🕸️ Conectar en el Grafo 2D]
    C -->|No| E[📄 Exportar a PDF / Presentar F5]
    D --> E
\`\`\`

---

## 💡 4. Alertas Destacadas (Callouts)

> [!NOTE]
> Las alertas te permiten resaltar información clave con diseño moderno.

> [!TIP]
> Pulsa **F5** en cualquier momento para convertir esta nota en una presentación de diapositivas.

> [!WARNING]
> Recuerda que el autoguardado guarda tus cambios automáticamente en segundo plano.

---

## 📽️ 5. Presentación de Diapositivas
Las líneas horizontales (\`---\`) dividen tu nota en diapositivas individuales. Pulsa el botón **"Presentar"** o la tecla **F5** para probarlo.

---

## ⚡ 6. Paleta de Comandos & Búsqueda Profunda
Presiona <kbd>Ctrl+K</kbd> en cualquier pantalla para buscar en el texto de todas tus notas o escribe \`>\` para ejecutar comandos del sistema (ej: cambiar tema, abrir grafo).

---

## 🧘 7. Modo Zen & Temporizador Pomodoro
Presiona <kbd>Ctrl+Shift+Z</kbd> para activar la pantalla completa sin distracciones, iniciar el temporizador Pomodoro de 25 min y encender la lluvia relajante procedural.

---

## 🔒 8. Cifrado con Contraseña (AES-GCM 256)
Haz clic en el icono del candado 🔓 en la barra superior para proteger esta nota con contraseña. El contenido se guardará 100% cifrado e ilegible en disco.
` : `# 🚀 Markdown Studio Playground & Tutorial #guide #tutorial

Welcome to the **interactive playground** of Markdown Studio! Feel free to explore and edit these live examples.

---

## 🔗 1. Bidirectional WikiLinks & Tags
Connect notes by writing links like [[My Ideas]] or [[Project Plan]]. Clicking any link jumps to or auto-creates that note.
Add hashtags like #productivity or #dev to automatically organize your sidebar tag cloud.

---

## 🧮 2. Mathematical Equations (KaTeX)
Inline formulas like $f(x) = ax^2 + bx + c$ or display equations:

$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$

---

## 📊 3. Mermaid.js Flowcharts

\`\`\`mermaid
graph TD
    A[💡 Idea / Requirement] --> B(📝 Write Markdown Note)
    B --> C{Has WikiLinks?}
    C -->|Yes| D[🕸️ Connect in 2D Graph]
    C -->|No| E[📄 Export to PDF / Present F5]
    D --> E
\`\`\`

---

## 💡 4. GitHub-Style Callouts

> [!NOTE]
> Callouts highlight vital information with modern aesthetic styling.

> [!TIP]
> Press **F5** anytime to transform this document into full presentation slides.

> [!WARNING]
> Autosave quietly persists your modifications directly to disk in the background.

---

## 📽️ 5. Slideshow Mode
Horizontal rules (\`---\`) segment your note into separate slides. Press **F5** to start.

---

## ⚡ 6. Universal Command Palette & Search
Press <kbd>Ctrl+K</kbd> anywhere to search within note content or type \`>\` to run system actions directly.

---

## 🧘 7. Zen Focus Mode & Pomodoro
Press <kbd>Ctrl+Shift+Z</kbd> to immerse yourself in full-screen focus with 25-min Pomodoro and procedural relaxing rain audio.

---

## 🔒 8. Military-Grade Note Encryption
Click the 🔓 lock icon in the top title bar to protect this note with AES-GCM 256-bit encryption. It will be saved fully unreadable on disk.
`;

  cerrarModalGuia();
  currentNoteFilename = nombre;
  noteTitle.value = titulo;
  markdownInput.value = contenido;
  btnDelete.style.display = 'inline-flex';
  actualizarBotonPinActivo();
  renderizarMarkdown();
  await guardarNotaSilencioso();
  mostrarToast(t.toastPlaygroundLoaded, 'success');
}

if (btnLoadPlayground) btnLoadPlayground.addEventListener('click', cargarNotaPlayground);
btnGrammar.addEventListener('click', async () => {
  const t = i18n[currentLang];
  const texto = markdownInput.value.trim();

  if (!texto) {
    mostrarToast(t.grammarEmptyInput, 'error');
    return;
  }

  grammarDrawer.classList.add('open');
  tocDrawer.classList.remove('open');
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
// 16. ATAJOS DE TECLADO GLOBALES
// ==========================================================================
window.addEventListener('keydown', async (e) => {
  if (presentationOverlay.style.display === 'flex') {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      await siguienteDiapositiva();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      anteriorDiapositiva();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cerrarPresentacion();
    }
    return;
  }

  if (readerOverlay.style.display === 'flex') {
    if (e.key === 'Escape') {
      e.preventDefault();
      cerrarModoLectura();
    }
    return;
  }

  if (graphOverlay && graphOverlay.style.display === 'flex') {
    if (e.key === 'Escape') {
      e.preventDefault();
      cerrarGrafoModal();
    }
    return;
  }

  if (templatesModal && templatesModal.style.display === 'flex') {
    if (e.key === 'Escape') {
      e.preventDefault();
      cerrarModalPlantillas();
    }
    return;
  }

  if (guideModal && guideModal.style.display === 'flex') {
    if (e.key === 'Escape') {
      e.preventDefault();
      cerrarModalGuia();
    }
    return;
  }

  if (e.key === '?' && document.activeElement !== markdownInput && document.activeElement !== noteTitle) {
    e.preventDefault();
    abrirModalGuia();
  }

  if (tocDrawer.classList.contains('open') && e.key === 'Escape') {
    tocDrawer.classList.remove('open');
    return;
  }

  if (e.key === 'F5') {
    e.preventDefault();
    iniciarPresentacion();
  }

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
// 17. TEMA OSCURO / CLARO
// ==========================================================================
document.documentElement.setAttribute('data-theme', currentTheme);
btnTheme.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

btnTheme.addEventListener('click', () => {
  const actual = document.documentElement.getAttribute('data-theme');
  const nuevo = actual === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nuevo);
  localStorage.setItem('theme', nuevo);
  currentTheme = nuevo;
  btnTheme.textContent = nuevo === 'dark' ? '🌙' : '☀️';

  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: nuevo === 'dark' ? 'dark' : 'default'
    });
    renderizarMarkdown();
  }

  if (graphOverlay && graphOverlay.style.display === 'flex' && graphInstance) {
    graphInstance.refresh();
  }
});

// ==========================================================================
// 18. TOAST NOTIFICATIONS
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
// 20. GESTIÓN DE CARPETAS (FOLDERS)
// ==========================================================================
async function cargarCarpetas() {
  try {
    const res = await fetch('/folders');
    if (res.ok) {
      carpetasDisponibles = await res.json();
    } else {
      carpetasDisponibles = [];
    }
  } catch (err) {
    console.error('Error cargando carpetas:', err);
    carpetasDisponibles = [];
  }
}

function actualizarCarpetasUI() {
  if (!foldersContainer) return;
  const t = i18n[currentLang];
  foldersContainer.innerHTML = '';

  // Chip "Todas"
  const allChip = document.createElement('span');
  allChip.className = `folder-chip ${activeFolderFilter === null ? 'active' : ''}`;
  allChip.textContent = t.allFolders;
  allChip.onclick = () => {
    activeFolderFilter = null;
    actualizarCarpetasUI();
    renderizarListaNotas();
  };
  foldersContainer.appendChild(allChip);

  if (carpetasDisponibles.length === 0) {
    return;
  }

  carpetasDisponibles.forEach(folder => {
    const count = todasLasNotas.filter(n => n.startsWith(folder + '/')).length;
    const chip = document.createElement('span');
    chip.className = `folder-chip ${activeFolderFilter === folder ? 'active' : ''}`;
    chip.innerHTML = `📁 ${folder} <span class="folder-chip-count">(${count})</span>`;
    
    chip.onclick = () => {
      if (activeFolderFilter === folder) {
        activeFolderFilter = null;
      } else {
        activeFolderFilter = folder;
      }
      actualizarCarpetasUI();
      renderizarListaNotas();
    };

    foldersContainer.appendChild(chip);
  });
}

async function crearNuevaCarpetaPrompt() {
  const t = i18n[currentLang];
  const nombre = prompt(t.folderPrompt);
  if (!nombre || !nombre.trim()) return;

  try {
    const res = await fetch('/folders/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ folderName: nombre.trim() })
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(errTxt);
    }

    const data = await res.json();
    mostrarToast(t.folderCreatedSuccess(data.folder), 'success');
    await cargarCarpetas();
    activeFolderFilter = data.folder;
    actualizarCarpetasUI();
    renderizarListaNotas();
  } catch (err) {
    mostrarToast('Error: ' + err.message, 'error');
  }
}

if (btnNewFolder) {
  btnNewFolder.addEventListener('click', crearNuevaCarpetaPrompt);
}

// ==========================================================================
// 21. HISTORIAL DE VERSIONES (VERSION HISTORY)
// ==========================================================================
async function abrirModalVersiones() {
  if (!currentNoteFilename) {
    mostrarToast('No hay una nota activa', 'warning');
    return;
  }

  const t = i18n[currentLang];
  versionsModal.style.display = 'flex';
  versionsList.innerHTML = `<div style="padding:16px; color:var(--text-muted); font-size:0.85rem;">⏳ Cargando versiones...</div>`;
  versionPreviewMeta.textContent = t.selectVersionPreview;
  versionPreviewContent.innerHTML = '';
  btnRestoreVersion.style.display = 'none';
  selectedVersionId = null;

  try {
    const res = await fetch(`/notes/versions?filename=${encodeURIComponent(currentNoteFilename)}`);
    if (!res.ok) throw new Error('Error al cargar versiones');
    const versiones = await res.json();

    if (versiones.length === 0) {
      versionsList.innerHTML = `<div style="padding:16px; color:var(--text-muted); font-size:0.85rem; font-style:italic;">${t.noVersionsFound}</div>`;
      return;
    }

    versionsList.innerHTML = '';
    versiones.forEach((v, index) => {
      const item = document.createElement('div');
      item.className = 'version-item';
      
      const dateObj = new Date(v.timestamp);
      const timeStr = dateObj.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
      });

      item.innerHTML = `
        <span class="version-item-time">🕒 ${timeStr}</span>
        <span class="version-item-size">${v.size} bytes • #${v.id.slice(-6)}</span>
      `;

      item.onclick = () => {
        document.querySelectorAll('.version-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        cargarPrevisualizacionVersion(v);
      };

      versionsList.appendChild(item);

      if (index === 0) {
        item.click();
      }
    });
  } catch (err) {
    versionsList.innerHTML = `<div style="padding:16px; color:var(--danger); font-size:0.85rem;">${err.message}</div>`;
  }
}

async function cargarPrevisualizacionVersion(version) {
  selectedVersionId = version.id;
  versionPreviewMeta.textContent = `Revisión del ${new Date(version.timestamp).toLocaleString()} (${version.size} bytes)`;
  versionPreviewContent.innerHTML = '<div style="padding:16px; color:var(--text-muted);">Cargando contenido...</div>';

  try {
    const res = await fetch(`/notes/versions/${encodeURIComponent(version.id)}?filename=${encodeURIComponent(currentNoteFilename)}`);
    if (!res.ok) throw new Error('Error al leer versión');
    const rawContent = await res.text();

    const html = marked.parse(rawContent);
    const htmlLimpio = DOMPurify.sanitize(html);
    versionPreviewContent.innerHTML = htmlLimpio;
    btnRestoreVersion.style.display = 'inline-flex';
  } catch (err) {
    versionPreviewContent.innerHTML = `<div style="color:var(--danger);">${err.message}</div>`;
    btnRestoreVersion.style.display = 'none';
  }
}

async function restaurarVersionSeleccionada() {
  if (!selectedVersionId || !currentNoteFilename) return;
  const t = i18n[currentLang];

  try {
    const res = await fetch(`/notes/versions/${encodeURIComponent(selectedVersionId)}/restore`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: currentNoteFilename })
    });

    if (!res.ok) throw new Error('Error al restaurar');
    const data = await res.json();

    markdownInput.value = data.content;
    renderizarMarkdown();
    marcarGuardado();
    mostrarToast(t.toastVersionRestored, 'success');
    cerrarModalVersiones();
  } catch (err) {
    mostrarToast('Error al restaurar versión: ' + err.message, 'error');
  }
}

function cerrarModalVersiones() {
  if (versionsModal) versionsModal.style.display = 'none';
}

if (btnHistory) {
  btnHistory.addEventListener('click', abrirModalVersiones);
}
if (btnCloseVersions) {
  btnCloseVersions.addEventListener('click', cerrarModalVersiones);
}
if (btnRestoreVersion) {
  btnRestoreVersion.addEventListener('click', restaurarVersionSeleccionada);
}

// ==========================================================================
// 22. PALETA DE COMANDOS (CTRL + K) & BÚSQUEDA GLOBAL
// ==========================================================================
const catalogoComandos = [
  { id: 'new-note', icon: '➕', title: { es: 'Crear nueva nota', en: 'Create new note' }, shortcut: 'Ctrl+N', action: () => crearNuevaNota() },
  { id: 'daily-note', icon: '📅', title: { es: 'Abrir nota diaria de hoy', en: 'Open today\'s daily note' }, shortcut: '', action: () => abrirNotaDiaria() },
  { id: 'save-note', icon: '💾', title: { es: 'Guardar nota actual', en: 'Save current note' }, shortcut: 'Ctrl+S', action: () => guardarNota() },
  { id: 'toggle-theme', icon: '🌓', title: { es: 'Cambiar tema (Claro / Oscuro)', en: 'Toggle theme (Light / Dark)' }, shortcut: '', action: () => btnTheme.click() },
  { id: 'open-graph', icon: '🕸️', title: { es: 'Ver grafo de conocimiento 2D', en: 'View 2D knowledge graph' }, shortcut: '', action: () => abrirModalGrafo() },
  { id: 'open-templates', icon: '📋', title: { es: 'Catálogo de plantillas', en: 'Templates catalogue' }, shortcut: '', action: () => abrirModalPlantillas() },
  { id: 'open-guide', icon: '💡', title: { es: 'Guía rápida y atajos', en: 'Quick guide & shortcuts' }, shortcut: '?', action: () => abrirModalGuia() },
  { id: 'open-history', icon: '⏳', title: { es: 'Historial de versiones y revisiones', en: 'Version history & revisions' }, shortcut: '', action: () => abrirModalVersiones() },
  { id: 'new-folder', icon: '📁', title: { es: 'Crear nueva carpeta', en: 'Create new folder' }, shortcut: '', action: () => crearNuevaCarpetaPrompt() },
  { id: 'presentation-mode', icon: '📽️', title: { es: 'Iniciar modo presentación', en: 'Start presentation mode' }, shortcut: 'F5', action: () => toggleModoPresentacion() },
  { id: 'reader-mode', icon: '📖', title: { es: 'Activar modo lectura sin distracciones', en: 'Toggle distraction-free reader' }, shortcut: '', action: () => toggleModoLectura() },
  { id: 'export-pdf', icon: '📄', title: { es: 'Exportar documento a PDF', en: 'Export document to PDF' }, shortcut: 'Ctrl+P', action: () => exportarAPDF() },
  { id: 'download-md', icon: '📥', title: { es: 'Descargar archivo Markdown (.md)', en: 'Download Markdown file (.md)' }, shortcut: '', action: () => descargarNota() },
  { id: 'open-toc', icon: '📑', title: { es: 'Ver tabla de contenidos (TOC)', en: 'View table of contents (TOC)' }, shortcut: '', action: () => { actualizarTablaDeContenidos(); tocDrawer.classList.add('open'); } },
  { id: 'start-tour', icon: '🎯', title: { es: 'Iniciar Tour Guiado por la Interfaz', en: 'Start In-App Guided Tour' }, shortcut: '', action: () => iniciarTourInteractivo() },
  { id: 'zen-mode', icon: '🧘', title: { es: 'Activar Modo Zen de concentración', en: 'Toggle Zen Focus Mode' }, shortcut: 'Ctrl+Shift+Z', action: () => toggleModoZen() },
  { id: 'encrypt-note', icon: '🔒', title: { es: 'Cifrar / Bloquear nota con contraseña', en: 'Encrypt / Lock note with password' }, shortcut: '', action: () => abrirModalCifrado() },
  { id: 'toggle-pomodoro', icon: '🍅', title: { es: 'Iniciar / Pausar Pomodoro (25 min)', en: 'Start / Pause Pomodoro (25 min)' }, shortcut: '', action: () => togglePomodoro() },
  { id: 'ambient-rain', icon: '🌧️', title: { es: 'Activar / Desactivar sonido de lluvia relajante', en: 'Toggle relaxing rain ambient sound' }, shortcut: '', action: () => toggleAmbientRain() }
];

function abrirPaletaComandos() {
  if (!commandPaletteModal) return;
  commandPaletteModal.style.display = 'flex';
  paletteInput.value = '';
  paletteSelectedIndex = 0;
  paletteFilteredItems = [];
  ejecutarBusquedaPaleta('');
  setTimeout(() => paletteInput.focus(), 50);
}

function cerrarPaletaComandos() {
  if (commandPaletteModal) {
    commandPaletteModal.style.display = 'none';
  }
}

async function ejecutarBusquedaPaleta(query) {
  const t = i18n[currentLang];
  const q = query.trim().toLowerCase();
  paletteResults.innerHTML = '';
  paletteFilteredItems = [];

  // 1. Filtrar Comandos del sistema
  const comandosFiltrados = catalogoComandos.filter(cmd => {
    const titulo = (cmd.title[currentLang] || cmd.title.es).toLowerCase();
    return !q || titulo.includes(q) || cmd.id.includes(q);
  });

  // 2. Filtrar Notas por título
  const notasFiltradas = todasLasNotas.filter(nota => {
    return !q || nota.toLowerCase().includes(q);
  }).slice(0, 10);

  // Renderizar Comandos
  if (comandosFiltrados.length > 0) {
    const header = document.createElement('div');
    header.className = 'palette-group-title';
    header.textContent = t.paletteGroupCommands;
    paletteResults.appendChild(header);

    comandosFiltrados.forEach(cmd => {
      const itemIndex = paletteFilteredItems.length;
      paletteFilteredItems.push({ type: 'command', data: cmd });

      const itemEl = document.createElement('div');
      itemEl.className = 'palette-item';
      itemEl.dataset.index = itemIndex;

      const title = cmd.title[currentLang] || cmd.title.es;
      const shortcutBadge = cmd.shortcut ? `<kbd class="palette-item-shortcut">${cmd.shortcut}</kbd>` : '';

      itemEl.innerHTML = `
        <div class="palette-item-main">
          <span class="palette-item-icon">${cmd.icon}</span>
          <div class="palette-item-info">
            <span class="palette-item-title">${title}</span>
          </div>
        </div>
        ${shortcutBadge}
      `;

      itemEl.onclick = () => ejecutarItemPaleta(itemIndex);
      paletteResults.appendChild(itemEl);
    });
  }

  // Renderizar Notas
  if (notasFiltradas.length > 0) {
    const header = document.createElement('div');
    header.className = 'palette-group-title';
    header.textContent = t.paletteGroupNotes;
    paletteResults.appendChild(header);

    notasFiltradas.forEach(nota => {
      const itemIndex = paletteFilteredItems.length;
      paletteFilteredItems.push({ type: 'note', data: nota });

      const itemEl = document.createElement('div');
      itemEl.className = 'palette-item';
      itemEl.dataset.index = itemIndex;

      const cleanTitle = nota.replace(/\.md$/i, '');
      const folderBadge = nota.includes('/') ? `<span style="font-size:0.75rem; color:var(--text-muted);">[${nota.split('/')[0]}]</span> ` : '';

      itemEl.innerHTML = `
        <div class="palette-item-main">
          <span class="palette-item-icon">📝</span>
          <div class="palette-item-info">
            <span class="palette-item-title">${folderBadge}${cleanTitle}</span>
          </div>
        </div>
        <kbd class="palette-item-shortcut">Nota</kbd>
      `;

      itemEl.onclick = () => ejecutarItemPaleta(itemIndex);
      paletteResults.appendChild(itemEl);
    });
  }

  // 3. Búsqueda profunda en contenido si query tiene 2 o más caracteres
  if (q.length >= 2) {
    try {
      const res = await fetch(`/notes/search?q=${encodeURIComponent(q)}`);
      if (res.ok) {
        const searchResults = await res.json();
        const contentMatches = searchResults.filter(r => r.matches && r.matches.length > 0);

        if (contentMatches.length > 0) {
          const header = document.createElement('div');
          header.className = 'palette-group-title';
          header.textContent = t.paletteGroupContent;
          paletteResults.appendChild(header);

          contentMatches.forEach(item => {
            const itemIndex = paletteFilteredItems.length;
            paletteFilteredItems.push({ type: 'note', data: item.filename });

            const itemEl = document.createElement('div');
            itemEl.className = 'palette-item';
            itemEl.dataset.index = itemIndex;

            const snippet = item.matches[0] || '';
            itemEl.innerHTML = `
              <div class="palette-item-main">
                <span class="palette-item-icon">🔍</span>
                <div class="palette-item-info">
                  <span class="palette-item-title">${item.title}</span>
                  <span class="palette-item-snippet">${snippet}</span>
                </div>
              </div>
              <kbd class="palette-item-shortcut">Texto</kbd>
            `;

            itemEl.onclick = () => ejecutarItemPaleta(itemIndex);
            paletteResults.appendChild(itemEl);
          });
        }
      }
    } catch (e) {
      console.error('Error en búsqueda de contenido:', e);
    }
  }

  if (paletteFilteredItems.length === 0) {
    paletteResults.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">${t.paletteNoResults}</div>`;
  } else {
    actualizarSeleccionPaleta();
  }
}

function actualizarSeleccionPaleta() {
  document.querySelectorAll('.palette-item').forEach((el, i) => {
    if (i === paletteSelectedIndex) {
      el.classList.add('active');
      el.scrollIntoView({ block: 'nearest' });
    } else {
      el.classList.remove('active');
    }
  });
}

function ejecutarItemPaleta(index) {
  const item = paletteFilteredItems[index];
  if (!item) return;

  cerrarPaletaComandos();

  if (item.type === 'command') {
    item.data.action();
  } else if (item.type === 'note') {
    abrirNota(item.data);
  }
}

if (searchPaletteTrigger) {
  searchPaletteTrigger.addEventListener('click', abrirPaletaComandos);
}

if (paletteInput) {
  paletteInput.addEventListener('input', (e) => {
    clearTimeout(paletteSearchTimeout);
    paletteSearchTimeout = setTimeout(() => {
      paletteSelectedIndex = 0;
      ejecutarBusquedaPaleta(e.target.value);
    }, 150);
  });

  paletteInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (paletteFilteredItems.length > 0) {
        paletteSelectedIndex = (paletteSelectedIndex + 1) % paletteFilteredItems.length;
        actualizarSeleccionPaleta();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (paletteFilteredItems.length > 0) {
        paletteSelectedIndex = (paletteSelectedIndex - 1 + paletteFilteredItems.length) % paletteFilteredItems.length;
        actualizarSeleccionPaleta();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      ejecutarItemPaleta(paletteSelectedIndex);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cerrarPaletaComandos();
    }
  });
}

if (commandPaletteModal) {
  commandPaletteModal.addEventListener('click', (e) => {
    if (e.target === commandPaletteModal) {
      cerrarPaletaComandos();
    }
  });
}

// Hotkey Global Ctrl+K / Cmd+K, Ctrl+Shift+Z y Esc
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (commandPaletteModal && commandPaletteModal.style.display === 'flex') {
      cerrarPaletaComandos();
    } else {
      abrirPaletaComandos();
    }
  }

  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    toggleModoZen();
  }

  if (e.key === 'Escape') {
    if (interactiveTourOverlay && interactiveTourOverlay.style.display === 'block') {
      cerrarTour();
      return;
    }
    if (isZenModeActive) {
      desactivarModoZen();
      return;
    }
    if (commandPaletteModal && commandPaletteModal.style.display === 'flex') {
      cerrarPaletaComandos();
    }
    if (versionsModal && versionsModal.style.display === 'flex') {
      cerrarModalVersiones();
    }
    if (encryptModal && encryptModal.style.display === 'flex') {
      cerrarModalCifrado();
    }
  }

  // Teclas de navegación durante el tour guiado
  if (interactiveTourOverlay && interactiveTourOverlay.style.display === 'block') {
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      e.preventDefault();
      siguientePasoTour();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      anteriorPasoTour();
    }
  }
});

// ==========================================================================
// 23. MODO ZEN DE CONCENTRACIÓN & POMODORO & AUDIO AMBIENTAL
// ==========================================================================
function toggleModoZen() {
  if (isZenModeActive) {
    desactivarModoZen();
  } else {
    activarModoZen();
  }
}

function activarModoZen() {
  if (!zenOverlay) return;
  isZenModeActive = true;
  zenOverlay.style.display = 'flex';
  
  if (zenNoteTitle) {
    zenNoteTitle.textContent = noteTitle.value.trim() || i18n[currentLang].untitledNote;
  }
  
  if (zenTextarea) {
    zenTextarea.value = markdownInput.value;
    zenTextarea.focus();
  }
  
  actualizarEstadisticasZen();
}

function desactivarModoZen() {
  if (!zenOverlay) return;
  isZenModeActive = false;
  
  if (zenTextarea) {
    markdownInput.value = zenTextarea.value;
    renderizarMarkdown();
    marcarModificado();
  }
  
  zenOverlay.style.display = 'none';
  markdownInput.focus();
}

function actualizarEstadisticasZen() {
  if (!zenTextarea) return;
  const t = i18n[currentLang];
  const texto = zenTextarea.value.trim();
  const palabras = texto === '' ? 0 : texto.split(/\s+/).length;
  const tiempoLectura = Math.max(1, Math.ceil(palabras / 200));

  if (zenStatWords) zenStatWords.textContent = t.words(palabras);
  if (zenStatReadingTime) zenStatReadingTime.textContent = t.readingTime(tiempoLectura);
}

if (zenTextarea) {
  zenTextarea.addEventListener('input', () => {
    actualizarEstadisticasZen();
    markdownInput.value = zenTextarea.value;
    marcarModificado();
  });
}

if (btnZenMode) {
  btnZenMode.addEventListener('click', activarModoZen);
}
if (btnExitZen) {
  btnExitZen.addEventListener('click', desactivarModoZen);
}

// --- Temporizador Pomodoro ---
function togglePomodoro() {
  if (pomodoroRunning) {
    pausarPomodoro();
  } else {
    iniciarPomodoro();
  }
}

function iniciarPomodoro() {
  pomodoroRunning = true;
  if (btnZenPomodoroToggle) btnZenPomodoroToggle.textContent = '⏸';
  clearInterval(pomodoroInterval);
  pomodoroInterval = setInterval(tickPomodoro, 1000);
}

function pausarPomodoro() {
  pomodoroRunning = false;
  if (btnZenPomodoroToggle) btnZenPomodoroToggle.textContent = '▶';
  clearInterval(pomodoroInterval);
}

function resetPomodoro() {
  pausarPomodoro();
  isPomodoroBreak = false;
  pomodoroSeconds = 25 * 60;
  actualizarDisplayPomodoro();
}

function tickPomodoro() {
  if (pomodoroSeconds > 0) {
    pomodoroSeconds--;
    actualizarDisplayPomodoro();
  } else {
    playZenChime();
    const t = i18n[currentLang];
    if (!isPomodoroBreak) {
      isPomodoroBreak = true;
      pomodoroSeconds = 5 * 60;
      mostrarToast(t.pomodoroWorkTitle, 'success');
    } else {
      isPomodoroBreak = false;
      pomodoroSeconds = 25 * 60;
      mostrarToast(t.pomodoroBreakTitle, 'info');
    }
    actualizarDisplayPomodoro();
    pausarPomodoro();
  }
}

function actualizarDisplayPomodoro() {
  if (!zenPomodoroDisplay) return;
  const mins = Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0');
  const secs = (pomodoroSeconds % 60).toString().padStart(2, '0');
  zenPomodoroDisplay.textContent = `${mins}:${secs}`;
}

if (btnZenPomodoroToggle) {
  btnZenPomodoroToggle.addEventListener('click', togglePomodoro);
}
if (btnZenPomodoroReset) {
  btnZenPomodoroReset.addEventListener('click', resetPomodoro);
}

// --- Audio Ambiental Procedural (Web Audio API) ---
function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function toggleAmbientRain() {
  initAudioContext();
  if (!audioCtx) return;

  if (isAmbientPlaying) {
    if (ambientSource) {
      try { ambientSource.stop(); } catch(e){}
      ambientSource.disconnect();
      ambientSource = null;
    }
    isAmbientPlaying = false;
    if (zenAmbientIcon) zenAmbientIcon.textContent = '🌧️';
    if (btnZenAmbientToggle) btnZenAmbientToggle.classList.remove('active');
    return;
  }

  // Generar buffer de 5 segundos de ruido rosa procedural
  const bufferSize = audioCtx.sampleRate * 5;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = noiseBuffer;
  noiseSource.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1100;

  ambientGain = audioCtx.createGain();
  const volVal = zenAmbientVolume ? parseFloat(zenAmbientVolume.value) : 0.5;
  ambientGain.gain.value = volVal;

  noiseSource.connect(filter);
  filter.connect(ambientGain);
  ambientGain.connect(audioCtx.destination);

  noiseSource.start();
  ambientSource = noiseSource;
  isAmbientPlaying = true;
  if (zenAmbientIcon) zenAmbientIcon.textContent = '⏹️';
  if (btnZenAmbientToggle) btnZenAmbientToggle.classList.add('active');
}

if (btnZenAmbientToggle) {
  btnZenAmbientToggle.addEventListener('click', toggleAmbientRain);
}
if (zenAmbientVolume) {
  zenAmbientVolume.addEventListener('input', (e) => {
    if (ambientGain && audioCtx) {
      ambientGain.gain.setValueAtTime(parseFloat(e.target.value), audioCtx.currentTime);
    }
  });
}

function playZenChime() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  
  [528, 1056, 1584].forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    const initialGain = 0.25 / (idx + 1);
    gain.gain.setValueAtTime(initialGain, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 3.2);
  });
}

// ==========================================================================
// 24. CIFRADO Y DESBLOQUEO DE NOTAS (WEB CRYPTO API - AES-GCM 256)
// ==========================================================================
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function base64ToArrayBuffer(base64) {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

async function derivarClaveCrypto(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function cifrarNota(textoPlano, password) {
  const enc = new TextEncoder();
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await derivarClaveCrypto(password, salt);
  
  const encryptedBuffer = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    enc.encode(textoPlano)
  );

  const payload = {
    v: 1,
    salt: arrayBufferToBase64(salt),
    iv: arrayBufferToBase64(iv),
    data: arrayBufferToBase64(encryptedBuffer)
  };

  return '<!-- ENCRYPTED_NOTE_V1 -->\n' + JSON.stringify(payload);
}

async function descifrarNota(blobCifrado, password) {
  const dec = new TextDecoder();
  const lineas = blobCifrado.trim().split('\n');
  const jsonStr = lineas.slice(1).join('\n');
  const payload = JSON.parse(jsonStr);

  const salt = new Uint8Array(base64ToArrayBuffer(payload.salt));
  const iv = new Uint8Array(base64ToArrayBuffer(payload.iv));
  const data = base64ToArrayBuffer(payload.data);

  const key = await derivarClaveCrypto(password, salt);
  const decryptedBuffer = await window.crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    data
  );

  return dec.decode(decryptedBuffer);
}

function actualizarBotonCandado(isEncrypted, isUnlocked) {
  if (!btnLockNote) return;
  const t = i18n[currentLang];
  if (isEncrypted) {
    btnLockNote.classList.add('is-locked');
    btnLockNote.innerHTML = isUnlocked ? '🔓' : '🔒';
    btnLockNote.title = isUnlocked ? `${t.lockNoteBtn} (${t.toastNoteEncrypted})` : t.lockedNoteTitle;
  } else {
    btnLockNote.classList.remove('is-locked');
    btnLockNote.innerHTML = '🔓';
    btnLockNote.title = t.lockNoteBtn;
  }
}

function abrirModalCifrado() {
  if (!encryptModal) return;
  const t = i18n[currentLang];
  encryptModal.style.display = 'flex';
  if (encryptModalError) encryptModalError.style.display = 'none';
  if (encryptPassword) encryptPassword.value = '';
  if (encryptPasswordConfirm) encryptPasswordConfirm.value = '';

  if (btnRemoveEncryption) {
    btnRemoveEncryption.style.display = isCurrentNoteEncrypted ? 'inline-flex' : 'none';
  }
  setTimeout(() => encryptPassword && encryptPassword.focus(), 60);
}

function cerrarModalCifrado() {
  if (encryptModal) encryptModal.style.display = 'none';
}

async function ejecutarDesbloqueoNota() {
  if (!decryptPasswordInput) return;
  const t = i18n[currentLang];
  const pass = decryptPasswordInput.value;
  if (!pass) return;

  try {
    const textoDescifrado = await descifrarNota(currentEncryptedRaw, pass);
    currentNotePassword = pass;
    isNoteUnlocked = true;
    markdownInput.value = textoDescifrado;
    if (decryptScreen) decryptScreen.style.display = 'none';
    if (editorSplitContainer) editorSplitContainer.style.display = 'flex';
    actualizarBotonCandado(true, true);
    renderizarMarkdown();
    marcarGuardado();
    mostrarToast(t.toastNoteUnlocked, 'success');
  } catch (err) {
    console.warn('Contraseña incorrecta:', err);
    if (decryptError) decryptError.style.display = 'block';
    const card = document.querySelector('.decrypt-card');
    if (card) {
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    }
    decryptPasswordInput.select();
  }
}

if (btnLockNote) {
  btnLockNote.addEventListener('click', () => {
    if (isCurrentNoteEncrypted && !isNoteUnlocked) {
      if (decryptPasswordInput) decryptPasswordInput.focus();
    } else {
      abrirModalCifrado();
    }
  });
}

if (btnCloseEncrypt) {
  btnCloseEncrypt.addEventListener('click', cerrarModalCifrado);
}
if (btnCancelEncrypt) {
  btnCancelEncrypt.addEventListener('click', cerrarModalCifrado);
}

if (btnApplyEncrypt) {
  btnApplyEncrypt.addEventListener('click', async () => {
    const t = i18n[currentLang];
    const pass = encryptPassword.value;
    const confirmPass = encryptPasswordConfirm.value;

    if (!pass) {
      if (encryptModalError) {
        encryptModalError.textContent = t.passwordRequired;
        encryptModalError.style.display = 'block';
      }
      return;
    }

    if (pass !== confirmPass) {
      if (encryptModalError) {
        encryptModalError.textContent = t.passwordMismatch;
        encryptModalError.style.display = 'block';
      }
      return;
    }

    currentNotePassword = pass;
    isCurrentNoteEncrypted = true;
    isNoteUnlocked = true;
    actualizarBotonCandado(true, true);
    cerrarModalCifrado();
    mostrarToast(t.toastNoteEncrypted, 'success');
    await guardarNota();
  });
}

if (btnRemoveEncryption) {
  btnRemoveEncryption.addEventListener('click', async () => {
    const t = i18n[currentLang];
    isCurrentNoteEncrypted = false;
    currentNotePassword = null;
    currentEncryptedRaw = '';
    isNoteUnlocked = true;
    actualizarBotonCandado(false, false);
    cerrarModalCifrado();
    mostrarToast(t.toastEncryptionRemoved, 'info');
    await guardarNota();
  });
}

if (btnDecryptSubmit) {
  btnDecryptSubmit.addEventListener('click', ejecutarDesbloqueoNota);
}
if (decryptPasswordInput) {
  decryptPasswordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ejecutarDesbloqueoNota();
    }
  });
}

// ==========================================================================
// 25. TOUR INTERACTIVO GUIADO (ONBOARDING TOUR)
// ==========================================================================
let currentTourStepIndex = 0;
const interactiveTourOverlay = document.getElementById('interactive-tour-overlay');
const tourSpotlight = document.getElementById('tour-spotlight');
const tourCard = document.getElementById('tour-card');
const tourStepBadge = document.getElementById('tour-step-badge');
const tourStepTitle = document.getElementById('tour-step-title');
const tourStepDesc = document.getElementById('tour-step-desc');
const tourStepHint = document.getElementById('tour-step-hint');
const btnTourSkip = document.getElementById('btn-tour-skip');
const btnTourPrev = document.getElementById('btn-tour-prev');
const btnTourNext = document.getElementById('btn-tour-next');
const btnCloseTour = document.getElementById('btn-close-tour');
const btnStartInteractiveTour = document.getElementById('btn-start-interactive-tour');

function iniciarTourInteractivo() {
  if (!interactiveTourOverlay || !tourSpotlight || !tourCard) return;
  cerrarModalGuia();
  currentTourStepIndex = 0;
  interactiveTourOverlay.style.display = 'block';
  mostrarPasoTour(currentTourStepIndex);
}

function cerrarTour() {
  if (interactiveTourOverlay) {
    interactiveTourOverlay.style.display = 'none';
  }
}

function siguientePasoTour() {
  const t = i18n[currentLang];
  const steps = t.tourSteps || [];
  if (currentTourStepIndex < steps.length - 1) {
    currentTourStepIndex++;
    mostrarPasoTour(currentTourStepIndex);
  } else {
    cerrarTour();
    mostrarToast(t.toastPlaygroundLoaded || '¡Tour completado!', 'success');
  }
}

function anteriorPasoTour() {
  if (currentTourStepIndex > 0) {
    currentTourStepIndex--;
    mostrarPasoTour(currentTourStepIndex);
  }
}

function mostrarPasoTour(index) {
  const t = i18n[currentLang];
  const steps = t.tourSteps || [];
  if (index < 0 || index >= steps.length) {
    cerrarTour();
    return;
  }

  const step = steps[index];
  tourStepBadge.textContent = t.tourStepCount(index + 1, steps.length);
  tourStepTitle.textContent = step.title;
  tourStepDesc.textContent = step.desc;
  tourStepHint.innerHTML = t.tourHint(step.hint);

  btnTourPrev.style.display = index === 0 ? 'none' : 'inline-flex';
  btnTourNext.textContent = index === steps.length - 1 ? t.tourBtnFinish : t.tourBtnNext;

  const targetEl = document.querySelector(step.target);
  if (targetEl) {
    const rect = targetEl.getBoundingClientRect();
    const pad = 6;
    tourSpotlight.style.top = `${Math.max(0, rect.top - pad)}px`;
    tourSpotlight.style.left = `${Math.max(0, rect.left - pad)}px`;
    tourSpotlight.style.width = `${rect.width + pad * 2}px`;
    tourSpotlight.style.height = `${rect.height + pad * 2}px`;

    posicionarTarjetaTour(rect);
  } else {
    tourSpotlight.style.top = '50%';
    tourSpotlight.style.left = '50%';
    tourSpotlight.style.width = '0px';
    tourSpotlight.style.height = '0px';

    tourCard.style.top = '50%';
    tourCard.style.left = '50%';
    tourCard.style.transform = 'translate(-50%, -50%)';
  }
}

function posicionarTarjetaTour(targetRect) {
  const cardWidth = 360;
  const cardHeight = 220;
  const margin = 16;
  const vWidth = window.innerWidth;
  const vHeight = window.innerHeight;

  tourCard.style.transform = 'none';

  let top, left;

  if (targetRect.bottom + cardHeight + margin < vHeight) {
    top = targetRect.bottom + margin;
    left = Math.min(Math.max(margin, targetRect.left), vWidth - cardWidth - margin);
  } else if (targetRect.right + cardWidth + margin < vWidth) {
    top = Math.min(Math.max(margin, targetRect.top), vHeight - cardHeight - margin);
    left = targetRect.right + margin;
  } else if (targetRect.top - cardHeight - margin > 0) {
    top = targetRect.top - cardHeight - margin;
    left = Math.min(Math.max(margin, targetRect.left), vWidth - cardWidth - margin);
  } else if (targetRect.left - cardWidth - margin > 0) {
    top = Math.min(Math.max(margin, targetRect.top), vHeight - cardHeight - margin);
    left = targetRect.left - cardWidth - margin;
  } else {
    top = Math.max(margin, (vHeight - cardHeight) / 2);
    left = Math.max(margin, (vWidth - cardWidth) / 2);
  }

  tourCard.style.top = `${top}px`;
  tourCard.style.left = `${left}px`;
}

if (btnTourNext) btnTourNext.addEventListener('click', siguientePasoTour);
if (btnTourPrev) btnTourPrev.addEventListener('click', anteriorPasoTour);
if (btnTourSkip) btnTourSkip.addEventListener('click', cerrarTour);
if (btnCloseTour) btnCloseTour.addEventListener('click', cerrarTour);
if (btnStartInteractiveTour) btnStartInteractiveTour.addEventListener('click', iniciarTourInteractivo);

window.addEventListener('resize', () => {
  if (interactiveTourOverlay && interactiveTourOverlay.style.display === 'block') {
    mostrarPasoTour(currentTourStepIndex);
  }
});

// ==========================================================================
// 19. EVENTOS DE BOTONES SUPERIORES
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