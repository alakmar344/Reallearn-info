import Reveal from './Reveal'
import Icon from './Icon'

const STEPS = [
  {
    icon: 'message',
    title: 'Ask or Speak',
    desc: 'Type any complex topic or tap the microphone button for native browser speech-to-text input.',
  },
  {
    icon: 'sliders',
    title: 'Select Mode & Language',
    desc: 'Pick Explain (3-part journey) or Fast (1-part summary), 3 grade tiers, and 12 native Indian languages.',
  },
  {
    icon: 'zap',
    title: 'Sub-Second Streaming',
    desc: 'Groq LPU primary inference generates structured lesson streams with sub-second TTFT and live status tracking.',
  },
  {
    icon: 'book-open',
    title: 'Part 1: Foundation',
    desc: 'Beginner-friendly intuitive mental models arrive with verifiable source links and reading timers.',
  },
  {
    icon: 'lock',
    title: 'Banked Quiz Gating',
    desc: 'Score 100% on the 2-question quiz to unlock Part 2 (Mechanism). Failed tries re-queue only missed questions.',
  },
  {
    icon: 'trophy',
    title: 'Master, Level Up & Earn XP',
    desc: 'Earn XP, unlock 56 achievements, earn streak freezes, review key takeaways, and export study summaries.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker">03 · How It Works</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            A six-step learning journey.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            From initial curiosity to verified conceptual mastery in minutes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="grid place-items-center w-10 h-10 rounded-xl"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                    >
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span
                      className="font-mono text-2xl font-extrabold"
                      style={{ color: 'color-mix(in srgb, var(--accent) 45%, transparent)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
