
import { ArrowRight, BarChart3, Bot, Megaphone, Search, Sparkles, ChevronDown } from 'lucide-react'
import Button from '../layout/Button'
import { AnimatedBorder } from '../layout/AnimatedBorder'

const skills = ['Performance', 'SEO', 'Web', 'AI', 'Social', 'Content']

const HeroVisual = () => (
  <div className="relative mx-auto w-full max-w-xl animate-fade-in delay-300">
    <div className="absolute -right-5 top-10 h-20 w-20 rounded-3xl bg-fuchsia-100" />
    <div className="absolute -bottom-5 left-8 h-24 w-24 rounded-full bg-purple-100" />
    <div className="relative overflow-hidden rounded-[2rem] border border-purple-100 bg-white p-4 shadow-2xl shadow-purple-200/50">
      <div className="soft-grid rounded-[1.5rem] bg-purple-50/70 p-6">
        <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">Growth dashboard</p>
            <p className="mt-1 text-2xl font-black text-slate-900">+68.4%</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-purple-700"><BarChart3 /></div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm"><Search className="h-5 w-5 text-purple-600" /><p className="mt-5 text-sm font-bold text-slate-800">SEO</p><p className="text-xs text-slate-500">Organic reach</p></div>
          <div className="rounded-2xl bg-white p-4 shadow-sm"><Megaphone className="h-5 w-5 text-fuchsia-600" /><p className="mt-5 text-sm font-bold text-slate-800">Social</p><p className="text-xs text-slate-500">Brand growth</p></div>
          <div className="col-span-2 rounded-2xl bg-slate-950 p-5 text-white shadow-sm">
            <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500"><Bot className="h-5 w-5" /></div><div><p className="font-semibold">AI-powered workflow</p><p className="text-xs text-slate-300">Automate. Analyse. Improve.</p></div></div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Hero = () => (
  <section id="home" className="relative overflow-hidden border-b border-purple-100 bg-white">
    <div className="absolute inset-0 soft-grid opacity-60" />
    <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-purple-100/70" />
    <div className="absolute bottom-20 left-0 h-48 w-48 rounded-full bg-fuchsia-100/60" />
    <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-8">
          <div className="animate-fade-in"><span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"><Sparkles className="h-4 w-4" /> Digital growth partner</span></div>
          <div className="space-y-5">
            <h1 className="animate-fade-in text-5xl font-black leading-[1.05] tracking-tight text-slate-950 delay-100 md:text-6xl lg:text-7xl">We turn digital ideas into <span className="gradient-text">real growth.</span></h1>
            <p className="animate-fade-in max-w-xl text-lg leading-8 text-slate-600 delay-200">Voppify combines strategy, creative, technology and AI to help brands get discovered, build trust and turn attention into measurable results.</p>
          </div>
          <div className="animate-fade-in flex flex-wrap gap-3 delay-300">
            <a href="#contact"><Button size="lg">Get a free growth plan <ArrowRight className="h-5 w-5" /></Button></a>
            <a href="#projects"><AnimatedBorder>Explore our work</AnimatedBorder></a>
          </div>
          <div className="animate-fade-in flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold text-slate-500 delay-400"><span>Strategy-led</span><span>AI-enabled</span><span>Results-focused</span></div>
        </div>
        <HeroVisual />
      </div>
      <div className="mt-20 border-t border-purple-100 pt-8 animate-fade-in delay-500">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400">What we help brands do</p>
        <div className="relative overflow-hidden"><div className="flex w-max animate-marquee">{[...skills, ...skills, ...skills].map((skill, index) => <span key={index} className="mx-6 text-lg font-bold text-slate-400 md:text-xl">{skill}</span>)}</div></div>
      </div>
    </div>
    <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-slate-400 hover:text-purple-700 md:flex"><span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span><ChevronDown className="mt-1 h-5 w-5 animate-bounce" /></a>
  </section>
)

export default Hero
