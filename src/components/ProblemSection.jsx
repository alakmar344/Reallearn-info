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
    <section id="why" className="py-20 relative z-10" aria-labelledby="why-heading">
      <div className="container relative">
        <span className="deco-plus" aria-hidden="true" style={{ top: 0, right: '8%' }}>+</span>
        <span className="deco-dots" aria-hidden="true" style={{ width: 80, height: 60, top: 40, right: 0 }} />
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="sticker tag-rotate">01 · The Learning Dilemma</span>
          <h2 id="why-heading" className="font-display mt-5 mb-4" style={{ color: 'var(--text-primary)' }}>
            Why search & chatbots fail learners.
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--text-secondary)' }}>
            When you&apos;re trying to learn, a wall of text isn&apos;t enough. Here&apos;s why traditional tools leave you confused — and how RealLearn fixes it.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="glass-card p-6 h-full flex flex-col justify-between" aria-label={p.title}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="grid place-items-center flex-none"
                      style={{ width: 40, height: 40, borderRadius: 9, background: '#131315', color: 'var(--lime)' }}
                    >
                      <Icon name={p.icon} size={19} />
                    </span>
                    <span
                      className="font-mono text-[10.5px] font-bold px-2.5 py-1 uppercase whitespace-nowrap"
                      style={{
                        background: 'var(--danger-bg)',
                        color: 'var(--danger)',
                        border: '1.5px solid var(--danger)',
                        borderRadius: 999,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-[19px] font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {p.desc}
                  </p>
                </div>

                <div
                  className="pt-3.5 text-[13px] font-bold flex items-center gap-2"
                  style={{ borderTop: '1.5px solid var(--line)', color: 'var(--text-primary)' }}
                >
                  <span
                    aria-hidden="true"
                    className="grid place-items-center flex-none"
                    style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--lime)', border: '1.5px solid var(--line)' }}
                  >
                    <Icon name="check" size={12} strokeWidth={2.6} />
                  </span>
                  <span>{p.solution}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
