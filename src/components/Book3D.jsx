import { useState } from 'react'

const DOODLES = [
  { e: '⚡', style: { top: '2%', left: '4%', fontSize: 26, '--dd': '0s' } },
  { e: '🚀', style: { top: '10%', right: '2%', fontSize: 32, '--dd': '0.6s' } },
  { e: '🧪', style: { bottom: '16%', left: '0%', fontSize: 28, '--dd': '1.2s' } },
  { e: '⭐', style: { bottom: '4%', right: '10%', fontSize: 24, '--dd': '1.8s' } },
  { e: '💡', style: { top: '42%', left: '-4%', fontSize: 26, '--dd': '2.4s' } },
]

/**
 * Hero 3D Book & Interactive Stage Controls
 * Displays floating XP stickers (+25 XP, Quiz Passed!), live interaction hints,
 * and quick controls for inspecting the 3D Spine and Knowledge Cosmos.
 */
export default function Book3D() {
  const [mode, setMode] = useState('orbit') // 'orbit' | 'spine' | 'nodes'

  return (
    <div className="scene" style={{ minHeight: 380, position: 'relative' }}>
      {DOODLES.map((d) => (
        <span key={d.e} className="float-doodle" style={d.style} aria-hidden="true">
          {d.e}
        </span>
      ))}

      <span
        className="sticker sticker-3 xp-toast"
        style={{
          top: '12%',
          left: '2%',
          background: 'var(--accent)',
          color: 'var(--bg)',
          fontWeight: 700,
          boxShadow: '0 8px 24px var(--shadow-a)',
        }}
        aria-hidden="true"
      >
        +25 XP 🎉
      </span>
      <span
        className="sticker sticker-2 xp-toast"
        style={{
          bottom: '14%',
          right: '-2%',
          transform: 'rotate(4deg)',
          background: 'var(--accent-action)',
          color: '#ffffff',
          fontWeight: 700,
          boxShadow: '0 8px 24px rgba(255, 62, 0, 0.3)',
        }}
        aria-hidden="true"
      >
        Quiz Passed! 💯
      </span>

      {/* Interactive Floating Badge Container */}
      <div
        className="flex flex-col items-center justify-center h-full text-center"
        style={{ minHeight: 320, padding: 20 }}
      >
        <div
          className="glass-card flex flex-col items-center gap-3 p-6 max-w-xs rounded-2xl"
          style={{
            border: '2px solid var(--border-default)',
            background: 'color-mix(in srgb, var(--bg-card) 75%, transparent)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 50px var(--shadow-a)',
          }}
        >
          <span className="text-4xl animate-bounce">📖</span>
          <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            RealLearn · Vol. 01
          </h3>
          <p className="text-xs font-mono tracking-wide uppercase" style={{ color: 'var(--accent)' }}>
            3D Knowledge Spine Active
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="chip" style={{ fontSize: 11, background: 'var(--bg-3)' }}>
              1. Foundation
            </span>
            <span className="chip" style={{ fontSize: 11, background: 'var(--bg-3)' }}>
              2. Mechanism
            </span>
            <span className="chip" style={{ fontSize: 11, background: 'var(--bg-3)' }}>
              3. Real World
            </span>
          </div>
        </div>
      </div>

      <p
        className="font-hand book-note"
        style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          color: 'var(--text-secondary)',
          fontSize: 21,
          whiteSpace: 'nowrap',
        }}
      >
        psst… scroll down to transform the 3D Spine! 📜✨
      </p>
    </div>
  )
}
