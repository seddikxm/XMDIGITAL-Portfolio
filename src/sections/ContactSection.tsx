import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const EMAIL = 'hello@xmdigital.com'

const INFO_ITEMS = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+1 (555) 000-0000',
    href: 'https://wa.me/15550000000',
  },
  { icon: MapPin, label: 'Location', value: 'Available worldwide, remote-first' },
]

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
]

const INPUT_CLASSES =
  'w-full rounded-full border-2 border-[#D7E2EA]/30 bg-transparent px-6 py-3 text-sm font-light tracking-wide text-[#D7E2EA] placeholder-[#D7E2EA]/40 outline-none transition-colors duration-200 focus:border-[#D7E2EA]/70 sm:px-8 sm:py-4 sm:text-base'

export default function ContactSection() {
  const [result, setResult] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true)
    setResult('')

    const formData = new FormData(form)
    formData.append('access_key', '07b53775-e6f3-4875-bbdb-f7c0566b58c5')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setResult("Message sent! We'll get back to you soon.")
        form.reset()
      } else {
        setResult('Something went wrong — please try again.')
      }
    } catch {
      setResult('Something went wrong — please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="mt-16 scroll-mt-24 border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 py-20 sm:mt-24 sm:px-8 sm:py-24 md:mt-32 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading mb-4 text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p
            className="mx-auto mb-16 max-w-[560px] text-center font-light uppercase tracking-wide text-[#D7E2EA] sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
          >
            Have a project in mind? Let&apos;s build something incredible together
          </p>
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div className="flex flex-col gap-10">
            {INFO_ITEMS.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.1} y={20}>
                <a
                  href={item.href}
                  className={`group flex items-center gap-5 ${item.href ? '' : 'pointer-events-none'}`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] transition-colors duration-200 group-hover:border-[#D7E2EA]/70 sm:h-16 sm:w-16">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
                      {item.label}
                    </span>
                    <span
                      className="font-medium text-[#D7E2EA]"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
                    >
                      {item.value}
                    </span>
                  </span>
                </a>
              </FadeIn>
            ))}

            <FadeIn delay={0.4} y={20}>
              <div className="flex gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] transition-all duration-200 hover:border-[#D7E2EA]/70 hover:bg-[#D7E2EA]/10 sm:h-14 sm:w-14"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={30}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={INPUT_CLASSES}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className={INPUT_CLASSES}
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project"
                className={`${INPUT_CLASSES} resize-none rounded-[32px] sm:rounded-[40px]`}
              />
              <div className="mt-2 flex flex-col items-start gap-4">
                <ContactButton
                  type="submit"
                  label={sending ? 'Sending…' : 'Send Message'}
                />
                {result && (
                  <span className="text-sm font-light tracking-wide text-[#D7E2EA]/60">
                    {result}
                  </span>
                )}
              </div>
            </form>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} y={20}>
          <p className="mt-20 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40 sm:mt-24 md:mt-32">
            © {new Date().getFullYear()} XMDIGITAL — All rights reserved
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
