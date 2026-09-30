import React from 'react'
import { ArrowRight, Compass, Layers3, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  { number: '01', title: 'Discover', description: 'Audit, audience research and clear goal setting.', icon: Compass },
  { number: '02', title: 'Design', description: 'Strategy, creative concepts and a practical channel plan.', icon: Layers3 },
  { number: '03', title: 'Deploy', description: 'Launch campaigns, content and builds with rapid testing.', icon: Rocket },
  { number: '04', title: 'Drive', description: 'Measure, optimise and scale the work that performs.', icon: TrendingUp }
]

const Experience = () => (
  <section id="experience" className="bg-white py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">Our process</span><h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Simple steps. <span className="gradient-text">Serious momentum.</span></h2></div><p className="max-w-md text-slate-500">A focused process keeps ideas moving without losing sight of the business goal.</p></div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ number, title, description, icon: Icon }) => <div key={number} className="glass rounded-3xl p-7"><div className="flex items-center justify-between"><span className="text-sm font-black text-purple-600">{number}</span><Icon className="h-6 w-6 text-purple-500" /></div><h3 className="mt-12 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{description}</p></div>)}
      </div>
      <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white md:p-10"><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">Built for progress</p><h3 className="mt-2 text-2xl font-bold">Every sprint should teach us something.</h3></div><a href="#contact" className="inline-flex items-center gap-2 font-semibold text-purple-300 hover:text-white">Start a conversation <ArrowRight className="h-5 w-5" /></a></div></div>
    </div>
  </section>
)

export default Experience
