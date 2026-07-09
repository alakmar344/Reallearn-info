import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const THEMES = ['paper', 'night', 'twilight']
const STORAGE_KEY = 'reallearn-theme'

function getInitial() {
  if (typeof window === 'undefined') return 'paper'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && THEMES.includes(saved)) return saved
  return 'paper'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
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
