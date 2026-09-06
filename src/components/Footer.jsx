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
      aria-labelledby="footer-cta"
      style={{ paddingBottom: 40, paddingTop: 'clamp(56px, 7vw, 96px)', backgroundColor: '#131315', borderRadius: '18px 18px 0 0', borderTop: '1.5px solid #131315' }}
    >
      <span className="deco-plus" aria-hidden="true" style={{ top: 28, left: '6%', color: '#fff' }}>+</span>
      <span className="deco-plus" aria-hidden="true" style={{ top: 60, right: '10%', color: '#fff' }}>+</span>
      <div className="container text-center relative z-10">
        <Reveal style={{ marginBottom: 20 }}>
          <span className="sticker">The world is your textbook</span>
        </Reveal>
        <Reveal
          as="h2"
          id="footer-cta"
          className="font-display font-black max-w-4xl mx-auto mb-8"
          style={{ color: '#fff', fontSize: 'clamp(34px, 5vw, 68px)' }}
        >
          Stop searching. Start{' '}
          <span style={{ color: 'var(--lime)' }}>understanding.</span>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a className="btn btn-action" href="https://reallearn.site" target="_blank" rel="noopener noreferrer">
            Start Learning Free ↗
          </a>
          <a
            className="btn"
            href="#try"
            style={{ background: 'transparent', color: '#fff', borderColor: '#fff', boxShadow: '3px 3px 0 rgba(255,255,255,0.35)' }}
          >
            Try a Mini Lesson
          </a>
          <a
            className="btn"
            href="#top"
            style={{ background: 'transparent', color: '#fff', borderColor: '#fff', boxShadow: '3px 3px 0 rgba(255,255,255,0.35)' }}
          >
            Back to Top ↑
          </a>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {EXTERNAL_LINKS.map((l) => (
            <a
              key={l.t}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold"
              style={{
                textDecoration: 'none',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.4)',
                borderRadius: 999,
                padding: '8px 16px',
              }}
            >
              <Icon name={l.icon} size={15} />
              {l.t}
            </a>
          ))}
        </Reveal>

        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] font-bold uppercase"
          style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 26, maxWidth: 980 }}
        >
          <span>RealLearn AI</span>
          <span>The World Is Your Textbook</span>
          <span>63 Global Languages</span>
          <span>100% Free & Ad-Free</span>
        </div>
        <p className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.45)', marginTop: 12 }}>
          © {new Date().getFullYear()} RealLearn. The world is your textbook.
        </p>
      </div>
    </footer>
  )
}
