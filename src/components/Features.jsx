import Reveal from './Reveal'

const SUPERPOWERS = [
  {
    num: '01',
    title: 'Structured, Every Single Time',
    desc: 'No matter the question, every lesson follows the exact same 3-part spine — Foundation → Mechanism → Real World. You always know what you are building toward.',
    badge: '3-Part Spine',
  },
  {
    num: '02',
    title: 'Calibrated to Exactly You',
    desc: 'Pick your difficulty level (Class 6–8, Class 9–10, or College) and one of 12 Indian languages natively generated with Gemma 4.',
    badge: 'Adaptive & Multilingual',
  },
  {
    num: '03',
    title: 'Active Recall, Not Passive Reading',
    desc: 'A short quiz gates every part. You cannot drift ahead until you have shown the idea stuck. Forgetting gets harder when you reach for it.',
    badge: 'Quiz-Gated Progression',
  },
  {
    num: '04',
    title: 'Grounded in What Is Real',
    desc: 'Live news context is woven into Part 3 via Serper API before a word is written, so theory meets current names, dates, and numbers.',
    badge: 'Live News Grounding',
  },
]

export default function Features() {
  return (
    <section id="method" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            02 · The Method
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Four Superpowers of RealLearn.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Built from cognitive science & active recall principles to guarantee comprehension.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUPERPOWERS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div
                className="glass-card p-8 h-full flex flex-col justify-between"
                style={{
                  border: '1px solid var(--border-default)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold" style={{ color: 'var(--accent)' }}>
                      {s.num}
                    </span>
                    <span className="chip" style={{ background: 'var(--bg-3)', fontSize: 12 }}>
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {s.title}
                  </h3>
                  <p className="leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>
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
