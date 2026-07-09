import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Reveal-on-scroll wrapper. Adds `.in` when the element enters the viewport.
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(prefersReduced())

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, shown]
}

// Attach a small stagger delay helper for grids.
export function staggerStyle(i, base = 0, step = 0.07) {
  return { '--d': `${base + i * step}s` }
}
