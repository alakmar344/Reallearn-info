import { useEffect, useState } from 'react'
import Icon from './Icon'
import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Paper', icon: 'sun' },
  ink: { label: 'Ink', icon: 'moon' },
}

const LINKS = [
  { href: '#why', label: 'Why RealLearn' },
  { href: '#method', label: 'The 3-Step Method' },
  { href: '#how', label: 'How It Works' },
  { href: '#try', label: 'Try Mini Lesson' },
  { href: '#features', label: 'Features' },
  { href: '#compare', label: 'Comparison & FAQ' },
]

function ThemeSwitch({ theme, setTheme, themes }) {
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer"
            style={{
              background: isActive ? 'var(--accent)' : 'transparent',
              color: isActive ? 'var(--on-accent)' : 'var(--text-primary)',
              minHeight: 34,
              border: 'none',
            }}
            onClick={() => setTheme(t)}
          >
            <Icon name={THEME_LABELS[t]?.icon || 'sun'} size={13} />
            <span>{THEME_LABELS[t]?.label || t}</span>
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
      className="sticky top-0 z-50"
      style={{
        background: 'color-mix(in srgb, var(--bg-primary) 88%, transparent)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container flex items-center justify-between gap-4" style={{ minHeight: 76 }}>
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 group text-decoration-none"
          aria-label="RealLearn home"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid place-items-center flex-none font-display font-bold text-sm"
            style={{
              width: 40,
              height: 40,
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
              className="block truncate font-display text-[19px] sm:text-[20px] font-extrabold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              RealLearn <span style={{ color: 'var(--accent)' }}>AI</span>
            </span>
            <span
              className="hidden sm:block font-mono text-[11px] uppercase font-bold tracking-wider"
              style={{ color: 'var(--text-secondary)', lineHeight: 1 }}
            >
              The World Is Your Textbook
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-6 text-[14px] font-semibold"
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
            className="hidden sm:inline-flex btn btn-action"
            style={{ minHeight: 40, padding: '0 20px', fontSize: 13 }}
          >
            Start Learning Free ↗
          </a>

          <button
            type="button"
            className="xl:hidden grid place-items-center w-10 h-10 rounded-xl cursor-pointer"
            style={{ color: 'var(--text-primary)', border: '1px solid var(--border-default)', background: 'var(--bg-card)' }}
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
          className="xl:hidden fixed inset-x-0 z-50 px-5 pb-8 pt-4 flex flex-col gap-4"
          style={{
            top: 76,
            bottom: 0,
            background: 'color-mix(in srgb, var(--bg-primary) 95%, transparent)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-default)',
            overflowY: 'auto',
          }}
        >
          <nav aria-label="Mobile" className="flex flex-col text-lg font-display font-bold gap-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-[color:var(--border-default)]"
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
              Start Learning Free ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
