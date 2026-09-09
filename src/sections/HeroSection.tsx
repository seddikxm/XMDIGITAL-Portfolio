import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import Navbar from '../components/Navbar'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

const TITLE = 'XMDIGITAL'

const TAGLINE =
  'Helping local businesses stand out in the digital world. Clean, fast, and built to convert visitors into loyal customers.'

const EASE = [0.22, 1, 0.36, 1] as const

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia('(min-width: 640px)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()

  return (
    <section className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-x-clip">
      {/* Ambient background — mobile only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 sm:hidden"
      >
        <div className="absolute left-1/2 top-[-15%] h-[55vh] w-[85vw] -translate-x-1/2 rounded-full bg-[#7621B0]/20 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-10%] h-[40vh] w-[45vw] rounded-full bg-[#B600A8]/15 blur-[110px]" />
        <div className="absolute bottom-[0%] right-[-8%] h-[35vh] w-[40vw] rounded-full bg-[#BE4C00]/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 75%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <Navbar />

      {/* Eyebrow badge — mobile only, single line */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
        className="flex justify-center px-4 pt-28 sm:hidden"
      >
        <span className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/50 px-3.5 py-2 text-[9px] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B600A8] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B600A8]" />
          </span>
          Available for new projects
        </span>
      </motion.div>

      {/* Giant title: original block fade on desktop, letter stagger on mobile */}
      <div className="flex flex-1 items-center justify-center overflow-hidden pt-5 sm:block sm:flex-none sm:pt-24">
        {isDesktop ? (
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              {TITLE}
            </h1>
          </FadeIn>
        ) : (
          <motion.h1
            className="hero-heading w-full whitespace-nowrap text-[13.5vw] font-black uppercase leading-none tracking-tight"
            aria-label={TITLE}
            style={{
              backgroundImage:
                'linear-gradient(110deg, #646973 35%, #ffffff 48%, #e6eef4 52%, #bbccd7 65%)',
              backgroundSize: '250% 100%',
              backgroundPosition: reduceMotion ? '50% 0' : '200% 0',
            }}
            animate={
              reduceMotion
                ? undefined
                : { backgroundPosition: ['200% 0', '-120% 0'] }
            }
            transition={{ delay: 1.3, duration: 1.8, ease: 'easeInOut' }}
          >
            {TITLE.split('').map((char, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="inline-block"
                initial={reduceMotion ? false : { y: '0.45em', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 + i * 0.05, duration: 0.9, ease: EASE }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        )}
      </div>

      {/* Mobile middle: tagline + CTA centered between title and portrait */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
        className="mt-2 flex flex-col items-center gap-5 px-6 text-center sm:hidden"
      >
        <p
          className="max-w-[300px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.8rem, 3.4vw, 1rem)' }}
        >
          {TAGLINE}
        </p>
        <ContactButton />
      </motion.div>

      {/* Portrait: in-flow with glow on mobile, bottom-anchored absolute on desktop */}
      <div className="relative flex min-h-[200px] items-center justify-center px-4 pb-6 max-sm:[mask-image:linear-gradient(to_bottom,black_60%,transparent_97%)] max-sm:[-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_97%)] sm:absolute sm:bottom-0 sm:left-1/2 sm:top-auto sm:z-10 sm:min-h-0 sm:w-[360px] sm:-translate-x-1/2 sm:px-0 sm:pb-0 md:w-[440px] lg:w-[520px]">
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.1, ease: EASE }}
          className="absolute h-[220px] w-[220px] rounded-full bg-gradient-to-br from-[#B600A8]/40 via-[#7621B0]/30 to-[#BE4C00]/25 blur-[70px] sm:hidden"
        />
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.55, duration: 1, ease: EASE }}
          className="w-[230px] max-w-[52vw] sm:w-full sm:max-w-none"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="XMDIGITAL founder portrait"
              className="w-full select-none"
              draggable={false}
            />
          </Magnet>
        </motion.div>
      </div>

      {/* Bottom row — desktop original layout */}
      <div className="hidden items-end justify-between px-6 pb-7 sm:flex sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[240px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[340px] md:max-w-[400px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {TAGLINE}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
