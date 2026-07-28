import { useState } from 'react'
import Reveal from './Reveal'

const FRAMEWORK_PILLARS = [
  {
    id: 'active-recall',
    num: '01',
    title: 'Active Recall & Quiz Gating',
    tagline: 'Comprehension Verified Before Progression',
    desc: 'Passive reading leads to rapid information decay. RealLearn enforces active recall by gating subsequent parts behind 100% quiz scores.',
    metrics: [
      { label: 'Retention Rate', val: '89%' },
      { label: 'Feedback Loop', val: 'Instant' },
    ],
    features: ['Single-part focus prevents overload', 'Contextual explanation on wrong choices', 'Retry mechanism for true mastery'],
  },
  {
    id: 'multilingual',
    num: '02',
    title: 'Native Multilingual Engine',
    tagline: '12 Indian Languages Generated Natively',
    desc: 'Linguistic nuances are preserved through native LLM prompting in Gemma 4 rather than post-generation machine translation.',
    metrics: [
      { label: 'Languages', val: '12 Native' },
      { label: 'Translation Drift', val: '0%' },
    ],
    features: ['English, Hindi, Gujarati, Tamil, Bengali & more', 'Preserves domain terminology accuracy', 'Seamless script rendering'],
  },
  {
    id: 'adaptive',
    num: '03',
    title: 'Adaptive Cognitive Levels',
    tagline: 'Calibrated from Class 6 to College Level',
    desc: 'Content depth dynamically adjusts to match learner comprehension tiers without losing conceptual rigor.',
    metrics: [
      { label: 'Difficulty Tiers', val: '3 Calibrated' },
      { label: 'Vocabulary Scaling', val: 'Automatic' },
    ],
    features: ['Class 6–8: Intuitive analogies & visual breakdowns', 'Class 9–10: Quantitative formulas & mechanisms', 'College: Advanced literature & industry applications'],
  },
  {
    id: 'grounding',
    num: '04',
    title: 'Live Real-World Grounding',
    tagline: 'Grounded in Today via Serper News API',
    desc: 'Part 3 connects abstract theory directly to real-world current events, academic publications, and live news.',
    metrics: [
      { label: 'News Integration', val: 'Real-time' },
      { label: 'Source Links', val: '100% Verifiable' },
    ],
    features: ['Live web search grounding via Serper API', 'Direct citation of primary sources', 'Timely real-world relevance'],
  },
]

export default function Rewards() {
  const [activePillar, setActivePillar] = useState('active-recall')

  const current = FRAMEWORK_PILLARS.find((p) => p.id === activePillar) || FRAMEWORK_PILLARS[0]

  return (
    <section id="rewards" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip" style={{ background: 'var(--accent)', color: 'var(--accent-ink)', border: 'none' }}>
            05 · Mastery Framework
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Engineered for Deep Learning.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Four scientific pillars powering RealLearn&apos;s active recall and structured comprehension system.
          </p>
        </Reveal>

        {/* Pillar Showcase Card */}
        <Reveal delay={0.05} className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
            {/* Pillar Selector List */}
            <div className="flex flex-col gap-3">
              {FRAMEWORK_PILLARS.map((p) => {
                const isActive = activePillar === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePillar(p.id)}
                    className="p-5 rounded-2xl border text-left transition-all flex items-start gap-4 cursor-pointer"
                    style={{
                      background: isActive ? 'color-mix(in srgb, var(--bg-card) 95%, var(--accent) 5%)' : 'var(--bg-card)',
                      borderColor: isActive ? 'var(--accent)' : 'var(--border-default)',
                      boxShadow: isActive ? '0 8px 24px var(--shadow-a)' : 'none',
                    }}
                  >
                    <span
                      className="font-mono text-xl font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        background: isActive ? 'var(--accent)' : 'var(--bg-3)',
                        color: isActive ? 'var(--accent-ink)' : 'var(--text-secondary)',
                      }}
                    >
                      {p.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {p.title}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {p.tagline}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Pillar Detail Card */}
            <div
              className="glass-card p-8 rounded-3xl flex flex-col justify-between"
              style={{
                border: '1.5px solid var(--border-default)',
                background: 'color-mix(in srgb, var(--bg-card) 90%, transparent)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                    Pillar {current.num} · {current.title}
                  </span>
                  <span className="chip text-xs">{current.tagline}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {current.title}
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {current.desc}
                </p>

                {/* Key Features Bullet List */}
                <div className="flex flex-col gap-2.5 mb-8">
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span className="w-2 h-2 rounded-full bg-[color:var(--accent)] flex-none" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[color:var(--border-default)]">
                {current.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl border border-[color:var(--border-default)]" style={{ background: 'var(--bg-primary)' }}>
                    <div className="font-mono text-2xl font-extrabold" style={{ color: 'var(--accent)' }}>
                      {m.val}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
