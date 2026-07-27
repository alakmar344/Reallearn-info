import Reveal from './Reveal'

const STEPS = [
  {
    step: '1',
    emoji: '💬',
    title: 'Ask Anything',
    desc: 'Type any question or tap the mic button to speak your curiosity natively.',
  },
  {
    step: '2',
    emoji: '⚙️',
    title: 'Personalize Level & Language',
    desc: 'Select Class 6–8, 9–10, or College and pick from 12 Indian languages natively generated.',
  },
  {
    step: '3',
    emoji: '🎬',
    title: 'Watch It Build',
    desc: 'A calm, glowing loading cinematic holds space while Gemma 4 and Serper news compose your lesson.',
  },
  {
    step: '4',
    emoji: '📖',
    title: 'Part 1: Foundation',
    desc: 'Beginner-friendly framing arrives with real verifiable source links and a reading timer.',
  },
  {
    step: '5',
    emoji: '🎯',
    title: 'Prove It, Then Unlock',
    desc: 'Score 100% on Part 1 quiz to unlock Part 2 (Mechanism) and Part 3 (Real World).',
  },
  {
    step: '6',
    emoji: '🏆',
    title: 'Complete & Earn XP',
    desc: 'Celebratory confetti screen, score ring, key takeaways, share card, and XP level progress!',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            03 · How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Your 6-Step Learning Journey.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            From curiosity to verified mastery in under 5 minutes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{s.emoji}</span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                      style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
