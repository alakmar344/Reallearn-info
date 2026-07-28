import { useState } from 'react'
import Reveal from './Reveal'

const BADGES = [
  // Bronze Tiers (1-14)
  { icon: '🌱', name: 'First Steps', tier: 'Bronze', desc: 'Complete your first lesson' },
  { icon: '📖', name: 'Daily Reader', tier: 'Bronze', desc: 'Read 1 article in a day' },
  { icon: '✨', name: 'Curiosity Spark', tier: 'Bronze', desc: 'Ask your first question' },
  { icon: '🎯', name: 'Quiz Rookie', tier: 'Bronze', desc: 'Pass your first quiz' },
  { icon: '📝', name: 'Note Taker', tier: 'Bronze', desc: 'Save a lesson note' },
  { icon: '🌅', name: 'Early Bird', tier: 'Bronze', desc: 'Complete a lesson before 8 AM' },
  { icon: '🌙', name: 'Night Owl', tier: 'Bronze', desc: 'Complete a lesson after 10 PM' },
  { icon: '🔍', name: 'Term Explorer', tier: 'Bronze', desc: 'Look up 5 definitions' },
  { icon: '🇮🇳', name: 'Language Pioneer', tier: 'Bronze', desc: 'Try a non-English language' },
  { icon: '⚡', name: 'Fast Reader', tier: 'Bronze', desc: 'Finish a lesson in 3 mins' },
  { icon: '🧪', name: 'Science Starter', tier: 'Bronze', desc: 'Complete a physics topic' },
  { icon: '🔢', name: 'Math Mind', tier: 'Bronze', desc: 'Solve a math mechanism' },
  { icon: '📜', name: 'History Buff', tier: 'Bronze', desc: 'Explore a history topic' },
  { icon: '💻', name: 'Coding Novice', tier: 'Bronze', desc: 'Learn a CS topic' },

  // Silver Tiers (15-28)
  { icon: '🔥', name: 'Streak Master', tier: 'Silver', desc: 'Maintain a 5-day streak' },
  { icon: '📰', name: 'News Explorer', tier: 'Silver', desc: 'Read 5 real-world news parts' },
  { icon: '🧠', name: 'Quiz Veteran', tier: 'Silver', desc: 'Pass 10 quizzes with 100%' },
  { icon: '🌊', name: 'Deep Dive', tier: 'Silver', desc: 'Complete all 3 parts 5 times' },
  { icon: '🌐', name: 'Polyglot Learner', tier: 'Silver', desc: 'Learn in 3 different languages' },
  { icon: '🛡️', name: 'Streak Guard', tier: 'Silver', desc: 'Use a streak freeze successfully' },
  { icon: '🚀', name: 'Speed Demon', tier: 'Silver', desc: 'Ace 3 quizzes in under 1 min' },
  { icon: '🗺️', name: 'Map Navigator', tier: 'Silver', desc: 'Explore 5 different subjects' },
  { icon: '⚡', name: 'Fast Track', tier: 'Silver', desc: 'Earn 500 total XP' },
  { icon: '⚛️', name: 'Physics Whiz', tier: 'Silver', desc: 'Master 3 physics topics' },
  { icon: '🧬', name: 'Bio Specialist', tier: 'Silver', desc: 'Complete 3 biology lessons' },
  { icon: '📈', name: 'Econ Expert', tier: 'Silver', desc: 'Master 3 economics topics' },
  { icon: '🎨', name: 'Theme Switcher', tier: 'Silver', desc: 'Try all 3 display modes' },
  { icon: '🎙️', name: 'Voice Voyager', tier: 'Silver', desc: 'Ask 5 questions with voice' },

  // Gold Tiers (29-42)
  { icon: '🧠', name: 'Deep Thinker', tier: 'Gold', desc: 'Earn 1,000 total XP' },
  { icon: '👑', name: 'Quiz Expert', tier: 'Gold', desc: 'Pass 25 quizzes seamlessly' },
  { icon: '📅', name: '30-Day Legend', tier: 'Gold', desc: 'Reach a 30-day streak' },
  { icon: '🎓', name: 'Master Scholar', tier: 'Gold', desc: 'Reach Level 5 (Scholar)' },
  { icon: '🌌', name: 'Cosmos Explorer', tier: 'Gold', desc: 'Complete 50 lesson parts' },
  { icon: '⚛️', name: 'Quantum Mind', tier: 'Gold', desc: 'Ace 10 advanced difficulty lessons' },
  { icon: '💻', name: 'Code Architect', tier: 'Gold', desc: 'Complete 10 computer science lessons' },
  { icon: '🗣️', name: 'Polyglot Master', tier: 'Gold', desc: 'Learn lessons in 6 languages' },
  { icon: '💯', name: 'Perfectionist', tier: 'Gold', desc: 'Get 100% on 15 consecutive quizzes' },
  { icon: '🛡️', name: 'Knowledge Sentinel', tier: 'Gold', desc: 'Review 20 saved journeys' },
  { icon: '🔮', name: 'Catalyst', tier: 'Gold', desc: 'Complete 5 lessons in a single day' },
  { icon: '🎯', name: 'Logic Master', tier: 'Gold', desc: 'Master all Mechanism parts' },
  { icon: '🌄', name: 'Horizon Conqueror', tier: 'Gold', desc: 'Explore all 11 subject categories' },
  { icon: '📊', name: 'Data Titan', tier: 'Gold', desc: 'Fill 50 squares on heatmap' },

  // Legendary Tiers (43-56)
  { icon: '🏆', name: 'Sage of RealLearn', tier: 'Legendary', desc: 'Reach Level 6 (Sage tier)' },
  { icon: '⚡', name: 'Quiz God', tier: 'Legendary', desc: 'Pass 50 quizzes with flawless accuracy' },
  { icon: '🔥', name: '100-Day Overlord', tier: 'Legendary', desc: 'Achieve a legendary 100-day streak' },
  { icon: '🤖', name: 'Gemma Mastermind', tier: 'Legendary', desc: 'Complete 100 3-part AI journeys' },
  { icon: '🌍', name: 'Ultimate Polyglot', tier: 'Legendary', desc: 'Complete journeys in all 12 Indian languages' },
  { icon: '♾️', name: 'Infinity Scholar', tier: 'Legendary', desc: 'Earn 5,000 total XP' },
  { icon: '👑', name: 'RealLearn Grandmaster', tier: 'Legendary', desc: 'Reach maximum Level 7 status' },
  { icon: '🏛️', name: 'Sovereign Thinker', tier: 'Legendary', desc: 'Unlock all 11 subject masteries' },
  { icon: '👁️', name: 'Omniscient Mind', tier: 'Legendary', desc: 'Complete 250 quiz challenges' },
  { icon: '💎', name: 'Titan of Truth', tier: 'Legendary', desc: 'Verify 50 real-world news sources' },
  { icon: '🌟', name: 'Luminary Sage', tier: 'Legendary', desc: 'Maintain 100% streak for 60 days' },
  { icon: '🔬', name: 'Apex Researcher', tier: 'Legendary', desc: 'Complete 20 advanced college topics' },
  { icon: '🔥', name: 'Eternal Flame', tier: 'Legendary', desc: 'Never lose a streak freeze' },
  { icon: '🥇', name: 'Paragon of Mastery', tier: 'Legendary', desc: 'Unlock all other 55 achievements' },
]

