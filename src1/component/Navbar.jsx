import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../layout/Button'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Services' },
  { href: '#experience', label: 'Process' },
  { href: '#testimonials', label: 'Insights' }
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong' : 'bg-white/80 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-black tracking-tight text-purple-700">Voppify<span className="text-fuchsia-500">.</span></a>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-purple-50 hover:text-purple-700">{link.label}</a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#contact"><Button size="sm">Let's talk</Button></a>
        </div>
        <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setIsMobileMenuOpen(value => !value)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="glass-strong border-t px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}><Button className="mt-2 w-full">Let's talk</Button></a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
