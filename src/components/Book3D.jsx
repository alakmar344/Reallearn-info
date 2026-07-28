import { useState, useRef } from 'react'

const ASSETS = [
  {
    id: 'book',
    name: '3D Knowledge Spine',
    badge: 'Vol. 01 · Structured Journey',
    img: '/assets/hero_3d_spine_book.jpg',
    tags: ['Foundation', 'Mechanism', 'Real World'],
  },
  {
    id: 'orb',
    name: 'Knowledge Cosmos Orb',
    badge: 'Procedural Glass & Circuits',
    img: '/assets/knowledge_3d_orb.jpg',
    tags: ['WebGL 3D', 'Refraction', 'Live Serper'],
  },
  {
    id: 'trophy',
    name: '56 Achievements Trophy',
    badge: 'Legendary Chrome & Gold',
    img: '/assets/trophy_3d_legendary.jpg',
    tags: ['56 Badges', 'XP Levels', 'Streaks'],
  },
]

const DOODLES = [
  { e: '⚡', style: { top: '2%', left: '4%', fontSize: 26, '--dd': '0s' } },
  { e: '🚀', style: { top: '10%', right: '2%', fontSize: 32, '--dd': '0.6s' } },
  { e: '🧪', style: { bottom: '16%', left: '0%', fontSize: 28, '--dd': '1.2s' } },
  { e: '⭐', style: { bottom: '4%', right: '10%', fontSize: 24, '--dd': '1.8s' } },
  { e: '💡', style: { top: '42%', left: '-4%', fontSize: 26, '--dd': '2.4s' } },
]

export default function Book3D() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)')

  const currentAsset = ASSETS[activeIndex]

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = (-y / (rect.height / 2)) * 12
    const rotY = (x / (rect.width / 2)) * 12
    setTransform(`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg) scale(1)')
  }

  return (
    <div className="scene" style={{ minHeight: 420, position: 'relative' }}>
      {DOODLES.map((d) => (
        <span key={d.e} className="float-doodle" style={d.style} aria-hidden="true">
          {d.e}
        </span>
      ))}

      <span
        className="sticker sticker-3 xp-toast"
        style={{
          top: '8%',
          left: '-2%',
          background: 'var(--accent)',
          color: 'var(--bg)',
          fontWeight: 700,
          boxShadow: '0 8px 24px var(--shadow-a)',
          zIndex: 20,
        }}
        aria-hidden="true"
      >
        +25 XP 🎉
      </span>
      <span
        className="sticker sticker-2 xp-toast"
        style={{
          bottom: '12%',
          right: '-4%',
          transform: 'rotate(4deg)',
          background: 'var(--accent-action)',
          color: '#ffffff',
          fontWeight: 700,
          boxShadow: '0 8px 24px rgba(255, 62, 0, 0.3)',
          zIndex: 20,
        }}
        aria-hidden="true"
      >
        Quiz Passed! 💯
      </span>

      {/* Interactive 3D Card Stage with Realistic Tilt */}
      <div
        className="flex flex-col items-center justify-center h-full text-center"
        style={{ minHeight: 380, padding: 10, perspective: 1000 }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-card flex flex-col items-center gap-4 p-5 max-w-sm rounded-3xl transition-transform duration-200 ease-out cursor-pointer"
          style={{
            border: '2px solid var(--border-default)',
            background: 'color-mix(in srgb, var(--bg-card) 85%, transparent)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 60px var(--shadow-a)',
            transform,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Realistic 3D Asset Render Frame */}
          <div
            className="w-full aspect-square rounded-2xl overflow-hidden relative border border-[color:var(--border-default)] shadow-xl"
            style={{ background: '#0a0f18' }}
          >
            <img
              src={currentAsset.img}
              alt={currentAsset.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Realistic 3D Asset
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
              {currentAsset.name}
            </h3>
            <p className="text-xs font-mono tracking-wide uppercase mt-0.5" style={{ color: 'var(--accent)' }}>
              {currentAsset.badge}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {currentAsset.tags.map((tag) => (
              <span key={tag} className="chip text-[10px]" style={{ background: 'var(--bg-3)' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Asset Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mt-1">
            {ASSETS.map((asset, idx) => (
              <button
                key={asset.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === idx ? 'w-7 bg-[color:var(--accent)]' : 'bg-[color:var(--bg-3)] hover:opacity-80'
                }`}
                title={asset.name}
              />
            ))}
          </div>
        </div>
      </div>

      <p
        className="font-hand book-note"
        style={{
          position: 'absolute',
          bottom: -22,
          left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          color: 'var(--text-secondary)',
          fontSize: 20,
          whiteSpace: 'nowrap',
        }}
      >
        psst… hover card to tilt 3D assets & scroll for WebGL scene! 📜✨
      </p>
    </div>
  )
}
