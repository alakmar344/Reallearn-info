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
      className="py-5 border-y relative z-10 overflow-hidden marquee-mask"
      style={{
        borderColor: 'var(--border-default)',
        background: 'color-mix(in srgb, var(--bg-2) 50%, transparent)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex whitespace-nowrap gap-10 animate-marquee" style={{ width: 'max-content' }}>
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-3 text-sm font-medium tracking-tight"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-none"
              style={{ background: 'var(--glow)' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
