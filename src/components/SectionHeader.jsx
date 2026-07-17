import Reveal from './Reveal'

export default function SectionHeader({ num, kicker, title, lead, align = 'left' }) {
  return (
    <div style={{ maxWidth: 720, marginBottom: 60, textAlign: align, marginInline: align === 'center' ? 'auto' : undefined }}>
      <Reveal as="div" className="marker" style={{ marginBottom: 20 }}>
        {num} · {kicker}
      </Reveal>
      <Reveal delay={0.05} as="h2" className="font-display" style={{ fontSize: 'clamp(30px,4vw,46px)', color: 'var(--ink)', marginBottom: 16, letterSpacing: '-0.025em' }}>
        {title}
      </Reveal>
      {lead && (
        <Reveal delay={0.1} as="p" style={{ fontSize: 18, color: 'var(--ink-dim)', lineHeight: 1.55, letterSpacing: '-0.01em', maxWidth: '58ch', marginInline: align === 'center' ? 'auto' : undefined }}>
          {lead}
        </Reveal>
      )}
    </div>
  )
}
