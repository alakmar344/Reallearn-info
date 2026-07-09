const PARTS = [
  {
    n: '01',
    title: 'Foundation',
    state: 'Unlocked',
    stateKind: 'good',
    lines: [92, 74, 84],
    ico: '✓',
  },
  {
    n: '02',
    title: 'Mechanism',
    state: 'In progress',
    stateKind: 'active',
    lines: [88, 95, 62],
    ico: '◐',
  },
  {
    n: '03',
    title: 'Real World',
    state: 'Score 100% to unlock',
    stateKind: 'lock',
    lines: [80, 66],
    ico: '🔒',
  },
]

export default function LessonStack() {
  return (
    <div style={{ position: 'relative', width: 'min(360px, 86vw)' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-30px -20px',
          background: 'var(--glow)',
          filter: 'blur(46px)',
          opacity: 0.22,
          borderRadius: '50%',
        }}
      />
      <div style={{ position: 'relative' }}>
        {PARTS.map((p, i) => (
          <article
            key={p.n}
            className="card"
            style={{
              marginBottom: i < PARTS.length - 1 ? 16 : 0,
              transform: `translateY(${i * 6}px) rotate(${i % 2 ? 0.6 : -0.6}deg)`,
              opacity: p.stateKind === 'lock' ? 0.96 : 1,
            }}
          >
            <span className="fold-line" />
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span
                aria-hidden="true"
                className="grid place-items-center"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 4,
                  border: '1.5px solid var(--line-strong)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                }}
              >
                {p.ico}
              </span>
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                Part {p.n}
              </span>
            </div>

            <h3 className="font-display" style={{ fontSize: 21, color: 'var(--ink)', marginBottom: 12 }}>
              {p.title}
            </h3>

            <div className="flex flex-col gap-2" style={{ marginBottom: 14, opacity: p.stateKind === 'lock' ? 0.5 : 1 }}>
              {p.lines.map((w, k) => (
                <span
                  key={k}
                  style={{
                    height: 7,
                    borderRadius: 4,
                    width: `${w}%`,
                    background: 'linear-gradient(90deg, color-mix(in srgb,var(--ink-dim) 35%, transparent), color-mix(in srgb,var(--ink-dim) 12%, transparent))',
                  }}
                />
              ))}
            </div>

            <p
              className="font-mono text-[10.5px] tracking-[0.06em] uppercase flex items-center gap-2"
              style={{ color: p.stateKind === 'good' ? 'var(--good)' : p.stateKind === 'active' ? 'var(--accent)' : 'var(--ink-faint)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
              {p.state}
            </p>
          </article>
        ))}
      </div>

      <p className="font-display italic" style={{ color: 'var(--ink-faint)', fontSize: 14.5, marginTop: 22, textAlign: 'center' }}>
        Every lesson follows the same spine &mdash; so does this page.
      </p>
    </div>
  )
}
