import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: '100%',
        background: 'var(--glow)',
        transform: `scaleX(${p / 100})`,
        transformOrigin: '0 50%',
        zIndex: 60,
        willChange: 'transform',
      }}
    />
  )
}
