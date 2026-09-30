
import { ArrowRight, BarChart3, Check, Sparkles } from 'lucide-react'
import Button from '../layout/Button'
import { AnimatedBorder } from '../layout/AnimatedBorder'

const HeroVisual = () => (
  <div className="relative mx-auto w-full max-w-lg animate-fade-in delay-200">
    <div className="absolute -right-5 top-8 h-20 w-20 rounded-full bg-purple-100" />
    <div className="absolute -bottom-5 left-6 h-24 w-24 rounded-3xl bg-fuchsia-100" />
    <div className="relative rounded-[28px] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
      <div className="rounded-[22px] bg-slate-50 p-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div><p className="text-xs font-semibold text-slate-500">Campaign overview</p><p className="mt-1 text-lg font-bold text-slate-900">This month</p></div>
          <div className="rounded-xl bg-purple-100 p-2.5 text-purple-700"><BarChart3 className="h-5 w-5" /></div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {['Reach', 'Leads', 'Growth'].map((item, i) => <div key={item} className="rounded-xl bg-white p-3"><p className="text-[11px] text-slate-500">{item}</p><p className="mt-1 text-base font-bold text-slate-900">{['82K', '1.8K', '+34%'][i]}</p></div>)}
        </div>
        <div className="mt-4 rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-600">Organic traffic</span><span className="text-xs font-bold text-purple-700">+28%</span></div>
          <svg viewBox="0 0 420 120" className="mt-4 h-28 w-full" fill="none" aria-hidden="true">
            <path d="M4 105C42 98 49 83 78 88C108 93 120 58 150 65C181 72 193 44 221 51C251 58 267 27 294 35C326 44 338 18 370 22C389 24 401 13 416 7" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
            <path d="M4 105C42 98 49 83 78 88C108 93 120 58 150 65C181 72 193 44 221 51C251 58 267 27 294 35C326 44 338 18 370 22C389 24 401 13 416 7V120H4Z" fill="#ede9fe" opacity=".65" />
          </svg>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-purple-300 p-4 text-white"><div className="rounded-lg bg-purple-600 p-2"><Check className="h-4 w-4" /></div><div><p className="text-sm font-semibold text-black">Weekly optimisation complete</p><p className="mt-0.5 text-xs text-black ">3 campaigns improved</p></div></div>
      </div>
    </div>
  </div>
)

const Hero = () => (
  <section id="home" className="border-b border-slate-100 bg-white">
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"><Sparkles className="h-4 w-4" /> Digital growth, without the noise</div>
          <h1 className="animate-fade-in delay-100 mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-6xl">Make your digital presence <span className="gradient-text">work harder.</span></h1>
          <p className="animate-fade-in delay-200 mt-6 max-w-xl text-lg leading-8 text-slate-600">We help growing brands improve their marketing, websites and content with clear strategy and practical execution.</p>
          <div className="animate-fade-in delay-300 mt-8 flex flex-wrap gap-3"><a href="#contact"><Button size="lg">Let's talk <ArrowRight className="h-4 w-4" /></Button></a><a href="#projects"><AnimatedBorder>See what we do</AnimatedBorder></a></div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-600" /> Strategy first</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-600" /> Clear reporting</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-600" /> Built to improve</span></div>
        </div>
        <HeroVisual />
      </div>
     <div className="mt-20 border-t border-slate-100 pt-8"><p className="text-center text-xs font-bold uppercase tracking-[.2em] text-slate-400">What we work on</p><div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-500">
   
      <span>Performance</span><span>SEO</span><span>Web</span><span>Content</span><span>Social</span><span>AI</span></div></div>
    </div>
  </section>
)

export default Hero
