import Reveal from './Reveal'

const PROBLEMS = [
  {
    icon: '🕳️',
    title: 'Too Shallow',
    desc: 'One-line chatbot snippets give superficial definitions without providing real context or deep understanding.',
  },
  {
    icon: '🤯',
    title: 'Too Advanced',
    desc: 'Generic search results drop complex academic jargon that is disconnected from your actual learning level.',
  },
  {
    icon: '🔌',
    title: 'Disconnected',
    desc: 'Textbook examples frozen in 2014 fail to show how concepts operate in the real world today.',
  },
  {
    icon: '💨',
    title: 'Forgettable',
    desc: 'Passive reading leaves zero active recall — information vanishes from memory within hours.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker" style={{ background: 'var(--accent-action)', color: '#ffffff' }}>
            01 · The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Why traditional Q&A fails learners.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Most search engines and AI chatbots act like automated encyclopedias. RealLearn rebuilds the lesson experience.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                className="glass-card p-6 h-full flex flex-col justify-between"
                style={{
                  background: 'color-mix(in srgb, var(--bg-card) 85%, transparent)',
                }}
              >
                <div>
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {p.desc}
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
