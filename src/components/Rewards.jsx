import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const LEVELS = ['Curious', 'Explorer', 'Apprentice', 'Thinker', 'Polymath', 'Scholar', 'Sage']

const BADGES = [
  { e: '🥾', t: 'First Steps', d: 'Complete your first journey', tier: '#cd7f32' },
  { e: '🔥', t: 'Unstoppable', d: 'Keep a 30-day streak alive', tier: '#e5b80b' },
  { e: '🎨', t: 'Renaissance Mind', d: 'Explore 5 different subjects', tier: '#b8c4ce' },
  { e: '🦉', t: 'Night Owl', d: 'Learn after midnight', tier: '#cd7f32' },
  { e: '🐦', t: 'Early Bird', d: 'Learn before 8 am', tier: '#cd7f32' },
  { e: '💯', t: 'Perfectionist', d: 'Ace a whole journey, no misses', tier: '#a78bfa' },
]

// deterministic “activity” pattern for the mini heatmap (12 weeks × 7 days)
const CELLS = Array.from({ length: 84 }, (_, i) => ((i * 13 + 5) % 17) % 5)

export default function Rewards() {
  return (
    <section id="rewards" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="05"
          kicker="Make It a Habit"
          title="Learning that feels like a game 🎮"
          lead="XP, levels, streaks, badges — every quiz you pass builds a learner you can literally watch grow."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {/* XP & levels */}
          <Reveal>
            <article className="card card-hover" style={{ height: '100%' }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                <span className="emoji-bubble" aria-hidden="true">⚡</span>
                <span className="sticker sticker-3" style={{ fontSize: 12 }}>Level 4 · Thinker</span>
              </div>
              <h3 className="font-display" style={{ fontSize: 21, color: 'var(--ink)', marginBottom: 8 }}>
                XP &amp; levels
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-dim)', lineHeight: 1.55, marginBottom: 16 }}>
                Every quiz earns XP. Level up from <em>Curious</em> all the way to <em>Sage</em> —
                early wins come fast, big titles feel earned.
              </p>
              <div className="xp-track" role="img" aria-label="Example XP bar at 68 percent">
                <div className="xp-fill" />
              </div>
              <p className="font-hand" style={{ fontSize: 19, color: 'var(--accent)', marginTop: 8, textAlign: 'right' }}>
                212 / 325 XP — almost there! ✏️
              </p>
              <div className="flex flex-wrap gap-2" style={{ marginTop: 6 }}>
                {LEVELS.map((l, i) => (
                  <span key={l} className={`level-chip ${i === 3 ? 'active' : ''}`}>{l}</span>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Streaks & daily goal */}
          <Reveal delay={0.07}>
            <article className="card card-hover" style={{ height: '100%' }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                <span className="emoji-bubble" aria-hidden="true"><span className="flame">🔥</span></span>
                <span className="sticker" style={{ fontSize: 12 }}>12-day streak!</span>
              </div>
              <h3 className="font-display" style={{ fontSize: 21, color: 'var(--ink)', marginBottom: 8 }}>
                Streaks &amp; daily goals
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-dim)', lineHeight: 1.55, marginBottom: 18 }}>
                Pick a daily goal (1, 3, 5, or 8 parts), watch the ring fill, and keep the flame
                alive. Two streak freezes 🧊 protect you when life happens.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <svg width="86" height="86" viewBox="0 0 86 86" role="img" aria-label="Daily goal ring, 2 of 3 parts done">
                  <circle cx="43" cy="43" r="36" fill="none" stroke="var(--line-strong)" strokeWidth="8" />
                  <circle
                    cx="43" cy="43" r="36" fill="none"
                    stroke="var(--accent)" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray="226" strokeDashoffset="75"
                    transform="rotate(-90 43 43)"
                  />
                  <text x="43" y="48" textAnchor="middle" fontFamily="var(--font-display)" fontSize="17" fontWeight="700" fill="var(--ink)">2/3</text>
                </svg>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--ink-faint)', marginBottom: 6 }}>
                    Today&rsquo;s goal
                  </p>
                  <p className="font-display" style={{ fontSize: 16, color: 'var(--ink)' }}>
                    One more part and the flame ignites 🔥
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Badges */}
          <Reveal delay={0.07}>
            <article className="card card-hover" style={{ height: '100%' }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                <span className="emoji-bubble" aria-hidden="true">🏆</span>
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                  6 of 17 shown
                </span>
              </div>
              <h3 className="font-display" style={{ fontSize: 21, color: 'var(--ink)', marginBottom: 8 }}>
                17 collectible badges
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-dim)', lineHeight: 1.55, marginBottom: 16 }}>
                Bronze, silver, gold, and legendary tiers — each with its own animated unlock party.
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {BADGES.map((b) => (
                  <div key={b.t} className="badge-tile" style={{ '--tier': b.tier }}>
                    <span className="badge-emoji" aria-hidden="true">{b.e}</span>
                    <span>
                      <span className="block font-display" style={{ fontSize: 14.5, color: 'var(--ink)' }}>{b.t}</span>
                      <span className="block" style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{b.d}</span>
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Heatmap */}
          <Reveal delay={0.14}>
            <article className="card card-hover" style={{ height: '100%' }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                <span className="emoji-bubble" aria-hidden="true">🗓️</span>
                <span className="sticker sticker-4" style={{ fontSize: 12 }}>You, growing 🌱</span>
              </div>
              <h3 className="font-display" style={{ fontSize: 21, color: 'var(--ink)', marginBottom: 8 }}>
                Your learning heatmap
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-dim)', lineHeight: 1.55, marginBottom: 18 }}>
                A GitHub-style grid of the last 14 weeks. Watch the empty squares fill up
                as curiosity becomes a routine.
              </p>
              <div className="heatmap" role="img" aria-label="Example activity heatmap over twelve weeks">
                {CELLS.map((v, i) => (
                  <i key={i} style={{ opacity: v === 0 ? 0.1 : 0.2 + v * 0.2 }} />
                ))}
              </div>
              <div className="flex items-center gap-2" style={{ marginTop: 12 }}>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em]" style={{ color: 'var(--ink-faint)' }}>Less</span>
                {[0.15, 0.4, 0.6, 0.8, 1].map((o) => (
                  <i key={o} style={{ width: 11, height: 11, borderRadius: 3, background: 'var(--accent)', opacity: o, display: 'inline-block' }} />
                ))}
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em]" style={{ color: 'var(--ink-faint)' }}>More</span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
