import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const headerSegments = [
  { text: 'Studio-grade workflows for visionary creators.', className: 'text-primary' },
  { text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' },
]

const cards = [
  {
    type: 'video',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    title: 'Your creative canvas.',
  },
  {
    type: 'content',
    number: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: ['Scene-by-scene visual planning', 'Drag-and-drop timeline editor', 'Real-time team collaboration', 'Export to any format'],
  },
  {
    type: 'content',
    number: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: ['AI-powered feedback analysis', 'Creative notes and annotations', 'Seamless tool integrations'],
  },
  {
    type: 'content',
    number: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: ['Notification silencing mode', 'Ambient soundscapes', 'Schedule syncing across tools'],
  },
]

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null)
  useInView(headerRef, { once: true })

  return (
    <section className="min-h-screen bg-black relative">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {cards.map((card, i) => (
            <FeatureCard key={card.type === 'video' ? 'video' : card.number} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (card.type === 'video') {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl overflow-hidden relative h-64 lg:h-full"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={card.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 text-[#E1E0CC] font-medium text-sm sm:text-base">
          {card.title}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col h-64 lg:h-full"
    >
      <img
        src={card.icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4 object-cover"
      />
      <h3 className="text-[#E1E0CC] font-medium text-sm sm:text-base mb-4">
        {card.title} ({card.number})
      </h3>
      <ul className="space-y-2 flex-1">
        {card.items!.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all duration-200 group">
        Learn more
        <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
      </button>
    </motion.div>
  )
}
