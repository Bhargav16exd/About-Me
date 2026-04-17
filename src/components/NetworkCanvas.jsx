import { useEffect, useRef } from 'react'

export default function NetworkCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let W, H, nodes, packets = [], raf

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function init() {
      resize()
      const n = Math.min(50, Math.floor((W * H) / 22000))
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1 + 1,
      }))
      packets = []
    }

    function spawnPkt() {
      const a = nodes[Math.floor(Math.random() * nodes.length)]
      const b = nodes[Math.floor(Math.random() * nodes.length)]
      if (a === b) return
      const d = Math.hypot(b.x - a.x, b.y - a.y)
      if (d > 170) return
      packets.push({ from: a, to: b, t: 0, sp: 0.005 + Math.random() * 0.007 })
    }

    function frame() {
      ctx.clearRect(0, 0, W, H)

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (d < 170) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 170) * 0.07})`
            ctx.lineWidth = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.13)'
        ctx.fill()
      })

      if (Math.random() < 0.028) spawnPkt()
      packets = packets.filter(p => p.t <= 1)
      packets.forEach(p => {
        p.t += p.sp
        const x = p.from.x + (p.to.x - p.from.x) * p.t
        const y = p.from.y + (p.to.y - p.from.y) * p.t
        ctx.beginPath()
        ctx.arc(x, y, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.45)'
        ctx.fill()
      })

      raf = requestAnimationFrame(frame)
    }

    init()
    frame()
    window.addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init) }
  }, [])

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.28 }}
    />
  )
}
