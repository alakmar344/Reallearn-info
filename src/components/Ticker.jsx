const ITEMS = [
  { e: '⚡', t: 'Physics' },
  { e: '🧪', t: 'Chemistry' },
  { e: '📈', t: 'Economics' },
  { e: '🧬', t: 'Biology' },
  { e: '💻', t: 'Computer Science' },
  { e: '🏺', t: 'History' },
  { e: '🗺️', t: 'Geography' },
  { e: '➗', t: 'Mathematics' },
  { e: '🏛️', t: 'Political Science' },
  { e: '🌱', t: 'Environmental Science' },
  { e: '🌍', t: 'English · हिन्दी · ગુજરાતી · தமிழ்' },
  { e: '🗣️', t: 'বাংলা · मराठी · తెలుగు · ಕನ್ನಡ' },
  { e: '🪷', t: 'മലയാളം · ਪੰਜਾਬੀ · ଓଡ଼ିଆ · অসমীয়া' },
]

export default function Ticker() {
  const row = (hidden) => (
    <div className="flex items-center gap-10" aria-hidden={hidden || undefined}>
      {ITEMS.map((it) => (
        <span key={it.t} className="ticker-item">
          <span className="tk-emoji" aria-hidden="true">{it.e}</span>
          {it.t}
        </span>
      ))}
    </div>
  )

  return (
    <div className="ticker" aria-label="Subjects and languages RealLearn covers">
      <div className="ticker-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
