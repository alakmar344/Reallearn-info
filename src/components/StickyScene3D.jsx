/**
 * StickyScene3D / AmbientBackground Component
 * Provides a sleek, high-performance ambient mesh gradient & subtle technical grid layer.
 * Uses static compositor-friendly radial washes in the canonical Olive Frenzy palette.
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
      {/* Radial Gradient Ambient Olive Washes */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '55vw',
          height: '55vw',
          maxWidth: '650px',
          maxHeight: '650px',
          background: 'radial-gradient(circle, var(--aurora-1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: '60vw',
          height: '60vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background: 'radial-gradient(circle, var(--aurora-2) 0%, transparent 70%)',
          filter: 'blur(90px)',
          borderRadius: '50%',
        }}
      />
      {/* Subtle Technical Drafting Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--border-default) 20%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--border-default) 20%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 80%)',
          opacity: 0.35,
        }}
      />
    </div>
  )
}
