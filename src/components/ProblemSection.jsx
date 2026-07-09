import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const PROBLEMS = [
  { tag: 'Too shallow', body: 'It skims the surface. You walk away with a sentence and no understanding.' },
  { tag: 'Too advanced', body: 'It answers for an expert, pitched far above where you actually are today.' },
  { tag: 'Disconnected', body: 'Clean theory with no bridge to anything happening in the real world.' },
  { tag: 'Forgettable', body: 'You never had to engage, so nothing ever gets the chance to stick.' },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="01"
          kicker="The Problem"
          title="Why answers don’t teach"
          lead="A search bar gives you ten links. A chatbot gives you a paragraph. Neither one leaves you able to do anything."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.07}>
              <article className="card card-hover" style={{ height: '100%' }}>
                <span className="fold-line" />
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase" style={{ color: 'var(--accent)' }}>
                  {p.tag}
                </span>
                <p className="font-display" style={{ fontSize: 15.5, color: 'var(--ink-dim)', marginTop: 12, lineHeight: 1.5 }}>
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} as="p" className="font-display" style={{ fontSize: 'clamp(20px,2.6vw,28px)', color: 'var(--ink)', maxWidth: '19ch', lineHeight: 1.35, marginTop: 56 }}>
          “You consumed an answer. You didn&rsquo;t learn anything.”
        </Reveal>
      </div>
    </section>
  )
}
