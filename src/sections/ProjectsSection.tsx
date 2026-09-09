import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import kingsmereTestimonials from '../assets/projects/kingsmere-testimonials.png'
import kingsmereBooking from '../assets/projects/kingsmere-booking.png'
import kingsmereHero from '../assets/projects/kingsmere-hero.png'
import claridgeBooking from '../assets/projects/Claridge-booking.png'
import claridgeDashboard from '../assets/projects/Claridge-dashboard.png'
import claridgeHero from '../assets/projects/Claridge-hero.png'

type Project = {
  number: string
  name: string
  category: string
  url?: string
  col1: [string, string]
  col2: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Kingsmere Property',
    category: 'Booking Website',
    url: 'https://kingsmere-property.vercel.app/',
    col1: [kingsmereTestimonials, kingsmereBooking],
    col2: kingsmereHero,
  },
  {
    number: '02',
    name: 'Claridge Residences',
    category: 'Booking Website',
    url: 'https://claridgeresidences.vercel.app/',
    col1: [claridgeBooking, claridgeDashboard],
    col2: claridgeHero,
  },
]

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="mb-10 md:mb-0 md:h-[105vh]">
      <div className="md:sticky md:top-32">
        <motion.div
          style={{ scale, top: index * 28 }}
          className="relative rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        >
          <div className="mb-6 flex flex-col gap-6 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-6 md:gap-10">
              <span
                className="hero-heading shrink-0 font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1 pb-2">
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase leading-tight text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <div className="shrink-0">
              <LiveProjectButton href={project.url} />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
            <div className="order-2 flex gap-3 sm:gap-4 md:order-1 md:w-[40%] md:flex-col">
              <div
                className="w-1/2 overflow-hidden rounded-[40px] sm:rounded-[50px] md:w-full md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              >
                <img
                  src={project.col1[0]}
                  alt={`${project.name} preview 1`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="w-1/2 overflow-hidden rounded-[40px] sm:rounded-[50px] md:w-full md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              >
                <img
                  src={project.col1[1]}
                  alt={`${project.name} preview 2`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-[40px] sm:rounded-[50px] md:order-2 md:h-full md:w-[60%] md:rounded-[60px]">
              <img
                src={project.col2}
                alt={`${project.name} main preview`}
                loading="lazy"
                className="aspect-[2/1] h-full w-full object-cover md:aspect-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 scroll-mt-24 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-16 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-20 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-24 md:pt-28"
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
      <div aria-hidden="true" className="h-[35vh] md:h-[50vh]" />
    </section>
  )
}
