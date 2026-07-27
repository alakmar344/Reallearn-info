import { useState } from 'react'
import Reveal from './Reveal'

const QUESTIONS = [
  {
    q: 'In photosynthesis, which gas do plants absorb from the air?',
    opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
    correct: 1,
    explain: 'Plants take in carbon dioxide and, with light, turn it into sugar and oxygen. Get the input and output the right way round and the whole idea clicks. 🌿',
  },
  {
    q: 'A “control group” in an experiment exists mainly to…',
    opts: ['Prove the hypothesis true', 'Give a baseline to compare against', 'Make the study longer', 'Replace the need for math'],
    correct: 1,
    explain: 'The control is the unchanged baseline. Everything interesting is measured as a difference from it — without it, you can’t tell cause from coincidence. 🧪',
  },
  {
    q: 'Why does compounding matter more than the interest rate alone?',
    opts: ['It lowers risk to zero', 'Gains build on prior gains over time', 'It removes taxes', 'It guarantees returns'],
    correct: 1,
    explain: 'Compounding is returns earning returns. Given enough time, the curve bends up on its own — which is why starting early beats starting big. 📈',
  },
]

export default function Demo() {
  const [phase, setPhase] = useState('idle') // idle | loading | quiz
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null)
  const [streak, setStreak] = useState(3)

  const q = QUESTIONS[qi]
  const solved = picked === q.correct

  const generate = () => {
    setPhase('loading')
    setPicked(null)
    window.setTimeout(() => setPhase('quiz'), 1400)
  }

  const choose = (i) => {
    if (picked !== null) return
    setPicked(i)
    if (i === q.correct) {
      setStreak((s) => s + 1)
    }
  }

  const next = () => {
    setQi((i) => (i + 1) % QUESTIONS.length)
    setPicked(null)
  }

  return (
    <section id="try" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker" style={{ background: 'var(--accent-action)', color: '#ffffff' }}>
            04 · Interactive Demo
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Try a quiz-gated mini lesson. 🎯
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Feel the active recall gate. Correct answers pulse and earn XP; wrong answers prompt re-reading.
          </p>
        </Reveal>

        <Reveal className="max-w-xl mx-auto">
          <div
            className="glass-card p-8 relative rounded-3xl"
            style={{
              border: '2px solid var(--border-default)',
              boxShadow: '0 20px 50px var(--shadow-a)',
            }}
          >
            {/* Top Bar Stats */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border-default)]">
              <span className="chip" style={{ background: 'var(--bg-3)', fontSize: 12 }}>
                🌱 Part 01 · Foundation
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold flex items-center gap-1" style={{ color: 'var(--accent-action)' }}>
                  🔥 {streak} Day Streak
                </span>
              </div>
            </div>

            {phase === 'idle' && (
              <div className="text-center py-8">
                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Ready when you are.
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Click below to simulate Gemma 4 generating a structured 3-part lesson with active recall quizzes.
                </p>
                <button type="button" className="btn" onClick={generate}>
                  Generate Lesson Part ✨
                </button>
              </div>
            )}

            {phase === 'loading' && (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin mx-auto mb-4" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }} />
                <p className="font-mono text-sm uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Composing lesson via Gemma 4 & Serper News…
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
                        className="p-4 rounded-xl font-semibold text-left transition-all"
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
                      <p><strong>🎉 Correct! (+25 XP)</strong> {q.explain}</p>
                    ) : (
                      <p><strong>❌ Not quite.</strong> Re-read the foundation summary and try again. You got this!</p>
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
                      🔒 Score 100% to unlock Mechanism
                    </span>
                  )}
                  <button
                    type="button"
                    className="text-xs font-mono underline"
                    style={{ color: 'var(--accent)' }}
                    onClick={generate}
                  >
                    Regenerate
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
