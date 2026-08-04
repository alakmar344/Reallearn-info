import Reveal from './Reveal'
import Icon from './Icon'

const PROBLEMS = [
  {
    icon: 'trending-down',
    title: 'Too shallow',
    desc: 'One-line chatbot snippets give surface-level definitions without real context or understanding.',
  },
  {
    icon: 'file-text',
    title: 'Too advanced',
    desc: 'Generic results dump complex jargon that is disconnected from your actual learning level.',
  },
  {
    icon: 'archive',
    title: 'Disconnected',
    desc: 'Textbook examples frozen in time fail to show how concepts operate in the real world today.',
  },
  {
    icon: 'eye-off',
    title: 'Forgettable',
    desc: 'Passive reading leaves no active recall — information vanishes from memory within hours.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="sticker">01 · The Problem</span>
          <h2 className="headline-lg mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Why typical Q&amp;A fails learners.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Most search engines and AI chatbots behave like automated encyclopedias. RealLearn rebuilds the lesson itself.
          </p>
        </Reveal>

        <div className="h-scroll gap-6">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col">
                <span
                  className="grid place-items-center w-11 h-11 rounded-xl mb-4"
                  style={{
                    background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                    color: 'var(--accent)',
                  }}
                >
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 className="headline-md mb-2" style={{ color: 'var(--text-primary)' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
