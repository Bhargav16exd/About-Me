import { useFadeIn } from '../hooks/useFadeIn'
import { ServerRack, TerminalBlock } from './InfraArt'

const terminalLines = [
  '$ whoami',
  'bhargav@infra-01',
  '$ cat /etc/skills',
  '# golang · python · node.js',
  '# aws · docker · nginx · proxmox',
  '# redis · rabbitmq · elasticsearch',
  '$ uptime',
  '> up 2y 4mo — zero downtime',
  '$ ping career',
  '> open_to_work=true',
]

const LinkedInLink = "https://www.linkedin.com/posts/bhargav-mule-a99b61262_hello-folks-was-lately-working-on-something-ugcPost-7410936915379642369-KGXT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAECZVtUB0EmcTKFJ-7ZSDS1lV_tncd7d6ws"

function Btn({ href, children, variant = 'primary', target }) {
  const base = 'inline-flex items-center gap-1.5 font-mono text-[12px] font-medium px-4 py-2 rounded-[6px] transition-all duration-150 no-underline'
  const styles = {
    primary: 'bg-white text-[#0a0a0a] hover:bg-[#ededed]',
    ghost: 'bg-transparent text-secondary border border-line2 hover:border-muted hover:text-primary',
  }
  return <a href={href} target={target} rel="noreferrer" className={`${base} ${styles[variant]}`}>{children}</a>
}

export default function Hero() {
  const textRef = useFadeIn(0)
  const rackRef = useFadeIn(100)
  const termRef = useFadeIn(200)

  return (
    <section className="pt-32 pb-0 border-b border-line relative overflow-hidden">
      {/* Faint grid lines in hero background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}/>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* TOP: name + rack side by side */}
        <div className="flex items-start gap-8 mb-0">
          {/* Text */}
          <div ref={textRef} className="fade-up flex-1 pt-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-4 h-px bg-muted block" />
              <span className="font-mono text-[11px] text-subtle uppercase tracking-[0.08em]">
                Backend · Cloud · Infra Engineer
              </span>
            </div>

            <h1 className="font-display font-extrabold text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: 'clamp(48px, 9vw, 80px)' }}>
              Bhargav<br />Mule
            </h1>

            <p className="font-mono text-[12.5px] text-subtle leading-[1.8] max-w-[360px] mb-8 tracking-[-0.01em]">
              Building <span className="text-secondary">high-performance APIs</span> and distributed systems.<br />
              Deep in the stack — Go microservices to bare-metal infra.<br />
              Intern @ Quick Heal · B.Tech CSE @ PCCoE.
            </p>

            <p className="font-mono text-[12.5px] text-subtle leading-[1.8] max-w-[600px] mb-8 tracking-[-0.01em]">
              Bonus Tip : All projects are Self Hosted on my own server , do check out how I was able to turn my old PC 
              into AWS like server.
              <br />
               <a href={LinkedInLink} target="_blank" className="text-blue-400"> click here to see</a>
            </p>

            <div className="flex gap-3 flex-wrap">
              <Btn href="#projects">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View work
              </Btn>
              <Btn href="https://github.com/Bhargav16exd" target="_blank" variant="ghost">GitHub</Btn>
              <Btn href="https://in.linkedin.com/in/bhargav-mule-a99b61262" target="_blank" variant="ghost">LinkedIn</Btn>
            </div>
          </div>

          {/* Server Rack - prominent right side */}
          <div ref={rackRef} className="fade-up flex-shrink-0 hidden sm:block" style={{ opacity: 0.55 }}>
            <ServerRack className="w-[130px] h-auto" />
          </div>
        </div>

        {/* TERMINAL BLOCK - below name, full width feel */}
        <div ref={termRef} className="fade-up mt-10 pb-10" style={{ opacity: 1 }}>
          <TerminalBlock lines={terminalLines} className="w-full max-w-[500px]" />
        </div>
      </div>
    </section>
  )
}
