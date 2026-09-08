import { useRef, useState, type ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0, 0, 0)')
  const [transition, setTransition] = useState(inactiveTransition)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    setTransform(
      `translate3d(${relX / strength}px, ${relY / strength}px, 0)`,
    )
    setTransition(activeTransition)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const withinX =
      e.clientX >= rect.left - padding && e.clientX <= rect.right + padding
    const withinY =
      e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding
    if (!withinX || !withinY) {
      setTransform('translate3d(0, 0, 0)')
      setTransition(inactiveTransition)
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition, willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
