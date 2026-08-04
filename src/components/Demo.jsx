import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const QUESTIONS = [
  {
    q: 'In photosynthesis, which gas do plants absorb from the air?',
    opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
    correct: 1,
    explain: 'Plants take in carbon dioxide and, with light energy, convert it into glucose and oxygen.',
  },
  {
    q: 'A “control group” in an experiment exists mainly to…',
    opts: ['Prove the hypothesis true', 'Give a baseline to compare against', 'Make the study longer', 'Replace the need for math'],
    correct: 1,
    explain: 'The control group provides an unchanged baseline to isolate the effect of the tested variable.',
  },
  {
    q: 'Why does compounding matter more than the interest rate alone?',
    opts: ['It lowers risk to zero', 'Gains build on prior accumulated gains over time', 'It removes taxes', 'It guarantees returns'],
    correct: 1,
    explain: 'Compounding generates earnings on previous earnings, causing exponential growth over time.',
  },
]

export default function Demo() {
  const [phase, setPhase] = useState('idle') // idle | loading | quiz
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null)

  const q = QUESTIONS[qi]
  const solved = picked === q.correct

  const generate = () => {
    setPhase('loading')
    setPicked(null)
    window.setTimeout(() => setPhase('quiz'), 1200)
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
    <section id="try" className="relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker">04 · Interactive Demo</span>
          <h2 className="headline-lg mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Try a quiz-gated mini lesson.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Experience active recall in action. Correct answers unlock progress; incorrect answers prompt re-reading.
          </p>
        </Reveal>

        <Reveal className="max-w-xl mx-auto">
          <div className="glass-card p-6 sm:p-8 relative rounded-3xl" style={{ boxShadow: 'var(--shadow-lift)' }}>
            {/* Top Bar Status */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <span className="chip text-xs">Part 01 · Foundation checkpoint</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                <Icon name="check" size={13} strokeWidth={2.4} />
                Active recall gate
              </span>
            </div>

            {phase === 'idle' && (
              <div className="text-center py-8">
                <h3 className="headline-md mb-3" style={{ color: 'var(--text-primary)' }}>
                  Interactive checkpoint demo
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Click below to see a short recall checkpoint in action.
                </p>
                <button type="button" className="btn" onClick={generate}>
                  Generate a checkpoint
                </button>
              </div>
            )}

            {phase === 'loading' && (
              <div className="text-center py-12">
                <div
                  className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin mx-auto mb-4"
                  style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}
                />
                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Composing your lesson…
                </p>
              </div>
            )}

            {phase === 'quiz' && (
              <div>
                <p className="font-display text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                  {q.q}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {q.opts.map((opt, i) => {
                    const isCorrect = i === q.correct
                    const isPicked = picked === i
                    let bg = 'var(--bg-3)'
                    let color = 'var(--text-primary)'
                    let border = 'var(--border-default)'

                    if (picked !== null) {
                      if (isCorrect) {
                        bg = 'color-mix(in srgb, var(--accent) 16%, transparent)'
                        color = 'var(--text-primary)'
                        border = 'var(--accent)'
                      } else if (isPicked) {
                        bg = 'color-mix(in srgb, var(--wrong) 16%, transparent)'
                        color = 'var(--text-primary)'
                        border = 'var(--wrong)'
                      }
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => choose(i)}
                        disabled={picked !== null}
                        className="p-4 rounded-xl font-semibold text-left transition-all cursor-pointer"
                        style={{
                          background: bg,
                          color: color,
                          border: `1px solid ${border}`,
                        }}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>

                {picked !== null && (
                  <div
                    className="p-4 rounded-xl mb-6 text-sm leading-relaxed"
                    style={{
                      background: solved
                        ? 'color-mix(in srgb, var(--accent) 12%, transparent)'
                        : 'color-mix(in srgb, var(--wrong) 12%, transparent)',
                      border: `1px solid ${solved ? 'var(--accent)' : 'var(--wrong)'}`,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {solved ? (
                      <p><strong>Correct.</strong> {q.explain}</p>
                    ) : (
                      <p><strong>Not quite.</strong> Re-read the foundation summary and try again.</p>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                  {solved ? (
                    <button type="button" className="btn" onClick={next}>
                      Next question
                      <Icon name="chevron-right" size={15} strokeWidth={2.2} />
                    </button>
                  ) : (
                    <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <Icon name="lock" size={14} />
                      Pass to unlock the next part
                    </span>
                  )}
                  <button
                    type="button"
                    className="text-sm font-medium underline cursor-pointer"
                    style={{ color: 'var(--text-secondary)' }}
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
