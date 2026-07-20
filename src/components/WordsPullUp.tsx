import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  showAsterisk?: boolean
  className?: string
  delay?: number
}

export default function WordsPullUp({ text, showAsterisk = false, className = '', delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(' ')

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={i} className={`inline-flex ${isLast && showAsterisk ? 'relative' : ''}`}>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {isLast && showAsterisk && (
              <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] text-[#E1E0CC]">*</sup>
            )}
          </span>
        )
      })}
    </h1>
  )
}
