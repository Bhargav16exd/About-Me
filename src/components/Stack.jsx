import SectionHeader from './SectionHeader'
import { useFadeIn } from '../hooks/useFadeIn'
import { ChipDie, CableBundle } from './InfraArt'

const groups = [
  { name: 'Languages',        pills: ['Golang','Python','JavaScript','Node.js','C++'] },
  { name: 'Databases',        pills: ['MongoDB','PostgreSQL','MySQL','Elasticsearch','Redis'] },
  { name: 'Cloud & DevOps',   pills: ['AWS EC2','Auto Scaling','Docker','Nginx','Prometheus','Grafana','CI/CD','Proxmox','Bash'] },
  { name: 'Queues & Infra',   pills: ['BullMQ','RabbitMQ','Cloudflare Workers','PM2'] },
  { name: 'APIs & Protocols', pills: ['REST','GraphQL','OAuth 2.0','WebSockets','gRPC'] },
  { name: 'Frontend',         pills: ['React','Next.js','Express','Tailwind','Redux'] },
]

function SkillGroup({ name, pills, delay }) {
  const ref = useFadeIn(delay)
  return (
    <div ref={ref} className="fade-up grid grid-cols-[140px_1fr] gap-4 py-4 border-t border-line first:border-t-0 items-start">
      <div className="font-mono text-[13px] text-muted tracking-[0.04em] pt-0.5">{name}</div>
      <div className="flex flex-wrap gap-1.5">
        {pills.map(p => (
          <span key={p}
            className="font-mono text-[12px] text-secondary bg-bg1 border border-line px-2.5 py-1 rounded-[6px] hover:border-line2 hover:text-primary transition-all duration-150 cursor-default">
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Stack() {

  return (
    <section id="stack" className="py-16 border-b border-line">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader num="03" title="Stack" />
        <div>
          {groups.map((g, i) => (
            <SkillGroup key={g.name} {...g} delay={i * 35} />
          ))}
        </div>
      </div>
    </section>
  )
}
