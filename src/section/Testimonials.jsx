import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Marketing Head, Nomad Foods', quote: 'Clear reports, smart ideas and a team that stays focused on what actually matters.' },
  { name: 'Founder, Aura Skincare', quote: 'The strategy finally connected our content and campaigns. It felt like having an in-house team.' },
  { name: 'Owner, Pulse Fitness', quote: 'The new site made the journey much clearer for people who were ready to enquire.' }
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const item = testimonials[active]
  const change = direction => setActive((active + direction + testimonials.length) % testimonials.length)

  return <section id="testimonials" className="bg-slate-50 py-24 md:py-28"><div className="mx-auto max-w-4xl px-6"><div className="text-center"><span className="section-label">Client perspective</span><h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">The best feedback is <span className="gradient-text">clarity.</span></h2></div><div className="mt-12 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700 text-white"><Quote className="h-5 w-5" /></div><blockquote className="mt-7 text-2xl font-semibold leading-relaxed text-slate-900 md:text-3xl">“{item.quote}”</blockquote><p className="mt-5 text-sm font-semibold text-purple-700">— {item.name}</p><div className="mt-9 flex items-center justify-between"><button onClick={() => change(-1)} className="rounded-full border border-slate-200 p-2.5 text-slate-600 hover:border-purple-300 hover:text-purple-700" aria-label="Previous testimonial"><ChevronLeft /></button><div className="flex gap-2">{testimonials.map((_, index) => <button key={index} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all ${index === active ? 'w-7 bg-purple-700' : 'w-2 bg-slate-300'}`} aria-label={`Show testimonial ${index + 1}`} />)}</div><button onClick={() => change(1)} className="rounded-full border border-slate-200 p-2.5 text-slate-600 hover:border-purple-300 hover:text-purple-700" aria-label="Next testimonial"><ChevronRight /></button></div></div></div></section>
}

export default Testimonials
