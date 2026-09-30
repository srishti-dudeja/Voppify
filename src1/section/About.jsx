import React from 'react'
import { BarChart3, Bot, Globe, Palette, Rocket, Search } from 'lucide-react'

const highlights = [
  { icon: BarChart3, title: 'Performance Marketing', description: 'Campaigns built around qualified traffic, conversions and sustainable growth.' },
  { icon: Palette, title: 'Content & Creative', description: 'Brand stories, design, video and copy that make your message memorable.' },
  { icon: Search, title: 'SEO', description: 'Technical, on-page and content SEO designed to compound organic visibility.' },
  { icon: Globe, title: 'Social Media', description: 'Always-on content and community strategy that builds a recognizable brand.' },
  { icon: Bot, title: 'AI & Automation', description: 'Practical AI workflows, chatbots and analytics that save time and reveal insight.' },
  { icon: Rocket, title: 'Web Development', description: 'Fast, accessible and conversion-focused websites and landing pages.' }
]

const About = () => (
  <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-start gap-16 lg:grid-cols-[.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">About Voppify</span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">Creative thinking. <span className="gradient-text">Smart execution.</span></h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">We help ambitious brands connect the dots between brand, technology and growth. Every project starts with a clear goal and ends with something useful, measurable and built to improve.</p>
          <div className="mt-8 rounded-3xl border border-purple-100 bg-purple-50 p-6"><p className="font-semibold text-purple-950">One partner across strategy, content, media, AI and web.</p><p className="mt-2 text-sm leading-6 text-purple-800/70">Less handoff. More consistency. Faster learning.</p></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description }) => <div key={title} className="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-300"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>)}
        </div>
      </div>
    </div>
  </section>
)

export default About
