import Reveal from './Reveal'
import Icon from './Icon'

const EXTERNAL_LINKS = [
  { t: 'Live product', href: 'https://reallearn.site/', icon: 'globe' },
  { t: 'Demo video', href: 'https://youtu.be/zehBGs-xBC0', icon: 'film' },
  { t: 'Product Hunt', href: 'https://www.producthunt.com/products/reallearn-the-world-is-your-textbook', icon: 'rocket' },
]

export default function Footer() {
  return (
    <footer
      className="relative z-10 overflow-hidden"
      style={{ paddingBottom: 56, paddingTop: 'clamp(56px, 7vw, 88px)', backgroundColor: 'color-mix(in srgb, var(--bg-2) 70%, transparent)', borderTop: '1px solid var(--border-default)' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '60%',
          maxWidth: 900,
          background: 'var(--glow-accent)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div className="container text-center relative z-10">
        <Reveal style={{ marginBottom: 22 }}>
          <span className="sticker">The world is your textbook</span>
        </Reveal>
        <Reveal as="h2" className="headline-lg max-w-2xl mx-auto mb-9" style={{ color: 'var(--text-primary)' }}>
          Master it, one <span className="text-gradient">real lesson</span> at a time.
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a className="btn" href="https://reallearn.site" target="_blank" rel="noopener noreferrer">
            Start learning
            <Icon name="arrow-up" size={15} strokeWidth={2.2} style={{ transform: 'rotate(45deg)' }} />
          </a>
          <a className="btn btn-ghost" href="#try">
            Try a mini lesson
          </a>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mb-10">
          {EXTERNAL_LINKS.map((l) => (
            <a
              key={l.t}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[color:var(--accent)] transition-colors"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
            >
              <Icon name={l.icon} size={15} />
              {l.t}
            </a>
          ))}
        </Reveal>

        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-8 text-sm"
          style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border-default)', maxWidth: 640 }}
        >
          <span>RealLearn — turn any question into a lesson.</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium hover:text-[color:var(--accent)] transition-colors"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Back to top
            <Icon name="arrow-up" size={14} strokeWidth={2.2} />
          </a>
        </div>
        <p className="text-sm mt-4" style={{ color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} RealLearn. Built for learners everywhere.
        </p>
      </div>
    </footer>
  )
}
