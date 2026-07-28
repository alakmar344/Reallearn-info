import { useState } from 'react'
import Reveal from './Reveal'

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
    <section id="try" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip" style={{ background: 'var(--accent-action)', color: '#ffffff', border: 'none' }}>
            04 · Interactive Demo
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Try a Quiz-Gated Mini Lesson.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Experience active recall gating. Correct answers unlock progress; incorrect answers prompt re-reading.
          </p>
        </Reveal>

        <Reveal className="max-w-xl mx-auto">
          <div
            className="glass-card p-8 relative rounded-3xl"
            style={{
              border: '1.5px solid var(--border-default)',
              boxShadow: '0 20px 50px var(--shadow-a)',
            }}
          >
            {/* Top Bar Status */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border-default)]">
              <span className="chip text-xs">
                Part 01 · Foundation Checkpoint
              </span>
              <span className="text-xs font-mono font-bold uppercase" style={{ color: 'var(--accent)' }}>
                Active Recall Gate
              </span>
            </div>

            {phase === 'idle' && (
              <div className="text-center py-8">
                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Interactive Checkpoint Demo
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Click below to simulate Gemma 4 generating a structured lesson checkpoint.
                </p>
                <button type="button" className="btn btn-action" onClick={generate}>
                  Generate Lesson Part
                </button>
              </div>
            )}

            {phase === 'loading' && (
              <div className="text-center py-12">
                <div className="w-10 h-10 rounded-full border-3 border-t-transparent animate-spin mx-auto mb-4" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }} />
                <p className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Composing lesson via Gemma 4 & Serper API…
                </p>
              </div>
            )}

            {phase === 'quiz' && (
              <div>
                <p className="font-display text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                  {q.q}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {q.opts.map((opt, i) => {
                    const isCorrect = i === q.correct
                    const isPicked = picked === i
                    let bg = 'var(--bg-3)'
                    let color = 'var(--text-primary)'

                    if (picked !== null) {
                      if (isCorrect) {
                        bg = 'var(--accent)'
                        color = 'var(--accent-ink)'
                      } else if (isPicked) {
                        bg = 'var(--accent-action)'
                        color = '#ffffff'
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
                          border: '1px solid var(--border-default)',
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
                      background: solved ? 'color-mix(in srgb, var(--accent) 15%, transparent)' : 'color-mix(in srgb, var(--accent-action) 15%, transparent)',
                      border: `1px solid ${solved ? 'var(--accent)' : 'var(--accent-action)'}`,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {solved ? (
                      <p><strong>Correct!</strong> {q.explain}</p>
                    ) : (
                      <p><strong>Incorrect.</strong> Re-read the foundation summary and try again.</p>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-[color:var(--border-default)]">
                  {solved ? (
                    <button type="button" className="btn" onClick={next}>
                      Next Question →
                    </button>
                  ) : (
                    <span className="text-xs font-mono uppercase" style={{ color: 'var(--text-secondary)' }}>
                      🔒 Pass to unlock Mechanism
                    </span>
                  )}
                  <button
                    type="button"
                    className="text-xs font-mono underline cursor-pointer"
                    style={{ color: 'var(--accent)' }}
                    onClick={generate}
                  >
                    Reset Checkpoint
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
