import { ThemeProvider } from './theme'
import StickyScene3D from './components/StickyScene3D'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import ProblemSection from './components/ProblemSection'
import Method from './components/Method'
import HowItWorks from './components/HowItWorks'
import Demo from './components/Demo'
import FeatureTour from './components/FeatureTour'
import ComparisonFAQ from './components/ComparisonFAQ'
import Book3D from './components/Book3D'
import Reveal from './components/Reveal'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">Skip to content</a>

      <ProgressBar />

      {/* Fixed Ambient Background Layer */}
      <StickyScene3D />

      {/* Blueprint page shell — black outer frame like the reference */}
      <div className="site-shell" style={{ position: 'relative', zIndex: 2 }}>
        <Header />

        <main id="main">
          <Hero />
          <Ticker />
          {/* Live 3-stage lesson preview — real RealLearn lesson content */}
          <section className="py-20 relative z-10" aria-labelledby="preview-heading">
            <div className="container relative">
              <span className="deco-plus" aria-hidden="true" style={{ top: 6, left: '6%' }}>+</span>
              <Reveal className="text-center max-w-3xl mx-auto mb-10">
                <span className="sticker tag-rotate">Live Lesson Preview</span>
                <h2 id="preview-heading" className="font-display mt-5 mb-4" style={{ color: 'var(--text-primary)' }}>
                  A real lesson, three stages deep.
                </h2>
                <p className="text-[17px]" style={{ color: 'var(--text-secondary)' }}>
                  Foundation → Mechanism → Real World — the exact spine every RealLearn journey follows. Tap through the parts.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <Book3D />
              </Reveal>
            </div>
          </section>
          <ProblemSection />
          <Method />
          <HowItWorks />
          <Demo />
          <FeatureTour />
          <ComparisonFAQ />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
