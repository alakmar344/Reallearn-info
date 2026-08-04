# RealLearn — landing page

A clean, professional landing page for **RealLearn**, an AI learning platform
that turns any question into a structured, quiz-verified, three-part lesson
(**Foundation → Mechanism → Real World**).

Built as a **React + Tailwind** single-page site (Vite). No backend — the quiz,
lesson loader, and interactive spine are self-contained client-side interactions
with zero extra dependencies.

## Design language — "modern learning, one accent"

- **Single cohesive sans-serif type system**: Space Grotesk for display
  headings, Inter for UI/body copy. No serif/mono identity clash.
- **One primary accent**: an electric green is used consistently for CTAs,
  active states, icons, and badges. No competing neon orange.
- **WCAG AA contrast tokens** for body, secondary, and tertiary text on every
  surface, in both the Paper (light) and Ink (dark) themes.
- **Unified vector icon set**: inline SVG stroke icons replace OS emojis
  everywhere (no system-emoji variance across devices).
- **Three header tiers** — page, section, and card — plus a clear hierarchy
  between section labels and step numbering.
- **Tabbed overviews** keep long content compact: "The Method" is a four-pillar
  tabbed deep-dive and "Capabilities" groups tools into Learn / Engage / Track
  tabs, so mobile users never scroll through dozens of stacked cards.
- **Mobile-friendly**: integrated ask-bar, horizontal scroll-snap rows for the
  problem and step cards, a blurred full-screen mobile menu, and ≥44px targets.
- **Two themes**, persisted to `localStorage`: `paper` (light daylight) and
  `ink` (dark cyber night).
- **Accessible**: skip link, visible focus states, semantic landmarks,
  `aria-live`-friendly feedback, and full `prefers-reduced-motion` support.

## Structure

1. Hero — headline, integrated "ask anything" bar, and the interactive 3-part spine demo
2. Ticker — scrolling marquee of subjects & languages
3. `01` The Problem — four framing cards (too shallow / too advanced / disconnected / forgettable)
4. `02` The Method — four-pillar tabbed deep-dive (active recall, languages, adaptive levels, real-world grounding)
5. `03` How it works — six steps from question to mastery
6. `04` Try it — inline quiz demo with loading state + feedback
7. `05` Capabilities — tabbed tool overview (Learn / Engage / Track)

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Open `http://localhost:5173` and use the theme switch in the header to move between
Paper and Ink.
