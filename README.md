# RealLearn — Info & Landing Page

> **The public landing page for RealLearn AI**, the adaptive learning world in the [esamz.me](https://esamz.me) portfolio.
> **Live:** [reallearn-info.vercel.app](https://reallearn-info.vercel.app)

---

## What this repository is — and isn't

**This repo contains the marketing/informational landing page only** (React + Vite: hero, feature tour, demo preview, FAQ, comparison sections — 17 components, 98 commits of design iteration).

The **full RealLearn learning platform** — the multi-provider inference stack (Groq LPUs hedged with Mistral/NVIDIA NIM/Cloudflare Workers AI, mastery quiz gating, 12 Indian languages, live news grounding) described below — **runs as a separate codebase that is currently private**. This README documents the *product* so visitors understand what the landing page points to; it is not a claim that all of it lives in this repo.

---

## The RealLearn product (for context)

RealLearn turns any query into a structured, 3-part interactive journey — **Foundation → Mechanism → Real World** — grounded in live news and checkpointed by active-recall quizzes.

- **Two modes**: Explain (3-part deep dive) and Fast (single-part mental model)
- **Mastery quiz gating**: 100% pass required; missed questions re-queue instead of restarting
- **Live news grounding** via Serper with primary citations
- **12 Indian languages**, generated natively
- **On-device personalization** — zero private server storage
- **Gamification**: achievements, streaks, XP tracks, daily goal rings

## The landing page (what's in this repo)

- **17 React components**: `Hero`, `Demo`, `FeatureTour`, `HowItWorks`, `Method`, `ComparisonFAQ`, `Book3D`, `StickyScene3D`, `Ticker`, `Reveal` scroll animations…
- **Design system — "Olive Frenzy Minimal"**: ink-room dark mode (`#121510` canvas, `#A4C639` accent) + paper-room light mode; Space Grotesk / Inter / JetBrains Mono; inline-SVG stroke icons (zero emoji dependencies)
- **SEO + share assets**: sitemap, robots, OG image, `llms.txt` for AI crawlers, PWA manifest

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
```

Deployed on Vercel.

---

**Built by [Al-Aqmar Tinwala](https://esamz.me)** · one of the 11 live worlds.
