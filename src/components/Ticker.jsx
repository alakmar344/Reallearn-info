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
      <div className="animate-marquee gap-8">
        {[...ITEMS, ...ITEMS].map((item, idx) => (
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
