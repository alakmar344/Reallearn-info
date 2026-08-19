# RealLearn Info & Landing Page

Official informational landing page for **RealLearn AI**, the AI-native learning platform that transforms any query into a structured, 3-part interactive learning journey (**Foundation → Mechanism → Real World**) grounded in live news and checkpointed by active recall quizzes.

---

## 🌟 Modern Architecture & Core Features

- **Multi-Provider AI Inference**: Powered by **Groq LPUs** (`qwen/qwen3.6-27b` & `openai/gpt-oss-120b`) for sub-second Time-To-First-Token (TTFT), hedged with **Mistral AI** (streaming JSON mode), **NVIDIA NIM** (70B–150B high-capacity fallback), and **Cloudflare Workers AI** (70B Fast FP8 failover with circuit breakers).
- **Two Learning Modes**:
  - **Explain Mode**: Structured 3-part deep dive (Part 1: Foundation → Part 2: Mechanism → Part 3: Real World).
  - **Fast Mode**: Direct, concise single-part mental model.
- **Banked Mastery Quiz Gating**: 100% pass score required to advance; incorrect tries re-queue only missed questions rather than restarting.
- **Live News Grounding**: Real-time web news and research woven into Part 3 via **Serper API** with verifiable primary citations.
- **12 Native Indian Languages**: Direct native LLM generation in English, Hindi, Gujarati, Tamil, Bengali, Marathi, Telugu, Kannada, Malayalam, Punjabi, Urdu, and Odia.
- **On-Device Personalization**: Goals, notes, and quiz evidence adapt lessons with zero private server storage.
- **Gamification**: 56 achievements, earnable streak freezes (+1 per 7 goal-met days), XP tracks, and daily goal rings.

---

## 🎨 Design System — "Olive Frenzy Minimal"

- **Primary Olive Color Family**:
  - **Ink Room (Dark Mode - Default)**: Deep olive-black canvas (`#121510`), glowing lime-olive accent (`#A4C639`), ivory text (`#F5F3E8`), high-contrast ink on-accent text (`#121510`).
  - **Paper Room (Light Mode)**: Warm cream canvas (`#FAF9F3`), rich olive accent (`#556B2F`), olive-ink text (`#1F2318`), white on-accent text (`#FFFFFF`).
- **Strict Brand Rules**: Strictly **ZERO purple/violet** and **ZERO gold**.
- **Typography**: Space Grotesk 700 bold headings, Inter 400 body, JetBrains Mono for technical labels and micro-stats.
- **Unified Vector Icons**: Inline SVG stroke icons via `Icon.jsx` replace OS emojis.
- **Tactile Key System**: Physical bevels, solid key edges (`--edge-accent`), and `:active` press compression.

---

## 🛠️ Development & Build

```bash
npm install
npm run dev        # Development server (http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build
```
