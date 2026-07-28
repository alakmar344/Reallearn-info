import Reveal from './Reveal'

const FEATURES = [
  { icon: '📐', title: 'Three-Part Spine', desc: 'Foundation, Mechanism, Real World — every single time.' },
  { icon: '🔒', title: 'Quiz-Gated Progression', desc: '100% score required to advance. Active recall enforced.' },
  { icon: '🌐', title: '12 Indian Languages', desc: 'Natively generated with Gemma 4 — accurate context.' },
  { icon: '🎓', title: 'Adaptive Difficulty', desc: 'Class 6–8 through College level calibration.' },
  { icon: '📰', title: 'Grounded in Today', desc: 'Live Serper news context woven into Part 3 real-world analysis.' },
  { icon: '⚡', title: 'Streamlined Loaders', desc: 'Calm, transparent loading progress updates.' },
  { icon: '🎯', title: 'Checkpoint System', desc: 'Instant feedback on quiz comprehension.' },
  { icon: '🔗', title: 'Verifiable Sources', desc: 'Every claim links to verifiable external publications.' },
  { icon: '⏱️', title: 'Reading Pace Timer', desc: 'A gentle timer respecting individual reading speed.' },
  { icon: '🏷️', title: 'Subject Classification', desc: 'Auto-classified across 11 core academic disciplines.' },
  { icon: '🎙️', title: 'Voice Input Support', desc: 'Speak questions natively with browser speech recognition.' },
  { icon: '🔊', title: 'Audio Text-to-Speech', desc: 'Listen to every lesson part in natural voice synthesis.' },
  { icon: '⚡', title: 'Fast & Deep Modes', desc: 'Instant summary answer or full structured 3-part journey.' },
  { icon: '📚', title: 'Personal Library', desc: 'Auto-saved journeys stored securely in browser storage.' },
  { icon: '🔄', title: 'Follow-up Explorations', desc: 'Ask deeper questions directly within current context.' },
  { icon: '🖼️', title: 'Export & Share', desc: 'Clean summary export for study notes and reference.' },
  { icon: '📊', title: 'Mastery Tracking', desc: 'Structured progress tracking across all learned disciplines.' },
  { icon: '🎨', title: 'Day & Night Modes', desc: 'Paper Daylight and Midnight Ink visual themes.' },
]

export default function FeatureTour() {
  return (
    <section id="tour" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip" style={{ background: 'var(--accent)', color: 'var(--accent-ink)', border: 'none' }}>
            06 · Capability Overview
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            18 Capabilities, One Unified System.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Every tool designed to make learning engaging, structured, and verifiable.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {f.desc}
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
