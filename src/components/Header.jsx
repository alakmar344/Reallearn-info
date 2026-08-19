import { useEffect, useState } from 'react'
import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Paper', icon: '☀️', bg: '#FAF9F3' },
  ink: { label: 'Ink', icon: '🌙', bg: '#121510' },
}

const LINKS = [
  { href: '#problem', label: 'Problem' },
  { href: '#method', label: 'Method' },
  { href: '#how', label: 'How it works' },
  { href: '#try', label: 'Interactive Demo' },
  { href: '#framework', label: 'Architecture' },
  { href: '#tour', label: 'Capabilities' },
]

function ThemeSwitch({ theme, setTheme, themes, compact = false }) {
  return (
    <div
      className="theme-switch flex items-center p-1 rounded-full border"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-card) 85%, transparent)',
      }}
      role="group"
      aria-label="Color theme switcher"
    >
      {themes.map((t) => {
        const isActive = theme === t
        return (
          <button
            key={t}
            type="button"
            aria-pressed={isActive}
            aria-label={`${THEME_LABELS[t]?.label || t} theme`}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isActive ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              background: isActive ? 'var(--accent)' : 'transparent',
              color: isActive ? 'var(--on-accent)' : 'var(--text-primary)',
              minHeight: 34,
            }}
            onClick={() => setTheme(t)}
          >
            <span>{THEME_LABELS[t]?.icon}</span>
            <span>{!compact ? THEME_LABELS[t]?.label || t : t.toUpperCase()}</span>
          </button>
        )
      })}
    </div>
  )
}

export default function Header() {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-colors"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: 72 }}>
        <a
          href="#top"
          className="flex items-center gap-3 group text-decoration-none"
          aria-label="RealLearn home"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid place-items-center flex-none font-bold text-sm"
            style={{
              width: 40,
              height: 40,
              border: '1.5px solid var(--border-default)',
              borderRadius: 12,
              background: 'var(--accent)',
              color: 'var(--on-accent)',
              boxShadow: '0 4px 14px var(--shadow-glow-accent)',
            }}
          >
            RL
          </span>
          <span className="leading-tight">
            <span
              className="block font-display text-[20px] font-extrabold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              RealLearn <span style={{ color: 'var(--accent)' }}>AI</span>
            </span>
            <span
              className="hidden sm:block font-mono text-[11px] uppercase font-bold tracking-wider"
              style={{ color: 'var(--text-secondary)', lineHeight: 1 }}
            >
              3-Part Interactive Pedagogy
            </span>
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-7 font-mono text-[12px] uppercase font-semibold tracking-wider"
          style={{ color: 'var(--text-secondary)' }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[color:var(--accent)] transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
          </div>

          <a
            href="https://reallearn.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn btn-action"
            style={{ minHeight: 40, padding: '0 18px', fontSize: 13 }}
          >
            Open App ↗
          </a>

          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl cursor-pointer"
            style={{ color: 'var(--text-primary)', border: '1px solid var(--border-default)', background: 'var(--bg-card)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden p-6 border-b flex flex-col gap-5"
          style={{
            background: 'var(--bg-primary)',
            borderColor: 'var(--border-default)',
          }}
        >
          <nav className="flex flex-col font-display text-lg gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-[color:var(--border-default)]"
                style={{ color: 'var(--text-primary)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-wider font-bold" style={{ color: 'var(--text-secondary)' }}>
                Theme Mode
              </span>
              <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
            </div>
            <a
              href="https://reallearn.site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-action w-full text-center mt-2"
            >
              Open Live App ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
