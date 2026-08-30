/**
 * StickyScene3D / AmbientBackground Component
 * Razor-sharp brutalist ambient field: zero blur anywhere.
 * A loud drafting grid, a hard halftone dot-matrix band, and
 * hard-edged geometric frames in the canonical acid palette.
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
      {/* Loud technical drafting grid — full bleed, hard lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--border-default) 38%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--border-default) 38%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.55,
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
            'radial-gradient(color-mix(in srgb, var(--accent) 40%, transparent) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          opacity: 0.45,
          maskImage: 'linear-gradient(to left, #000 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, #000 30%, transparent 100%)',
        }}
      />

      {/* Hard-edged rotated frame — top left */}
      <div
        style={{
          position: 'absolute',
          top: '-8%',
          left: '-4%',
          width: 'clamp(220px, 30vw, 520px)',
          height: 'clamp(220px, 30vw, 520px)',
          border: '3px solid color-mix(in srgb, var(--accent) 26%, transparent)',
          transform: 'rotate(12deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-4%',
          left: '-1%',
          width: 'clamp(160px, 22vw, 380px)',
          height: 'clamp(160px, 22vw, 380px)',
          border: '2px solid color-mix(in srgb, var(--accent) 16%, transparent)',
          transform: 'rotate(-7deg)',
        }}
      />

      {/* Hard-edged frame stack — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '2%',
          width: 'clamp(260px, 34vw, 600px)',
          height: 'clamp(260px, 34vw, 600px)',
          border: '3px solid color-mix(in srgb, var(--accent) 22%, transparent)',
          transform: 'rotate(-14deg)',
        }}
      />

      {/* Diagonal accent hazard stripes — bottom left corner */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'clamp(180px, 24vw, 420px)',
          height: 'clamp(90px, 12vw, 210px)',
          background:
            'repeating-linear-gradient(-45deg, color-mix(in srgb, var(--accent) 18%, transparent) 0 10px, transparent 10px 30px)',
          maskImage: 'linear-gradient(to top right, #000 20%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to top right, #000 20%, transparent 80%)',
        }}
      />
    </div>
  )
}
