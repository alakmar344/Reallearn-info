import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const PROBLEMS = [
  { e: '🫧', tag: 'Too shallow', body: 'It skims the surface. You walk away with a sentence and no understanding.' },
  { e: '🎓', tag: 'Too advanced', body: 'It answers for an expert, pitched far above where you actually are today.' },
  { e: '🏝️', tag: 'Disconnected', body: 'Clean theory with no bridge to anything happening in the real world.' },
  { e: '💨', tag: 'Forgettable', body: 'You never had to engage, so nothing ever gets the chance to stick.' },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0' }}>
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
                <span className="emoji-bubble" aria-hidden="true" style={{ marginBottom: 14 }}>{p.e}</span>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase block" style={{ color: 'var(--ink-faint)' }}>
                  {p.tag}
                </span>
                <p style={{ fontSize: 15.5, color: 'var(--ink-dim)', marginTop: 10, lineHeight: 1.6, letterSpacing: '-0.01em' }}>
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} as="p" className="font-hand" style={{ fontSize: 'clamp(26px,3.4vw,36px)', color: 'var(--ink)', maxWidth: '24ch', lineHeight: 1.25, marginTop: 52, transform: 'rotate(-1deg)' }}>
          &ldquo;You consumed an answer. You didn&rsquo;t learn anything.&rdquo;
        </Reveal>
      </div>
    </section>
  )
}
