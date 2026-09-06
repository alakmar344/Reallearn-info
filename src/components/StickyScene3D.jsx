/**
 * AmbientBackground — subtle blueprint field for the volt-paper system.
 * The site shell already carries the drafting grid; this layer adds a
 * soft volt wash, a dot-matrix band, and faint technical frames.
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
      {/* Volt wash top */}
      <div
        style={{
          position: 'absolute',
          top: '-12%',
          left: '8%',
          right: '8%',
          height: '38%',
          background: 'radial-gradient(60% 90% at 50% 0%, rgba(197,248,42,0.16) 0%, transparent 70%)',
        }}
      />
      {/* Dot-matrix band, right edge */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'clamp(120px, 16vw, 300px)',
          backgroundImage: 'radial-gradient(rgba(197,248,42,0.28) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          opacity: 0.5,
          maskImage: 'linear-gradient(to left, #000 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, #000 30%, transparent 100%)',
        }}
      />
      {/* Faint technical frames */}
      <div
        style={{
          position: 'absolute',
          top: '-6%',
          left: '-3%',
          width: 'clamp(200px, 26vw, 440px)',
          height: 'clamp(200px, 26vw, 440px)',
          border: '1.5px solid rgba(197,248,42,0.25)',
          borderRadius: 18,
          transform: 'rotate(10deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-8%',
          right: '4%',
          width: 'clamp(240px, 30vw, 520px)',
          height: 'clamp(240px, 30vw, 520px)',
          border: '1.5px solid rgba(197,248,42,0.2)',
          borderRadius: 18,
          transform: 'rotate(-12deg)',
        }}
      />
    </div>
  )
}
