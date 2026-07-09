import Reveal from './Reveal'

export default function SectionHeader({ num, kicker, title, lead, align = 'left' }) {
  return (
    <div style={{ maxWidth: 700, marginBottom: 52, textAlign: align }}>
      <Reveal as="div" className="marker eyebrow-accent" style={{ marginBottom: 18 }}>
        {num} · {kicker}
      </Reveal>
      <Reveal delay={0.05} as="h2" className="font-display" style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: 'var(--ink)', marginBottom: 14 }}>
        {title}
      </Reveal>
      {lead && (
        <Reveal delay={0.1} as="p" className="font-display" style={{ fontSize: 17, color: 'var(--ink-dim)', lineHeight: 1.5, fontStyle: 'italic' }}>
          {lead}
        </Reveal>
      )}
    </div>
  )
}
