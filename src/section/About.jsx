import React from 'react'
import { BarChart3, Bot, Globe, Palette, Search, Code2 } from 'lucide-react'

const services = [
  { icon: BarChart3, title: 'Performance marketing', description: 'Campaigns focused on useful traffic, leads and measurable growth.' },
  { icon: Palette, title: 'Content & creative', description: 'Clear visual and written content that gives your brand a consistent voice.' },
  { icon: Search, title: 'SEO', description: 'Practical technical and content improvements that build organic visibility.' },
  { icon: Globe, title: 'Social media', description: 'A realistic content system designed to keep your brand active and recognisable.' },
  { icon: Bot, title: 'AI & automation', description: 'Simple workflows that remove repetitive work and help teams move faster.' },
  { icon: Code2, title: 'Web development', description: 'Fast, responsive pages built around a clear user journey and conversion goal.' }
]

const About = () => (
  <section id="about" className="bg-white py-24 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div><span className="section-label">About Voppify</span><h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">Good digital work starts with <span className="gradient-text">good thinking.</span></h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">We bring strategy, creative and technology together without making the process complicated. The goal is simple: understand what needs to improve, build the right thing and keep learning from the results.</p><div className="mt-8 border-l-2 border-purple-600 pl-5"><p className="font-semibold text-slate-900">One team for the parts of digital growth that usually get split between agencies.</p></div></div>
        <div className="grid gap-4 sm:grid-cols-2">{services.map(({ icon: Icon, title, description }) => <div key={title} className="site-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-purple-300"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>)}</div>
      </div>
    </div>
  </section>
)

export default About
