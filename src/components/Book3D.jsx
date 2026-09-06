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
    <div className="w-full max-w-xl mx-auto">
      <div
        className="glass-card p-6 sm:p-7 relative overflow-hidden"
        style={{ boxShadow: '6px 6px 0 var(--hard)' }}
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-4" style={{ borderBottom: '1.5px solid var(--line)' }}>
          <div className="flex items-center gap-2">
            <span className="inline-block" style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--lime-deep)' }} aria-hidden="true" />
            <span className="font-mono text-xs uppercase font-bold" style={{ letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
              3-Stage Lesson Preview
            </span>
          </div>
          <span
            className="flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1 uppercase whitespace-nowrap"
            style={{
              borderRadius: 999,
              background: currentStage.status.locked ? 'var(--danger-bg)' : 'var(--lime-soft)',
              color: currentStage.status.locked ? 'var(--danger)' : 'var(--text-accent-strong)',
              border: `1.5px solid ${currentStage.status.locked ? 'var(--danger)' : 'var(--line)'}`,
            }}
          >
            <Icon name={currentStage.status.icon} size={12} strokeWidth={2.2} />
            {currentStage.status.label}
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-1.5 p-1.5 mb-5" style={{ background: 'var(--bg-2)', borderRadius: 10 }} role="tablist" aria-label="Lesson stages">
          {STAGES.map((s, idx) => {
            const isSelected = activeTab === idx
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(idx)}
                className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold transition-all text-center cursor-pointer"
                style={{
                  borderRadius: 7,
                  border: 'none',
                  background: isSelected ? 'var(--bg-card)' : 'transparent',
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  boxShadow: isSelected ? '2px 2px 0 var(--hard)' : 'none',
                  outline: isSelected ? '1.5px solid var(--line)' : 'none',
                  outlineOffset: -1.5,
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
            <span className="text-xs font-mono font-bold uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-accent-strong)' }}>
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
            {currentStage.content.map((item) => {
              const isEquation = /equation|→|²|₂/i.test(item.label + item.val)
              return (
                <div
                  key={item.label}
                  className="p-3.5 flex flex-col gap-1"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1.5px solid var(--border-default)',
                    borderLeft: '4px solid var(--lime-deep)',
                    borderRadius: 9,
                  }}
                >
                  <span className="text-[11px] font-mono uppercase font-bold" style={{ letterSpacing: '0.06em', color: 'var(--text-accent-strong)' }}>
                    {item.label}
                  </span>
                  <span
                    className="text-[13px] font-medium leading-relaxed"
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
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 text-[11px]" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <span className="font-mono" style={{ color: 'var(--text-secondary)' }}>
              Verifiable Sources:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentStage.sources.map((src) => (
                <span
                  key={src}
                  className="font-mono px-2 py-0.5 text-[10px]"
                  style={{ color: 'var(--text-secondary)', background: 'var(--bg-2)', border: '1px solid var(--border-default)', borderRadius: 999 }}
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
