import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Segment {
  text: string
  className: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  delay?: number
}

export default function WordsPullUpMultiStyle({ segments, className = '', delay = 0 }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true })

  const allWords: { word: string; className: string; index: number }[] = []
  let globalIndex = 0
  segments.forEach((seg) => {
    const words = seg.text.split(' ')
    words.forEach((word) => {
      allWords.push({ word, className: seg.className, index: globalIndex })
      globalIndex++
    })
  })

  return (
    <h1 ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, i) => (
        <span key={i} className={`inline-flex ${item.className}`}>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + item.index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
