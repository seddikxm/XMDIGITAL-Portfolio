import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from 'framer-motion'

function Word({
  word,
  progress,
  range,
  gradient,
  index,
  total,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
  gradient?: string
  index: number
  total: number
}) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const style: MotionStyle = gradient
    ? {
        opacity,
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        backgroundSize: `${total * 100}% 100%`,
        backgroundPosition: `${total > 1 ? (index / (total - 1)) * 100 : 0}% 0`,
        backgroundRepeat: 'no-repeat',
      }
    : { opacity }
  return (
    <>
      <motion.span className="inline-block" style={style}>
        {word}
      </motion.span>{' '}
    </>
  )
}

type WordRevealProps = {
  text: string
  className?: string
  gradient?: string
}

export default function WordReveal({ text, className, gradient }: WordRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.6'],
  })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          gradient={gradient}
          index={i}
          total={words.length}
        />
      ))}
    </p>
  )
}