export default function Rewards() {
  const [tierFilter, setTierFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredBadges = BADGES.filter((b) => {
    const matchesTier = tierFilter === 'All' || b.tier === tierFilter
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase())
    return matchesTier && matchesSearch
  })

  return (
    <section id="rewards" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            05 · Rewards & Gamification
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Gamified Growth & Achievements.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Turn curiosity into a daily habit with XP levels, streak rings, 56 collectible badges, and a 14-week activity heatmap.
          </p>
        </Reveal>

        {/* 3D Realistic Asset Highlight Banner */}
        <Reveal delay={0.05} className="mb-12">
          <div
            className="glass-card p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden"
            style={{
              border: '2px solid var(--border-default)',
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--bg-card) 90%, var(--accent) 10%), var(--bg-card))',
            }}
          >
            <div className="flex flex-col gap-3">
              <span className="chip self-start" style={{ background: 'var(--accent-action)', color: '#fff', fontWeight: 700 }}>
                ✨ 56 Achievements Unlocked
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                Collect 56 Realistic 3D Badges & Trophies
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Earn XP, level up your cognitive rank from Curious Novice to RealLearn Grandmaster, and unlock custom 3D sculpted medals rendered with photorealistic materials and glowing neon cores.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#cd7f32] inline-block" />
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>14 Bronze</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#c0c0c0] inline-block" />
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>14 Silver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffd700] inline-block" />
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>14 Gold</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00ff66] inline-block" />
                  <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>14 Legendary</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <div className="relative group overflow-hidden rounded-2xl border-2 border-[color:var(--border-default)] shadow-2xl transition-transform hover:scale-105" style={{ width: 150, height: 150 }}>
                <img
                  src="/assets/trophy_3d_legendary.jpg"
                  alt="3D Legendary Trophy Asset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-white font-bold">3D Legendary Trophy</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl border-2 border-[color:var(--border-default)] shadow-2xl transition-transform hover:scale-105" style={{ width: 150, height: 150 }}>
                <img
                  src="/assets/knowledge_3d_orb.jpg"
                  alt="3D Knowledge Orb Asset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-white font-bold">3D Knowledge Orb</span>
                </div>
              </div>
            </div>
          </div>
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

        {/* 56 Collectible Badges Grid */}
        <Reveal>
          <div className="glass-card p-6 sm:p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  56 Collectible Badges Matrix
                </h3>
                <p className="text-xs text-muted" style={{ color: 'var(--text-secondary)' }}>
                  Showing {filteredBadges.length} of 56 achievements across Bronze, Silver, Gold & Legendary ranks
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  placeholder="Search badges..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-full border bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] focus:outline-none"
                  style={{ borderColor: 'var(--border-default)' }}
                />

                {['All', 'Bronze', 'Silver', 'Gold', 'Legendary'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTierFilter(t)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                    style={{
                      background: tierFilter === t ? 'var(--accent)' : 'var(--bg-3)',
                      color: tierFilter === t ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 max-h-[460px] overflow-y-auto pr-1">
              {filteredBadges.map((b) => (
                <div
                  key={b.name}
                  className="p-3 rounded-xl border border-[color:var(--border-default)] transition-all hover:scale-105 hover:border-[color:var(--accent)] flex flex-col items-center text-center justify-between"
                  style={{ background: 'var(--bg-primary)', minHeight: 110 }}
                >
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="font-bold text-xs leading-tight" style={{ color: 'var(--text-primary)' }}>{b.name}</div>
                  <div className="text-[10px] leading-tight my-1" style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>{b.desc}</div>
                  <div
                    className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full mt-auto"
                    style={{
                      background: b.tier === 'Legendary' ? 'rgba(0,255,102,0.15)' : b.tier === 'Gold' ? 'rgba(255,215,0,0.15)' : 'var(--bg-3)',
                      color: b.tier === 'Legendary' ? 'var(--accent)' : b.tier === 'Gold' ? '#ffd700' : 'var(--text-secondary)',
                    }}
                  >
                    {b.tier}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
