import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import React, { useState } from 'react'

const testimonials = [
  { name: 'Marketing Head, Nomad Foods', quote: 'Clear reports, smart ideas and a team that stays focused on what matters.' },
  { name: 'Founder, Aura Skincare', quote: 'Voppify felt like an in-house team. The strategy finally connected our content and campaigns.' },
  { name: 'Owner, Pulse Fitness', quote: 'Our new site and automation made it much easier for prospects to become leads.' }
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const change = direction => setActive((active + direction + testimonials.length) % testimonials.length)
  const item = testimonials[active]

  return (
    <section id="testimonials" className="bg-purple-50/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center"><span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">Client perspective</span><h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Good work should feel <span className="gradient-text">clear.</span></h2><div className="relative mt-12 rounded-[2rem] border border-purple-100 bg-white p-8 text-left shadow-xl shadow-purple-100/40 md:p-12"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-700 text-white"><Quote className="h-6 w-6" /></div><blockquote className="mt-8 text-2xl font-semibold leading-relaxed text-slate-900 md:text-3xl">“{item.quote}”</blockquote><p className="mt-6 font-semibold text-purple-700">— {item.name}</p><div className="mt-10 flex items-center justify-between"><button onClick={() => change(-1)} className="rounded-full border border-purple-200 p-3 text-purple-700 hover:bg-purple-50"><ChevronLeft /></button><div className="flex gap-2">{testimonials.map((_, index) => <button key={index} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all ${index === active ? 'w-8 bg-purple-600' : 'w-2 bg-purple-200'}`} aria-label={`Show testimonial ${index + 1}`} />)}</div><button onClick={() => change(1)} className="rounded-full border border-purple-200 p-3 text-purple-700 hover:bg-purple-50"><ChevronRight /></button></div></div></div>
    </section>
  )
}

export default Testimonials
