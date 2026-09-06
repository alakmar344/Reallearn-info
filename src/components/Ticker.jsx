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
      role="region"
      aria-label="Languages and subjects covered by RealLearn AI"
      style={{ borderTop: '1.5px solid var(--line)', borderBottom: '1.5px solid var(--line)' }}
    >
      {/* Band 1 — volt slab, languages */}
      <div className="py-3" style={{ background: 'var(--lime)' }}>
        <div className="animate-marquee gap-10">
          {[...LANGUAGES, ...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="inline-flex items-center gap-4 font-display text-base sm:text-lg font-extrabold uppercase whitespace-nowrap"
              style={{ color: '#131315', letterSpacing: '0.04em' }}
            >
              <span aria-hidden="true">✳</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Band 2 — ink slab, subjects */}
      <div
        className="py-3"
        style={{ background: '#131315', borderTop: '1.5px solid var(--line)' }}
      >
        <div className="animate-marquee-reverse gap-10">
          {[...SUBJECTS, ...SUBJECTS, ...SUBJECTS, ...SUBJECTS].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="inline-flex items-center gap-4 font-display text-base sm:text-lg font-extrabold uppercase whitespace-nowrap"
              style={{ color: '#fff', letterSpacing: '0.04em' }}
            >
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 inline-block"
                style={{ background: 'var(--lime)', transform: 'rotate(45deg)' }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
