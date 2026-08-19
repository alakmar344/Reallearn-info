import Reveal from './Reveal'

const FEATURES = [
  { icon: '📐', title: 'Three-Part Spine', desc: 'Foundation, Mechanism, Real World — structured every single time.' },
  { icon: '🔒', title: 'Banked Quiz Gating', desc: '100% score required to advance; incorrect tries re-queue only missed questions.' },
  { icon: '⚡', title: 'Groq LPU Acceleration', desc: 'Sub-second TTFT streaming with Qwen 3.6 27B and GPT-OSS 120B.' },
  { icon: '🛡️', title: 'Multi-Provider Failover', desc: 'Hedged racing with Mistral AI JSON mode, NVIDIA NIM 70B-150B & Cloudflare.' },
  { icon: '🌐', title: '12 Indian Languages', desc: 'Direct native LLM generation preserving cultural and linguistic nuances.' },
  { icon: '🎓', title: '3 Adaptive Tiers', desc: 'Calibrated complexity across Class 6–8, Class 9–10, and College levels.' },
  { icon: '📰', title: 'Live News Grounding', desc: 'Real-time web news and research woven into Part 3 via Serper API.' },
  { icon: '⚡', title: 'Explain & Fast Modes', desc: 'Choose between a deep 3-part pedagogical journey or a concise 1-part summary.' },
  { icon: '🎯', title: 'On-Device Personalization', desc: 'Learner goals and quiz evidence adapt lessons with zero private server storage.' },
  { icon: '🏆', title: '56 Achievement Badges', desc: 'Recognizes milestones across speed, mastery, streak consistency, and depth.' },
  { icon: '❄️', title: 'Earnable Streak Freezes', desc: 'Earn protective freezes every 7 days of hitting learning goals (max 2 banked).' },
  { icon: '🎙️', title: 'Voice Input Support', desc: 'Speak complex questions natively using browser speech recognition.' },
  { icon: '🔊', title: 'Natural Audio TTS', desc: 'Listen to every lesson part with natural voice synthesis playback.' },
  { icon: '🔗', title: 'Verifiable Citations', desc: 'Every factual claim links out to verifiable primary sources and publications.' },
  { icon: '💾', title: 'Two-Tier Caching', desc: 'Instant cache peek with memory LRU and MongoDB persistent TTL caching.' },
  { icon: '📚', title: 'Offline Journey Library', desc: 'Automatically archives completed lessons on-device for instant review.' },
  { icon: '♿', title: 'WCAG 2.1 AA Accessible', desc: 'Full keyboard navigation (1-4 / A-D), skip links, ARIA live feedback, and reduced motion.' },
  { icon: '🎨', title: 'Olive Frenzy Minimal', desc: 'Calm, tactile design in Paper daylight and Ink dark mode with zero purple/violet.' },
]

export default function FeatureTour() {
  return (
    <section id="tour" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker">
            06 · Capability Overview
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            18 Capabilities, One Unified System.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Every tool crafted to make learning fast, structured, verifiable, and deeply engaging.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.03}>
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
