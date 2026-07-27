import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const THEMES = ['paper', 'ink']
const STORAGE_KEY = 'reallearn-theme'

function getInitial() {
  if (typeof window === 'undefined') return 'ink'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && (THEMES.includes(saved) || saved === 'night' || saved === 'twilight')) {
    return saved === 'night' || saved === 'twilight' ? 'ink' : saved
  }
  return 'ink'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    const activeTheme = theme === 'night' || theme === 'twilight' ? 'ink' : theme
    document.documentElement.setAttribute('data-theme', activeTheme)
    window.localStorage.setItem(STORAGE_KEY, activeTheme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim()
      if (bg) meta.setAttribute('content', bg)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
