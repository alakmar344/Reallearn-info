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

const ITEMS = [...LANGUAGES, ...SUBJECTS]

export default function Ticker() {
  return (
    <div
      className="py-4 border-y relative z-10 overflow-hidden"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-card) 60%, transparent)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="animate-marquee gap-8 ticker-mask">
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-3 font-display text-sm font-extrabold uppercase tracking-[0.06em] whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="w-1.5 h-1.5 bg-[color:var(--accent)]" style={{ transform: 'rotate(45deg)' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
