# reallearn-info

The official documentation site for **reallearn** — *Where Every Question Becomes a Journey.*

## About

This repository hosts the single-page documentation site for reallearn, built as a self-contained HTML document with embedded CSS and JavaScript. No frameworks. No build tools. Just one file that carries its own weight.

The current design is the **Aura v3** system — a violet-indigo-cyan-amber design language built around the idea that every word should feel like it matters. Glassmorphic surfaces, animated aurora backgrounds, particle fields, cursor-tracking glow, and gradient-text typography work together to create a reading experience that feels alive.

## Viewing Locally

Open `./index.html` in any modern browser. That's it.

Or serve it:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Design System

The Aura design system is defined entirely through CSS custom properties. Key tokens:

| Token | Purpose |
|-------|---------|
| `--accent` | Primary violet accent (`#A78BFA`) |
| `--violet` / `--indigo` / `--cyan` / `--amber` | Aurora palette |
| `--glass` / `--glass-border` | Glassmorphic surface tokens |
| `--text` / `--text-secondary` / `--text-muted` | Three-tier text hierarchy |

Typography pairs **Cormorant Garamond** (display serif) with **Inter** (UI sans-serif), accented by **JetBrains Mono** (code) and **Instrument Serif** (decorative italic).

## Features

- **5-layer animated aurora** background with procedural particle field
- **Cursor-tracking glow** that follows the reader's attention
- **Gradient text** on emphasis elements and brand identity
- **Animated gradient borders** on interactive cards (mask-composite technique)
- **Scroll-triggered animations** via Intersection Observer
- **Animated stat counters** with eased progression
- **Responsive sidebar** with active section tracking
- **Mobile slide-out navigation** drawer
- **Gradient scroll progress indicator**

## Branches

| Branch | Description |
|--------|-------------|
| `main` | Original dark-theme site |
| `redesign/v2-modern-aesthetic` | V2 modern aesthetic redesign (warm orange palette) |
| `aura/v3-weight-of-every-word` | V3 aura redesign (violet-indigo-cyan-amber palette) |

## License

© reallearn
