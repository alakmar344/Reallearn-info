import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const GROUPS = [
  {
    id: 'personal',
    label: 'Personalized & Adaptive',
    items: [
      { icon: 'target', title: 'Custom Learner Goals', desc: 'Add your own learning notes to guide the AI on your specific goals and interests.' },
      { icon: 'graduation-cap', title: '3 Grade Difficulty Tiers', desc: 'Tailored explanations calibrated for Class 6–8, Class 9–10, or College and beyond.' },
      { icon: 'sliders', title: 'Explain vs Fast Mode', desc: 'Pick between a deep 3-stage interactive journey or a quick 1-part executive summary.' },
      { icon: 'shield', title: '100% Private On-Device', desc: 'Your study goals and notes stay safely in your browser with zero ads or tracking.' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages & Audio',
    items: [
      { icon: 'globe', title: '12 Native Indian Languages', desc: 'Learn complex subjects naturally in Hindi, Tamil, Gujarati, Bengali, Marathi, and 7 more.' },
      { icon: 'mic', title: 'Hands-Free Voice Input', desc: 'Ask complicated questions effortlessly using speech recognition in your native tongue.' },
      { icon: 'headphones', title: 'Natural Audio Narration', desc: 'Listen to every lesson part read aloud like an engaging, customized learning podcast.' },
      { icon: 'message', title: 'Culturally Natural Tone', desc: 'Native metaphors and phrasing that make sense instead of awkward literal translations.' },
    ],
  },
  {
    id: 'retention',
    label: 'Retention & Active Recall',
    items: [
      { icon: 'book-open', title: '3-Part Structured Spine', desc: 'Foundation → Mechanism → Real World structured roadmap for every question you ask.' },
      { icon: 'lock', title: 'Quiz-Gated Mastery', desc: 'Quick 2-question checkpoint quizzes ensure 100% comprehension before moving forward.' },
      { icon: 'refresh', title: 'Smart Retry Gating', desc: 'Never restart from scratch — missed answers re-queue only the exact questions you missed.' },
      { icon: 'link', title: 'Verifiable Primary Sources', desc: 'Every science fact and real-world event includes transparent, reputable source citations.' },
    ],
  },
  {
    id: 'gamification',
    label: 'Habits & Motivation',
    items: [
      { icon: 'trophy', title: '56 Achievement Badges', desc: 'Earn badges and celebrate milestones across consistency, mastery, and curiosity.' },
      { icon: 'zap', title: 'Daily Learning Streaks', desc: 'Build daily learning habits with streak tracking and protective streak freezes.' },
      { icon: 'bar-chart', title: 'XP & Level Progression', desc: 'Earn experience points for every passed quiz and climb from Novice to Grandmaster.' },
      { icon: 'book', title: 'Personal Offline Library', desc: 'Completed journeys are saved to your device for instant offline review anytime.' },
    ],
  },
]

export default function FeatureTour() {
  const [active, setActive] = useState('personal')
  const group = GROUPS.find((g) => g.id === active) || GROUPS[0]

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker">05 · Capabilities</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Everything you need to master any subject.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Designed from the ground up to make learning fast, intuitive, verifiable, and deeply enjoyable.
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
