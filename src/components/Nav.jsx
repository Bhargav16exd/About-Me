import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 border-b border-line transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-2xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-[5px] h-[5px] rounded-full bg-green-400 animate-[pulse_3s_ease-in-out_infinite]" />
          <span className="font-mono text-[13px] text-white tracking-[-0.01em]">bhargav mule</span>
        </div>

        <ul className="hidden sm:flex gap-7 list-none">
          {['experience','projects','stack','contact'].map(s => (
            <li key={s}>
              <a href={`#${s}`}
                className="font-mono text-[12px] text-subtle hover:text-primary transition-colors duration-150 tracking-[0.01em]">
                {s}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}
