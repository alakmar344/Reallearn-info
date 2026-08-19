import Reveal from './Reveal'

const LINKS = [
  { t: 'Live App (reallearn.site)', href: 'https://reallearn.site/' },
  { t: 'GitHub Repository', href: 'https://github.com/alakmar344/Real-learn' },
  { t: 'Demo Video', href: 'https://youtu.be/zehBGs-xBC0' },
  { t: 'Product Hunt', href: 'https://www.producthunt.com/products/reallearn-the-world-is-your-textbook' },
]

export default function Footer() {
  return (
    <footer className="relative section" style={{ paddingBottom: 56, backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border-default)' }}>
      <div className="container text-center relative z-10">
        <Reveal as="h2" className="font-display font-bold text-2xl sm:text-3xl max-w-xl mx-auto mb-6" style={{ color: 'var(--text-primary)', lineHeight: 1.3 }}>
          &ldquo;The world is your textbook. RealLearn helps you master it.&rdquo;
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a className="btn btn-action" href="https://reallearn.site" target="_blank" rel="noopener noreferrer">
            Start Learning Now ↗
          </a>
          <a className="btn btn-ghost" href="#try">
            Try Mini Lesson
          </a>
          <a className="btn btn-ghost" href="#top">
            Back to Top ↑
          </a>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {LINKS.map((l) => (
            <a
              key={l.t}
              className="chip text-xs hover:border-[color:var(--accent)] transition-colors"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {l.t}
            </a>
          ))}
        </Reveal>

        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.08em] uppercase font-bold"
          style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border-default)', paddingTop: 28, maxWidth: 820 }}
        >
          <span>RealLearn AI</span>
          <span>Groq LPU Powered</span>
          <span>Structured 3-Part Pedagogy</span>
          <span>Next.js 16 · React 19 · Node 24</span>
        </div>
        <p className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)', marginTop: 14 }}>
          © {new Date().getFullYear()} RealLearn. The world is your textbook.
        </p>
      </div>
    </footer>
  )
}
