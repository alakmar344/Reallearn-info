import Reveal from './Reveal'

const SUPERPOWERS = [
  {
    num: '01',
    title: 'Structured, Every Single Time',
    desc: 'No matter how complex the question, every lesson follows the exact same 3-part spine — Foundation → Mechanism → Real World. You always know what mental model you are building toward.',
    badge: '3-Part Spine',
  },
  {
    num: '02',
    title: 'Sub-Second Multi-Provider Inference',
    desc: 'Powered by Groq LPUs for sub-second Time-To-First-Token streaming (Qwen 3.6 27B & GPT-OSS 120B), hedged with Mistral AI JSON mode, NVIDIA NIM 70B–150B, and Cloudflare Workers AI failover.',
    badge: 'Groq LPUs + Multi-Tier AI',
  },
  {
    num: '03',
    title: 'Banked Active Recall, Not Passive Drifting',
    desc: 'A 2-question quiz gates every part. You cannot drift ahead until you prove the concept stuck. Incorrect answers re-queue only missed questions so previous work is permanently banked.',
    badge: 'Banked Quiz Gating',
  },
  {
    num: '04',
    title: 'Grounded in Today via Serper News',
    desc: 'Part 3 weaves live real-world news and current scientific research into the lesson via Serper API before a word is generated, ensuring theory meets live 2026 events.',
    badge: 'Live Fact Grounding',
  },
]

export default function Features() {
  return (
    <section id="method" className="py-20 relative z-10">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker">
            02 · The Method
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Four Superpowers of RealLearn.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Engineered from cognitive science, retrieval practice, and low-latency inference.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUPERPOWERS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold" style={{ color: 'var(--accent)' }}>
                      {s.num}
                    </span>
                    <span
                      className="font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase"
                      style={{
                        background: 'var(--bg-3)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-default)',
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {s.title}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
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
