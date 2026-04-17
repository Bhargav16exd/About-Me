import SectionHeader from './SectionHeader'
import { useFadeIn } from '../hooks/useFadeIn'
import { NetworkTopology, PcbBoard } from './InfraArt'

function Tag({ children }) {
  return (
    <span className="font-mono text-[12px] text-gray-300 bg-bg2 border border-line px-2 py-0.5 rounded">
      {children}
    </span>
  )
}

function ProjectItem({ name, desc, tags, href, live, delay }) {
  const ref = useFadeIn(delay)
  return (
    <div ref={ref} className="fade-up group p-5 border-t border-line first:border-t-0 grid grid-cols-[1fr_auto] gap-6 items-start">
      <div>
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="font-display font-semibold text-[20px] text-primary group-hover:text-white transition-colors duration-150 tracking-[-0.02em]">
            {name}
          </span>
          {live && (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] border border-white/10 text-secondary px-2 py-0.5 rounded">
              <span className="w-[4px] h-[4px] rounded-full bg-green-400 led" />
              live
            </span>
          )}
        </div>
        <p className="font-mono text-[12px] text-muted leading-[1.65] max-w-[440px] mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
      {href && (
        <a href={href} target="_blank" rel="noreferrer"
          className="flex-shrink-0 font-mono text-[11px] text-muted hover:text-primary transition-colors flex items-center gap-1 mt-1 whitespace-nowrap">
          {href.replace('https://','').replace('www.','')}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  )
}

const projects = [
  {
    name: 'YouTube Collaboration Platform',
    desc: 'Platform for content creators — authorize uploads in one click. System downloads from editors, handles YouTube OAuth2, and queues concurrent uploads to protect bandwidth.',
    tags: ['Go','OAuth 2.0','Google APIs','BullMQ','Signed URLs','Redis','Node.js'],
    href: 'https://cumin.cloud/', live: true,
  },
  {
    name: 'Real-Time Text Sharing',
    desc: 'Collaborative editor built from scratch. WebSocket-powered real-time sync with a custom text editor — no third-party editor dependencies.',
    tags: ['WebSockets','Node.js','Custom Editor'],
    href: 'https://www.spaceshare.cloud/', live: true,
  },
  {
    name: 'HTTP Reverse Proxy in Go',
    desc: 'Lightweight Go-based reverse proxy routing HTTP traffic with efficient request forwarding. Built low-level — no framework bloat.',
    tags: ['Golang','Networking','HTTP/1.1'],
    href: null, live: false,
  },
  {
    name: 'Document Similarity Checker',
    desc: 'PDF similarity detection with FastAPI and cosine similarity. Efficient duplicate detection and content comparison for documents.',
    tags: ['FastAPI','Python','Cosine Similarity','NLP'],
    href: null, live: false,
  },
]

export default function Projects() {

  return (
    <section id="projects" className="py-16 border-b border-line">

      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader num="02" title="Projects" />
        {projects.map((p, i) => (
          <ProjectItem key={p.name} {...p} delay={i * 40} />
        ))}
      </div>

    </section>
  )
}
