import { useState, useEffect } from 'react'

/**
 * Custom hook that tracks window scroll position and progress [0..1]
 * with passive event listeners for high performance (60-120 fps).
 */
export function useScrollProgress() {
  const [scrollState, setScrollState] = useState({
    progress: 0,
    scrollY: 0,
    isScrolled: false,
  })

  useEffect(() => {
    let ticking = false

    const updateScroll = () => {
      const totalScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      )
      const currentY = window.scrollY
      const progress = Math.min(Math.max(currentY / totalScroll, 0), 1)

      setScrollState({
        progress,
        scrollY: currentY,
        isScrolled: currentY > 20,
      })

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    // Initial update
    updateScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return scrollState
}
