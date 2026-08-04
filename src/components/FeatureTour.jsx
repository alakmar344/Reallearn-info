import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const GROUPS = [
  {
    id: 'learn',
    label: 'Learn',
    items: [
      { icon: 'clock', title: 'Reading pace timer', desc: 'A gentle timer that adapts to how fast you read.' },
      { icon: 'tag', title: 'Subject labels', desc: 'Lessons automatically labeled across core subjects.' },
      { icon: 'link', title: 'Verifiable sources', desc: 'Every claim links to a source you can check.' },
      { icon: 'zap', title: 'Fast & deep modes', desc: 'A quick summary or a full three-part journey.' },
    ],
  },
  {
    id: 'engage',
    label: 'Engage',
    items: [
      { icon: 'mic', title: 'Voice input', desc: 'Ask questions by speaking, in your own language.' },
      { icon: 'volume', title: 'Audio narration', desc: 'Listen to each part with natural text-to-speech.' },
      { icon: 'message', title: 'Follow-up questions', desc: 'Dive deeper on any point without restarting.' },
      { icon: 'book', title: 'Personal library', desc: 'Every journey saved, ready to revisit anytime.' },
    ],
  },
  {
    id: 'track',
    label: 'Track',
    items: [
      { icon: 'share', title: 'Export & share', desc: 'Turn any lesson into clean study notes.' },
      { icon: 'bar-chart', title: 'Mastery tracking', desc: 'See what you have truly mastered over time.' },
      { icon: 'moon', title: 'Day & night modes', desc: 'Switch between light and dark themes.' },
      { icon: 'refresh', title: 'Calm loading', desc: 'Clear, honest progress updates without noise.' },
    ],
  },
]

export default function Capabilities() {
  const [active, setActive] = useState('learn')
  const group = GROUPS.find((g) => g.id === active) || GROUPS[0]

  return (
    <section id="capabilities" className="relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="sticker">05 · Capabilities</span>
          <h2 className="headline-lg mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Everything you need to learn well.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Interactions and tools designed around one goal: making learning stick.
          </p>
        </Reveal>

        {/* Tab Row */}
        <Reveal delay={0.05} className="mb-8">
          <div
            role="tablist"
            aria-label="Capability groups"
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
                  className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
                  style={{
                    background: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? 'var(--accent-ink)' : 'var(--text-secondary)',
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-default)'}`,
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {group.items.map((f) => (
              <div key={f.title} className="glass-card p-5 flex flex-col">
                <span
                  className="grid place-items-center w-10 h-10 rounded-xl mb-4"
                  style={{
                    background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                    color: 'var(--accent)',
                  }}
                >
                  <Icon name={f.icon} size={20} />
                </span>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
