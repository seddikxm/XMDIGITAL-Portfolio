import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  blur?: boolean
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  blur = false,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={
        blur
          ? { opacity: 0, x, y, filter: 'blur(8px)' }
          : { opacity: 0, x, y }
      }
      whileInView={
        blur
          ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
          : { opacity: 1, x: 0, y: 0 }
      }
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}
