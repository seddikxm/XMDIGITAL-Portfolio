import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import WordReveal from '../components/WordReveal'
import ContactButton from '../components/ContactButton'

const ABOUT_PARAGRAPHS = [
  'Behind every local business is a story worth telling and a website worth visiting.',
  'At XMDigital, we specialize in building digital experiences for local businesses that are ready to grow. We believe your website shouldn\u2019t just exist it should work for you: attracting attention, earning trust, and turning casual visitors into loyal customers.',
  'That\u2019s why every site we build is clean, fast, and designed with purpose. No bloated templates. No complicated jargon. Just a focused digital presence that reflects the quality of your work and helps your business stand out in a crowded online world.',
]

const CLOSING_LINE =
  'Your local business deserves more than just a website. It deserves a digital partner.'

const GRADIENT = 'linear-gradient(123deg, #f472b6 7%, #c084fc 40%, #fb923c 100%)'
const EASE = [0.32, 0.72, 0, 1] as const

const ringMask =
  'radial-gradient(farthest-side, transparent calc(100% - 36px), #000 calc(100% - 35px))'

function GlassRing() {
  return (
    <div
      className="h-[240px] w-[240px] rounded-full lg:h-[340px] lg:w-[340px]"
      style={{
        background: 'conic-gradient(from 130deg, #B600A8, #7621B0, #BE4C00, #B600A8)',
        WebkitMask: ringMask,
        mask: ringMask,
        filter: 'drop-shadow(0 0 50px rgba(182, 0, 168, 0.35))',
      }}
    />
  )
}

function GlassSphere() {
  return (
    <div
      className="h-[190px] w-[190px] rounded-full lg:h-[250px] lg:w-[250px]"
      style={{
        background:
          'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9) 0%, rgba(192,132,252,0.45) 20%, rgba(118,33,176,0.35) 55%, rgba(12,12,12,0.05) 100%)',
        boxShadow:
          'inset 0 0 60px rgba(182,0,168,0.25), 0 30px 80px rgba(118,33,176,0.25)',
      }}
    />
  )
}

function Glint() {
  return (
    <div
      className="h-10 w-10 rotate-45 rounded-[30%]"
      style={{
        background: 'linear-gradient(135deg, #f472b6, #c084fc)',
        boxShadow: '0 0 34px rgba(192, 132, 252, 0.55)',
      }}
    />
  )
}

function FloatingShape({
  children,
  position,
  delay,
  duration,
  drift = 14,
}: {
  children: ReactNode
  position: string
  delay: number
  duration: number
  drift?: number
}) {
  return (
    <FadeIn
      delay={delay}
      x={0}
      y={30}
      duration={0.9}
      className={`pointer-events-none absolute ${position}`}
    >
      <motion.div
        animate={{ y: [0, -drift, 0] }}
        transition={{ duration, repeat: Infinity, ease: EASE }}
      >
        {children}
      </motion.div>
    </FadeIn>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-x-clip px-5 py-24 sm:px-8 md:px-10 md:py-40"
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute left-[-15%] top-[5%] h-[420px] w-[420px] rounded-full opacity-25 md:h-[560px] md:w-[560px]"
        style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[0%] right-[-12%] h-[380px] w-[380px] rounded-full opacity-20 md:h-[520px] md:w-[520px]"
        style={{ background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)' }}
      />

      {/* Premium 3D shapes — bleeding off the edges, behind all content */}
      <FloatingShape position="right-[-140px] top-[4%] md:right-[-100px] lg:right-[-60px]" delay={0.1} duration={5.5}>
        <GlassRing />
      </FloatingShape>
      <FloatingShape position="bottom-[2%] left-[-90px] md:left-[-60px]" delay={0.25} duration={6.5} drift={18}>
        <GlassSphere />
      </FloatingShape>
      <FloatingShape position="left-[4%] top-[14%] hidden lg:block" delay={0.4} duration={5} drift={10}>
        <Glint />
      </FloatingShape>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-start gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* Editorial left rail */}
        <div className="flex flex-col items-center gap-8 text-center lg:sticky lg:top-36 lg:items-start lg:text-left">
          <FadeIn delay={0} y={40} blur>
            <h2
              className="hero-heading whitespace-nowrap font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 84px)' }}
            >
              About us
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={20} blur className="hidden w-full lg:block">
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-[#B600A8]/60 via-white/15 to-transparent" />
          </FadeIn>

          <FadeIn delay={0.2} y={20} blur>
            <p
              className="font-light uppercase tracking-[0.15em] text-[#D7E2EA]/50"
              style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
            >
              Local roots. Digital growth
            </p>
          </FadeIn>

          <FadeIn delay={0.25} y={20} blur>
            <ContactButton arrow />
          </FadeIn>
        </div>

        {/* Double-bezel story card */}
        <FadeIn delay={0.2} y={40} blur>
          <div className="rounded-[2.5rem] bg-white/5 p-1.5 ring-1 ring-white/10 sm:p-2">
            <div className="rounded-[calc(2.5rem-0.375rem)] bg-[#101012] px-6 py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:px-10 sm:py-14">
              <div className="flex flex-col gap-7 sm:gap-9">
                <WordReveal
                  text={ABOUT_PARAGRAPHS[0]}
                  className="text-[clamp(1.3rem,2.8vw,2.1rem)] font-medium leading-snug text-[#D7E2EA]"
                />
                {ABOUT_PARAGRAPHS.slice(1).map((paragraph) => (
                  <WordReveal
                    key={paragraph.slice(0, 24)}
                    text={paragraph}
                    className="text-[clamp(1rem,2vw,1.35rem)] font-light leading-relaxed text-[#D7E2EA]/75"
                  />
                ))}
                <div className="mt-1 h-px w-full bg-gradient-to-r from-[#B600A8]/50 via-white/10 to-transparent" />
                <WordReveal
                  text={CLOSING_LINE}
                  gradient={GRADIENT}
                  className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold leading-snug"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
