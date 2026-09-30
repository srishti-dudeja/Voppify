
import { ArrowUpRight, BarChart3, Bot, Globe2 } from 'lucide-react'

const projects = [
  { title: 'Performance campaign', description: 'A tighter paid-media and landing-page system built around better qualified enquiries.', metric: '+38% qualified leads', tags: ['Performance', 'Web'], icon: BarChart3 },
  { title: 'Content system', description: 'A practical content direction that made a growing brand easier to recognise across channels.', metric: '3x content output', tags: ['Content', 'Social'], icon: Globe2 },
  { title: 'Lead generation site', description: 'A simpler website journey with clearer messaging, useful automation and fewer distractions.', metric: '+41% enquiries', tags: ['Web', 'AI'], icon: Bot }
]

const Projects = () => (
  <section id="projects" className="bg-slate-50 py-24 md:py-28">
    <div className="mx-auto max-w-7xl px-6"><div className="max-w-2xl"><span className="section-label">Selected work</span><h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">A few things we can <span className="gradient-text">improve.</span></h2><p className="mt-5 text-lg leading-8 text-slate-600">Different problems need different solutions. Here are a few examples of the kind of work we take on.</p></div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.map(({ title, description, metric, tags, icon: Icon }) => <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"><div className="flex h-44 items-end bg-purple-50 p-6"><div className="flex w-full items-center justify-between"><div className="rounded-xl bg-white p-3 text-purple-700 shadow-sm"><Icon className="h-7 w-7" /></div><span className="text-xs font-semibold text-purple-700">CASE STUDY</span></div></div><div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold text-slate-900">{title}</h3><ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-purple-700" /></div><p className="mt-3 text-sm leading-6 text-slate-500">{description}</p><p className="mt-6 text-xl font-extrabold text-purple-700">{metric}</p><div className="mt-4 flex gap-2">{tags.map(tag => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}</div></div></article>)}</div>
    </div>
  </section>
)

export default Projects
