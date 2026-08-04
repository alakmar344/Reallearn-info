import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const PILLARS = [
  {
    id: 'active-recall',
    num: '01',
    icon: 'target',
    title: 'Active recall & quiz gating',
    tagline: 'Comprehension verified before you move on',
    desc: 'Passive reading leads to rapid forgetting. RealLearn checks your understanding with a short quiz before each part unlocks, so the idea genuinely sticks.',
    metrics: [
      { label: 'Retention', val: '89%' },
      { label: 'Feedback', val: 'Instant' },
    ],
    features: ['Focus on one part at a time', 'Explanations on every wrong choice', 'Retry until it truly sticks'],
  },
  {
    id: 'multilingual',
    num: '02',
    icon: 'globe',
    title: 'Learn in your own language',
    tagline: 'Twelve native languages',
    desc: 'Lessons are written directly in your language — naturally, not machine-translated — so meaning and nuance stay precise.',
    metrics: [
      { label: 'Languages', val: '12 native' },
      { label: 'Translation drift', val: 'None' },
    ],
    features: ['English, Hindi, Tamil, Bengali, Gujarati & more', 'Accurate technical vocabulary', 'Full script support'],
  },
  {
    id: 'adaptive',
    num: '03',
    icon: 'sliders',
    title: 'Adaptive to your level',
    tagline: 'From middle school to college',
    desc: 'Content adjusts to where you are — from simple analogies to full equations — without losing the real idea underneath.',
    metrics: [
      { label: 'Difficulty tiers', val: '3' },
      { label: 'Vocabulary', val: 'Auto-scaled' },
    ],
    features: ['Middle school: intuitive analogies', 'High school: formulas & mechanisms', 'College: deeper analysis'],
  },
  {
    id: 'grounding',
    num: '04',
    icon: 'newspaper',
    title: 'Grounded in the real world',
    tagline: 'Theory meets today',
    desc: 'The final part connects every lesson to current events and published sources, so ideas live in the real world — not just a page.',
    metrics: [
      { label: 'Context', val: 'Live' },
      { label: 'Sources', val: 'Verifiable' },
    ],
    features: ['Current events woven into each lesson', 'Links to primary sources', 'Always timely and relevant'],
  },
]

export default function Method() {
  const [active, setActive] = useState('active-recall')
  const current = PILLARS.find((p) => p.id === active) || PILLARS[0]

  return (
    <section id="method" className="relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="sticker">02 · The Method</span>
          <h2 className="headline-lg mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Four pillars of the RealLearn method.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Every lesson is built the same way, from cognitive science — so understanding is guaranteed, not assumed.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
            {/* Pillar Selector */}
            <div className="flex flex-col gap-3">
              {PILLARS.map((p) => {
                const isActive = active === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    aria-pressed={isActive}
                    className="p-5 rounded-2xl text-left transition-all flex items-start gap-4 cursor-pointer"
                    style={{
                      background: isActive ? 'var(--bg-card)' : 'transparent',
                      border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-default)'}`,
                      boxShadow: isActive ? 'var(--shadow-lift)' : 'none',
                    }}
                  >
                    <span
                      className="grid place-items-center w-10 h-10 rounded-xl flex-none"
                      style={{
                        background: isActive ? 'var(--accent)' : 'var(--bg-3)',
                        color: isActive ? 'var(--accent-ink)' : 'var(--text-secondary)',
                      }}
                    >
                      <Icon name={p.icon} size={19} />
                    </span>
                    <div>
                      <h3 className="headline-md" style={{ color: 'var(--text-primary)' }}>
                        {p.title}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {p.tagline}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Pillar Detail */}
            <div
              className="glass-card p-7 sm:p-8 rounded-3xl flex flex-col justify-between"
              style={{ boxShadow: 'var(--shadow-lift)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="sticker">
                    Pillar {current.num} of 4
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {current.tagline}
                  </span>
                </div>

                <h3 className="headline-lg mb-4" style={{ color: 'var(--text-primary)' }}>
                  {current.title}
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {current.desc}
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span
                        className="grid place-items-center w-6 h-6 rounded-full flex-none"
                        style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)', color: 'var(--accent)' }}
                      >
                        <Icon name="check" size={13} strokeWidth={2.5} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
                {current.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 rounded-xl border"
                    style={{ borderColor: 'var(--border-default)', background: 'var(--bg-primary)' }}
                  >
                    <div className="font-display text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                      {m.val}
                    </div>
                    <div className="text-xs font-medium mt-1" style={{ color: 'var(--text-secondary)' }}>
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
