---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, layout, micro-interactions, and making choices that avoid generic AI templates.
---

# 🎨 Frontend Design & Aesthetic Excellence

> Guidance for crafting distinctive, premium, and intentional user interfaces that feel bespoke, polished, and purposeful rather than templated or generic.

---

## 1. 🎯 Grounding & Design Intent

* **Context & Domain Identity:** Design decisions must reflect the tool's core utility and user mindset. For a note-taking & knowledge suite (like Markdown Studio), prioritize readability, rapid feedback, unobtrusive chrome, focus states, and seamless dark/light contrast.
* **Avoid Clichés:** Reject default AI aesthetic traps:
  * No gratuitous purple/magenta gradient backgrounds on every element.
  * No unnecessary decorative floating blobs or arbitrary numbered badges (01, 02) where no sequence exists.
  * No over-accenting single words in headlines with mismatched italics or colors.
  * Avoid heavy all-caps labels unless standard in dense technical status counters.

---

## 2. 🔤 Typography as Character & Utility

* **Clear Hierarchy & Scale:**
  * Use a curated font pair: a distinct display/heading font (e.g., `Outfit`, `Inter`) paired with a high-legibility body font and a refined monospace font (`JetBrains Mono`, `Geist Mono`) for code/math.
  * Establish clear type scales and line-heights (`1.6`–`1.8` for body copy, `1.2`–`1.3` for headings).
* **Optimal Line Lengths:** Keep reading columns below **80 characters** (`max-width: ~720px–820px`) for fatigue-free reading.
* **Semantic Weighting:** Use weights (`400`, `500`, `600`, `700`) deliberately to establish visual dominance, not random font size jumps.

---

## 3. 🎨 Color Systems & Visual Depth

* **Design Tokens & HSL Palette:**
  * Define surface layers with clear elevation (`--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-card`).
  * Ensure high WCAG contrast in both Light and Dark modes.
* **Semantic Accents:** Colors should signify state and meaning:
  * **Brand / Interaction:** Indigo / Violet / Electric Blue (`var(--accent-primary)`).
  * **Success / Active State:** Emerald Green (`#10b981`).
  * **Warning / Pinned ⭐:** Warm Amber (`#f59e0b`).
  * **Danger / Delete:** Crimson / Coral (`#ef4444`).
* **Subtle Glassmorphism & Depth:**
  * Use subtle borders (`rgba(255, 255, 255, 0.08)` in dark mode, `rgba(0, 0, 0, 0.08)` in light mode).
  * Employ multi-layered box-shadows (`0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`) for real tactile depth.
  * Apply `backdrop-filter: blur(10px)` selectively on floating toolbars and modals.

---

## 4. ⚡ Motion & Micro-Interactions

* **Action-Driven Feedback:** Animate in response to user actions (opening modals, switching slides, hovering over graph nodes, clicking buttons), not arbitrary auto-looping motion.
* **Snappy Timings:**
  * Micro-interactions (hover, active, focus): `120ms`–`180ms` ease-out.
  * Overlays / Drawers: `220ms`–`280ms` `cubic-bezier(0.16, 1, 0.3, 1)`.
* **Tactile States:** Every interactive button, chip, and input must have clear `:hover`, `:active` (scale down 0.98), and `:focus-visible` states.

---

## 5. 📐 Visual Structure & Layout Craft

* **Whitespace as a Feature:** Generous padding and structured grid/flex gaps (`8px`, `12px`, `16px`, `24px`) avoid visual congestion.
* **Zero Clutter:** Secondary controls belong in contextual drawers, toolbars, or keyboard shortcuts rather than crowding the main canvas.
* **Responsive Fluidity:** Flawless transitions across desktop, split-screen, and mobile layouts.
