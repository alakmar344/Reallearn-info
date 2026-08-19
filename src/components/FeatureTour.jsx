import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const GROUPS = [
  {
    id: 'engine',
    label: 'AI & Inference',
    items: [
      { icon: 'zap', title: 'Groq LPU acceleration', desc: 'Sub-second TTFT streaming with Qwen 3.6 27B and GPT-OSS 120B.' },
      { icon: 'layers', title: 'Multi-provider failover', desc: 'Hedged racing with Mistral AI JSON mode, NVIDIA NIM & Cloudflare.' },
      { icon: 'newspaper', title: 'Live news grounding', desc: 'Real-time web news and research woven into Part 3 via Serper API.' },
      { icon: 'refresh', title: 'Two-tier caching', desc: 'Instant cache peek with memory LRU and persistent MongoDB cache.' },
    ],
  },
  {
    id: 'learn',
    label: 'Pedagogy',
    items: [
      { icon: 'book-open', title: 'Three-part spine', desc: 'Foundation, Mechanism, Real World — structured every single time.' },
      { icon: 'lock', title: 'Banked quiz gating', desc: '100% score to advance; incorrect tries re-queue only missed questions.' },
      { icon: 'globe', title: '12 Indian languages', desc: 'Direct native LLM generation preserving linguistic nuance.' },
      { icon: 'graduation-cap', title: '3 adaptive tiers', desc: 'Calibrated complexity across Class 6–8, Class 9–10, and College.' },
    ],
  },
  {
    id: 'personal',
    label: 'Personalization & Audio',
    items: [
      { icon: 'target', title: 'On-device personalization', desc: 'Learner goals and quiz evidence adapt lessons with zero server storage.' },
      { icon: 'mic', title: 'Voice input support', desc: 'Speak complex questions natively with browser speech recognition.' },
      { icon: 'volume', title: 'Natural audio TTS', desc: 'Listen to every lesson part with natural voice synthesis playback.' },
      { icon: 'link', title: 'Verifiable citations', desc: 'Every factual claim links out to verifiable primary sources.' },
    ],
  },
  {
    id: 'mastery',
    label: 'Progress & Design',
    items: [
      { icon: 'trophy', title: '56 achievement badges', desc: 'Milestones across speed, mastery, streak consistency, and depth.' },
      { icon: 'archive', title: 'Earnable streak freezes', desc: 'Earn protective freezes every 7 days of hitting goals (max 2 banked).' },
      { icon: 'book', title: 'Offline journey library', desc: 'Automatically archives completed lessons on-device for instant review.' },
      { icon: 'palette', title: 'Olive Frenzy Minimal', desc: 'Tactile design in Paper daylight and Ink dark mode with zero purple.' },
    ],
  },
]

export default function FeatureTour() {
  const [active, setActive] = useState('engine')
  const group = GROUPS.find((g) => g.id === active) || GROUPS[0]

  return (
    <section id="tour" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker">05 · Capabilities</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            16 Capabilities, One Unified System.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Every tool crafted to make learning fast, structured, verifiable, and deeply engaging.
          </p>
        </Reveal>

        {/* Tab Row */}
        <Reveal delay={0.05} className="mb-8">
          <div
            role="tablist"
            aria-label="Capability categories"
            className="flex justify-center gap-2 flex-wrap"
          >
            {GROUPS.map((g) => {
              const isActive = active === g.id
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  id={`tab-${g.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${g.id}`}
                  className="px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--bg-card)',
                    color: isActive ? 'var(--on-accent)' : 'var(--text-secondary)',
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-default)'}`,
                    boxShadow: isActive ? 'var(--shadow-lift)' : 'none',
                  }}
                  onClick={() => setActive(g.id)}
                >
                  {g.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Active Group Grid */}
        <Reveal key={group.id} delay={0.08}>
          <div
            id={`panel-${group.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${group.id}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {group.items.map((f) => (
              <div key={f.title} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span
                    className="grid place-items-center w-10 h-10 rounded-xl mb-4"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    <Icon name={f.icon} size={20} />
                  </span>
                  <h3 className="font-display text-base font-bold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
