import React from 'react'
import { ArrowUpRight, BarChart3, Bot, Globe2 } from 'lucide-react'

const projects = [
  { title: 'Aura Skincare', description: 'A performance-led launch combining paid social, content and conversion-focused creative.', metric: '+210% revenue', tags: ['Performance', 'Social'], icon: BarChart3 },
  { title: 'Social Media Transformation', description: 'A consistent content system designed to strengthen brand identity and grow organic engagement.', metric: '4x organic traffic', tags: ['Content', 'SEO'], icon: Globe2 },
  { title: 'Digital Brand Experience', description: 'A modern web and AI experience built to make discovery easier and lead generation smoother.', metric: '+65% leads', tags: ['Web', 'AI'], icon: Bot }
]

const Projects = () => (
  <section id="projects" className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto mb-14 max-w-3xl text-center"><span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">Selected work</span><h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Work that moves the <span className="gradient-text">needle.</span></h2><p className="mt-5 text-lg leading-8 text-slate-600">A few examples of how strategy, creative and technology can work together.</p></div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map(({ title, description, metric, tags, icon: Icon }) => <article key={title} className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60"><div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-fuchsia-600"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/20" /><div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full border border-white/20" /><div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-white backdrop-blur-sm"><Icon className="h-10 w-10" /></div></div><div className="p-7"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold text-slate-900">{title}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-purple-500 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-3 text-sm leading-6 text-slate-500">{description}</p><p className="mt-6 text-2xl font-black text-purple-700">{metric}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">{tag}</span>)}</div></div></article>)}
      </div>
    </div>
  </section>
)

export default Projects
