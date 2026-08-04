import { useState } from 'react'
import Reveal from './Reveal'
import Book3D from './Book3D'
import Icon from './Icon'

const HIGHLIGHTS = ['Any question, any level', '12 Indian languages', 'Quiz-verified lessons']

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  const handleQuickAsk = (e) => {
    e.preventDefault()
    window.location.href = 'https://reallearn.site'
  }

  return (
    <section
      id="top"
      className="relative section"
      style={{ paddingTop: 'clamp(48px, 7vw, 92px)', paddingBottom: 'clamp(40px, 6vw, 80px)' }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <Reveal style={{ marginBottom: 16 }}>
              <span className="sticker">
                <Icon name="zap" size={13} strokeWidth={2} />
                Three-part lessons that stick
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="headline-xl" style={{ color: 'var(--text-primary)' }}>
                Don&rsquo;t just get answers.{' '}
                <span style={{ color: 'var(--accent)', display: 'block' }}>Actually learn.</span>
              </h1>
            </Reveal>

            <Reveal
              delay={0.14}
              as="p"
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'var(--text-secondary)',
                margin: '20px 0 28px',
                maxWidth: '38ch',
                lineHeight: 1.6,
              }}
            >
              RealLearn turns any question into a structured, three-part learning experience —{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Foundation → Mechanism → Real World</strong>{' '}
              — verified by quick recall quizzes.
            </Reveal>

            {/* Integrated Ask Bar */}
            <Reveal delay={0.18} style={{ marginBottom: 26 }}>
              <form
                onSubmit={handleQuickAsk}
                className="flex items-center gap-2 p-1.5 rounded-full max-w-lg"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  boxShadow: '0 4px 16px var(--shadow-a)',
                  transition: 'border-color 0.2s var(--ease-reveal), box-shadow 0.2s var(--ease-reveal)',
                }}
              >
                <Icon name="search" size={18} style={{ marginLeft: 16, flex: 'none', color: 'var(--text-tertiary)' }} />
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask anything — e.g., How does photosynthesis work?"
                  aria-label="Ask anything"
                  className="flex-1 min-w-0 bg-transparent px-2 py-3 text-[15px] focus:outline-none"
                  style={{ color: 'var(--text-primary)' }}
                />
                <button type="submit" className="btn flex-none" style={{ minHeight: 42, padding: '0 20px', fontSize: 14 }}>
                  Start journey
                  <Icon name="send" size={14} strokeWidth={2.2} />
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.24} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {HIGHLIGHTS.map((h, i) => (
                <span
                  key={h}
                  className="flex items-center gap-4 text-sm font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {i > 0 && <span aria-hidden="true" style={{ color: 'var(--accent)' }}>·</span>}
                  {h}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} style={{ position: 'relative' }} className="min-w-0">
            <Book3D />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
