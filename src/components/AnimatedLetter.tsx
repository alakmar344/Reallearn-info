import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLetterProps {
  letter: string
  index: number
  totalChars: number
}

export default function AnimatedLetter({ letter, index, totalChars }: AnimatedLetterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const charProgress = index / totalChars
  const opacity = useTransform(scrollYProgress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1])

  return (
    <motion.span ref={ref} style={{ opacity }}>
      {letter}
    </motion.span>
  )
}
