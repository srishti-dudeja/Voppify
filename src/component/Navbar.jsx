import  { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../layout/Button'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Services' },
  { href: '#experience', label: 'Process' },
  { href: '#testimonials', label: 'Clients' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-white'}`}><nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"><a href="#home" className="text-3xl font-extrabold tracking-tight text-slate-950">Voppify<span className="text-purple-700"></span></a><div className="hidden items-center gap-1 md:flex">{navLinks.map(link => <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-purple-50 hover:text-purple-700">{link.label}</a>)}</div><div className="hidden md:block"><a href="#contact"><Button size="sm">Let's talk</Button></a></div><button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></nav>{open && <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">{navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700">{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)}><Button className="mt-2 w-full">Let's talk</Button></a></div></div>}</header>
}

export default Navbar
