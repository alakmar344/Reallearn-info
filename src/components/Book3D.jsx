import { useState } from 'react'
import Icon from './Icon'

const STAGES = [
  {
    id: 'part1',
    badge: 'Part 01 · Foundation',
    title: 'Photosynthesis & solar conversion',
    subtitle: 'Essential biological principles',
    status: { label: 'Unlocked', icon: 'check', locked: false },
    readingTime: '2 min read',
    content: [
      { label: 'Core concept', val: 'Chloroplasts absorb solar energy to split water into hydrogen and oxygen.' },
      { label: 'Key equation', val: '6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂' },
      { label: 'Active checkpoint', val: 'Identify the primary atmospheric input (CO₂).' },
    ],
    sources: ['Nature Education (2024)', 'NCERT Biology'],
  },
  {
    id: 'part2',
    badge: 'Part 02 · Mechanism',
    title: 'Light-dependent reactions & ATP synthase',
    subtitle: 'Step-by-step molecular machinery',
    status: { label: 'Quiz locked', icon: 'lock', locked: true },
    readingTime: '3 min read',
    content: [
      { label: 'Photosystem II', val: 'P680 reaction center excites electrons transferred down the cytochrome chain.' },
      { label: 'Proton gradient', val: 'Protons accumulate in the thylakoid lumen, driving ATP synthesis.' },
      { label: 'Calvin cycle', val: 'RuBisCO fixes atmospheric carbon into 3-PGA molecules.' },
    ],
    sources: ['Cell Molecular Biology 8th Ed.', 'Biochem Quarterly'],
  },
  {
    id: 'part3',
    badge: 'Part 03 · Real World',
    title: 'Artificial photosynthesis & clean energy',
    subtitle: 'Live grounding & current industry news',
    status: { label: 'Live', icon: 'zap', locked: false },
    readingTime: '2 min read',
    content: [
      { label: 'Commercial scale', val: 'Bionic Leaf 3.0 achieves 10% solar-to-biomass conversion efficiency.' },
      { label: 'Live grounding', val: 'MIT Energy Initiative report published July 2026.' },
      { label: 'Global impact', val: 'Synthetic fuel generation without fossil fuel carbon footprints.' },
    ],
    sources: ['MIT Tech Review 2026', 'Live news feed'],
  },
]

export default function Book3D() {
  const [activeTab, setActiveTab] = useState(0)
  const currentStage = STAGES[activeTab]

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className="glass-card p-6 sm:p-7 rounded-3xl relative overflow-hidden"
        style={{
          border: '1px solid var(--border-default)',
          boxShadow: 'var(--shadow-lift)',
        }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Three-part spine
            </span>
          </div>
          <span
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: currentStage.status.locked
                ? 'var(--bg-3)'
                : 'var(--accent)',
              color: currentStage.status.locked ? 'var(--text-secondary)' : 'var(--accent-ink)',
              border: '1px solid var(--border-default)',
            }}
          >
            <Icon name={currentStage.status.icon} size={13} strokeWidth={2.2} />
            {currentStage.status.label}
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl mb-6" style={{ background: 'var(--bg-3)' }}>
          {STAGES.map((s, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                aria-pressed={isActive}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? 'var(--accent-ink)' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 2px 8px var(--shadow-a)' : 'none',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                }}
              >
                {s.status.locked && <Icon name="lock" size={12} strokeWidth={2} />}
                Part 0{idx + 1}
              </button>
            )
          })}
        </div>

        {/* Stage Content */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
              {currentStage.badge} · {currentStage.readingTime}
            </span>
            <h3 className="font-display text-xl font-bold mt-1.5" style={{ color: 'var(--text-primary)' }}>
              {currentStage.title}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {currentStage.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 my-1">
            {currentStage.content.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-xl border flex flex-col gap-1"
                style={{ borderColor: 'var(--border-default)', background: 'var(--bg-primary)' }}
              >
                <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {item.label}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>

          {/* Verifiable Sources */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t text-xs" style={{ borderColor: 'var(--border-default)' }}>
            <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>
              Sources
            </span>
            <div className="flex gap-2 flex-wrap">
              {currentStage.sources.map((src) => (
                <span
                  key={src}
                  className="px-2 py-0.5 rounded border text-xs"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)', background: 'var(--bg-3)' }}
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
