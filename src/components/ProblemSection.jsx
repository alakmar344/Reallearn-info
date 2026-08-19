import Reveal from './Reveal'

const PROBLEMS = [
  {
    icon: '🕳️',
    title: 'Too Shallow',
    desc: 'One-line chatbot snippets deliver surface definitions without constructing intuitive mental models or deep comprehension.',
    badge: 'Superficial Q&A',
  },
  {
    icon: '🤯',
    title: 'Too Advanced',
    desc: 'Generic search results dump dense academic jargon that is completely disconnected from the learner’s actual grade tier.',
    badge: 'Cognitive Overload',
  },
  {
    icon: '🔌',
    title: 'Disconnected',
    desc: 'Textbook examples frozen in past decades fail to connect theory with active real-world events, live news, and industry data.',
    badge: 'Outdated Context',
  },
  {
    icon: '💨',
    title: 'Forgettable',
    desc: 'Passive reading leaves zero active recall — research shows over 80% of un-tested information vanishes from memory within 24 hours.',
    badge: 'Passive Decay',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker">
            01 · The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Why traditional Q&A fails learners.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Conventional chatbots act like automated encyclopedias. RealLearn rebuilds the pedagogical journey from the ground up.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <span
                      className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full uppercase"
                      style={{
                        background: 'rgba(251, 113, 133, 0.12)',
                        color: 'var(--danger)',
                        border: '1px solid var(--danger)',
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2.5" style={{ color: 'var(--text-primary)' }}>
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
