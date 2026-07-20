import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const navItems = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 relative">
      <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <nav
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-20"
          style={{ marginTop: 0 }}
        >
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[10px] sm:text-xs md:text-sm no-underline transition-colors duration-200"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10 z-10">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC]"
              />
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-sm"
                style={{ color: 'rgba(222, 219, 200, 0.7)' }}
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place,
                status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 bg-primary rounded-full px-6 py-3 text-black font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 w-fit"
              >
                Join the lab
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" strokeWidth={2} />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
