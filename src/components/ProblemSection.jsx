import Reveal from './Reveal'
import Icon from './Icon'

const PROBLEMS = [
  {
    icon: 'trending-down',
    title: 'Superficial Chatbot Answers',
    desc: 'Generic AI chatbots spit out disposable, one-line answers that feel like an encyclopedia snippet. You read it, but you don’t build true intuition.',
    badge: 'Surface-Level Q&A',
    solution: 'RealLearn builds a 3-stage intuitive roadmap with real depth.',
  },
  {
    icon: 'file-text',
    title: 'Dense Jargon Overload',
    desc: 'Search engines and academic websites bury you in intimidating math and complex terminology before you even understand the basic concept.',
    badge: 'Cognitive Overload',
    solution: 'Starts with crystal-clear analogies before adding mechanics.',
  },
  {
    icon: 'eye-off',
    title: 'Instant Forgetting Curve',
    desc: 'When you just scroll and read passively, research shows over 80% of what you read evaporates from memory within 24 hours.',
    badge: '80% Forgotten Tomorrow',
    solution: 'Active recall checkpoint quizzes lock concepts into memory.',
  },
  {
    icon: 'archive',
    title: 'Disconnected From Reality',
    desc: 'Textbook examples from 20 years ago feel dry and abstract, leaving you wondering: "Why does this actually matter in the real world?"',
    badge: 'Dry & Outdated',
    solution: 'Connects every concept to live news, real tech, and modern life.',
  },
]

export default function ProblemSection() {
  return (
    <section id="why" className="py-24 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-5xl mx-auto mb-16">
          <span className="sticker">
            01 · The Learning Dilemma
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Why typical search & chatbots fail learners.
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            When you're trying to learn, getting a wall of text isn't enough. Here's why traditional tools leave you confused — and how RealLearn fixes it.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="grid place-items-center w-10 h-10 rounded-xl"
                      style={{
                        background: 'var(--danger-bg)',
                        color: 'var(--danger)',
                      }}
                    >
                      <Icon name={p.icon} size={20} />
                    </span>
                    <span
                      className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full uppercase"
                      style={{
                        background: 'var(--danger-bg)',
                        color: 'var(--danger)',
                        border: '2px solid var(--danger)',
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2.5" style={{ color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {p.desc}
                  </p>
                </div>

                <div
                  className="pt-3.5 border-t-2 text-xs font-bold flex items-center gap-2"
                  style={{ borderColor: 'var(--line)', color: 'var(--accent)' }}
                >
                  <Icon name="check-circle" size={15} strokeWidth={2.2} />
                  <span>{p.solution}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
