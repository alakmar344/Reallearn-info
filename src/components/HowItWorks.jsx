import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const STEPS = [
  { n: '01', title: 'Ask', body: 'Type any question, or speak it. The journey begins from wherever your curiosity actually is.' },
  { n: '02', title: 'Personalize', body: 'Choose your level and language. The lesson will be composed natively in that language — never translated after the fact.' },
  { n: '03', title: 'Watch it build', body: 'A calm, glowing loader holds the space while the lesson is composed. No silent timeouts, no cliffhanger.' },
  { n: '04', title: 'Learn Part 1 — Foundation', body: 'A beginner-friendly framing arrives, with real sources and a reading pace that respects your time.' },
  { n: '05', title: 'Prove it, then unlock', body: 'Score the part’s quiz to unlock the next. Wrong answers shake; right answers pulse. Then Mechanism opens.' },
  { n: '06', title: 'Complete, and keep going', body: 'A gentle unlock animation, your score, and the key takeaways. Ask a follow-up and a fresh journey spins up.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="03"
          kicker="How It Works"
          title="From question to understanding"
          lead="Six moves, the same every time. The structure is the point — it’s what makes the result a lesson instead of a lookup."
        />

        <div className="relative" style={{ maxWidth: 720 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="flex gap-5" style={{ paddingBottom: i === STEPS.length - 1 ? 0 : 34, position: 'relative' }}>
                {i !== STEPS.length - 1 && (
                  <span aria-hidden="true" style={{ position: 'absolute', left: 23, top: 46, bottom: -4, width: 1.5, background: 'var(--line-strong)' }} />
                )}
                <span
                  aria-hidden="true"
                  className="grid place-items-center flex-none"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 4,
                    border: '1.5px solid var(--accent)',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 15,
                    background: 'var(--bg)',
                    boxShadow: '3px 3px 0 0 var(--shadow-a)',
                  }}
                >
                  {s.n}
                </span>
                <div className="pt-1">
                  <h4 className="font-display" style={{ fontSize: 19, color: 'var(--ink)', marginBottom: 6 }}>
                    {s.title}
                  </h4>
                  <p className="font-display" style={{ fontSize: 15.5, color: 'var(--ink-dim)', lineHeight: 1.55, maxWidth: '52ch' }}>
                    {s.body}
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
