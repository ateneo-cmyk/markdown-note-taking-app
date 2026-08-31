# ⚡ Markdown Studio - Note-Taking App

> A modern, fast, and elegant web application to create, edit, and manage **Markdown** notes in real-time, featuring an integrated AI/LanguageTool grammar & spell checker, syntax highlighting, and a customizable sleek UI with Dark & Light modes.

![Node.js](https://img.shields.io/badge/Node.js-v18+-68a063?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5.x-black?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Flex/Grid-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

---

## 📸 Key Features

* ⚡ **Real-Time Live Markdown Preview:** Instantaneous client-side HTML rendering (0 latency, 60fps) in a split-screen layout without server overhead.
* 🎨 **Syntax Highlighting:** Full syntax highlighting for code blocks across popular languages (JavaScript, Python, HTML, CSS, SQL, JSON, etc.) via [highlight.js](https://highlightjs.org/).
* 🛠️ **Markdown Quick Toolbar:** One-click shortcuts for Headings (H1, H2, H3), Bold, Italic, Strikethrough, Blockquotes, Inline Code, Code Blocks, Links, Lists, Task Lists (`[ ]`), and Tables.
* ✨ **Grammar & Spell Checker:** Integrated with the [LanguageTool API](https://languagetool.org/) with an interactive side drawer and **1-click suggestion replacement** directly into your editor.
* 📁 **Complete Note Management (CRUD):**
  * Create new notes on the fly.
  * Auto-save & edit existing `.md` files.
  * Upload existing `.md` files from your device with original filename preservation.
  * Delete notes with confirmation prompts.
  * Download notes as `.md` files or copy rendered HTML with one click.
* 🔍 **Real-Time Note Search:** Instant search filter in the sidebar to find notes quickly.
* 📜 **Synchronized Scrolling:** Proportional dual-pane sync scrolling between the markdown editor and HTML preview.
* ⌨️ **Keyboard Shortcuts:**
  * <kbd>Ctrl</kbd> + <kbd>S</kbd> / <kbd>Cmd</kbd> + <kbd>S</kbd> : Save note immediately.
  * <kbd>Ctrl</kbd> + <kbd>B</kbd> : Toggle bold formatting on selection.
  * <kbd>Ctrl</kbd> + <kbd>I</kbd> : Toggle italic formatting on selection.
  * <kbd>Tab</kbd> : Insert 2-space indentation without losing focus.
* 🌓 **Dark & Light Mode:** Sleek glassmorphic theme with persistent preference saved to `localStorage`.
* 🛡️ **Built-in Security:**
  * XSS prevention using [DOMPurify](https://github.com/cure53/DOMPurify) for safe markdown HTML rendering.
  * Path traversal protection on all file-system operations in the backend.
* 📊 **Live Document Statistics:** Real-time counters for words, characters, and lines.

---

## 🛠️ Tech Stack

### Backend
* **[Node.js](https://nodejs.org/):** Server runtime environment.
* **[Express.js](https://expressjs.com/):** Web framework providing RESTful API endpoints.
* **[Multer](https://github.com/expressjs/multer):** Middleware for secure multipart file uploads (`uploads/`).
* **[Marked](https://marked.js.org/):** Fast, lightweight markdown compiler.

### Frontend
* **Modern HTML5 & CSS3:** Custom CSS variables, fluid responsive layout, and glassmorphic UI.
* **Vanilla JavaScript (ES6+):** Clean, reactive architecture without heavy frontend framework bloat.
* **[DOMPurify](https://github.com/cure53/DOMPurify):** High-grade sanitizer against cross-site scripting (XSS).
* **[Highlight.js](https://highlightjs.org/):** Code syntax highlighting engine.
* **Google Fonts:** *Inter*, *Outfit*, and *JetBrains Mono*.

---

## 📂 Project Structure

```plaintext
markdown-note-taking-app/
│
├── public/                 # Static files served to the client
│   ├── index.html          # Main HTML markup and UI layout
│   ├── style.css           # Modern styles, themes, and split-screen CSS
│   └── app.js              # Client-side logic, live rendering & event handlers
│
├── uploads/                # Local storage directory for note files (.md)
├── app.js                  # Express backend server and API endpoints
├── package.json            # Dependencies and npm script configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/your-username/markdown-note-taking-app.git
cd markdown-note-taking-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the application
```bash
node app.js
```

### 4. Open in browser
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/notes` | Returns a list of all available note files. |
| `GET` | `/notes/:nombre/raw` | Returns raw markdown text of a specific note for editing. |
| `GET` | `/notes/:nombre/html` | Returns pre-rendered HTML content of a note. |
| `POST` | `/notes/save` | Creates or updates a note (`{ title: string, content: string }`). |
| `DELETE` | `/notes/:nombre` | Permanently deletes a note from the server. |
| `POST` | `/upload` | Uploads a `.md` file via multipart form-data. |
| `POST` | `/grammar` | Proxies text to LanguageTool for spelling and grammar inspection. |

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. **Fork** the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
