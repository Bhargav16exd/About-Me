import { useFadeIn } from '../hooks/useFadeIn'

const metrics = [
  { val: '7.6', lbl: 'CGPA' },
  { val: '4+',  lbl: 'Projects' },
  { val: '2×',  lbl: 'Hackathons' },
  { val: '∞',   lbl: 'Packets' },
]

export default function Metrics() {
  const ref = useFadeIn(50)
  return (
    <div ref={ref} className="fade-up grid grid-cols-4 border-b border-line">
      {metrics.map((m, i) => (
        <div key={i} className={`py-7 text-center ${i < 3 ? 'border-r border-line' : ''}`}>
          <span className="block font-display font-extrabold text-white text-[28px] leading-none tracking-[-0.04em] mb-1.5">
            {m.val}
          </span>
          <span className="font-mono text-[10px] text-muted uppercase tracking-[0.06em]">{m.lbl}</span>
        </div>
      ))}
    </div>
  )
}
