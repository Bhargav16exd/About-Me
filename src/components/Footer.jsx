import { useEffect, useState } from 'react'
import { ServerRack } from './InfraArt'

export default function Footer() {
  const [time, setTime] = useState('')
  const [uptime, setUptime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + ' IST')
      const elapsed = Math.floor((Date.now() - start) / 1000)
      setUptime({
        d: Math.floor(elapsed / 86400),
        h: Math.floor((elapsed % 86400) / 3600),
        m: Math.floor((elapsed % 3600) / 60),
        s: elapsed % 60,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-line relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 py-10 relative z-10">
        {/* Rack art row */}
        <div className="flex items-start gap-6 mb-8">
          <div style={{ opacity: 0.35 }}>
            <ServerRack className="w-[100px]" />
          </div>
          <div className="flex-1">
            <div className="font-mono text-[10px] text-muted uppercase tracking-[0.06em] mb-4">SYSTEM STATUS</div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8">
              {[
                ['NODE', 'infra-bhargav-01'],
                ['STATUS', 'ONLINE'],
                ['UPTIME', `${uptime.h}h ${uptime.m}m ${uptime.s}s`],
                ['LOCATION', 'Pune · IN'],
                ['NETWORK', '100GbE · BGP'],
                ['OPEN TO', 'BACKEND · CLOUD'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 font-mono text-[11px]">
                  <span className="text-muted w-20 flex-shrink-0">{k}</span>
                  <span className="text-secondary">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-5 flex justify-between items-center">
          <span className="font-mono text-[11px] text-muted">© 2025 Bhargav Mule</span>
          <span className="font-mono text-[11px] text-muted">{time}</span>
        </div>
      </div>
    </footer>
  )
}
