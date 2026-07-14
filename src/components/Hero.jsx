import Reveal from './Reveal'
import Book3D from './Book3D'

const STATS = [
  { e: '🌍', t: '8 languages' },
  { e: '🎯', t: '3 levels' },
  { e: '🏆', t: '17 badges' },
  { e: '📰', t: 'Live news inside' },
  { e: '🎨', t: '3 themes' },
]

export default function Hero() {
  return (
    <section id="top" className="relative" style={{ padding: 'clamp(56px, 8vw, 104px) 0 clamp(64px,8vw,110px)' }}>
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal style={{ marginBottom: 26 }}>
              <span className="sticker">✨ RealLearn · Vol. 01</span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 8vw, 72px)', color: 'var(--ink)', maxWidth: '14ch' }}>
                Don&rsquo;t just get answers.{' '}
                <span className="hl-marker" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  Actually learn.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14} as="p" className="font-display" style={{ fontSize: 'clamp(18px,2vw,22px)', color: 'var(--ink-dim)', maxWidth: '36ch', margin: '24px 0 30px', lineHeight: 1.45 }}>
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

          <Reveal delay={0.12}>
            <Book3D />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
