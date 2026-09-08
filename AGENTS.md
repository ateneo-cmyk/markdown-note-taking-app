# 🤖 AGENTS.md — Guidelines for AI Agents

> This document contains technical specifications, architectural guidelines, security rules, and code conventions for AI coding agents operating on the **Markdown Studio** codebase.

---

## 📌 Project Overview

**Markdown Studio** is a full-featured, lightweight, and modern note-taking web application.
* **Backend:** Node.js + Express (REST API for file persistence and external API proxying).
* **Frontend:** Vanilla JavaScript (ES6+), HTML5, and CSS3 with custom design tokens (Dark/Light modes).
* **Core Philosophy:** Client-side real-time rendering at 60fps (zero-latency Markdown preview) with a minimal, secure backend.

---

## 📁 Codebase Map

```plaintext
markdown-note-taking-app/
│
├── app.js                  # Express.js backend server, API routes, file handling & proxy
├── package.json            # Project dependencies and metadata
├── README.md               # User-facing project documentation
├── AGENTS.md               # AI Agent guidelines and rules (this file)
│
├── uploads/                # Directory where user notes (.md) are saved
│
└── public/                 # Static assets served by Express
    ├── index.html          # UI layout, headers, modals (Presentation & Reader), drawers
    ├── style.css           # Design tokens, themes (Dark/Light), split view, print styles
    └── app.js              # Client logic: i18n, live markdown parser, CRUD, shortcuts, slideshow
```

---

## 🏗️ Architectural Principles

### 1. Client-Side Real-Time Processing
* **Markdown Parsing:** Always perform Markdown-to-HTML conversion in the browser (`marked.js`) triggered on `<textarea>` `input` events.
* **Never move real-time typing to server-side fetch requests.** Server calls must be reserved for saving, deleting, listing, downloading, and external API requests (e.g., LanguageTool).

### 2. Multi-Format Repurposing
* The raw Markdown note in the client powers multiple views:
  1. **Split-Screen Editor & Live HTML Preview** (sanitized with `DOMPurify`).
  2. **Interactive Slideshow / Presentation Mode** (splitting text via `---` or `# ` headings).
  3. **Clean Reader Mode** (distraction-free view).
  4. **Direct PDF Export** (`html2pdf.js` / `@media print`).

### 3. Internationalization (i18n)
* The UI supports **Spanish (ES)** and **English (EN)**.
* Central dictionary is located at the top of `public/app.js` (`const i18n = { es: {...}, en: {...} }`).
* When adding new UI elements, **always** register the keys in both `es` and `en` and use `data-i18n` or `data-i18n-placeholder` attributes.

---

## 🛡️ Security & Safety Rules

1. **XSS Protection (Cross-Site Scripting):**
   * Any HTML generated from user markdown via `marked.parse()` **MUST** be sanitized with `DOMPurify.sanitize(html)` before inserting into the DOM (`innerHTML`).
2. **Path Traversal Protection:**
   * Never use user-supplied path strings directly.
   * Always wrap route parameters with `path.basename(req.params.nombre)` before interacting with `uploads/`.
3. **Filesystem Validation:**
   * Always check `fs.existsSync(filePath)` before `fs.readFileSync()` or `fs.unlinkSync()` to return graceful `404` errors instead of crashing with unhandled `500` exceptions.
4. **Multer File Storage:**
   * Always use `multer.diskStorage` with sanitized `file.originalname` to preserve filenames and `.md` extensions.
   * Ensure `uploads/` directory existence on startup with `fs.mkdirSync(uploadsDir, { recursive: true })`.

---

## 🔌 Backend API Reference

| Endpoint | Method | Request Payload | Response / Purpose |
| :--- | :--- | :--- | :--- |
| `/notes` | `GET` | — | Returns JSON array of filename strings in `uploads/`. |
| `/notes/:nombre/raw` | `GET` | — | Returns plain text UTF-8 raw Markdown for editor loading. |
| `/notes/:nombre/html`| `GET` | — | Returns pre-rendered HTML string. |
| `/notes/save` | `POST` | `{ title: string, content: string }` | Saves/updates note as `.md` file in `uploads/`. |
| `/notes/:nombre` | `DELETE` | — | Deletes note file from `uploads/`. |
| `/upload` | `POST` | `multipart/form-data` (`file`) | Uploads existing `.md` file to `uploads/`. |
| `/grammar` | `POST` | `{ text: string, language: string }` | Proxies text check to `https://api.languagetool.org/v2/check`. |

---

## 🎨 Frontend & Styling Standards

* **CSS Custom Properties:** All colors, backgrounds, borders, and shadows must use CSS variables (e.g. `var(--bg-primary)`, `var(--text-primary)`, `var(--accent-primary)`) to guarantee seamless Dark and Light mode switching.
* **No Framework Bloat:** Do not introduce heavy frontend frameworks (React/Vue/Angular) unless explicitly requested. Keep the code vanilla, fast, and dependency-light.
* **External CDNs in `index.html`:**
  * `marked.js` — Markdown compiler.
  * `DOMPurify` — HTML sanitizer.
  * `highlight.js` — Syntax highlighter.
  * `html2pdf.js` — PDF generation.

---

## 📐 Spec-Driven Development (SDD) Protocol

> **MANDATORY RULE FOR AI AGENTS:**  
> Before writing code for any new feature, substantial refactoring, or architectural modification, the agent **MUST** draft or update a formal specification in `specs/<feature-name>.md` following [specs/TEMPLATE.md](file:///c:/Users/pikor/OneDrive/Documentos/markdown-note-taking-app/specs/TEMPLATE.md) and obtain user approval.

### SDD Lifecycle:
```plaintext
1. 📝 DRAFT SPEC        -> Create specs/<feature>.md using specs/TEMPLATE.md
2. 🔍 REVIEW & APPROVE  -> Present spec to user; refine edge cases and contracts
3. 📋 IMPLEMENTATION    -> Create technical implementation plan based on spec
4. 💻 EXECUTION         -> Write clean, tested code matching the spec contracts
5. ✅ VERIFICATION      -> Verify against Acceptance Criteria (Definition of Done)
```

### Spec Requirements:
* Every spec must specify: User Stories, Backend API contracts, Frontend UI/State changes, i18n keys (`es` and `en`), Security validations, and measurable Acceptance Criteria (ACs).

---

## ⌨️ Keyboard Shortcuts Convention

When modifying or adding keyboard shortcuts, preserve standard desktop expectations:
* <kbd>Ctrl</kbd> + <kbd>S</kbd> / <kbd>Cmd</kbd> + <kbd>S</kbd> : Save Note
* <kbd>Ctrl</kbd> + <kbd>B</kbd> / <kbd>Cmd</kbd> + <kbd>B</kbd> : Toggle Bold
* <kbd>Ctrl</kbd> + <kbd>I</kbd> / <kbd>Cmd</kbd> + <kbd>I</kbd> : Toggle Italic
* <kbd>Ctrl</kbd> + <kbd>P</kbd> / <kbd>Cmd</kbd> + <kbd>P</kbd> : Export to PDF
* <kbd>F5</kbd> : Launch Presentation Mode
* <kbd>Tab</kbd> : Insert 2 spaces in editor (prevent losing focus)
* <kbd>Esc</kbd> : Close open overlays / modals (Presentation, Reader, Drawers)

---

## 🚀 Execution & Verification Commands

```bash
# Check syntax before deploying edits
node -c app.js

# Start local server
node app.js
# Access at http://localhost:3000
```

