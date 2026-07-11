import Reveal from './Reveal'
import LessonStack from './LessonStack'

export default function Hero() {
  return (
    <section id="top" className="relative" style={{ padding: 'clamp(64px, 9vw, 116px) 0 clamp(56px,7vw,96px)' }}>
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal as="p" className="marker" style={{ marginBottom: 26 }}>
              RealLearn · Vol. 01
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 8.4vw, 76px)', color: 'var(--ink)', maxWidth: '13ch' }}>
                You consumed an answer. You didn&rsquo;t{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>learn anything.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14} as="p" className="font-display" style={{ fontSize: 'clamp(18px,2vw,22px)', color: 'var(--ink-dim)', maxWidth: '34ch', margin: '26px 0 34px', lineHeight: 1.45 }}>
              RealLearn turns any question into a structured, three-part lesson &mdash; and proves it stuck before it lets you move on.
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
              <a className="btn" href="#try">
                Try a lesson
                <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#method">
                See the method
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="flex justify-center lg:justify-end">
            <LessonStack />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
