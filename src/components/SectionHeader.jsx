import Reveal from './Reveal'

export default function SectionHeader({ num, kicker, title, lead, align = 'left' }) {
  return (
    <div style={{ maxWidth: 700, marginBottom: 'clamp(40px,5vw,60px)', textAlign: align }}>
      <Reveal as="div" className="sticker" style={{ marginBottom: 18 }}>
        {num} · {kicker}
      </Reveal>
      <Reveal delay={0.05} as="h2" className="font-display font-extrabold" style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: 'var(--text-primary)', marginBottom: align === 'center' ? 18 : 14 }}>
        {title}
      </Reveal>
      {lead && (
        <Reveal delay={0.1} as="p" style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.55, marginTop: 16 }}>
          {lead}
        </Reveal>
      )}
    </div>
  )
}
