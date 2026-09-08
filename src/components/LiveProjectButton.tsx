import { ArrowUpRight } from 'lucide-react'

type LiveProjectButtonProps = {
  href?: string
}

export default function LiveProjectButton({ href }: LiveProjectButtonProps) {
  const classes =
    'flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base'
  const icon = <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        Live Project
        {icon}
      </a>
    )
  }
  return (
    <button type="button" className={classes}>
      Live Project
      {icon}
    </button>
  )
}
