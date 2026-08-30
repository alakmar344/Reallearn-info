/**
 * StickyScene3D / AmbientBackground Component
 * Brutalist-maximalist ambient field: a loud drafting grid, a hard halftone
 * dot-matrix band, and saturated olive washes in the canonical palette.
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
      {/* Saturated olive washes — bolder presence */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '8%',
          width: '58vw',
          height: '58vw',
          maxWidth: '760px',
          maxHeight: '760px',
          background: 'radial-gradient(circle, var(--aurora-1) 0%, transparent 68%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-12%',
          right: '4%',
          width: '62vw',
          height: '62vw',
          maxWidth: '820px',
          maxHeight: '820px',
          background: 'radial-gradient(circle, var(--aurora-2) 0%, transparent 68%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Loud technical drafting grid — full bleed, no vignette softening */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--border-default) 34%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--border-default) 34%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          opacity: 0.5,
        }}
      />

      {/* Hard halftone dot-matrix band along the right edge */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'clamp(120px, 18vw, 340px)',
          backgroundImage:
            'radial-gradient(color-mix(in srgb, var(--accent) 32%, transparent) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          opacity: 0.4,
          maskImage: 'linear-gradient(to left, #000 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, #000 30%, transparent 100%)',
        }}
      />
    </div>
  )
}
