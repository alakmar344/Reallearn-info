import Reveal from './Reveal'

const LINKS = [
  { e: '🚀', t: 'Live product', href: 'https://reallearn.site/' },
  { e: '🎬', t: 'Demo video', href: 'https://youtu.be/zehBGs-xBC0' },
  { e: '📝', t: 'Kaggle write-up', href: 'https://www.kaggle.com/competitions/gemma-4-good-hackathon/writeups/new-writeup-1778215573161' },
  { e: '🔥', t: 'Product Hunt', href: 'https://www.producthunt.com/products/reallearn-the-world-is-your-textbook' },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ padding: 'clamp(56px,7vw,90px) 0 56px', borderTop: '1px solid var(--line)' }}>
      <div className="container text-center">
        <Reveal as="p" className="font-hand" style={{ fontSize: 'clamp(28px,4vw,40px)', color: 'var(--ink)', maxWidth: '22ch', margin: '0 auto 8px', lineHeight: 1.25, transform: 'rotate(-1deg)' }}>
          “The world is your textbook. RealLearn just helps you read it.” 📖✨
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center justify-center gap-4" style={{ margin: '26px 0 26px' }}>
          <a className="btn" href="https://reallearn.site" target="_blank" rel="noopener noreferrer">
            Start learning 🚀
          </a>
          <a className="btn btn-ghost" href="#try">
            Try a mini lesson 🎯
          </a>
          <a className="btn btn-ghost" href="#top">
            Back to top ↑
          </a>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap items-center justify-center gap-3" style={{ marginBottom: 30 }}>
          {LINKS.map((l) => (
            <a key={l.t} className="chip" href={l.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <span aria-hidden="true">{l.e}</span>
              {l.t}
            </a>
          ))}
        </Reveal>

        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.1em] uppercase"
          style={{ color: 'var(--ink-faint)', borderTop: '1px solid var(--line)', paddingTop: 28, maxWidth: 760 }}
        >
          <span>RealLearn · Vol. 01</span>
          <span>Where every question becomes a journey</span>
          <span>Paper · Night · Twilight</span>
        </div>
        <p className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)', marginTop: 14 }}>
          © {new Date().getFullYear()} RealLearn. Originally built for the Gemma 4 Good Hackathon. Made with 💛 for students everywhere.
        </p>
      </div>
    </footer>
  )
}
