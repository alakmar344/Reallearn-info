import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const PILLARS = [
  {
    id: 'spine',
    num: '01',
    icon: 'book-open',
    title: 'The 3-Stage Learning Spine',
    tagline: 'From Intuition to Real-World Impact',
    desc: 'Never get lost in a sea of confusing text again. Every topic is structured into three digestible stages: first understanding the simple big picture, then exploring the inner machinery, and finally discovering why it matters in modern life.',
    metrics: [
      { label: 'Structured Stages', val: '3 Parts' },
      { label: 'Retention Rate', val: 'Over 90%' },
    ],
    features: [
      'Part 1 (Foundation): Crystal-clear analogies anyone can grasp without confusion',
      'Part 2 (Mechanism): Step-by-step logic, cause-and-effect, and moving parts',
      'Part 3 (Real World): Direct connection to modern tech, nature, and industry',
    ],
  },
  {
    id: 'active-recall',
    num: '02',
    icon: 'target',
    title: 'Active Recall Checkpoint Quizzes',
    tagline: 'Learn Once, Remember For Life',
    desc: 'Reading passively creates the illusion of learning. RealLearn places fun, 2-question checkpoint quizzes at each stage to ensure you actually absorb the concept before moving forward.',
    metrics: [
      { label: 'Comprehension Gate', val: '100% Pass' },
      { label: 'Time To Retain', val: 'Under 5 Min' },
    ],
    features: [
      'Instant explanations for both correct and incorrect choices',
      'Smart retry: re-test only the questions you missed without restarting',
      'Proven cognitive science retrieval practice that eliminates cramming',
    ],
  },
  {
    id: 'multilingual-adaptive',
    num: '03',
    icon: 'globe',
    title: '63 Global Languages & Adaptive Levels',
    tagline: 'Your Language, Your Grade Level',
    desc: 'Language should never be a barrier to curiosity. Learn complex science, economics, or history comfortably in 63 global languages, calibrated to your exact grade tier or professional needs.',
    metrics: [
      { label: 'Supported Languages', val: '63 Global' },
      { label: 'Difficulty Tiers', val: '3 Levels' },
    ],
    features: [
      'Class 6–8: Intuitive visual analogies & everyday real-world examples',
      'Class 9–10: Deeper mechanisms, equations, and structured relationships',
      'College & Pro: Advanced literature, nuanced edge cases, and industry depth',
    ],
  },
  {
    id: 'live-gamification',
    num: '04',
    icon: 'trophy',
    title: 'Live News Wire & Gamified Progress',
    tagline: 'Stay Inspired & Track Your Growth',
    desc: 'Connect what you learn directly to today’s headlines and tech breakthroughs. Build lasting daily habits with XP points, level progression, 56 unlockable achievements, and streak freeze protections.',
    metrics: [
      { label: 'Achievements', val: '56 Badges' },
      { label: 'Real World Context', val: 'Live Grounded' },
    ],
    features: [
      'Fresh world news and discoveries woven directly into your lessons',
      'Level up from Novice to Grandmaster with daily learning streaks',
      'Audio & Voice mode: listen to lessons on the go like a personalized podcast',
    ],
  },
]

export default function Method() {
  const [active, setActive] = useState('spine')
  const current = PILLARS.find((p) => p.id === active) || PILLARS[0]

  return (
    <section id="method" className="py-20 relative z-10" aria-labelledby="method-heading">
      <div className="container relative">
        <span className="deco-plus" aria-hidden="true" style={{ top: 10, left: '4%' }}>+</span>
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="sticker">02 · The Method</span>
          <h2 id="method-heading" className="font-display mt-5 mb-4" style={{ color: 'var(--text-primary)' }}>
            Four pillars of the RealLearn method.
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--text-secondary)' }}>
            Engineered around cognitive science and active recall so you don’t just memorize — you truly understand.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-6 items-stretch">
            {/* Pillar Selector */}
            <div className="flex flex-col gap-3" role="tablist" aria-label="Method pillars">
              {PILLARS.map((p) => {
                const isActive = active === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(p.id)}
                    className="p-5 text-left transition-all flex items-start gap-4 cursor-pointer"
                    style={{
                      background: isActive ? 'var(--bg-card)' : 'transparent',
                      border: `1.5px solid ${isActive ? 'var(--line)' : 'var(--border-default)'}`,
                      borderRadius: 12,
                      boxShadow: isActive ? '4px 4px 0 var(--hard)' : 'none',
                      transform: isActive ? 'translate(-2px, -2px)' : 'none',
                    }}
                  >
                    <span
                      className="grid place-items-center flex-none"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 9,
                        background: isActive ? '#131315' : 'var(--bg-3)',
                        color: isActive ? 'var(--lime)' : 'var(--text-secondary)',
                        border: '1.5px solid var(--line)',
                      }}
                    >
                      <Icon name={p.icon} size={18} />
                    </span>
                    <span>
                      <span className="block font-display text-[16px] font-extrabold" style={{ color: 'var(--text-primary)' }}>
                        {p.title}
                      </span>
                      <span className="block text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {p.tagline}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Selected Pillar Detail */}
            <div
              className="glass-card p-6 sm:p-9 flex flex-col justify-between"
              role="tabpanel"
              style={{ boxShadow: '6px 6px 0 var(--hard)' }}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-accent-strong)' }}>
                    Pillar {current.num} of 04
                  </span>
                  <span className="chip text-[11px] font-mono">
                    {current.tagline}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-[28px] font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {current.title}
                </h3>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {current.desc}
                </p>

                <div className="flex flex-col gap-2.5 mb-8">
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span
                        className="grid place-items-center flex-none"
                        style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--lime)', border: '1.5px solid var(--line)' }}
                      >
                        <Icon name="check" size={12} strokeWidth={2.6} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6" style={{ borderTop: '1.5px solid var(--line)' }}>
                {current.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1.5px solid var(--line)',
                      borderRadius: 10,
                      boxShadow: '3px 3px 0 var(--hard)',
                    }}
                  >
                    <div className="font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
                      {m.val}
                    </div>
                    <div className="text-[11px] font-mono uppercase mt-1" style={{ letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
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
