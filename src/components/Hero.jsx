import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'

const STATS = [
  { label: '⚡ Groq LPU Sub-Second Inference' },
  { label: '📐 3-Part Structured Pedagogy' },
  { label: '📰 Live Serper News Grounding' },
  { label: '🌐 12 Native Indian Languages' },
  { label: '🔒 Banked Mastery Quiz Gating' },
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [mode, setMode] = useState('explain') // 'explain' | 'fast'

  const handleQuickAsk = (e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    window.location.href = '#try'
  }

  return (
    <section id="top" className="relative section" style={{ paddingTop: 'clamp(48px, 6vw, 84px)', paddingBottom: 'clamp(40px, 5vw, 76px)' }}>
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal style={{ marginBottom: 18 }}>
              <span className="sticker">
                RealLearn AI · Production-Scale Pedagogy
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                className="font-display font-extrabold tracking-tight"
                style={{
                  fontSize: 'clamp(36px, 6.5vw, 64px)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                }}
              >
                Don&rsquo;t just get answers.{' '}
                <span className="text-gradient block">
                  Actually learn.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} as="p" style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'var(--text-secondary)', margin: '20px 0 28px', maxWidth: '44ch', lineHeight: 1.6 }}>
              RealLearn transforms any query into a structured 3-part learning journey —{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Foundation → Mechanism → Real World</strong> — checkpointed by active recall quizzes and live news.
            </Reveal>

            {/* Interactive Quick Ask Box with Mode Glider */}
            <Reveal delay={0.16} style={{ marginBottom: 28 }}>
              <form onSubmit={handleQuickAsk} className="p-2 rounded-3xl border bg-[color:var(--bg-card)] max-w-xl" style={{ borderColor: 'var(--border-default)', boxShadow: '0 12px 36px var(--shadow-a)' }}>
                {/* Mode Selector */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl mb-2 bg-[color:var(--bg-3)]">
                  <button
                    type="button"
                    onClick={() => setMode('explain')}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      mode === 'explain' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: mode === 'explain' ? 'var(--accent)' : 'transparent',
                      color: mode === 'explain' ? 'var(--on-accent)' : 'var(--text-primary)',
                    }}
                  >
                    ✦ Explain Mode (3-Step Journey)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('fast')}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      mode === 'fast' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: mode === 'fast' ? 'var(--accent)' : 'transparent',
                      color: mode === 'fast' ? 'var(--on-accent)' : 'var(--text-primary)',
                    }}
                  >
                    ⚡ Fast Mode (1-Part Summary)
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask any concept (e.g. How does photosynthesis work?)..."
                    className="flex-1 px-4 py-3 rounded-2xl bg-transparent text-[color:var(--text-primary)] placeholder-[color:var(--text-tertiary)] focus:outline-none text-sm font-medium"
                  />
                  <button type="submit" className="btn btn-action whitespace-nowrap">
                    Start Learning →
                  </button>
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.22} className="flex flex-wrap items-center gap-2.5">
              {STATS.map((s) => (
                <span key={s.label} className="chip text-xs font-medium">
                  {s.label}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} style={{ position: 'relative' }}>
            <Book3D />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
