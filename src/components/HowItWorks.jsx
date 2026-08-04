import Reveal from './Reveal'
import Icon from './Icon'

const STEPS = [
  {
    icon: 'message',
    title: 'Ask anything',
    desc: 'Type any question — or speak it — and name your curiosity.',
  },
  {
    icon: 'sliders',
    title: 'Pick your level & language',
    desc: 'Choose the difficulty that fits you and learn in your own language.',
  },
  {
    icon: 'film',
    title: 'Watch it build',
    desc: 'A calm progress state holds space while your lesson is composed.',
  },
  {
    icon: 'book-open',
    title: 'Read part one: Foundation',
    desc: 'A friendly, beginner-first framing arrives with source links and a reading timer.',
  },
  {
    icon: 'lock',
    title: 'Prove it, then unlock',
    desc: 'Score 100% on the quiz to unlock the Mechanism and Real World parts.',
  },
  {
    icon: 'trophy',
    title: 'Complete & earn XP',
    desc: 'Celebrate with a score ring, key takeaways, and your progress level.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="sticker">03 · How It Works</span>
          <h2 className="headline-lg mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            A six-step learning journey.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            From curiosity to verified mastery in under five minutes.
          </p>
        </Reveal>

        <div className="h-scroll-3 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="grid place-items-center w-11 h-11 rounded-xl"
                    style={{
                      background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                      color: 'var(--accent)',
                    }}
                  >
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span
                    className="font-display text-sm font-semibold"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="headline-md mb-2" style={{ color: 'var(--text-primary)' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
