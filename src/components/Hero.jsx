import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const SUGGESTIONS = [
  'How does photosynthesis work?',
  'Why do airplanes fly?',
  'What causes inflation in an economy?',
  'How does GPS find your location?',
]

const MINI_FEATURES = [
  { icon: 'zap', title: 'Active Recall', desc: 'Quiz-gated mastery' },
  { icon: 'globe', title: '63 Languages', desc: 'Native, never translated' },
  { icon: 'newspaper', title: 'Live Grounding', desc: 'Real-world news in every lesson' },
]

const BOTTOM_ITEMS = [
  { icon: 'book-open', label: '3-Stage Lessons' },
  { icon: 'lock', label: 'Quiz-Gated Mastery' },
  { icon: 'globe', label: '63 Languages' },
  { icon: 'trophy', label: 'XP & 56 Badges' },
]

/** Line-art open book + volt burst, drawn to echo the reference illustration. */
function HeroIllustration() {
  return (
    <div className="relative w-full" role="img" aria-label="Illustration of an open RealLearn lesson book with a volt highlight burst">
      <svg viewBox="0 0 560 480" className="w-full h-auto" fill="none" aria-hidden="true">
        {/* Volt starburst */}
        <path
          d="M285 40 L305 130 L370 70 L345 160 L445 140 L375 205 L470 235 L380 260 L420 350 L340 300 L325 400 L290 305 L235 380 L230 285 L130 300 L200 240 L115 200 L215 185 L190 95 L260 150 Z"
          fill="var(--lime)"
          stroke="var(--line)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Desk shadow */}
        <ellipse cx="300" cy="430" rx="190" ry="18" fill="var(--ink)" opacity="0.08" />
        {/* Open book */}
        <g stroke="var(--line)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          {/* back cover */}
          <path d="M110 300 L280 250 L470 300 L300 350 Z" fill="var(--bg-card)" />
          {/* pages */}
          <path d="M110 300 L280 250 L280 330 L110 380 Z" fill="#fff" />
          <path d="M470 300 L300 250 L300 330 L470 380 Z" fill="#fff" />
          {/* center spine */}
          <line x1="290" y1="250" x2="290" y2="330" />
          {/* text lines left page */}
          <g strokeWidth="2.5" opacity="0.9">
            <line x1="135" y1="305" x2="250" y2="272" />
            <line x1="135" y1="320" x2="250" y2="287" />
            <line x1="135" y1="335" x2="230" y2="308" />
            <line x1="135" y1="350" x2="210" y2="328" />
          </g>
          {/* quiz card right page */}
          <rect x="315" y="285" width="120" height="66" rx="8" fill="var(--lime)" />
          <line x1="327" y1="300" x2="423" y2="300" strokeWidth="2.5" />
          <line x1="327" y1="312" x2="405" y2="312" strokeWidth="2.5" />
          <circle cx="328" cy="335" r="8" fill="#131315" stroke="none" />
          <path d="M324 335 l3 3 5-6" stroke="#c5f82a" strokeWidth="2.5" />
          <line x1="342" y1="335" x2="415" y2="335" strokeWidth="2.5" />
          {/* bookmark */}
          <path d="M420 262 L420 305 L408 296 L396 305 L396 262" fill="#131315" stroke="none" />
        </g>
        {/* Floating quiz chip */}
        <g>
          <rect x="80" y="120" width="150" height="52" rx="10" fill="var(--bg-card)" stroke="var(--line)" strokeWidth="2.5" />
          <rect x="92" y="132" width="28" height="28" rx="7" fill="#131315" />
          <path d="M99 146 l4 4 7-8" stroke="#c5f82a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="128" y1="142" x2="210" y2="142" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" />
          <line x1="128" y1="154" x2="190" y2="154" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
        </g>
        {/* Floating language chip */}
        <g>
          <rect x="370" y="110" width="150" height="52" rx="10" fill="#131315" stroke="var(--line)" strokeWidth="2.5" />
          <circle cx="394" cy="136" r="12" stroke="#c5f82a" strokeWidth="2.5" />
          <line x1="414" y1="128" x2="498" y2="128" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <line x1="414" y1="141" x2="476" y2="141" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
        {/* Unlock tag */}
        <g>
          <rect x="400" y="360" width="130" height="44" rx="10" fill="var(--lime)" stroke="var(--line)" strokeWidth="2.5" />
          <circle cx="422" cy="382" r="9" fill="#131315" stroke="none" />
          <path d="M418 382 l3 3 5-6" stroke="#c5f82a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="438" y1="376" x2="508" y2="376" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" />
          <line x1="438" y1="388" x2="492" y2="388" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [mode, setMode] = useState('explain')
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

  return (
    <section id="top" className="relative section" aria-labelledby="hero-heading">
      <div className="container relative" style={{ paddingTop: 'clamp(28px, 4vw, 56px)', paddingBottom: 'clamp(28px, 4vw, 48px)' }}>
        {/* Technical decorations */}
        <span className="deco-plus" aria-hidden="true" style={{ top: 8, left: '42%' }}>+</span>
        <span className="deco-plus" aria-hidden="true" style={{ top: 90, left: '48%' }}>+</span>
        <span className="deco-plus hidden md:block" aria-hidden="true" style={{ bottom: 120, left: '46%' }}>+</span>
        <span className="deco-dots" aria-hidden="true" style={{ width: 90, height: 70, top: 120, left: '38%' }} />
        <span className="deco-dots hidden lg:block" aria-hidden="true" style={{ width: 70, height: 90, top: 60, right: 0 }} />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          {/* ---- Left: copy + ask box ---- */}
          <div className="min-w-0 relative">
            <Reveal style={{ marginBottom: 22 }}>
              <span className="corner-ticks inline-block" style={{ padding: 6 }}>
                <span className="sticker tag-rotate">
                  <span aria-hidden="true" style={{ fontSize: 13 }}>✳</span>
                  AI Learning Platform
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="hero-heading"
                className="font-display"
                style={{ fontSize: 'clamp(44px, 6.4vw, 88px)', color: 'var(--text-primary)', lineHeight: 0.94 }}
              >
                Stop searching.
                <span className="block">Start truly</span>
                <span className="headline-accent">understanding.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} as="p" style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', color: 'var(--text-secondary)', margin: '20px 0 24px', maxWidth: '52ch', lineHeight: 1.6 }}>
              RealLearn turns any confusing question into a structured 3-stage interactive journey —{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                Foundation → Mechanism → Real World
              </strong>{' '}
              — with fun mini-quizzes, 63 languages, and live news. Free and ad-free.
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 18 }}>
                <form onSubmit={handleQuickAsk} className="flex flex-wrap items-center gap-2.5" style={{ flex: '1 1 auto', minWidth: 0 }}>
                  <button type="submit" className="btn btn-primary" style={{ minHeight: 50 }}>
                    Start learning <span aria-hidden="true">↗</span>
                  </button>
                  <a href="#try" className="btn btn-ghost" style={{ minHeight: 50 }}>
                    Try mini lesson <span aria-hidden="true">↗</span>
                  </a>
                </form>
              </div>

              {/* Quick ask — Explain vs Fast, kept from original */}
              <div
                className="max-w-2xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--line)',
                  borderRadius: 12,
                  boxShadow: focused ? '6px 6px 0 var(--hard)' : '4px 4px 0 var(--hard)',
                  transition: 'box-shadow 0.15s ease',
                  padding: 10,
                }}
              >
                <div className="flex items-center gap-1.5 p-1 mb-2" style={{ background: 'var(--bg-2)', borderRadius: 9 }}>
                  <button
                    type="button"
                    onClick={() => setMode('explain')}
                    aria-pressed={mode === 'explain'}
                    className="flex-1 py-2 px-3 text-xs font-bold transition-all cursor-pointer"
                    style={{
                      borderRadius: 7,
                      border: 'none',
                      background: mode === 'explain' ? 'var(--lime)' : 'transparent',
                      color: mode === 'explain' ? '#131315' : 'var(--text-secondary)',
                    }}
                  >
                    ✦ Explain Mode (3-Step Mastery)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('fast')}
                    aria-pressed={mode === 'fast'}
                    className="flex-1 py-2 px-3 text-xs font-bold transition-all cursor-pointer"
                    style={{
                      borderRadius: 7,
                      border: 'none',
                      background: mode === 'fast' ? 'var(--lime)' : 'transparent',
                      color: mode === 'fast' ? '#131315' : 'var(--text-secondary)',
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
                  role="search"
                  aria-label="Ask RealLearn anything"
                >
                  <Icon name="search" size={17} style={{ marginLeft: 10, flex: 'none', color: 'var(--text-tertiary)' }} />
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask anything (e.g. How does photosynthesis work?)..."
                    aria-label="Ask any concept"
                    className="flex-1 min-w-0 bg-transparent px-2 py-2.5 text-sm font-medium focus:outline-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                  <button type="submit" className="btn btn-action flex-none" style={{ minHeight: 42, padding: '0 18px', fontSize: 12 }}>
                    Ask →
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3 max-w-2xl">
                <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
                  Try asking:
                </span>
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => setPrompt(s)} className="suggestion-pill">
                    {s}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Mini feature strip — mirrors reference bottom card */}
            <Reveal delay={0.22} style={{ marginTop: 22 }}>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl"
                style={{ background: 'var(--bg-card)', border: '1.5px solid var(--line)', borderRadius: 12, boxShadow: '4px 4px 0 var(--hard)', overflow: 'hidden' }}
              >
                {MINI_FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    className="flex items-center gap-3 px-4 py-3.5"
                    style={{ borderLeft: i > 0 ? '1.5px solid var(--line)' : 'none' }}
                  >
                    <span
                      aria-hidden="true"
                      className="grid place-items-center flex-none"
                      style={{ width: 34, height: 34, borderRadius: 8, background: '#131315', color: 'var(--lime)' }}
                    >
                      <Icon name={f.icon} size={16} />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-display text-[13.5px] font-extrabold" style={{ color: 'var(--text-primary)' }}>
                        {f.title}
                      </span>
                      <span className="block text-[11.5px]" style={{ color: 'var(--text-secondary)' }}>
                        {f.desc}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---- Right: illustration ---- */}
          <Reveal delay={0.1} className="relative">
            <span className="deco-plus hidden md:block" aria-hidden="true" style={{ top: -6, right: '12%' }}>+</span>
            <span className="deco-plus" aria-hidden="true" style={{ bottom: '38%', left: -10 }}>+</span>
            <div className="floaty">
              <HeroIllustration />
            </div>
            <span className="font-mono font-bold hidden md:block" aria-hidden="true" style={{ position: 'absolute', bottom: 6, right: 10, letterSpacing: 4, opacity: 0.5 }}>•••</span>
          </Reveal>
        </div>

        {/* Bottom strip — mirrors reference "BUILT FOR EFFICIENT HOMES" bar */}
        <Reveal delay={0.1} style={{ marginTop: 'clamp(24px, 3.5vw, 40px)' }}>
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4"
            style={{ background: 'var(--bg-card)', border: '1.5px solid var(--line)', borderRadius: 12, boxShadow: '4px 4px 0 var(--hard)' }}
          >
            <span className="font-display text-[12px] font-extrabold uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
              Built for curious minds
            </span>
            <span aria-hidden="true" style={{ width: 1, alignSelf: 'stretch', background: 'var(--line)', opacity: 0.9 }} className="hidden md:block" />
            {BOTTOM_ITEMS.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                <Icon name={b.icon} size={16} />
                {b.label}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
              <Icon name="sparkles" size={16} />
              And many more
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
