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
    <section id="how" className="py-20 relative z-10" aria-labelledby="how-heading">
      <div className="container relative">
        <span className="deco-dots" aria-hidden="true" style={{ width: 90, height: 70, top: 30, left: 0 }} />
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="sticker tag-rotate-r">03 · How It Works</span>
          <h2 id="how-heading" className="font-display mt-5 mb-4" style={{ color: 'var(--text-primary)' }}>
            A six-step journey to mastery.
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--text-secondary)' }}>
            From initial curiosity to lasting conceptual mastery in under five minutes.
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none m-0 p-0">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <li className="glass-card p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="grid place-items-center"
                    style={{ width: 40, height: 40, borderRadius: 9, background: '#131315', color: 'var(--lime)' }}
                  >
                    <Icon name={s.icon} size={19} />
                  </span>
                  <span
                    className="font-display font-black leading-none"
                    aria-hidden="true"
                    style={{ fontSize: 44, color: 'transparent', WebkitTextStroke: '1.5px var(--border-default)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-[19px] font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
