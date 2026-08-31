import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'
import Icon from './Icon'

const STATS = [
  { val: '3-Step', label: 'Mastery Journey', color: 'var(--c-magenta)' },
  { val: '12', label: 'Native Languages', color: 'var(--c-cyan)' },
  { val: '100%', label: 'Active Retention', color: 'var(--c-yellow)' },
  { val: '100%', label: 'Free & Ad-Free', color: 'var(--c-orange)' },
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
      style={{ paddingTop: 'clamp(52px, 8vw, 96px)', paddingBottom: 'clamp(44px, 6vw, 84px)' }}
    >
      <span className="hero-halo" aria-hidden="true" />
      {/* Colossal outline watermark — bleeds behind the fold */}
      <span
        className="blast-watermark"
        aria-hidden="true"
        style={{ top: '2%', right: '-2%', fontSize: 'clamp(120px, 20vw, 340px)' }}
      >
        LEARN
      </span>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 xl:gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <Reveal style={{ marginBottom: 20 }} className="flex flex-wrap items-center gap-2.5">
              <span className="sticker tag-rotate">
                <Icon name="sparkles" size={13} strokeWidth={2.2} />
                AI Learning Coach · No More Boring Answers
              </span>
              <span className="sticker sticker--cyan tag-rotate-r">
                <Icon name="zap" size={13} strokeWidth={2.2} />
                100% Free
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                className="font-display"
                style={{
                  fontSize: 'clamp(36px, 5.2vw, 74px)',
                  color: 'var(--text-primary)',
                  lineHeight: 0.94,
                  letterSpacing: '-0.03em',
                }}
              >
                Stop searching for answers.{' '}
                <span className="text-gradient glitch block" style={{ marginTop: '0.08em' }}>
                  Start truly <span style={{ whiteSpace: 'nowrap' }}>understanding.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal
              delay={0.12}
              as="p"
              style={{
                fontSize: 'clamp(17px, 1.9vw, 21px)',
                color: 'var(--text-secondary)',
                margin: '24px 0 32px',
                maxWidth: '58ch',
                lineHeight: 1.6,
              }}
            >
              RealLearn transforms any confusing question into a structured 3-step interactive journey —{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Foundation → Mechanism → Real World
              </strong>{' '}
              — locked behind fun mini-quizzes so knowledge actually sticks.
            </Reveal>

            {/* Quick Ask Box with Mode Switcher & Suggestions */}
            <Reveal delay={0.16} style={{ marginBottom: 24 }}>
              <div
                className="p-2.5 max-w-2xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '2px solid var(--line)',
                  boxShadow: focused ? '8px 8px 0 var(--hard-accent)' : '6px 6px 0 var(--hard)',
                  transition: 'box-shadow 0.15s ease',
                }}
              >
                {/* Mode Selector */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl mb-2 bg-[color:var(--bg-3)]">
                  <button
                    type="button"
                    onClick={() => setMode('explain')}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      mode === 'explain' ? '' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: mode === 'explain' ? 'var(--accent)' : 'transparent',
                      color: mode === 'explain' ? 'var(--on-accent)' : 'var(--text-primary)',
                    }}
                  >
                    ✦ Explain Mode (3-Step Mastery)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('fast')}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      mode === 'fast' ? '' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: mode === 'fast' ? 'var(--accent)' : 'transparent',
                      color: mode === 'fast' ? 'var(--on-accent)' : 'var(--text-primary)',
                    }}
                  >
                    ⚡ Fast Mode (Quick Summary)
                  </button>
                </div>

                <form
                  onSubmit={handleQuickAsk}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="flex flex-wrap items-center gap-2"
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
                    placeholder="Ask anything (e.g. How does photosynthesis work?)..."
                    aria-label="Ask any concept"
                    className="flex-1 min-w-0 bg-transparent px-2 py-2.5 text-sm font-medium focus:outline-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                  <button
                    type="submit"
                    className="btn btn-action flex-none w-full sm:w-auto"
                    style={{ minHeight: 42, padding: '0 20px', fontSize: 13 }}
                  >
                    Start Learning →
                  </button>
                </form>
              </div>

              {/* Suggestion Chips */}
              <div className="flex flex-wrap items-center gap-2 mt-4 max-w-2xl">
                <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
                  Try asking:
                </span>
                {SUGGESTIONS.map((s) => (
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

            {/* Stat row */}
            <Reveal delay={0.22} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="px-4 py-4"
                  style={{
                    background: 'var(--bg-card)',
                    border: '3px solid var(--line)',
                    boxShadow: `5px 5px 0 ${s.color}`,
                    transform: `rotate(${i % 2 ? 1 : -1}deg)`,
                  }}
                >
                  <div
                    className="font-display font-black leading-none text-2xl sm:text-3xl uppercase"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[11px] font-medium mt-1.5 font-mono uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                    {s.label}
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
