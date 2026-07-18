import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const STEPS = [
  { n: '01', e: '💬', title: 'Ask', body: 'Type any question, or tap the mic and speak it. The journey begins from wherever your curiosity actually is.' },
  { n: '02', e: '🎛️', title: 'Personalize', body: 'Choose your level and language. The lesson is composed natively in that language — never translated after the fact.' },
  { n: '03', e: '🪄', title: 'Watch it build', body: 'A calm, glowing loader holds the space while the lesson is composed. No silent timeouts, no cliffhanger.' },
  { n: '04', e: '🌱', title: 'Learn Part 1 — Foundation', body: 'A beginner-friendly framing arrives, with real sources and a reading pace that respects your time.' },
  { n: '05', e: '🔓', title: 'Prove it, then unlock', body: 'Score the part’s quiz to unlock the next. Wrong answers shake; right answers pulse. Then Mechanism opens.' },
  { n: '06', e: '🎉', title: 'Complete, and keep going', body: 'Confetti, your score, key takeaways, and a shareable result card. Ask a follow-up and a fresh journey spins up.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader
          num="03"
          kicker="How It Works"
          title="From question to understanding 🗺️"
          lead="Six moves, the same every time. The structure is the point — it’s what makes the result a lesson instead of a lookup."
        />

        <div className="relative" style={{ maxWidth: 720 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="flex gap-5" style={{ paddingBottom: i === STEPS.length - 1 ? 0 : 34, position: 'relative' }}>
                {i !== STEPS.length - 1 && (
                  <span aria-hidden="true" style={{ position: 'absolute', left: 24, top: 52, bottom: -4, width: 2, borderRadius: 2, background: 'var(--line-strong)' }} />
                )}
                <span
                  aria-hidden="true"
                  className="grid place-items-center flex-none"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    border: '2px solid var(--line-strong)',
                    fontSize: 22,
                    background: 'var(--bg-2)',
                    boxShadow: '3px 3px 0 0 var(--shadow-a)',
                    transform: `rotate(${i % 2 ? 3 : -3}deg)`,
                  }}
                >
                  {s.e}
                </span>
                <div className="pt-1">
                  <h4 className="font-display" style={{ fontSize: 19, color: 'var(--ink)', marginBottom: 6 }}>
                    <span className="font-mono text-[11px] tracking-[0.14em]" style={{ color: 'var(--accent)', marginRight: 10 }}>{s.n}</span>
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
