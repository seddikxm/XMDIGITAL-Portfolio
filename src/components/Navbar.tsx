import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = ['About', 'Services', 'Projects', 'Price', 'Contact']

const linkClasses =
  'relative text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/80 transition-colors duration-200 hover:text-[#D7E2EA] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-[#B600A8] after:to-[#BE4C00] after:transition-all after:duration-300 hover:after:w-full'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <nav className="relative flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 py-2.5 pl-6 pr-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:pl-8 sm:pr-4">
        <a
          href="#top"
          className="hero-heading text-lg font-black uppercase tracking-tight sm:text-xl"
        >
          XMDIGITAL
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={linkClasses}>
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-[28px] border border-[#D7E2EA]/15 bg-[#0C0C0C]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md md:hidden">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/80 transition-colors duration-200 hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA]"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>
    </motion.div>
  )
}
