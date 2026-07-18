import Reveal from './Reveal'
import Book3D from './Book3D'

const STATS = [
  { e: '🌍', t: '12 languages' },
  { e: '🎯', t: '3 levels' },
  { e: '🏆', t: '17 badges' },
  { e: '📰', t: 'Live news inside' },
  { e: '🎨', t: '3 themes' },
]

export default function Hero() {
  return (
    <section id="top" className="relative section" style={{ paddingTop: 'clamp(48px, 7vw, 92px)' }}>
      <div className="seigaiha" aria-hidden="true" style={{ inset: 'auto 0 0 0', height: '42%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal style={{ marginBottom: 'var(--ma-sm)' }}>
              <span className="sticker">✨ RealLearn · Vol. 01</span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 8vw, 72px)', color: 'var(--ink)', maxWidth: '14ch', letterSpacing: '-0.02em' }}>
                Don&rsquo;t just get answers.{' '}
                <span className="hl-marker" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  Actually learn.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14} as="p" className="font-display" style={{ fontSize: 'clamp(18px,2vw,22px)', color: 'var(--ink-dim)', maxWidth: '36ch', margin: 'var(--ma-sm) 0 calc(var(--ma-sm) + 6px)', lineHeight: 1.55 }}>
              RealLearn turns any question into a cute, structured, three-part
              adventure — Foundation → Mechanism → Real World — with quizzes,
              XP, and streaks that prove it stuck. 🧠✨
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap items-center gap-4" style={{ marginBottom: 30 }}>
              <a className="btn" href="https://reallearn.site" target="_blank" rel="noopener noreferrer">
                Start learning — it&rsquo;s fun 🚀
              </a>
              <a className="btn btn-ghost" href="#try">
                Try a mini lesson 🎯
              </a>
            </Reveal>

            <Reveal delay={0.26} className="flex flex-wrap items-center gap-3">
              {STATS.map((s) => (
                <span key={s.t} className="chip">
                  <span aria-hidden="true">{s.e}</span>
                  {s.t}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} style={{ position: 'relative' }}>
            <div className="enso" aria-hidden="true" style={{ width: 'min(80%, 380px)', height: 'min(80%, 380px)', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-18deg)' }} />
            <Book3D />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
