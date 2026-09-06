import { useEffect, useState } from 'react'
import Icon from './Icon'
import { useTheme } from '../theme'

const THEME_LABELS = {
  paper: { label: 'Paper', icon: 'sun' },
  ink: { label: 'Ink', icon: 'moon' },
}

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#why', label: 'Why' },
  { href: '#method', label: 'Method' },
  { href: '#how', label: 'How it Works' },
  { href: '#try', label: 'Demo' },
  { href: '#compare', label: 'FAQ' },
]

function ThemeSwitch({ theme, setTheme, themes }) {
  return (
    <div
      className="flex items-center p-1"
      style={{
        border: '1.5px solid var(--line)',
        borderRadius: 10,
        background: 'var(--bg-card)',
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
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
            style={{
              borderRadius: 7,
              background: isActive ? 'var(--lime)' : 'transparent',
              color: isActive ? '#131315' : 'var(--text-secondary)',
              minHeight: 30,
              border: 'none',
            }}
            onClick={() => setTheme(t)}
          >
            <Icon name={THEME_LABELS[t]?.icon || 'sun'} size={12} />
            <span className="hidden xl:inline">{THEME_LABELS[t]?.label || t}</span>
          </button>
        )
      })}
    </div>
  )
}

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="grid place-items-center flex-none"
      style={{ width: 30, height: 30, color: 'var(--ink)' }}
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="13" y1="2" x2="13" y2="24" />
        <line x1="2" y1="13" x2="24" y2="13" />
        <line x1="5.2" y1="5.2" x2="20.8" y2="20.8" />
        <line x1="20.8" y1="5.2" x2="5.2" y2="20.8" />
        <line x1="7.5" y1="10" x2="18.5" y2="16" />
        <line x1="18.5" y1="10" x2="7.5" y2="16" />
      </svg>
    </span>
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
    <div className="sticky top-0 z-50" style={{ padding: '14px 14px 0' }}>
      <header
        className="container"
        style={{
          background: 'var(--bg-card)',
          border: '1.5px solid var(--line)',
          borderRadius: 12,
          boxShadow: '4px 4px 0 var(--hard)',
          maxWidth: 'var(--maxw)',
        }}
      >
        <div className="flex items-center justify-between gap-3" style={{ height: 62, padding: '0 8px 0 16px' }}>
          <a
            href="#top"
            className="flex items-center gap-2.5"
            aria-label="RealLearn AI — home"
            onClick={() => setOpen(false)}
            style={{ textDecoration: 'none' }}
          >
            <LogoMark />
            <span
              className="font-display text-[17px] tracking-tight whitespace-nowrap"
              style={{ color: 'var(--text-primary)', fontWeight: 800 }}
            >
              RealLearn AI
            </span>
          </a>

          <nav
            className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Primary"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-opacity hover:opacity-60 py-2"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden md:block">
              <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
            </div>

            <a
              href="https://reallearn.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center font-display font-extrabold text-[13px] uppercase tracking-wide"
              style={{
                background: 'var(--lime)',
                color: '#131315',
                border: '1.5px solid var(--line)',
                borderRadius: '0 8px 8px 0',
                marginLeft: -2,
                padding: '0 18px',
                height: 46,
                textDecoration: 'none',
              }}
            >
              Get Started
            </a>
            <a
              href="https://reallearn.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get started with RealLearn AI"
              className="hidden sm:grid place-items-center flex-none"
              style={{
                width: 46,
                height: 46,
                background: '#131315',
                color: '#fff',
                border: '1.5px solid #131315',
                borderRadius: 8,
                fontSize: 20,
                fontWeight: 800,
                textDecoration: 'none',
                marginLeft: 6,
              }}
            >
              ↗
            </a>

            <button
              type="button"
              className="lg:hidden grid place-items-center cursor-pointer"
              style={{
                width: 44,
                height: 44,
                color: 'var(--text-primary)',
                border: '1.5px solid var(--line)',
                borderRadius: 8,
                background: 'var(--bg-card)',
              }}
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
            className="lg:hidden px-4 pb-5 pt-2 flex flex-col gap-1"
            style={{ borderTop: '1.5px solid var(--line)' }}
          >
            <nav className="flex flex-col font-display font-bold text-[17px]" aria-label="Mobile">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3"
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 flex items-center justify-between gap-3">
              <ThemeSwitch theme={theme} setTheme={setTheme} themes={themes} />
              <a
                href="https://reallearn.site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-action"
                style={{ minHeight: 44 }}
              >
                Get Started ↗
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
