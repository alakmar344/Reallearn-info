import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="relative" style={{ padding: 'clamp(56px,7vw,90px) 0 56px', borderTop: '1px solid var(--line)' }}>
      <div className="container text-center">
        <Reveal as="p" className="font-display italic" style={{ fontSize: 'clamp(20px,3vw,30px)', color: 'var(--ink)', maxWidth: '20ch', margin: '0 auto 22px', lineHeight: 1.3 }}>
          “The world is your textbook. RealLearn just helps you read it.”
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center justify-center gap-4" style={{ marginBottom: 24 }}>
          <a className="btn" href="#try">
            Try a lesson
            <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-ghost" href="#top">
            Back to top
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            className="font-mono text-[12px] tracking-[0.08em] uppercase inline-flex items-center gap-2"
            style={{ color: 'var(--accent)', textDecoration: 'none', border: '1.5px solid var(--accent)', borderRadius: 100, padding: '9px 16px', transition: 'transform .16s ease, box-shadow .16s ease' }}
            href="https://www.producthunt.com/products/reallearn-the-world-is-your-textbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">🔥</span> Now on Product Hunt
            <span aria-hidden="true">→</span>
          </a>
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
          © {new Date().getFullYear()} RealLearn. Originally built for the Gemma 4 Good Hackathon.
        </p>
      </div>
    </footer>
  )
}
