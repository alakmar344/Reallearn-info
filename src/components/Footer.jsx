import Reveal from './Reveal'
import Icon from './Icon'

const EXTERNAL_LINKS = [
  { t: 'Live App (reallearn.site)', href: 'https://reallearn.site/', icon: 'globe' },
  { t: 'GitHub Repository', href: 'https://github.com/alakmar344/Real-learn', icon: 'file-text' },
  { t: 'Demo Video', href: 'https://youtu.be/zehBGs-xBC0', icon: 'film' },
  { t: 'Product Hunt', href: 'https://www.producthunt.com/products/reallearn-the-world-is-your-textbook', icon: 'rocket' },
]

export default function Footer() {
  return (
    <footer
      className="relative z-10 overflow-hidden"
      style={{ paddingBottom: 64, paddingTop: 'clamp(64px, 8vw, 112px)', backgroundColor: 'var(--bg-2)', borderTop: '4px solid var(--line)' }}
    >
      <div className="container text-center relative z-10">
        <Reveal style={{ marginBottom: 20 }}>
          <span className="sticker">The world is your textbook</span>
        </Reveal>
        <Reveal
          as="h2"
          className="font-display font-black max-w-5xl mx-auto mb-10"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(30px, 4.8vw, 68px)' }}
        >
          Master it, one <span className="text-gradient">structured lesson</span> at a time.
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a className="btn btn-action" href="https://reallearn.site" target="_blank" rel="noopener noreferrer">
            Start Learning Free ↗
          </a>
          <a className="btn btn-ghost" href="#try">
            Try a Mini Lesson
          </a>
          <a className="btn btn-ghost" href="#top">
            Back to Top ↑
          </a>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
          {EXTERNAL_LINKS.map((l) => (
            <a
              key={l.t}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:text-[color:var(--accent)] transition-colors chip"
              style={{ textDecoration: 'none' }}
            >
              <Icon name={l.icon} size={15} />
              {l.t}
            </a>
          ))}
        </Reveal>

        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.08em] uppercase font-bold"
          style={{ color: 'var(--text-secondary)', borderTop: '2px solid var(--line)', paddingTop: 28, maxWidth: 980 }}
        >
          <span>RealLearn AI</span>
          <span>The World Is Your Textbook</span>
          <span>12 Native Languages</span>
          <span>100% Free & Ad-Free</span>
        </div>
        <p className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)', marginTop: 14 }}>
          © {new Date().getFullYear()} RealLearn. The world is your textbook.
        </p>
      </div>
    </footer>
  )
}
