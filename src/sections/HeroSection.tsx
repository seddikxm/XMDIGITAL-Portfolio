import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import Navbar from '../components/Navbar'
import ContactButton from '../components/ContactButton'

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

export default function HeroSection() {
  return (
    <section className="flex h-screen flex-col overflow-x-clip">
      <Navbar />

      <div className="overflow-hidden pt-20 sm:pt-24">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            XMDIGITAL
          </h1>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={PORTRAIT_URL}
            alt="Jack — 3D creator portrait"
            className="w-full select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      <div className="flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[240px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[340px] md:max-w-[400px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Helping local businesses stand out in the digital world. Clean, fast,
            and built to convert visitors into loyal customers.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
