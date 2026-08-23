import { useState } from 'react'
import Icon from './Icon'

const STAGES = [
  {
    id: 'part1',
    badge: 'Part 01 · Foundation',
    title: 'Photosynthesis: How Plants Eat Sunlight',
    subtitle: 'The Simple Big Picture & Intuition',
    status: { label: 'Unlocked', icon: 'check', locked: false },
    readingTime: '2 min read',
    content: [
      { label: 'Simple Analogy', val: 'Think of plant leaves as solar-powered kitchens. They catch sunlight and mix it with air and water to cook their own food.' },
      { label: 'What Goes In & Out', val: 'Takes in Carbon Dioxide + Water + Sunlight → Creates Sweet Energy (Glucose) + Fresh Oxygen for us to breathe.' },
      { label: 'Quick Takeaway', val: 'Without this quiet leafy process, Earth would run out of breathable oxygen and food.' },
    ],
    sources: ['Nature Education', 'Encyclopedia of Life'],
  },
  {
    id: 'part2',
    badge: 'Part 02 · Mechanism',
    title: 'The Leaf’s Micro-Factory',
    subtitle: 'Step-by-Step: What Actually Happens Inside',
    status: { label: 'Quiz Checkpoint', icon: 'lock', locked: true },
    readingTime: '3 min read',
    content: [
      { label: 'Step 1: Solar Traps', val: 'Tiny green structures called chloroplasts act like solar panels, absorbing light particles (photons).' },
      { label: 'Step 2: Water Splitting', val: 'Light energy splits water molecules apart, releasing oxygen into the air and charging up microscopic biological batteries (ATP).' },
      { label: 'Step 3: Sugar Synthesis', val: 'The leaf uses that stored battery energy to turn carbon dioxide from the air into rich, sweet sugar molecules.' },
    ],
    sources: ['Cell Biology Review', 'Botanical Science'],
  },
  {
    id: 'part3',
    badge: 'Part 03 · Real World',
    title: 'Clean Energy & Artificial Leaves',
    subtitle: 'Why This Matters In Modern Life & Tech',
    status: { label: 'Live Grounded', icon: 'zap', locked: false },
    readingTime: '2 min read',
    content: [
      { label: 'Modern Breakthrough', val: 'Scientists have invented "bionic leaves" that mimic plants to produce clean hydrogen fuel 10x more efficiently than nature.' },
      { label: 'Live Real-World Wire', val: 'Latest renewable energy lab reports show synthetic zero-carbon aviation fuels made directly from sunlight and air.' },
      { label: 'Everyday Connection', val: 'Every crop we harvest and every forest that cools our cities relies directly on this solar machinery.' },
    ],
    sources: ['Clean Energy Reports', 'Live Science Wire'],
  },
]

export default function Book3D() {
  const [activeTab, setActiveTab] = useState(0)
  const currentStage = STAGES[activeTab]

  return (
    <div className="w-full max-w-lg mx-auto glow-ring" style={{ borderRadius: 'var(--radius-2xl)' }}>
      <div
        className="glass-card p-6 sm:p-7 relative overflow-hidden"
        style={{
          borderRadius: 'var(--radius-2xl)',
          boxShadow: '0 24px 60px var(--shadow-a)',
        }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-[color:var(--border-default)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              3-Stage Lesson Preview
            </span>
          </div>
          <span
            className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase"
            style={{
              background: currentStage.status.locked ? 'var(--danger-bg)' : 'var(--accent-dim)',
              color: currentStage.status.locked ? 'var(--danger)' : 'var(--accent)',
              border: `1px solid ${currentStage.status.locked ? 'var(--danger)' : 'var(--accent)'}`,
            }}
          >
            <Icon name={currentStage.status.icon} size={12} strokeWidth={2.2} />
            {currentStage.status.label}
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl mb-5 bg-[color:var(--bg-3)]">
          {STAGES.map((s, idx) => {
            const isSelected = activeTab === idx
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  isSelected ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: isSelected ? 'var(--bg-card)' : 'transparent',
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--border-default)' : '1px solid transparent',
                }}
              >
                {s.status.locked && <Icon name="lock" size={11} strokeWidth={2} />}
                Part 0{idx + 1}
              </button>
            )
          })}
        </div>

        {/* Stage Content */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
              {currentStage.badge} · {currentStage.readingTime}
            </span>
            <h3 className="font-display text-xl font-bold mt-1" style={{ color: 'var(--text-primary)' }}>
              {currentStage.title}
            </h3>
            <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {currentStage.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 my-1">
            {currentStage.content.map((item) => {
              const isEquation = /equation|→|²|₂/i.test(item.label + item.val)
              return (
                <div
                  key={item.label}
                  className="p-3.5 rounded-xl border border-[color:var(--border-default)] flex flex-col gap-1"
                  style={{
                    background: 'var(--bg-primary)',
                    borderLeftWidth: 3,
                    borderLeftColor: 'var(--accent)',
                  }}
                >
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider" style={{ color: 'var(--accent)' }}>
                    {item.label}
                  </span>
                  <span
                    className="text-xs font-medium leading-relaxed"
                    style={{
                      color: 'var(--text-primary)',
                      fontFamily: isEquation ? 'var(--font-mono)' : 'inherit',
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Verifiable Sources */}
          <div className="flex items-center justify-between pt-3 border-t border-[color:var(--border-default)] text-[11px]">
            <span className="font-mono" style={{ color: 'var(--text-secondary)' }}>
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
