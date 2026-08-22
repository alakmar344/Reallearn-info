import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'
import Icon from './Icon'

const STATS = [
  { val: '3-Step', label: 'Mastery Journey' },
  { val: '12', label: 'Native Languages' },
  { val: '100%', label: 'Active Retention' },
  { val: '100%', label: 'Free & Ad-Free' },
]

const SUGGESTIONS = [
  'How does photosynthesis work?',
  'Why do airplanes fly?',
  'What causes inflation in an economy?',
  'How does GPS find your location?',
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [mode, setMode] = useState('explain') // 'explain' | 'fast'
  const [focused, setFocused] = useState(false)

  const handleQuickAsk = (e) => {
    e.preventDefault()
    const query = prompt.trim()
    if (query) {
      window.location.href = `https://reallearn.site?q=${encodeURIComponent(query)}&mode=${mode}`
    } else {
      window.location.href = 'https://reallearn.site'
    }
  }

  const handleSuggestion = (s) => {
    setPrompt(s)
  }

  return (
    <section
      id="top"
      className="relative section"
      aria-labelledby="hero-title"
      style={{ paddingTop: 'clamp(52px, 8vw, 96px)', paddingBottom: 'clamp(44px, 6vw, 84px)' }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="min-w-0">
            <Reveal style={{ marginBottom: 20 }}>
              <span className="sticker section-kicker">
                <Icon name="sparkles" size={13} strokeWidth={2.2} />
                AI Learning Coach
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="hero-title"
                className="font-display font-extrabold tracking-tight"
                style={{
                  fontSize: 'clamp(36px, 6.5vw, 62px)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                }}
              >
                Learn with structure, not clutter.{' '}
                <span className="text-gradient block">
                  Understand faster and retain more.
                </span>
              </h1>
            </Reveal>

            <Reveal
              delay={0.12}
              as="p"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                color: 'var(--text-secondary)',
                margin: '18px 0 24px',
                maxWidth: '44ch',
                lineHeight: 1.6,
              }}
            >
              RealLearn turns any confusing question into a guided 3-step lesson with active recall checkpoints, multilingual support, and real-world context.{` `}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Foundation → Mechanism → Real World
              </strong>
              .
            </Reveal>

            <Reveal delay={0.16} style={{ marginBottom: 24 }}>
              <div
                className="max-w-xl rounded-[28px] border p-3 sm:p-3.5"
                style={{
                  background: 'color-mix(in srgb, var(--bg-card) 92%, transparent)',
                  borderColor: focused ? 'var(--accent)' : 'var(--border-default)',
                  boxShadow: focused
                    ? '0 18px 40px var(--shadow-a), 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)'
                    : '0 16px 34px rgba(0, 0, 0, 0.18)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-1">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--text-tertiary)' }}>
                    Try the learning engine
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Ask anything and jump straight into a lesson.
                  </span>
                </div>

                <div className="flex items-center gap-1.5 rounded-2xl bg-[color:var(--bg-3)] p-1.5 mb-3">
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
                    Explain Mode
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
                    Fast Summary
                  </button>
                </div>

                <form
                  onSubmit={handleQuickAsk}
                  onFocus={() => setFocused(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setFocused(false)
                    }
                  }}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <label
                    className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border px-3"
                    style={{
                      minHeight: 52,
                      borderColor: 'color-mix(in srgb, var(--border-default) 90%, transparent)',
                      background: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
                    }}
                  >
                    <Icon
                      name="search"
                      size={18}
                      style={{ flex: 'none', color: 'var(--text-tertiary)' }}
                    />
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Ask anything, from photosynthesis to inflation..."
                      aria-label="Ask any concept"
                      className="flex-1 min-w-0 bg-transparent py-3 text-sm font-medium focus:outline-none"
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn btn-action w-full sm:w-auto flex-none"
                    style={{ minHeight: 52, padding: '0 20px', fontSize: 13 }}
                  >
                    Start Learning →
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3 max-w-xl">
                <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
                  Popular prompts:
                </span>
                {SUGGESTIONS.slice(0, 3).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleSuggestion(s)}
                    className="suggestion-pill"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22} className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4 max-w-3xl">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: 'var(--border-default)',
                    background: 'color-mix(in srgb, var(--bg-card) 82%, transparent)',
                  }}
                >
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
