
import { ArrowRight, Compass, Layers3, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  { number: '01', title: 'Understand', description: 'We look at the business, audience and what is already working.', icon: Compass },
  { number: '02', title: 'Plan', description: 'We turn the findings into a focused strategy and clear priorities.', icon: Layers3 },
  { number: '03', title: 'Build', description: 'We create the campaigns, content or product and get it moving.', icon: Rocket },
  { number: '04', title: 'Improve', description: 'We measure what happened and keep refining the work.', icon: TrendingUp }
]

const Experience = () => (
  <section id="experience" className="bg-white py-24 md:py-28"><div className="mx-auto max-w-7xl px-6"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="section-label">How we work</span><h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">A process that stays <span className="gradient-text">practical.</span></h2></div><p className="max-w-md text-slate-500">No giant presentations for the sake of it. Just clear decisions, useful work and regular feedback.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{steps.map(({ number, title, description, icon: Icon }) => <div key={number} className="rounded-2xl border border-slate-200 p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-purple-700">{number}</span><Icon className="h-5 w-5 text-slate-400" /></div><h3 className="mt-10 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>)}</div>
    <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-purple-300 p-7 text-white md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-semibold text-black ">Ready when you are</p><p className="mt-1 text-xl font-bold text-black">Start with the problem, not the package.</p></div><a href="#contact" className="inline-flex items-center gap-2 font-semibold text-black hover:text-purple-900">Talk to us <ArrowRight className="h-4 w-4" /></a></div></div></section>
)

export default Experience
