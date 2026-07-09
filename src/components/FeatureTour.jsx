import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const I = {
  book: 'M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5',
  lock: 'M7 10V7a5 5 0 0 1 10 0v3M5 10h14v10H5z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18',
  sliders: 'M4 7h11M18 7h2M4 17h2M9 17h11M14 4v6M7 14v6',
  news: 'M4 5h13v14H5a1 1 0 0 1-1-1zM17 8h3v11a1 1 0 0 1-1 1M7 9h7M7 13h7M7 17h4',
  spark: 'M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3',
  unlock: 'M7 10V7a5 5 0 0 1 9.5-2M5 10h14v10H5z',
  link: 'M9 15l6-6M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1',
  clock: 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  tag: 'M4 12V5a1 1 0 0 1 1-1h7l8 8-8 8zM8 8h.01',
  mic: 'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3',
  repeat: 'M4 9a8 8 0 0 1 13-3l3 3M20 15a8 8 0 0 1-13 3l-3-3M17 3v6h-6M7 21v-6h6',
  palette: 'M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.5 1-2 2-2h2a3 3 0 0 0 3-3 9 9 0 0 0-9-9zM7.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM10 7.5A1 1 0 1 0 10 5.5 1 1 0 0 0 10 7.5zM14.5 7.5A1 1 0 1 0 14.5 5.5 1 1 0 0 0 14.5 7.5z',
}

function Icon({ name }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={I[name]} />
    </svg>
  )
}

const FEATURES = [
  { n: '01', icon: 'book', t: 'Three-part spine', d: 'Foundation, Mechanism, Real World — every single time.' },
  { n: '02', icon: 'lock', t: 'Quiz-gated progression', d: 'Two questions, 100% to advance. No skipping ahead.' },
  { n: '03', icon: 'globe', t: 'Learn in your language', d: 'Eight languages, generated natively — never translated.' },
  { n: '04', icon: 'sliders', t: 'Adaptive difficulty', d: 'Class 6–8 through College / Advanced, recalibrated.' },
  { n: '05', icon: 'news', t: 'Grounded in today', d: 'Live news woven into Part 3 before a word is written.' },
  { n: '06', icon: 'spark', t: 'Calm, glowing loaders', d: 'No spinners, no dead air while it composes.' },
  { n: '07', icon: 'unlock', t: 'Unlock animations', d: 'Each part earns its own quiet reveal.' },
  { n: '08', icon: 'link', t: 'Real sources', d: 'Every claim points back to somewhere verifiable.' },
  { n: '09', icon: 'clock', t: 'Reading pace', d: 'A gentle timer. A lesson, not a race.' },
  { n: '10', icon: 'tag', t: 'Subject badges', d: 'Auto-classified across eleven disciplines.' },
  { n: '11', icon: 'mic', t: 'Voice ask', d: 'Speak the question instead of typing it.' },
  { n: '12', icon: 'repeat', t: 'Follow-ups', d: 'Ask again and a fresh journey spins right up.' },
  { n: '13', icon: 'palette', t: 'Three themes', d: 'Paper, Night, Twilight — pick the one you’re in.' },
]

export default function FeatureTour() {
  return (
    <section id="tour" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="05"
          kicker="Feature Tour"
          title="Thirteen things, one experience"
          lead="None of it is decoration. Each piece exists to keep the lesson honest, calibrated, and impossible to forget."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={(i % 3) * 0.06}>
              <article className="card card-hover" style={{ height: '100%' }}>
                <span className="fold-line" />
                <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                  <span
                    aria-hidden="true"
                    className="grid place-items-center"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 4,
                      border: '1.5px solid var(--line-strong)',
                      color: 'var(--accent)',
                    }}
                  >
                    <Icon name={f.icon} />
                  </span>
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
