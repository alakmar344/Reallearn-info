import { useState } from 'react'

const STAGES = [
  {
    id: 'part1',
    badge: 'Part 01 · Foundation',
    title: 'Photosynthesis & Solar Conversion',
    subtitle: 'Essential Biological Principles',
    status: 'Unlocked',
    statusColor: 'var(--accent)',
    readingTime: '2 min read',
    content: [
      { label: 'Core Concept', val: 'Chloroplasts absorb solar energy to split water into hydrogen and oxygen.' },
      { label: 'Key Equation', val: '6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂' },
      { label: 'Active Checkpoint', val: 'Identify primary atmospheric input (CO₂).' },
    ],
    sources: ['Nature Education (2024)', 'NCERT Bio Ch. 13'],
  },
  {
    id: 'part2',
    badge: 'Part 02 · Mechanism',
    title: 'Light-Dependent Reactions & ATP Synthase',
    subtitle: 'Step-by-Step Molecular Machinery',
    status: 'Quiz Gated 🔒',
    statusColor: 'var(--accent-action)',
    readingTime: '3 min read',
    content: [
      { label: 'Photosystem II', val: 'P680 reaction center excites electrons transferred down the cytochrome chain.' },
      { label: 'Proton Gradient', val: 'Protons accumulate in the thylakoid lumen driving ATP synthesis.' },
      { label: 'Calvin Cycle', val: 'RuBisCO fixes atmospheric carbon into 3-PGA molecules.' },
    ],
    sources: ['Cell Molecular Biology 8th Ed.', 'Biochem Quarterly'],
  },
  {
    id: 'part3',
    badge: 'Part 03 · Real World',
    title: 'Artificial Photosynthesis & Clean Energy',
    subtitle: 'Live Grounding & Current Industry News',
    status: 'Live Grounded ⚡',
    statusColor: 'var(--accent)',
    readingTime: '2 min read',
    content: [
      { label: 'Commercial Scale', val: 'Bionic Leaf 3.0 achieves 10% solar-to-biomass conversion efficiency.' },
      { label: 'Live Grounding', val: 'MIT Energy Initiative report published July 2026.' },
      { label: 'Global Impact', val: 'Synthetic fuel generation without fossil fuel carbon footprints.' },
    ],
    sources: ['MIT Tech Review 2026', 'Serper Live Grounding API'],
  },
]

export default function Book3D() {
  const [activeTab, setActiveTab] = useState(0)
  const currentStage = STAGES[activeTab]

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Container Frame */}
      <div
        className="glass-card p-6 sm:p-7 rounded-3xl relative overflow-hidden"
        style={{
          border: '1.5px solid var(--border-default)',
          background: 'color-mix(in srgb, var(--bg-card) 90%, transparent)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 50px var(--shadow-a)',
        }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border-default)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              Interactive 3-Part Spine
            </span>
          </div>
          <span
            className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase"
            style={{
              background: 'color-mix(in srgb, var(--bg-3) 80%, transparent)',
              color: currentStage.statusColor,
              border: '1px solid var(--border-default)',
            }}
          >
            {currentStage.status}
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl mb-6 bg-[color:var(--bg-3)]">
          {STAGES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className="py-2 px-3 rounded-xl text-xs font-bold transition-all text-center"
              style={{
                background: activeTab === idx ? 'var(--bg-card)' : 'transparent',
                color: activeTab === idx ? 'var(--text-primary)' : 'var(--text-secondary)',
                boxShadow: activeTab === idx ? '0 2px 8px var(--shadow-a)' : 'none',
                border: activeTab === idx ? '1px solid var(--border-default)' : '1px solid transparent',
              }}
            >
              Part 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Stage Content Card */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
              {currentStage.badge} · {currentStage.readingTime}
            </span>
            <h3 className="font-display text-xl font-extrabold mt-1" style={{ color: 'var(--text-primary)' }}>
              {currentStage.title}
            </h3>
            <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {currentStage.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 my-1">
            {currentStage.content.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-xl border border-[color:var(--border-default)] flex flex-col gap-1"
                style={{ background: 'var(--bg-primary)' }}
              >
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider" style={{ color: 'var(--accent)' }}>
                  {item.label}
                </span>
                <span className="text-xs font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>

          {/* Verifiable Sources */}
          <div className="flex items-center justify-between pt-3 border-t border-[color:var(--border-default)] text-[11px]">
            <span className="font-mono text-muted" style={{ color: 'var(--text-secondary)' }}>
              Verifiable Sources:
            </span>
            <div className="flex gap-2">
              {currentStage.sources.map((src) => (
                <span
                  key={src}
                  className="font-mono px-2 py-0.5 rounded border border-[color:var(--border-default)] text-[10px]"
                  style={{ color: 'var(--text-secondary)', background: 'var(--bg-3)' }}
                >
                  {src}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
