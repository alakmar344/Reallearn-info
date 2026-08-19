const LANGUAGES = [
  'English',
  'हिन्दी (Hindi)',
  'ગુજરાતી (Gujarati)',
  'தமிழ் (Tamil)',
  'বাংলা (Bengali)',
  'मराठी (Marathi)',
  'తెలుగు (Telugu)',
  'ಕನ್ನಡ (Kannada)',
  'മലയാളം (Malayalam)',
  'ਪੰਜਾਬੀ (Punjabi)',
  'اردو (Urdu)',
  'ଓଡ଼ିଆ (Odia)',
]

const SUBJECTS = [
  { name: 'Physics', color: 'var(--subject-physics)' },
  { name: 'Chemistry', color: 'var(--subject-chemistry)' },
  { name: 'Biology', color: 'var(--subject-biology)' },
  { name: 'Mathematics', color: 'var(--accent)' },
  { name: 'Economics', color: 'var(--subject-economics)' },
  { name: 'Computer Science', color: 'var(--subject-cs)' },
  { name: 'History', color: 'var(--subject-history)' },
  { name: 'Environmental Science', color: 'var(--subject-chemistry)' },
  { name: 'Political Science', color: 'var(--subject-economics)' },
]

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
      <div className="animate-marquee gap-8">
        {[...LANGUAGES, ...SUBJECTS.map((s) => s.name), ...LANGUAGES, ...SUBJECTS.map((s) => s.name)].map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
