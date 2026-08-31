const LANGUAGES = [
  '63 Global Languages',
  'English',
  'Hindi',
  'Chinese',
  'Spanish',
  'French',
  'Arabic',
  'Portuguese',
  'Russian',
  'Japanese',
  'German',
  'Korean',
]

const SUBJECTS = [
  'Artificial Intelligence',
  'Physics & Astronomy',
  'Biology & Medicine',
  'Economics & Finance',
  'World History',
  'Computer Science',
  'Neuroscience & Psychology',
  'Mathematics & Logic',
  'Climate & Environment',
]

export default function Ticker() {
  return (
    <div
      className="relative z-10 overflow-hidden"
      style={{ borderTop: '3px solid var(--line)', borderBottom: '3px solid var(--line)' }}
    >
      {/* Band 1 — solid accent slab, languages */}
      <div className="py-3" style={{ background: 'var(--accent)' }}>
        <div className="animate-marquee gap-10">
          {[...LANGUAGES, ...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="inline-flex items-center gap-4 font-display text-base sm:text-lg font-black uppercase tracking-[0.08em] whitespace-nowrap"
              style={{ color: 'var(--on-accent)' }}
            >
              <span aria-hidden="true">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Band 2 — reversed direction, subjects on a cyan complementary slab */}
      <div
        className="py-3"
        style={{ background: 'var(--accent-2)', borderTop: '3px solid var(--line)' }}
      >
        <div className="animate-marquee-reverse gap-10">
          {[...SUBJECTS, ...SUBJECTS, ...SUBJECTS, ...SUBJECTS].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="inline-flex items-center gap-4 font-display text-base sm:text-lg font-black uppercase tracking-[0.08em] whitespace-nowrap"
              style={{ color: '#000000' }}
            >
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 inline-block"
                style={{ background: '#000000', transform: 'rotate(45deg)', border: '1px solid #000' }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
