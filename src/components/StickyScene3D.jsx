/**
 * StickyScene3D / AmbientBackground Component
 * Provides a sleek, high-performance ambient mesh gradient & subtle glowing background layer.
 * Replaces heavy 3D floating canvas objects for a clean, professional aesthetic.
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
      {/* Radial Gradient Ambient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, color-mix(in srgb, var(--text-tertiary) 10%, transparent) 0%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }}
      />
      {/* Subtle Technical Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--border-default) 15%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--border-default) 15%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 75%)',
          opacity: 0.4,
        }}
      />
    </div>
  )
}
