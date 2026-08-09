/**
 * AmbientBackground — a fixed, GPU-friendly aurora field.
 * Three drifting aurora blobs, a masked technical grid, a soft top
 * vignette, and a fine film-grain overlay give the page luminous depth
 * without any heavy canvas/3D work.
 */
export default function StickyScene3D() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blob — emerald */}
      <div
        style={{
          position: 'absolute',
          top: '-18%',
          left: '-8%',
          width: '58vw',
          height: '58vw',
          maxWidth: 780,
          maxHeight: 780,
          background: 'radial-gradient(circle, var(--aurora-1) 0%, transparent 68%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
          animation: 'aurora-drift 26s ease-in-out infinite',
        }}
      />
      {/* Aurora blob — teal */}
      <div
        style={{
          position: 'absolute',
          bottom: '-22%',
          right: '-6%',
          width: '64vw',
          height: '64vw',
          maxWidth: 860,
          maxHeight: 860,
          background: 'radial-gradient(circle, var(--aurora-2) 0%, transparent 68%)',
          filter: 'blur(90px)',
          borderRadius: '50%',
          animation: 'aurora-drift 32s ease-in-out infinite reverse',
        }}
      />
      {/* Aurora blob — periwinkle, center accent */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '42%',
          width: '46vw',
          height: '46vw',
          maxWidth: 620,
          maxHeight: 620,
          background: 'radial-gradient(circle, var(--aurora-3) 0%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          animation: 'aurora-drift 40s ease-in-out infinite',
        }}
      />

      {/* Masked technical grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, rgba(0,0,0,0.9) 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, rgba(0,0,0,0.9) 0%, transparent 80%)',
        }}
      />

      {/* Fine film grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 'var(--grain-opacity)',
          mixBlendMode: 'overlay',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
