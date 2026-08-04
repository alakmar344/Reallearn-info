import { useEffect, useState } from 'react'
import Icon from './Icon'
import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Day', icon: 'sun' },
  ink: { label: 'Night', icon: 'moon' },
}

const LINKS = [
  { href: '#problem', label: 'The problem' },
  { href: '#method', label: 'The method' },
  { href: '#how', label: 'How it works' },
  { href: '#try', label: 'Try a lesson' },
  { href: '#capabilities', label: 'Capabilities' },
]

function ThemeSwitch({ theme, setTheme, themes }) {
  return (
    <div
      className="theme-switch flex items-center p-1 rounded-full border"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)',
      }}
      role="group"
      aria-label="Theme"
    >
      {themes.map((t) => (
        <button
          key={t}
          type="button"
          aria-pressed={theme === t}
          aria-label={`${THEME_LABELS[t]?.label || t} theme`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
          style={{
            background: theme === t ? 'var(--accent)' : 'transparent',
            color: theme === t ? 'var(--accent-ink)' : 'var(--text-primary)',
            minHeight: 34,
            border: 'none',
          }}
          onClick={() => setTheme(t)}
        >
          <Icon name={THEME_LABELS[t]?.icon || 'sun'} size={13} />
          <span>{THEME_LABELS[t]?.label || t}</span>
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
      className="sticky top-0 z-50"
      style={{
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
            className="grid place-items-center flex-none font-bold text-sm"
            style={{
              width: 38,
              height: 38,
              border: '1px solid var(--border-default)',
              borderRadius: 12,
              background: 'var(--accent)',
              color: 'var(--accent-ink)',
            }}
          >
            RL
          </span>
          <span className="leading-tight">
            <span
              className="block font-display text-[19px] font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              RealLearn
            </span>
            <span
              className="hidden sm:block text-xs"
              style={{ color: 'var(--text-secondary)', lineHeight: 1 }}
            >
              Turn questions into lessons
            </span>
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-8 text-[15px] font-medium"
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
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg"
            style={{ color: 'var(--text-primary)', border: '1px solid var(--border-default)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 z-50 px-6 pb-8 pt-2"
          style={{
            top: 68,
            bottom: 0,
            background: 'color-mix(in srgb, var(--bg-primary) 92%, transparent)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: 'var(--shadow-lift)',
            overflowY: 'auto',
          }}
        >
          <nav className="flex flex-col text-lg gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-4 rounded-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 border-t pt-6" style={{ borderColor: 'var(--border-default)' }}>
            <span className="block mb-3 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              Theme
            </span>
            <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
          </div>
        </div>
      )}
    </header>
  )
}
