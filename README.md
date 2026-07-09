# RealLearn — landing page

An editorial, journal-style landing page for **RealLearn**, an AI learning platform
that turns any question into a structured, quiz-verified, three-part lesson
(**Foundation → Mechanism → Real World**).

Built as a **React + Tailwind** single-page site (Vite). No backend — the quiz and
lesson loader are self-contained client-side interactions.

## Design language

- **Editorial / book-like**: Fraunces (display serif) for headlines, Inter (humanist
  sans) for body, JetBrains Mono for labels and chapter numbers.
- **Three selectable themes**, persisted to `localStorage`:
  - `paper` — warm off-white, warm ink, terracotta/amber accent (printed book)
  - `night` — deep charcoal, teal accent, soft glow on interactive elements
  - `twilight` — deep indigo/navy, violet→indigo gradient, ambient glow
- **Numbered chapter markers** (`01`, `02`, …) as small-caps, wide-tracked eyebrows.
- **Dog-eared / folded cards** with hard offset shadows instead of soft drop shadows.
- **Subtle grain** overlay for warmth; **ambient glow** behind content.
- **Micro-interactions**: correct answers pulse, wrong answers shake, gated unlock,
  and a calm breathing **glowing loader** (no spinner) during the "generate" wait.
- **Accessible**: skip link, visible focus states, semantic landmarks, `aria-live`
  for quiz feedback, and full `prefers-reduced-motion` support.

## Structure

1. Hero — bold problem statement + one-line promise
2. `01` The Problem — four framing cards (too shallow / too advanced / disconnected / forgettable)
3. `02` The Method — four numbered core capabilities
4. `03` How it works — six numbered steps
5. `04` Try it — inline quiz demo with glowing loader
6. `05` Feature Tour — thirteen terse icon + one-line cards

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Open `http://localhost:5173` and use the theme switch in the header to move between
Paper, Night, and Twilight.
