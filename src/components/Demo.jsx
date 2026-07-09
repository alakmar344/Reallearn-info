import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function GlowLoader({ label }) {
  return (
    <div className="flex flex-col items-center gap-5" role="status" aria-live="polite">
      <div className="glow-loader" aria-hidden="true">
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="ring r3" />
      </div>
      <p className="font-mono text-[12px] tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
        {label}
      </p>
    </div>
  )
}

const QUESTIONS = [
  {
    q: 'In photosynthesis, which gas do plants absorb from the air?',
    opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
    correct: 1,
    explain: 'Plants take in carbon dioxide and, with light, turn it into sugar and oxygen. Get the input and output the right way round and the whole idea clicks.',
  },
  {
    q: 'A “control group” in an experiment exists mainly to…',
    opts: ['Prove the hypothesis true', 'Give a baseline to compare against', 'Make the study longer', 'Replace the need for math'],
    correct: 1,
    explain: 'The control is the unchanged baseline. Everything interesting is measured as a difference from it — without it, you can’t tell cause from coincidence.',
  },
  {
    q: 'Why does compounding matter more than the interest rate alone?',
    opts: ['It lowers risk to zero', 'Gains build on prior gains over time', 'It removes taxes', 'It guarantees returns'],
    correct: 1,
    explain: 'Compounding is returns earning returns. Given enough time, the curve bends up on its own — which is why starting early beats starting big.',
  },
]

export default function Demo() {
  const [phase, setPhase] = useState('idle') // idle | loading | quiz
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null)
  const [tries, setTries] = useState(0)

  const q = QUESTIONS[qi]
  const solved = picked === q.correct

  const generate = () => {
    setPhase('loading')
    setPicked(null)
    setTries(0)
    window.setTimeout(() => setPhase('quiz'), 1800)
  }

  const choose = (i) => {
    if (picked !== null) return
    setPicked(i)
    setTries((t) => t + 1)
  }

  const next = () => {
    setQi((i) => (i + 1) % QUESTIONS.length)
    setPicked(null)
    setTries(0)
  }

  return (
    <section id="try" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="04"
          kicker="Try It"
          title="A lesson, in miniature"
          lead="Generate a part, answer its quiz, and feel the gate. Right answers pulse. Wrong answers shake. Nothing unlocks until you’ve earned it."
        />

        <Reveal className="mx-auto" style={{ maxWidth: 560 }}>
          <article className="card card-accent" style={{ minHeight: 320 }}>
            <span className="fold-line" />

            {phase === 'idle' && (
              <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: 268, gap: 18 }}>
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                  Part 01 · Foundation
                </span>
                <h3 className="font-display" style={{ fontSize: 24, color: 'var(--ink)', maxWidth: '18ch' }}>
                  Ready when you are.
                </h3>
                <p className="font-display italic" style={{ color: 'var(--ink-dim)', fontSize: 15, maxWidth: '34ch' }}>
                  Hit generate and watch a lesson part compose itself.
                </p>
                <button className="btn" type="button" onClick={generate}>
                  Generate a lesson
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}

            {phase === 'loading' && (
              <div className="flex items-center justify-center" style={{ minHeight: 268 }}>
                <GlowLoader label="Composing your lesson…" />
              </div>
            )}

            {phase === 'quiz' && (
              <div>
                <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--accent)' }}>
                    Part 01 · Foundation
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                    {qi + 1} / {QUESTIONS.length}
                  </span>
                </div>

                <p className="font-display" style={{ fontSize: 18.5, color: 'var(--ink)', lineHeight: 1.45, marginBottom: 18 }}>
                  {q.q}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {q.opts.map((opt, i) => {
                    const isCorrect = i === q.correct
                    const isPicked = picked === i
                    const cls = picked !== null && isCorrect ? 'correct' : picked !== null && isPicked ? 'wrong' : ''
                    return (
                      <button
                        key={opt}
                        type="button"
                        className={`quiz-opt ${cls}`}
                        disabled={picked !== null}
                        aria-pressed={isPicked}
                        onClick={() => choose(i)}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>

                <div aria-live="polite" style={{ minHeight: 44, marginTop: 14 }}>
                  {picked !== null && (
                    <p
                      className="font-display italic"
                      style={{
                        fontSize: 14,
                        color: solved ? 'var(--good)' : 'var(--ink-faint)',
                        lineHeight: 1.5,
                      }}
                    >
                      {solved ? q.explain : 'Not quite — read the part again and try once more.'}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between" style={{ marginTop: 6 }}>
                  {solved ? (
                    <button className="btn btn-ghost" type="button" onClick={next}>
                      Next question
                      <span aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <span className="font-mono text-[11px] tracking-[0.1em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                      {tries > 0 ? 'Locked until 100%' : 'Score 100% to unlock'}
                    </span>
                  )}
                  <button
                    className="font-mono text-[11px] underline tracking-[0.06em]"
                    style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    type="button"
                    onClick={generate}
                  >
                    Regenerate
                  </button>
                </div>
              </div>
            )}
          </article>
        </Reveal>
      </div>
    </section>
  )
}
