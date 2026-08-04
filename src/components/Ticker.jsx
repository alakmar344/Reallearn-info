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
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Economics',
  'Computer Science',
  'History',
  'Geography',
  'Political Science',
  'Environmental Science',
]

const ITEMS = [...LANGUAGES, ...SUBJECTS]

export default function Ticker() {
  return (
    <div
      className="py-4 border-y relative z-10 overflow-hidden"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-card) 55%, transparent)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex whitespace-nowrap gap-10 animate-marquee" style={{ width: 'max-content' }}>
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-3 text-sm font-medium"
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
