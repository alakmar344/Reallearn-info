import { useRef } from 'react'

const DOODLES = [
  { e: '✨', style: { top: '2%', left: '4%', fontSize: 26, '--dd': '0s' } },
  { e: '🚀', style: { top: '10%', right: '2%', fontSize: 32, '--dd': '0.6s' } },
  { e: '🧪', style: { bottom: '16%', left: '0%', fontSize: 28, '--dd': '1.2s' } },
  { e: '⭐', style: { bottom: '4%', right: '10%', fontSize: 24, '--dd': '1.8s' } },
  { e: '💡', style: { top: '42%', left: '-4%', fontSize: 26, '--dd': '2.4s' } },
]

/**
 * A real 3D object — a pure-CSS cuboid book (cover, spine, pages,
 * top & bottom edges) built with transform-style: preserve-3d.
 * It idles with a gentle float + rotation, and tilts toward your
 * pointer on devices with a mouse/trackpad.
 */
export default function Book3D() {
  const tiltRef = useRef(null)

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onMove = (e) => {
    const el = tiltRef.current
    if (!el || reduced() || e.pointerType === 'touch') return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${x * 34}deg) rotateX(${-y * 22}deg)`
  }

  const onLeave = () => {
    const el = tiltRef.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      className="scene"
      style={{ minHeight: 380 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {DOODLES.map((d) => (
        <span key={d.e} className="float-doodle" style={d.style} aria-hidden="true">
          {d.e}
        </span>
      ))}

      <div className="book-tilt" ref={tiltRef}>
        <div className="book" role="img" aria-label="A floating 3D textbook with the RealLearn cover">
          <div className="book-face spine" aria-hidden="true">
            <span className="spine-text">RealLearn · Vol. 01</span>
          </div>
          <div className="book-face pages" aria-hidden="true" />
          <div className="book-face top" aria-hidden="true" />
          <div className="book-face bottom" aria-hidden="true" />
          <div className="book-face back" aria-hidden="true" />
          <div className="book-face front" aria-hidden="true">
            <div className="cover-inner">
              <span className="cover-emoji">📖</span>
              <span className="cover-title">RealLearn</span>
              <span className="cover-sub">The World Is Your Textbook</span>
              <span className="cover-band">any question → a real lesson</span>
            </div>
          </div>
        </div>
      </div>

      <div className="book-shadow" aria-hidden="true" />

      <p
        className="font-hand book-note"
        style={{
          position: 'absolute',
          bottom: -26,
          left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          color: 'var(--ink-dim)',
          fontSize: 21,
          whiteSpace: 'nowrap',
        }}
      >
        psst… move your mouse over me! 👆
      </p>
    </div>
  )
}
