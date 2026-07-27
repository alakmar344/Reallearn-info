import { ThemeProvider } from './theme'
import StickyScene3D from './components/StickyScene3D'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import ProblemSection from './components/ProblemSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Demo from './components/Demo'
import Rewards from './components/Rewards'
import FeatureTour from './components/FeatureTour'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">Skip to content</a>

      <ProgressBar />

      {/* Fixed 3D WebGL Canvas Layer */}
      <StickyScene3D />

      {/* Relative Content Layer */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />

        <main id="main">
          <Hero />
          <Ticker />
          <ProblemSection />
          <Features />
          <HowItWorks />
          <Demo />
          <Rewards />
          <FeatureTour />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
