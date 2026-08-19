import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'
import Icon from './Icon'

const STATS = [
  { val: 'Groq LPU', label: 'sub-second inference' },
  { val: '3-Part', label: 'pedagogical spine' },
  { val: '12', label: 'Indian languages' },
  { val: '100%', label: 'quiz-verified' },
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [mode, setMode] = useState('explain') // 'explain' | 'fast'
  const [focused, setFocused] = useState(false)

  const handleQuickAsk = (e) => {
    e.preventDefault()
    window.location.href = 'https://reallearn.site'
  }

  return (
    <section
      id="top"
      className="relative section"
      style={{ paddingTop: 'clamp(52px, 8vw, 96px)', paddingBottom: 'clamp(44px, 6vw, 84px)' }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <Reveal style={{ marginBottom: 20 }}>
              <span className="sticker">
                <Icon name="zap" size={12} strokeWidth={2.2} />
                RealLearn AI · 3-Part Structured Pedagogy
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

            <Reveal
              delay={0.12}
              as="p"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                color: 'var(--text-secondary)',
                margin: '20px 0 28px',
                maxWidth: '44ch',
                lineHeight: 1.6,
              }}
            >
              RealLearn transforms any query into a structured 3-part learning journey —{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Foundation → Mechanism → Real World
              </strong>{' '}
              — checkpointed by active recall quizzes and live news grounding.
            </Reveal>

            {/* Quick Ask Box with Mode Switcher */}
            <Reveal delay={0.16} style={{ marginBottom: 28 }}>
              <div
                className="p-2 rounded-3xl border max-w-xl"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: focused ? 'var(--accent)' : 'var(--border-default)',
                  boxShadow: focused ? 'var(--shadow-lift), 0 0 0 3px var(--accent-dim)' : '0 10px 30px var(--shadow-a)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
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
                    ✦ Explain Mode (3-Part Journey)
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

                <form
                  onSubmit={handleQuickAsk}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="flex items-center gap-2"
                >
                  <Icon
                    name="search"
                    size={18}
                    style={{ marginLeft: 12, flex: 'none', color: 'var(--text-tertiary)' }}
                  />
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask any concept (e.g. How does photosynthesis work?)..."
                    aria-label="Ask any concept"
                    className="flex-1 min-w-0 bg-transparent px-2 py-2.5 text-sm font-medium focus:outline-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                  <button
                    type="submit"
                    className="btn btn-action flex-none"
                    style={{ minHeight: 42, padding: '0 20px', fontSize: 13 }}
                  >
                    Start Journey →
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Stat row */}
            <Reveal delay={0.22} className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-7">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      style={{ width: 1, height: 28, background: 'var(--border-default)' }}
                    />
                  )}
                  <div>
                    <div
                      className="font-display font-bold leading-none text-xl sm:text-2xl"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {s.val}
                    </div>
                    <div className="text-xs font-medium mt-1 font-mono uppercase" style={{ color: 'var(--text-tertiary)' }}>
                      {s.label}
                    </div>
                  </div>
                </div>
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
