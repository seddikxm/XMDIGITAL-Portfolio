import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    icon: '/emojis/globe.png',
    alt: '3D globe emoji',
    tint: '#E0F2FE',
    name: 'Website Design & Development',
    description:
      'Custom-built websites tailored to your business. No templates, no shortcuts — just a clean, professional design that represents your brand perfectly.',
  },
  {
    icon: '/emojis/phone.png',
    alt: '3D mobile phone emoji',
    tint: '#EDE9FE',
    name: 'Mobile-First Responsive Design',
    description:
      'Over half of your customers browse on phones. Every site we build looks stunning and works flawlessly on any device, any screen size.',
  },
  {
    icon: '/emojis/bolt.png',
    alt: '3D lightning bolt emoji',
    tint: '#FEF3C7',
    name: 'Speed & Performance Optimization',
    description:
      'Slow websites lose customers. We make sure yours loads in a blink, keeping visitors engaged and search engines happy.',
  },
  {
    icon: '/emojis/search.png',
    alt: '3D magnifying glass emoji',
    tint: '#D1FAE5',
    name: 'Local SEO Setup',
    description:
      'When customers search for businesses like yours, you should be the first they find. We optimize your site to rank higher in local search results.',
  },
  {
    icon: '/emojis/cart.png',
    alt: '3D shopping cart emoji',
    tint: '#FFE4E6',
    name: 'Online Booking & E-Commerce',
    description:
      'Let customers book appointments, request quotes, or buy directly from your website — turning your site into a 24/7 sales machine.',
  },
  {
    icon: '/emojis/tools.png',
    alt: '3D hammer and wrench emoji',
    tint: '#E2E8F0',
    name: 'Maintenance & Support',
    description:
      'Your website stays fresh, secure, and up-to-date. We handle the technical side so you can focus on running your business.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <span id="price" className="block scroll-mt-24" />
      <FadeIn>
        <h2
          className="mb-4 text-center font-black uppercase text-[#0C0C0C]"
          style={{ fontSize: 'clamp(2.75rem, 11vw, 140px)' }}
        >
          Our Services
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="mx-auto mb-16 max-w-2xl text-center font-light leading-relaxed text-[#0C0C0C] opacity-60 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
        >
          Everything your local business needs to shine online — from first
          impression to lasting growth.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.name} delay={i * 0.08} y={30}>
            <div
              className={`group flex flex-col gap-5 py-8 transition-all duration-300 hover:pl-3 sm:flex-row sm:items-center sm:gap-10 sm:py-10 md:gap-14 md:py-12 ${
                i > 0 ? 'border-t border-[rgba(12,12,12,0.15)]' : ''
              }`}
            >
              <span
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] shadow-[0_10px_30px_rgba(12,12,12,0.10)] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_16px_40px_rgba(12,12,12,0.18)] sm:h-24 sm:w-24 sm:rounded-[32px]"
                style={{ backgroundColor: service.tint }}
              >
                <img
                  src={service.icon}
                  alt={service.alt}
                  loading="lazy"
                  draggable={false}
                  className="h-12 w-12 select-none sm:h-14 sm:w-14"
                />
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
