import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const CAPS = [
  {
    n: '01',
    e: '🧱',
    title: 'Structured, every single time',
    body: 'No matter the question, the lesson is built on the same three-part spine — Foundation, Mechanism, Real World. You always know what you’re building toward.',
  },
  {
    n: '02',
    e: '🎚️',
    title: 'Calibrated to exactly you',
    body: 'Pick a level (Class 6–8, 9–10, or College) and one of 8 languages. Vocabulary, examples, and rigor reshape themselves so the lesson lands where you are.',
  },
  {
    n: '03',
    e: '🧠',
    title: 'Active recall, not passive reading',
    body: 'A short quiz gates every part. You can’t drift ahead until you’ve actually shown the idea stuck. Forgetting gets harder when you have to reach for it.',
  },
  {
    n: '04',
    e: '📰',
    title: 'Grounded in what’s real',
    body: 'Live, current events are woven into the final part, so theory meets names, dates, and numbers from the world today — not a textbook frozen in 2014.',
  },
]

export default function Features() {
  return (
    <section id="method" className="relative" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <SectionHeader
          num="02"
          kicker="The Method"
          title="Four superpowers, one spine 🦸"
          lead="The product is a small set of ideas executed relentlessly. Each one is what separates a lesson from an answer."
        />

        <div className="flex flex-col">
          {CAPS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.06}>
              <div
                className="grid gap-4 md:grid-cols-[120px_1fr]"
                style={{ padding: '30px 0', borderTop: '1px solid var(--line)' }}
              >
                <div className="flex items-start gap-4 md:block">
                  <div className="font-display" style={{ fontSize: 'clamp(40px,5vw,58px)', color: 'var(--accent)', lineHeight: 1 }}>
                    {c.n}
                  </div>
                  <span aria-hidden="true" style={{ fontSize: 30, display: 'inline-block', marginTop: 6 }}>{c.e}</span>
                </div>
                <div className="md:pt-2">
                  <h3 className="font-display" style={{ fontSize: 'clamp(20px,2.4vw,26px)', color: 'var(--ink)', marginBottom: 10 }}>
                    {c.title}
                  </h3>
                  <p className="font-display" style={{ fontSize: 16.5, color: 'var(--ink-dim)', lineHeight: 1.55, maxWidth: '60ch' }}>
                    {c.body}
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
