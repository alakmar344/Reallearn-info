import Reveal from './Reveal'

const FEATURES = [
  { icon: '📐', title: 'Three-Part Spine', desc: 'Foundation, Mechanism, Real World — every single time.' },
  { icon: '🔒', title: 'Quiz-Gated Progression', desc: '100% score to advance. No passive skipping.' },
  { icon: '🌐', title: '12 Indian Languages', desc: 'Natively generated with Gemma 4 — never machine translated.' },
  { icon: '🎓', title: 'Adaptive Difficulty', desc: 'Class 6–8 through College/Advanced.' },
  { icon: '📰', title: 'Grounded in Today', desc: 'Live Serper news woven into Part 3 before generating.' },
  { icon: '✨', title: 'Glowing Loaders', desc: 'Calm loading cinematic with progress updates.' },
  { icon: '🎉', title: 'Unlock Animations', desc: 'Celebratory confetti bursts for correct quiz answers.' },
  { icon: '🔗', title: 'Real Verifiable Sources', desc: 'Every claim links to verifiable external sources.' },
  { icon: '⏱️', title: 'Reading Pace Timer', desc: 'A gentle timer that respects reading speed.' },
  { icon: '🏷️', title: 'Subject Badges', desc: 'Auto-classified across 11 disciplines.' },
  { icon: '🎙️', title: 'Voice Ask Mic', desc: 'Speak questions natively with Web Speech API.' },
  { icon: '🔊', title: 'Read Aloud TTS', desc: 'Listen to every part in natural warm voice.' },
  { icon: '⚡', title: 'Fast & Explain Modes', desc: 'Instant 1-part answer or deep 3-part journey.' },
  { icon: '📚', title: 'Personal Library', desc: 'Auto-saved journeys in browser storage.' },
  { icon: '🔄', title: 'Follow-up Loop', desc: 'Ask deeper questions without returning to home.' },
  { icon: '🖼️', title: 'Share Result Cards', desc: 'Canvas-generated score cards to share.' },
  { icon: '🏆', title: 'XP, Streaks & Badges', desc: '17 collectible achievements and level progression.' },
  { icon: '🎨', title: 'Paper & Ink Rooms', desc: 'Daylight paper and midnight cyber night rooms.' },
]

export default function FeatureTour() {
  return (
    <section id="tour" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            06 · Feature Tour
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            18 Features, One Seamless Platform.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Every tool designed to make learning engaging, structured, and unforgettable.
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
