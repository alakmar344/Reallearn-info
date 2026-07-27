import Reveal from './Reveal'

const BADGES = [
  { icon: '🌱', name: 'First Steps', tier: 'Bronze' },
  { icon: '🔥', name: 'Streak Master', tier: 'Silver' },
  { icon: '🧠', name: 'Deep Thinker', tier: 'Gold' },
  { icon: '👑', name: 'Sage of RealLearn', tier: 'Legendary' },
  { icon: '🌐', name: 'Polyglot Learner', tier: 'Gold' },
  { icon: '⚡', name: 'Fast Track', tier: 'Silver' },
  { icon: '📰', name: 'News Explorer', tier: 'Bronze' },
  { icon: '🏆', name: 'Quiz Master', tier: 'Legendary' },
]

export default function Rewards() {
  return (
    <section id="rewards" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            05 · Rewards System
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Gamified Growth & Achievements.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Turn curiosity into a daily habit with XP levels, streak rings, 17 collectible badges, and a 14-week activity heatmap.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Level Progress */}
          <Reveal delay={0.08}>
            <div className="glass-card p-6 h-full flex flex-col justify-between">
              <div>
                <span className="chip mb-4" style={{ background: 'var(--bg-3)', fontSize: 12 }}>
                  XP & Levels
                </span>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Level 4 · Thinker
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  450 / 750 XP to Apprentice
                </p>
                <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'var(--bg-3)' }}>
                  <div className="h-full rounded-full" style={{ width: '60%', background: 'var(--accent)' }} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Streak Ring */}
          <Reveal delay={0.16}>
            <div className="glass-card p-6 h-full flex flex-col justify-between">
              <div>
                <span className="chip mb-4" style={{ background: 'var(--bg-3)', fontSize: 12 }}>
                  Daily Goal Ring
                </span>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  🔥 5 Day Streak
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Goal: 3 parts/day · 2 Streak Freezes available
                </p>
              </div>
            </div>
          </Reveal>

          {/* Activity Heatmap Preview */}
          <Reveal delay={0.24}>
            <div className="glass-card p-6 h-full flex flex-col justify-between">
              <div>
                <span className="chip mb-4" style={{ background: 'var(--bg-3)', fontSize: 12 }}>
                  14-Week Activity Heatmap
                </span>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Consistency Grid
                </h3>
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square rounded-sm"
                      style={{
                        background: i % 4 === 0 ? 'var(--accent)' : i % 3 === 0 ? 'color-mix(in srgb, var(--accent) 50%, transparent)' : 'var(--bg-3)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 17 Collectible Badges Grid */}
        <Reveal>
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
              17 Collectible Badges (Bronze, Silver, Gold, Legendary)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
              {BADGES.map((b) => (
                <div key={b.name} className="p-4 rounded-xl border border-[color:var(--border-default)]" style={{ background: 'var(--bg-primary)' }}>
                  <div className="text-3xl mb-2">{b.icon}</div>
                  <div className="font-bold text-xs" style={{ color: 'var(--text-primary)' }}>{b.name}</div>
                  <div className="text-[10px] font-mono mt-1" style={{ color: 'var(--accent)' }}>{b.tier}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
