import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const FEATURES = [
  { n: '01', e: '📚', t: 'Three-part spine', d: 'Foundation, Mechanism, Real World — every single time.' },
  { n: '02', e: '🔐', t: 'Quiz-gated progression', d: 'Two questions, 100% to advance. No skipping ahead.' },
  { n: '03', e: '🌏', t: 'Learn in your language', d: 'Eight languages, generated natively — never translated.' },
  { n: '04', e: '🎚️', t: 'Adaptive difficulty', d: 'Class 6–8 through College / Advanced, recalibrated.' },
  { n: '05', e: '📰', t: 'Grounded in today', d: 'Live news woven into Part 3 before a word is written.' },
  { n: '06', e: '🌟', t: 'Calm, glowing loaders', d: 'No spinners, no dead air while it composes.' },
  { n: '07', e: '🔓', t: 'Unlock animations', d: 'Each part earns its own little celebration.' },
  { n: '08', e: '🔗', t: 'Real sources', d: 'Every claim points back to somewhere verifiable.' },
  { n: '09', e: '⏱️', t: 'Reading pace', d: 'A gentle timer. A lesson, not a race.' },
  { n: '10', e: '🏷️', t: 'Subject badges', d: 'Auto-classified across eleven disciplines.' },
  { n: '11', e: '🎙️', t: 'Voice ask', d: 'Speak the question instead of typing it.' },
  { n: '12', e: '🔊', t: 'Read aloud', d: 'Every part has a Listen button with a warm, natural voice.' },
  { n: '13', e: '⚡', t: 'Fast & Explain modes', d: 'A quick answer in seconds, or the full deep journey.' },
  { n: '14', e: '📔', t: 'Personal library', d: 'Every journey saves itself. Revisit or retake any time.' },
  { n: '15', e: '🔁', t: 'Follow-ups', d: 'Ask again and a fresh journey spins right up.' },
  { n: '16', e: '🖼️', t: 'Shareable result cards', d: 'A gorgeous score card to share when you finish.' },
  { n: '17', e: '🏆', t: 'XP, streaks & badges', d: 'Seventeen achievements from First Steps to Unstoppable.' },
  { n: '18', e: '🎨', t: 'Three themes', d: 'Paper, Night, Twilight — pick the mood you’re in.' },
]

export default function FeatureTour() {
  return (
    <section id="tour" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="06"
          kicker="Feature Tour"
          title="Eighteen things, one experience 🎒"
          lead="None of it is decoration. Each piece exists to keep the lesson honest, calibrated, and impossible to forget."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={(i % 3) * 0.06}>
              <article className="card card-hover" style={{ height: '100%' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                  <span className="emoji-bubble" aria-hidden="true">{f.e}</span>
                  <span className="font-mono text-[11px] tracking-[0.1em]" style={{ color: 'var(--ink-faint)' }}>
                    {f.n}
                  </span>
                </div>
                <h4 className="font-display" style={{ fontSize: 17, color: 'var(--ink)', marginBottom: 6 }}>
                  {f.t}
                </h4>
                <p className="font-display" style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.5 }}>
                  {f.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
