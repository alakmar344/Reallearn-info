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
  '<ctrl42>ਪੰਜਾਬੀ (Punjabi)',
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

export default function Ticker() {
  return (
    <div
      className="py-5 border-y relative z-10 overflow-hidden"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-card) 60%, transparent)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex whitespace-nowrap gap-8 animate-marquee">
        {[...LANGUAGES, ...SUBJECTS, ...LANGUAGES].map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-wider"
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
