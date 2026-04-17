import { useFadeIn } from '../hooks/useFadeIn'

export default function SectionHeader({ num, title }) {
  const ref = useFadeIn(0)
  return (
    <div ref={ref} className="fade-up flex items-baseline gap-2.5 mb-8">
      <span className="font-mono text-[10px] text-muted">{num} ·</span>
      <h2 className="font-display font-semibold text-[13px] text-white tracking-[-0.01em]">{title}</h2>
    </div>
  )
}
