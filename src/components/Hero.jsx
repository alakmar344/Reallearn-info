import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'
import Icon from './Icon'

const STATS = [
  { val: '3-part', label: 'lesson spine' },
  { val: '12', label: 'Indian languages' },
  { val: '100%', label: 'quiz-verified' },
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [focused, setFocused] = useState(false)

  const handleQuickAsk = (e) => {
    e.preventDefault()
    window.location.href = 'https://reallearn.site'
  }

  return (
    <section
      id="top"
      className="relative section"
      style={{ paddingTop: 'clamp(52px, 8vw, 104px)', paddingBottom: 'clamp(48px, 7vw, 96px)' }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-w-0">
            <Reveal style={{ marginBottom: 22 }}>
              <span className="sticker">
                <Icon name="zap" size={12} strokeWidth={2.2} />
                Three-part lessons that stick
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="headline-xl" style={{ color: 'var(--text-primary)' }}>
                Don&rsquo;t just get answers.
                <span className="text-gradient" style={{ display: 'block' }}>
                  Actually learn.
                </span>
              </h1>
            </Reveal>

            <Reveal
              delay={0.14}
              as="p"
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'var(--text-secondary)',
                margin: '24px 0 32px',
                maxWidth: '42ch',
                lineHeight: 1.62,
              }}
            >
              RealLearn turns any question into a structured, three-part learning experience —{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Foundation → Mechanism → Real World
              </strong>{' '}
              — verified by quick recall quizzes.
            </Reveal>

            {/* Integrated Ask Bar */}
            <Reveal delay={0.18} style={{ marginBottom: 34 }}>
              <form
                onSubmit={handleQuickAsk}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="flex items-center gap-2 p-2 rounded-full max-w-xl"
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${focused ? 'var(--border-hover)' : 'var(--border-default)'}`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: focused
                    ? '0 0 0 4px var(--accent-soft), var(--shadow-lift)'
                    : '0 10px 30px -14px var(--shadow-a)',
                  transition: 'border-color 0.3s var(--ease-reveal), box-shadow 0.3s var(--ease-reveal)',
                }}
              >
                <Icon
                  name="search"
                  size={18}
                  style={{ marginLeft: 16, flex: 'none', color: 'var(--text-tertiary)' }}
                />
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask anything — e.g., How does photosynthesis work?"
                  aria-label="Ask anything"
                  className="flex-1 min-w-0 bg-transparent px-2 py-3 text-[15px] focus:outline-none"
                  style={{ color: 'var(--text-primary)' }}
                />
                <button
                  type="submit"
                  className="btn flex-none"
                  style={{ minHeight: 44, padding: '0 22px', fontSize: 14 }}
                >
                  Start journey
                  <Icon name="send" size={14} strokeWidth={2.2} />
                </button>
              </form>
            </Reveal>

            {/* Stat row */}
            <Reveal delay={0.24} className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      style={{ width: 1, height: 30, background: 'var(--border-default)' }}
                    />
                  )}
                  <div>
                    <div
                      className="font-display font-bold leading-none"
                      style={{ fontSize: 24, color: 'var(--text-primary)' }}
                    >
                      {s.val}
                    </div>
                    <div className="text-xs mt-1.5" style={{ color: 'var(--text-tertiary)' }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            style={{ position: 'relative', animation: 'float-soft 7s ease-in-out infinite' }}
            className="min-w-0"
          >
            {/* Glow behind card */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-12%',
                background: 'var(--glow-accent)',
                filter: 'blur(30px)',
                zIndex: -1,
              }}
            />
            <Book3D />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
