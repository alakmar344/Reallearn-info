# RealLearn — landing page

A cute, playful, student-friendly landing page for **RealLearn**, an AI learning
platform that turns any question into a structured, quiz-verified, three-part
lesson (**Foundation → Mechanism → Real World**).

Built as a **React + Tailwind** single-page site (Vite). No backend — the quiz,
lesson loader, and 3D book are self-contained client-side interactions with
zero extra dependencies.

## Design language — "study notebook"

- **Cute & student-friendly**: graph-paper grid background, rounded sticker
  cards with chunky borders and hard offset shadows, emoji icon bubbles,
  bouncy pill buttons, marker-pen headline highlights, and Caveat handwritten
  annotations.
- **Typography**: Fraunces (display serif) for headlines, Inter for UI/body,
  JetBrains Mono for labels, Caveat for handwritten notes.
- **A real 3D object**: the hero features a pure-CSS 3D textbook — a full
  cuboid (cover, spine, page block, top/bottom edges) built with
  `transform-style: preserve-3d`. It idles with a gentle float + rotation and
  tilts toward your pointer on mouse/trackpad devices, surrounded by floating
  emoji doodles and XP stickers.
- **Three selectable themes**, persisted to `localStorage`:
  - `paper` — sunny cream, coral/amber accents (a warm notebook)
  - `night` — cozy midnight slate, teal/sky glow
  - `twilight` — dreamy indigo, pink→violet gradient
- **Micro-interactions**: correct answers pulse **and burst confetti**, wrong
  answers shake, gated unlock, flickering streak flame, animated XP bar, and a
  calm breathing glowing loader (no spinner) during the "generate" wait.
- **Marquee ticker** of the 11 subjects and 12 Indian languages RealLearn covers.
- **Mobile friendly**: fluid clamp() type, wrap-friendly chips/CTAs, hamburger
  slide-down menu, a scaled-down 3D book, and ≥44px touch targets.
- **Accessible**: skip link, visible focus states, semantic landmarks,
  `aria-live` quiz feedback, labeled decorative elements, and full
  `prefers-reduced-motion` support (marquee, book, and confetti all settle).

## Structure

1. Hero — headline, CTAs, product stat chips + the interactive 3D book
2. Ticker — scrolling marquee of subjects & languages
3. `01` The Problem — four framing cards (too shallow / too advanced / disconnected / forgettable)
4. `02` The Method — four numbered core capabilities
5. `03` How it works — six emoji-numbered steps
6. `04` Try it — inline quiz demo with glowing loader + confetti
7. `05` Rewards — XP & levels, streaks & daily-goal ring, badges, activity heatmap
8. `06` Feature Tour — eighteen icon + one-line cards drawn from the product

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Open `http://localhost:5173` and use the theme switch in the header to move between
Paper, Night, and Twilight.
