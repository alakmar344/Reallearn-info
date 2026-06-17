# reallearn-info

The official documentation site for **reallearn** — *Where Every Question Becomes a Journey.*

## About

This repository hosts the single-page documentation site for reallearn, built as a self-contained HTML document with embedded CSS and JavaScript. No frameworks. No build tools. Just one file that carries its own weight.

The current design is the **Lumina v4** system — a light-theme design language fusing neo-brutalism, skeuomorphism, minimalism, and a subtle CSS-only aurora. Bold 2px borders and offset box shadows give structure. Soft inner lighting and cream surfaces give warmth. The aurora breathes gently behind everything — no JavaScript, no heavy animation, no lag.

## Viewing Locally

Open `./index.html` in any modern browser. That's it.

Or serve it:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Design System

The Lumina v4 design system is defined through CSS custom properties. Key tokens:

| Token | Purpose |
|-------|---------|
| `--accent` | Primary violet accent (`#7C5CFC`) |
| `--shadow-brutal` | Neo-brutalist offset shadow (`4px 4px 0px #1A1A1A`) |
| `--shadow-skeuo` | Skeuomorphic inner-light shadow |
| `--border` | Bold 2px solid borders throughout |
| `--bg` / `--bg-cream` / `--bg-white` | Warm light background layers |

Typography pairs **Space Grotesk** (headings, UI) with **DM Sans** (body text), accented by **Space Mono** (code, labels).

### Performance

The v4 design eliminates all lag sources from previous versions:
- **No animated DOM particles** — removed entirely
- **No cursor-tracking glow** — removed entirely
- **No CSS blur filters** — the aurora uses simple radial gradients only
- **No animated gradient borders** — replaced with bold solid borders
- **CSS-only aurora** — single `background` property with animated `background-position`, no separate DOM layers
- **GPU-friendly transitions** — only `transform` and `opacity` are animated on hover

## Features

- Light theme with warm cream and white surfaces
- Neo-brutalist bold borders and offset shadows
- Skeuomorphic cards with inner-light box shadows
- CSS-only aurora background (no JS, no heavy animation)
- Scroll-triggered section fade-ins via Intersection Observer
- Animated stat counters with eased progression
- Responsive sidebar with active section tracking
- Mobile slide-out navigation drawer
- Scroll progress indicator

## Branches

| Branch | Description |
|--------|-------------|
| `main` | Current production site |
| `redesign/v2-modern-aesthetic` | V2 modern aesthetic redesign (warm orange, dark) |
| `aura/v3-weight-of-every-word` | V3 aura redesign (violet dark, heavy effects) |
| `v4/soft-brutalist-aura` | V4 light neo-brutalist + skeuomorphic redesign |

## License

© reallearn
