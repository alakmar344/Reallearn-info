import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Paper', cls: 'dot-paper' },
  night: { label: 'Night', cls: 'dot-night' },
  twilight: { label: 'Twilight', cls: 'dot-twilight' },
}

export default function Header() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--bg) 86%, transparent)', backdropFilter: 'blur(8px)' }}>
      <div className="container flex items-center justify-between" style={{ height: 64 }}>
        <a href="#top" className="flex items-center gap-3 group" aria-label="RealLearn home">
          <span
            aria-hidden="true"
            className="grid place-items-center"
            style={{
              width: 34,
              height: 34,
              border: '1.5px solid var(--accent)',
              borderRadius: 4,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              color: 'var(--accent)',
              background: 'var(--bg-2)',
              boxShadow: '3px 3px 0 0 var(--shadow-a)',
            }}
          >
            R
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[19px]" style={{ color: 'var(--ink)' }}>
              RealLearn
            </span>
            <span className="block font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: 'var(--ink-faint)' }}>
              A Textbook for the World
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em]" style={{ color: 'var(--ink-dim)' }}>
          <a href="#problem" className="hover:text-[color:var(--ink)] transition-colors">Problem</a>
          <a href="#method" className="hover:text-[color:var(--ink)] transition-colors">Method</a>
          <a href="#how" className="hover:text-[color:var(--ink)] transition-colors">How it works</a>
          <a href="#try" className="hover:text-[color:var(--ink)] transition-colors">Try it</a>
        </nav>

        <div className="theme-switch" role="group" aria-label="Color theme">
          {themes.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={theme === t}
              aria-label={`${THEME_LABELS[t].label} theme`}
              onClick={() => setTheme(t)}
            >
              <span className={`dot ${THEME_LABELS[t].cls}`} aria-hidden="true" />
              {THEME_LABELS[t].label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
