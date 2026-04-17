import SectionHeader from './SectionHeader'
import { useFadeIn } from '../hooks/useFadeIn'
import { DatacenterFloor } from './InfraArt'

function Badge({ live }) {
  return (
    <span className={`inline-flex items-center gap-[5px] font-mono text-[10px] px-2 py-0.5 rounded border mt-1.5 ${live ? 'border-white/10 text-secondary' : 'border-line2 text-subtle'}`}>
      {live && <span className="w-[4px] h-[4px] rounded-full bg-white/60 led"/>}
      {live ? 'active' : 'past'}
    </span>
  )
}

function ExpItem({ role, company, date, points, live, delay }) {
  const ref = useFadeIn(delay)
  return (
    <div ref={ref} className="fade-up p-5 border-t border-line grid grid-cols-[1fr_auto] gap-4 first:border-t-0">
      <div>
        <div className="font-display font-semibold text-[20px] text-white mb-0.5 tracking-[-0.02em]">{role}</div>
        <div className="font-mono text-md text-subtle mb-2.5">{company}</div>

        <ul className="flex flex-col gap-1">
          {points.map((p, i) => (
            <li key={i} className="font-mono text-[13px] text-muted leading-relaxed pl-3.5 relative">
              <span className="absolute left-0 text-line2">—</span>{p}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="font-mono text-[11px] text-muted whitespace-nowrap">{date}</div>
        <Badge live={live} />
      </div>
    </div>
  )
}

export default function Experience() {

  return (
    <section id="experience" className="py-16 border-b border-line">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader num="01" title="Experience" />

        <ExpItem role="Backend Intern" company="Quick Heal Technologies" date="Mar 2025 — now" live delay={0}
          points={['High-performance APIs with Role Based Access Control','Data ingestion pipelines, IP whitelisting, multi-tenancy system']}/>

        <ExpItem role="Cloud Head" company="GDGC PCCoE" date="Jun 2024 — May 2025" live={false} delay={60}
          points={['Led team delivering freelance projects end-to-end','Ran technical workshops for a large student community']}/>


      </div>
    </section>
  )
}
