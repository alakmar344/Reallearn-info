import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const QUESTIONS = [
  {
    q: 'In photosynthesis, which gas do plants absorb from the air to synthesize glucose?',
    opts: ['Oxygen (O₂)', 'Carbon dioxide (CO₂)', 'Nitrogen (N₂)', 'Hydrogen (H₂)'],
    correct: 1,
    explain: 'Plants take in carbon dioxide through leaf stomata and, with light energy, convert it into glucose and oxygen.',
  },
  {
    q: 'In scientific experiments, a “control group” exists mainly to…',
    opts: ['Prove the initial hypothesis right', 'Provide an unchanged baseline to compare against', 'Eliminate the need for statistics', 'Shorten the study duration'],
    correct: 1,
    explain: 'The control group serves as an untouched benchmark to isolate and measure the true impact of the experimental variable.',
  },
  {
    q: 'Why does compounding lead to exponential rather than linear growth over time?',
    opts: ['It lowers risk to zero', 'Gains earn additional gains on top of prior accumulated returns', 'It completely removes transaction fees', 'It guarantees fixed market returns'],
    correct: 1,
    explain: 'Compounding continuously reinvests prior yields, creating an accelerating upward growth curve over time.',
  },
]

export default function Demo() {
  const [phase, setPhase] = useState('idle') // idle | loading | quiz
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null)
  const [demoMode, setDemoMode] = useState('explain') // 'explain' | 'fast'

  const q = QUESTIONS[qi]
  const solved = picked === q.correct

  const generate = () => {
    setPhase('loading')
    setPicked(null)
    window.setTimeout(() => setPhase('quiz'), 800)
  }

  const choose = (i) => {
    if (picked !== null) return
    setPicked(i)
  }

  const next = () => {
    setQi((i) => (i + 1) % QUESTIONS.length)
    setPicked(null)
  }

  return (
    <section id="try" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker">04 · Interactive Demo</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Try a quiz-gated mini lesson.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Experience active recall in action. Correct answers unlock progress; incorrect answers re-queue missed questions.
          </p>
        </Reveal>

        <Reveal className="max-w-xl mx-auto">
          <div
            className="glass-card p-6 sm:p-8 relative"
            style={{ borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-lift)' }}
          >
            {/* Top Bar Status */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
                <span className="chip text-xs font-mono font-bold">
                  {demoMode === 'explain' ? 'Part 01 · Foundation Checkpoint' : 'Fast Mode · Summary Checkpoint'}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                <Icon name="check" size={13} strokeWidth={2.4} />
                Active recall gate
              </span>
            </div>

            {phase === 'idle' && (
              <div className="text-center py-6">
                {/* Mode Glider */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl mb-6 bg-[color:var(--bg-3)] max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={() => setDemoMode('explain')}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      demoMode === 'explain' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: demoMode === 'explain' ? 'var(--accent)' : 'transparent',
                      color: demoMode === 'explain' ? 'var(--on-accent)' : 'var(--text-primary)',
                    }}
                  >
                    Explain Mode
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoMode('fast')}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      demoMode === 'fast' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: demoMode === 'fast' ? 'var(--accent)' : 'transparent',
                      color: demoMode === 'fast' ? 'var(--on-accent)' : 'var(--text-primary)',
                    }}
                  >
                    Fast Mode
                  </button>
                </div>

                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Interactive Checkpoint Demo
                </h3>
                <p className="mb-6 text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  See how active recall works. Test your intuition on a sample question and unlock the next stage.
                </p>
                <button type="button" className="btn btn-action" onClick={generate}>
                  Start Sample Checkpoint →
                </button>
              </div>
            )}

            {phase === 'loading' && (
              <div className="text-center py-10">
                <div
                  className="w-10 h-10 rounded-full border-3 animate-spin mx-auto mb-4"
                  style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}
                />
                <p className="font-mono text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
                  Preparing your active recall quiz…
                </p>
                <p className="font-mono text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                  Formulating questions grounded in live real-world context
                </p>
              </div>
            )}

            {phase === 'quiz' && (
              <div>
                <p className="font-display text-lg sm:text-xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
                  {q.q}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {q.opts.map((opt, i) => {
                    const isCorrect = i === q.correct
                    const isPicked = picked === i
                    let bg = 'var(--bg-3)'
                    let color = 'var(--text-primary)'
                    let borderColor = 'var(--border-default)'

                    if (picked !== null) {
                      if (isCorrect) {
                        bg = 'var(--success-bg)'
                        color = 'var(--success)'
                        borderColor = 'var(--success)'
                      } else if (isPicked) {
                        bg = 'var(--danger-bg)'
                        color = 'var(--danger)'
                        borderColor = 'var(--danger)'
                      }
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => choose(i)}
                        disabled={picked !== null}
                        className="p-3.5 rounded-xl font-medium text-xs sm:text-sm text-left transition-all cursor-pointer"
                        style={{
                          background: bg,
                          color: color,
                          border: `1px solid ${borderColor}`,
                        }}
                      >
                        <span className="font-mono font-bold mr-2 text-[11px] opacity-70">
                          {String.fromCharCode(65 + i)}.
                        </span>
                        {opt}
                      </button>
                    )
                  })}
                </div>

                {picked !== null && (
                  <div
                    className="p-4 rounded-xl mb-6 text-xs sm:text-sm leading-relaxed"
                    style={{
                      background: solved ? 'var(--success-bg)' : 'var(--danger-bg)',
                      border: `1px solid ${solved ? 'var(--success)' : 'var(--danger)'}`,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {solved ? (
                      <p>
                        <strong style={{ color: 'var(--success)' }}>✓ Correct!</strong> {q.explain}
                      </p>
                    ) : (
                      <p>
                        <strong style={{ color: 'var(--danger)' }}>✕ Incorrect.</strong> Re-read the foundation takeaway and try again.
                      </p>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  {solved ? (
                    <button type="button" className="btn btn-action" onClick={next}>
                      Next question
                      <Icon name="chevron-right" size={15} strokeWidth={2.2} />
                    </button>
                  ) : (
                    <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      <Icon name="lock" size={14} />
                      100% score to unlock next part
                    </span>
                  )}
                  <button
                    type="button"
                    className="text-xs font-mono font-bold underline cursor-pointer"
                    style={{ color: 'var(--accent)' }}
                    onClick={generate}
                  >
                    Reset checkpoint
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
