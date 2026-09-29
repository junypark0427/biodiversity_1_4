import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  ['case', 'CASE'], ['reality', 'REALITY'], ['why', 'WHY'], ['impact', 'IMPACT'], ['action', 'ACTION'],
]

export default function Navbar() {
  const [active, setActive] = useState('case')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-42% 0px -48% 0px' },
    )
    links.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar" aria-label="주요 섹션">
      <a href="#top" className="nav-brand" aria-label="페이지 맨 위로"><span>WILD</span> / NOT FOR SALE</a>
      <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="nav-links" aria-label="메뉴 열기">
        {open ? <X /> : <Menu />}
      </button>
      <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </nav>
  )
}
