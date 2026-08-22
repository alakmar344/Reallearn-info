import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const AUDIENCES = [
  {
    icon: 'graduation-cap',
    title: 'Students & Exam Prep',
    desc: 'Master tricky STEM and humanities concepts without cramming. Build rock-solid intuition that lasts through exams.',
    tag: 'Grade 6 to College',
  },
  {
    icon: 'sparkles',
    title: 'Curious Lifelong Learners',
    desc: 'Explore quantum computing, astronomy, philosophy, or global economics in 5-minute structured bites with zero fluff.',
    tag: 'Daily Curiosity',
  },
  {
    icon: 'zap',
    title: 'Working Professionals',
    desc: 'Quickly upskill into new technical domains, AI trends, and business mechanisms with clear cause-and-effect breakdowns.',
    tag: 'Career Upskilling',
  },
  {
    icon: 'globe',
    title: 'Multilingual Learners',
    desc: 'Learn high-level concepts naturally in any of 63 global languages with culturally aware, native-quality lessons.',
    tag: '63 Global Languages',
  },
]

const COMPARISONS = [
  {
    feature: 'Learning Roadmap',
    reallearn: '3-Part Spine (Intuition → Mechanism → Real World)',
    chatbot: 'Single unstructured wall of text',
    search: 'Dozens of scattered links & blog posts',
  },
  {
    feature: 'Memory & Retention',
    reallearn: 'Active Recall Checkpoint Quizzes (100% Mastery)',
    chatbot: 'Zero testing (passive reading, 80% forgotten)',
    search: 'None (skimming through web pages)',
  },
  {
    feature: 'Native Multilingual',
    reallearn: '63 Global Languages with cultural tone',
    chatbot: 'Often English-biased or awkward literal translation',
    search: 'Hit-or-miss language availability',
  },
  {
    feature: 'Real-World Relevance',
    reallearn: 'Grounded with fresh live news in Part 3',
    chatbot: 'Static training cutoff dates',
    search: 'Cluttered with SEO articles and sponsored ads',
  },
  {
    feature: 'Motivation & Habits',
    reallearn: 'Daily Streaks, XP, Levels & 56 Badges',
    chatbot: 'No progress tracking or habit building',
    search: 'No learning progression',
  },
  {
    feature: 'Privacy & Distractions',
    reallearn: '100% On-Device, Ad-Free & Distraction-Free',
    chatbot: 'Stores conversations on external servers',
    search: 'Heavy user tracking and aggressive banner ads',
  },
]

const FAQS = [
  {
    q: 'Is RealLearn AI free to use?',
    a: 'Yes! RealLearn AI is completely free to use and 100% ad-free. Anyone with a curious mind can start exploring and learning immediately without paywalls or subscriptions.',
  },
  {
    q: 'How does the 3-step method help me understand faster?',
    a: 'Most tools dump complex formulas and technical terms all at once. RealLearn breaks learning into three intuitive stages: first building simple intuition (The Foundation), then exploring the inner machinery (The Mechanism), and finally showing why it matters today (The Real World).',
  },
  {
    q: 'Why are quizzes required to unlock the next part?',
    a: 'Cognitive science shows that "active recall" (answering quick questions) is up to 3x more effective than passive reading. By answering 2 quick questions, you prove to yourself that you understand the concept before moving forward — locking knowledge into long-term memory.',
  },
  {
    q: 'Which languages are supported?',
    a: 'RealLearn supports 63 global languages. Lessons are crafted directly in your chosen language with natural phrasing — never translated after the fact.',
  },
  {
    q: 'Can I listen to lessons or speak my questions?',
    a: 'Yes! RealLearn features built-in speech recognition (tap the microphone to ask questions aloud) and natural audio narration so you can listen to lessons like a personalized podcast on the go.',
  },
  {
    q: 'What topics can I ask about?',
    a: 'Anything under the sun! From Physics, Biology, Chemistry, and Mathematics to Economics, World History, Psychology, Philosophy, Artificial Intelligence, and Space Exploration. The world is your textbook!',
  },
]

export default function ComparisonFAQ() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="compare" className="py-20 relative z-10">
      <div className="container">
        {/* Audience Section */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="sticker">06 · Who It&rsquo;s For</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Built for anyone hungry to learn.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Whether you&rsquo;re preparing for an exam or just curious about how the universe works.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="grid place-items-center w-10 h-10 rounded-xl"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                    >
                      <Icon name={a.icon} size={20} />
                    </span>
                    <span className="chip text-[11px] font-mono">
                      {a.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {a.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison Matrix */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker">07 · The Difference</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            How RealLearn compares.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Why a structured teaching system beats generic chatbots and endless search results.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mb-24 overflow-x-auto">
          <div
            className="glass-card min-w-[680px] overflow-hidden"
            style={{ borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-default)' }}
          >
            <div
              className="grid grid-cols-[1.2fr_1.5fr_1.3fr_1.3fr] text-xs uppercase font-mono font-bold tracking-wider py-4 px-6 border-b"
              style={{ background: 'var(--bg-3)', borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
            >
              <div>Dimension</div>
              <div style={{ color: 'var(--accent)' }}>✨ RealLearn AI</div>
              <div style={{ color: 'var(--text-secondary)' }}>Generic Chatbots</div>
              <div style={{ color: 'var(--text-secondary)' }}>Search Engines</div>
            </div>

            {COMPARISONS.map((row, idx) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1.2fr_1.5fr_1.3fr_1.3fr] text-xs sm:text-sm items-center py-4 px-6 border-b"
                style={{
                  borderColor: 'var(--border-default)',
                  background: idx % 2 === 0 ? 'transparent' : 'color-mix(in srgb, var(--bg-card) 60%, transparent)',
                }}
              >
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {row.feature}
                </div>
                <div className="font-semibold flex items-center gap-2 pr-4" style={{ color: 'var(--accent)' }}>
                  <Icon name="check" size={15} strokeWidth={2.5} className="flex-none" />
                  <span>{row.reallearn}</span>
                </div>
                <div className="text-xs pr-4" style={{ color: 'var(--text-secondary)' }}>
                  {row.chatbot}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {row.search}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* FAQ Accordion */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker">08 · Questions & Answers</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
            Frequently asked questions.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to know about getting started with RealLearn AI.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.q}
                  className="glass-card overflow-hidden transition-all"
                  style={{
                    borderRadius: 'var(--radius-xl)',
                    borderColor: isOpen ? 'var(--accent)' : 'var(--border-default)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="accordion-header"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="grid place-items-center w-7 h-7 rounded-full flex-none transition-transform"
                      style={{
                        background: isOpen ? 'var(--accent-dim)' : 'var(--bg-3)',
                        color: isOpen ? 'var(--accent)' : 'var(--text-secondary)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <Icon name="chevron-down" size={16} strokeWidth={2.4} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="accordion-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
