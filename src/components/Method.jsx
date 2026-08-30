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
    <section id="method" className="py-24 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-5xl mx-auto mb-16">
          <span className="sticker">02 · The Method</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Four pillars of the RealLearn method.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Engineered around cognitive science and active recall so you don’t just memorize — you truly understand.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-8 xl:gap-12 items-stretch">
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
                    className="p-5 text-left transition-all flex items-start gap-4 cursor-pointer"
                    style={{
                      background: isActive ? 'var(--bg-card)' : 'transparent',
                      border: `2px solid ${isActive ? 'var(--line)' : 'var(--border-default)'}`,
                      boxShadow: isActive ? '6px 6px 0 var(--hard-accent)' : 'none',
                      transform: isActive ? 'translate(-2px, -2px)' : 'none',
                    }}
                  >
                    <span
                      className="grid place-items-center w-10 h-10 flex-none font-mono font-bold"
                      style={{
                        background: isActive ? 'var(--accent)' : 'var(--bg-3)',
                        color: isActive ? 'var(--on-accent)' : 'var(--text-secondary)',
                        border: `2px solid ${isActive ? 'var(--line)' : 'var(--border-default)'}`,
                      }}
                    >
                      <Icon name={p.icon} size={18} />
                    </span>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {p.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {p.tagline}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Pillar Detail */}
            <div
              className="glass-card p-6 sm:p-10 flex flex-col justify-between"
              style={{ border: '3px solid var(--line)', boxShadow: '10px 10px 0 var(--hard)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                    Pillar {current.num} of 4
                  </span>
                  <span className="chip text-[11px] font-mono">
                    {current.tagline}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {current.desc}
                </p>

                <div className="flex flex-col gap-2.5 mb-8">
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span
                        className="grid place-items-center w-5 h-5 rounded-full flex-none"
                        style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                      >
                        <Icon name="check" size={12} strokeWidth={2.5} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t-2" style={{ borderColor: 'var(--line)' }}>
                {current.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '2px solid var(--line)',
                      boxShadow: '4px 4px 0 var(--hard)',
                    }}
                  >
                    <div className="font-mono text-2xl font-extrabold" style={{ color: 'var(--accent)' }}>
                      {m.val}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider mt-1" style={{ color: 'var(--text-secondary)' }}>
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
