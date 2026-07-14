import { useEffect, useState } from 'react'
import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Paper', cls: 'dot-paper' },
  night: { label: 'Night', cls: 'dot-night' },
  twilight: { label: 'Twilight', cls: 'dot-twilight' },
}

const LINKS = [
  { href: '#problem', label: 'Problem' },
  { href: '#method', label: 'Method' },
  { href: '#how', label: 'How it works' },
  { href: '#try', label: 'Try it' },
  { href: '#rewards', label: 'Rewards' },
]

function ThemeSwitch({ theme, setTheme, themes, compact = false }) {
  return (
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
          {!compact && THEME_LABELS[t].label}
        </button>
      ))}
    </div>
  )
}

export default function Header() {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--bg) 86%, transparent)', backdropFilter: 'blur(8px)' }}>
      <div className="container flex items-center justify-between" style={{ height: 66 }}>
        <a href="#top" className="flex items-center gap-3 group" aria-label="RealLearn home" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="grid place-items-center flex-none"
            style={{
              width: 38,
              height: 38,
              border: '2px solid var(--shadow-c)',
              borderRadius: 12,
              fontSize: 19,
              background: 'var(--glow)',
              boxShadow: '3px 3px 0 0 var(--shadow-c)',
              transform: 'rotate(-4deg)',
            }}
          >
            📖
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[19px]" style={{ color: 'var(--ink)' }}>
              RealLearn
            </span>
            <span className="hidden sm:block font-hand text-[15px]" style={{ color: 'var(--accent)', lineHeight: 1 }}>
              the world is your textbook ✨
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em]" style={{ color: 'var(--ink-dim)' }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[color:var(--ink)] transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
          </div>

          <button
            type="button"
            className="menu-toggle md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav md:hidden ${open ? 'is-open' : ''}`}>
        <nav className="flex flex-col font-display" style={{ fontSize: 22 }}>
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--ink)', padding: '16px 0', borderBottom: i < LINKS.length - 1 ? '1px solid var(--line)' : 'none' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 26 }}>
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--ink-faint)', display: 'block', marginBottom: 12 }}>
            Color theme
          </span>
          <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
        </div>
      </div>
    </header>
  )
}
