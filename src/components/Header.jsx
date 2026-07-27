import { useEffect, useState } from 'react'
import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Paper (Day)', cls: 'dot-paper', bg: '#f8faf9' },
  ink: { label: 'Ink (Night)', cls: 'dot-night', bg: '#0b0e14' },
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
    <div
      className="theme-switch flex items-center p-1 rounded-full border"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)',
      }}
      role="group"
      aria-label="Color room theme"
    >
      {themes.map((t) => (
        <button
          key={t}
          type="button"
          aria-pressed={theme === t}
          aria-label={`${THEME_LABELS[t]?.label || t} theme`}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            theme === t ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
          }`}
          style={{
            background: theme === t ? 'var(--accent)' : 'transparent',
            color: theme === t ? 'var(--accent-ink)' : 'var(--text-primary)',
            minHeight: 36,
          }}
          onClick={() => setTheme(t)}
        >
          {!compact ? THEME_LABELS[t]?.label || t : t.toUpperCase()}
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
        background: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: 68 }}>
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="RealLearn home"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid place-items-center flex-none"
            style={{
              width: 42,
              height: 42,
              border: '2px solid var(--border-default)',
              borderRadius: 14,
              fontSize: 20,
              background: 'var(--accent)',
              boxShadow: '0 4px 14px rgba(0,255,102,0.3)',
              transform: 'rotate(-4deg)',
            }}
          >
            📖
          </span>
          <span className="leading-tight">
            <span
              className="block font-display text-[20px] font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              RealLearn
            </span>
            <span
              className="hidden sm:block font-hand text-[15px]"
              style={{ color: 'var(--accent)', lineHeight: 1 }}
            >
              the world is your textbook ✨
            </span>
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wider"
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
          <div className="hidden md:block">
            <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--text-primary)', border: '1px solid var(--border-default)' }}
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
          className="md:hidden p-6 border-b flex flex-col gap-4"
          style={{
            background: 'var(--bg-primary)',
            borderColor: 'var(--border-default)',
          }}
        >
          <nav className="flex flex-col font-display text-xl gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-[color:var(--border-default)]"
                style={{ color: 'var(--text-primary)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <span className="text-xs uppercase font-mono tracking-wider block mb-2" style={{ color: 'var(--text-secondary)' }}>
              Room Theme
            </span>
            <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
          </div>
        </div>
      )}
    </header>
  )
}
