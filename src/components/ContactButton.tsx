import type { MouseEventHandler, ReactNode } from 'react'

const GRADIENT_BUTTON_CLASSES =
  'group inline-flex items-center gap-3 rounded-full px-7 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-90 active:scale-[0.98] sm:px-9 sm:py-3.5 sm:text-sm md:px-11 md:py-4 md:text-base'

const GRADIENT_BUTTON_STYLE = {
  background:
    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
}

function ArrowBadge() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 sm:h-8 sm:w-8">
      <span className="text-sm leading-none sm:text-base">↗</span>
    </span>
  )
}

type ContactButtonProps = {
  href?: string
  type?: 'button' | 'submit'
  label?: string
  arrow?: boolean
  onClick?: MouseEventHandler
}

export default function ContactButton({
  href = '#contact',
  type,
  label = 'Contact Us',
  arrow = false,
  onClick,
}: ContactButtonProps) {
  const content: ReactNode = (
    <>
      <span>{label}</span>
      {arrow && <ArrowBadge />}
    </>
  )
  if (type) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={GRADIENT_BUTTON_CLASSES}
        style={GRADIENT_BUTTON_STYLE}
      >
        {content}
      </button>
    )
  }
  return (
    <a href={href} className={GRADIENT_BUTTON_CLASSES} style={GRADIENT_BUTTON_STYLE}>
      {content}
    </a>
  )
}
