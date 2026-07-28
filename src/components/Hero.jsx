import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'

const STATS = [
  { label: '12 Native Indian Languages' },
  { label: '3 Adaptive Tiers' },
  { label: 'Live Serper News Grounding' },
  { label: 'Gemma 4 Architecture' },
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  const handleQuickAsk = (e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    window.location.href = '#try'
  }

  return (
    <section id="top" className="relative section" style={{ paddingTop: 'clamp(48px, 7vw, 92px)', paddingBottom: 'clamp(40px, 6vw, 80px)' }}>
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal style={{ marginBottom: 16 }}>
              <span className="chip" style={{ background: 'var(--accent)', color: 'var(--accent-ink)', border: 'none' }}>
                RealLearn AI · 3-Part Pedagogy
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                className="font-display font-extrabold tracking-tight"
                style={{
                  fontSize: 'clamp(38px, 7vw, 68px)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Don&rsquo;t just get answers.{' '}
                <span style={{ color: 'var(--accent)', display: 'block' }}>
                  Actually learn.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14} as="p" style={{ fontSize: 'clamp(17px, 2vw, 20px)', color: 'var(--text-secondary)', margin: '20px 0 28px', maxWidth: '38ch', lineHeight: 1.6 }}>
              RealLearn turns any question into a structured, 3-part learning experience —{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Foundation → Mechanism → Real World</strong> — checkpointed by active recall quizzes.
            </Reveal>

            {/* Interactive Quick Ask Box */}
            <Reveal delay={0.18} style={{ marginBottom: 28 }}>
              <form onSubmit={handleQuickAsk} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask anything (e.g., How does photosynthesis work?)..."
                  className="flex-1 px-5 py-3.5 rounded-full border bg-[color:var(--bg-card)] text-[color:var(--text-primary)] focus:outline-none"
                  style={{
                    borderColor: 'var(--border-default)',
                    boxShadow: '0 4px 16px var(--shadow-a)',
                  }}
                />
                <button type="submit" className="btn btn-action" style={{ whiteSpace: 'nowrap' }}>
                  Start Journey
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.24} className="flex flex-wrap items-center gap-3">
              {STATS.map((s) => (
                <span key={s.label} className="chip text-xs">
                  {s.label}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} style={{ position: 'relative' }}>
            <Book3D />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
