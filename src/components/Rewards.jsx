import { useState } from 'react'
import Reveal from './Reveal'

const FRAMEWORK_PILLARS = [
  {
    id: 'multi-provider',
    num: '01',
    title: 'Multi-Provider Resilient AI Circuit',
    tagline: 'Groq LPUs + Mistral AI + NVIDIA NIM + Cloudflare Edge',
    desc: 'Eliminates single-provider bottlenecks with sub-second Groq LPU inference, streamed SSE deltas, streaming JSON mode on Mistral, and automated circuit-breaking fallbacks.',
    metrics: [
      { label: 'Time-To-First-Token', val: '< 400ms' },
      { label: 'Uptime Reliability', val: '99.99%' },
    ],
    features: [
      'Groq LPUs: Qwen 3.6 27B & GPT-OSS 120B with sliding 60s TPM tracker',
      'Mistral AI: Streaming JSON mode for low-latency cold-start rescue',
      'NVIDIA NIM & Cloudflare Workers AI: 70B–150B parameter resilient failover',
    ],
  },
  {
    id: 'personalization',
    num: '02',
    title: 'On-Device Learning Personalization',
    tagline: 'Adaptive Context Snippets with Zero Server Storage',
    desc: 'Builds an on-device learning profile from verified quiz performance (strengths and weaknesses) and custom learner goals, injecting compact context snippets into prompts without storing private data on servers.',
    metrics: [
      { label: 'Data Storage', val: '100% On-Device' },
      { label: 'Context Budget', val: '≤ 700 chars' },
    ],
    features: [
      'Learner Goals & Free-Text Notes carry highest prompt authority',
      'Adaptive decision engine scaffolds weaknesses and builds on strengths',
      'Zero user tracking: Profile stays in browser localStorage',
    ],
  },
  {
    id: 'multilingual',
    num: '03',
    title: 'Native Multilingual & Adaptive Tiers',
    tagline: '12 Indian Languages & 3 Calibrated Difficulty Tiers',
    desc: 'Linguistic nuance is preserved through direct native multilingual generation rather than lossy post-generation machine translation, supporting English, Hindi, Gujarati, Tamil, Bengali, and 7 more.',
    metrics: [
      { label: 'Supported Languages', val: '12 Native' },
      { label: 'Difficulty Tiers', val: '3 Calibrated' },
    ],
    features: [
      'Class 6–8: Intuitive visual analogies & fundamental intuition',
      'Class 9–10: Quantitative equations, mechanisms, and formulas',
      'College Tier: Advanced literature, edge cases, and industry depth',
    ],
  },
  {
    id: 'grounding-gamification',
    num: '04',
    title: 'Live News Grounding & Gamification',
    tagline: 'Serper API Integration, 56 Badges & Streak Freezes',
    desc: 'Connects abstract theory directly to real-world live events in Part 3, supported by an honest gamification system with XP, level progression, 56 achievements, and earnable streak freezes.',
    metrics: [
      { label: 'Achievements', val: '56 Badges' },
      { label: 'Live Grounding', val: '100% Verifiable' },
    ],
    features: [
      'Live Serper API web news search woven directly into Part 3',
      '56 Achievements across Easy, Medium, and Legendary milestones',
      'Earnable streak freezes (+1 per 7 goal-met days, max 2)',
    ],
  },
]

export default function Rewards() {
  const [activePillar, setActivePillar] = useState('multi-provider')

  const current = FRAMEWORK_PILLARS.find((p) => p.id === activePillar) || FRAMEWORK_PILLARS[0]

  return (
    <section id="framework" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker">
            05 · Mastery Framework
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Engineered for Deep Learning.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Four scientific pillars powering RealLearn&apos;s active recall, resilient AI circuit, and structured comprehension system.
          </p>
        </Reveal>

        {/* Pillar Showcase Card */}
        <Reveal delay={0.05} className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 items-stretch">
            {/* Pillar Selector List */}
            <div className="flex flex-col gap-3">
              {FRAMEWORK_PILLARS.map((p) => {
                const isActive = activePillar === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePillar(p.id)}
                    className="p-5 rounded-2xl border text-left transition-all flex items-start gap-4 cursor-pointer"
                    style={{
                      background: isActive ? 'color-mix(in srgb, var(--bg-card) 95%, var(--accent) 5%)' : 'var(--bg-card)',
                      borderColor: isActive ? 'var(--accent)' : 'var(--border-default)',
                      boxShadow: isActive ? '0 8px 24px var(--shadow-a)' : 'none',
                    }}
                  >
                    <span
                      className="font-mono text-lg font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        background: isActive ? 'var(--accent)' : 'var(--bg-3)',
                        color: isActive ? 'var(--on-accent)' : 'var(--text-secondary)',
                      }}
                    >
                      {p.num}
                    </span>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {p.title}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {p.tagline}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Pillar Detail Card */}
            <div
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
              style={{
                boxShadow: '0 20px 50px var(--shadow-a)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                    Pillar {current.num} · {current.title}
                  </span>
                  <span className="chip text-[11px] font-mono">{current.tagline}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {current.desc}
                </p>

                {/* Key Features Bullet List */}
                <div className="flex flex-col gap-2.5 mb-8">
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span className="w-2 h-2 rounded-full bg-[color:var(--accent)] flex-none" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[color:var(--border-default)]">
                {current.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl border border-[color:var(--border-default)]" style={{ background: 'var(--bg-primary)' }}>
                    <div className="font-mono text-2xl font-extrabold" style={{ color: 'var(--accent)' }}>
                      {m.val}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
