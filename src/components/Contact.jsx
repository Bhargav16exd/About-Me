import SectionHeader from './SectionHeader'
import { useFadeIn } from '../hooks/useFadeIn'

const contacts = [
  {
    href: 'mailto:work.bhargav.tech@gmail.com',
    label: 'Email',
    value: 'work.bhargav.tech@gmail.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="white" strokeWidth="1.2" opacity="0.5"/>
        <path d="M1 4.5l6 4 6-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/Bhargav16exd',
    label: 'GitHub',
    value: 'Bhargav16exd',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.5">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
      </svg>
    ),
  },
  {
    href: 'https://in.linkedin.com/in/bhargav-mule-a99b61262',
    label: 'LinkedIn',
    value: 'bhargav-mule',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: null,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
]

function ContactCard({ href, label, value, icon, delay }) {
  const ref = useFadeIn(delay)
  const inner = (
    <div ref={ref} className={`fade-up flex items-center gap-3 p-3.5 border border-line rounded-[6px] bg-bg1 transition-all duration-150 ${href ? 'hover:border-line2 hover:bg-bg2 cursor-pointer' : 'cursor-default'}`}>
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-bg2 border border-line2 rounded-[6px]">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[10px] text-muted uppercase tracking-[0.06em] mb-0.5">{label}</div>
        <div className="font-mono text-[12px] text-secondary">{value}</div>
      </div>
    </div>
  )
  if (!href) return inner
  return <a href={href} target="_blank" rel="noreferrer" className="no-underline block">{inner}</a>
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-b border-line">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader num="04" title="Contact" />
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2">
          {contacts.map((c, i) => <ContactCard key={i} {...c} delay={i * 40} />)}
        </div>
      </div>
    </section>
  )
}
