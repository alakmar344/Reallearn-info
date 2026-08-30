import Reveal from './Reveal'
import Icon from './Icon'

const STEPS = [
  {
    icon: 'message',
    title: 'Ask or Speak Anything',
    desc: 'Type any tricky homework problem, curious thought, or tap the microphone to ask with your voice.',
  },
  {
    icon: 'sliders',
    title: 'Choose Level & Language',
    desc: 'Pick your preferred language (63 global languages) and your difficulty tier (Class 6-8, 9-10, or College/Pro).',
  },
  {
    icon: 'book-open',
    title: 'Part 1: Build Intuition',
    desc: 'Read a clear, intuitive foundation powered by relatable analogies that make complex topics feel simple.',
  },
  {
    icon: 'lock',
    title: 'Pass Checkpoint Quizzes',
    desc: 'Take a quick 2-question quiz to test your comprehension. Score 100% to unlock Part 2 (The Mechanism).',
  },
  {
    icon: 'newspaper',
    title: 'Part 3: Real-World Context',
    desc: 'See how the concept applies to modern technology, fresh live news headlines, and daily life.',
  },
  {
    icon: 'trophy',
    title: 'Level Up & Keep Streaks',
    desc: 'Earn XP, unlock 56 badges, protect your streak with streak freezes, and save lessons to your private library.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-5xl mx-auto mb-16">
          <span className="sticker">03 · How It Works</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            A six-step journey to mastery.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            From initial curiosity to lasting conceptual mastery in under five minutes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="grid place-items-center w-10 h-10 rounded-xl"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                    >
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span
                      className="font-display text-5xl font-black leading-none"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px var(--accent)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
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
