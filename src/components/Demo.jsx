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
    <section id="try" className="py-20 relative z-10" aria-labelledby="try-heading">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="sticker">04 · Interactive Demo</span>
          <h2 id="try-heading" className="font-display mt-5 mb-4" style={{ color: 'var(--text-primary)' }}>
            Try a quiz-gated mini lesson.
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--text-secondary)' }}>
            Experience active recall in action. Correct answers unlock progress; incorrect answers re-queue missed questions.
          </p>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <div
            className="glass-card p-6 sm:p-9 relative"
            style={{ boxShadow: '6px 6px 0 var(--hard)' }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4" style={{ borderBottom: '1.5px solid var(--line)' }}>
              <div className="flex items-center gap-2">
                <span className="inline-block" style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--lime-deep)' }} aria-hidden="true" />
                <span className="chip text-xs font-mono font-bold">
                  {demoMode === 'explain' ? 'Part 01 · Foundation Checkpoint' : 'Fast Mode · Summary Checkpoint'}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-accent-strong)' }}>
                <Icon name="check" size={13} strokeWidth={2.4} />
                Active recall gate
              </span>
            </div>

            {phase === 'idle' && (
              <div className="text-center py-6">
                <div className="flex items-center gap-1.5 p-1 mb-6 max-w-xs mx-auto" style={{ background: 'var(--bg-2)', borderRadius: 10 }}>
                  <button
                    type="button"
                    onClick={() => setDemoMode('explain')}
                    aria-pressed={demoMode === 'explain'}
                    className="flex-1 py-2 px-3 text-xs font-bold transition-all cursor-pointer"
                    style={{
                      borderRadius: 7,
                      border: 'none',
                      background: demoMode === 'explain' ? 'var(--lime)' : 'transparent',
                      color: demoMode === 'explain' ? '#131315' : 'var(--text-secondary)',
                    }}
                  >
                    Explain Mode
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoMode('fast')}
                    aria-pressed={demoMode === 'fast'}
                    className="flex-1 py-2 px-3 text-xs font-bold transition-all cursor-pointer"
                    style={{
                      borderRadius: 7,
                      border: 'none',
                      background: demoMode === 'fast' ? 'var(--lime)' : 'transparent',
                      color: demoMode === 'fast' ? '#131315' : 'var(--text-secondary)',
                    }}
                  >
                    Fast Mode
                  </button>
                </div>

                <h3 className="font-display text-2xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
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
              <div className="text-center py-10" role="status" aria-live="polite">
                <div
                  className="mx-auto mb-4"
                  style={{ width: 40, height: 40, borderRadius: 999, border: '4px solid var(--border-default)', borderTopColor: 'var(--lime-deep)', animation: 'spin-slow 0.9s linear infinite' }}
                />
                <p className="font-mono text-xs font-bold uppercase mb-1" style={{ letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6" role="group" aria-label="Answer choices">
                  {q.opts.map((opt, i) => {
                    const isCorrect = i === q.correct
                    const isPicked = picked === i
                    let bg = 'var(--bg-card)'
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
                        className="quiz-option p-4 font-semibold text-[13px] text-left cursor-pointer"
                        style={{ background: bg, color, border: `1.5px solid ${borderColor}` }}
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
                    className="p-4 mb-6 text-sm leading-relaxed"
                    role="status"
                    style={{
                      background: solved ? 'var(--success-bg)' : 'var(--danger-bg)',
                      border: `1.5px solid ${solved ? 'var(--success)' : 'var(--danger)'}`,
                      borderRadius: 10,
                      boxShadow: `3px 3px 0 ${solved ? 'var(--success)' : 'var(--danger)'}`,
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

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4" style={{ borderTop: '1.5px solid var(--line)' }}>
                  {solved ? (
                    <button type="button" className="btn btn-action" onClick={next}>
                      Next question
                      <Icon name="chevron-right" size={15} strokeWidth={2.2} />
                    </button>
                  ) : (
                    <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase" style={{ letterSpacing: '0.06em', color: 'var(--text-secondary)' }}>
                      <Icon name="lock" size={14} />
                      100% score to unlock next part
                    </span>
                  )}
                  <button
                    type="button"
                    className="text-xs font-mono font-bold underline cursor-pointer"
                    style={{ color: 'var(--text-accent-strong)', background: 'none', border: 'none' }}
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
