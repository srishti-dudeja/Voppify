import  { useState } from 'react'
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Button from '../layout/Button'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@voppify.com', href: 'mailto:hello@voppify.com' },
  { icon: Phone, label: 'Phone', value: '+91 96255 96411', href: 'tel:+919625596411' },
  { icon: MapPin, label: 'Location', value: 'India, working worldwide', href: '#contact' }
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (!serviceId || !templateId || !publicKey) throw new Error('Email service is not configured yet.')
      await emailjs.send(serviceId, templateId, formData, publicKey)
      setSubmitStatus({ type: 'success', message: 'Message sent successfully. We will get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.text || error.message || 'Something went wrong. Please try again.' })
    } finally { setIsLoading(false) }
  }

  return <section id="contact" className="bg-white py-24 md:py-28"><div className="mx-auto max-w-6xl px-6"><div className="max-w-2xl"><span className="section-label">Contact</span><h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">Have something in mind?</h2><p className="mt-5 text-lg leading-8 text-slate-600">Tell us what you are trying to improve and we will take it from there.</p></div><div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><form className="space-y-5" onSubmit={handleSubmit}><div><label htmlFor="name" className="text-sm font-semibold text-slate-800">Name</label><input id="name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100" placeholder="Your name" /></div><div><label htmlFor="email" className="text-sm font-semibold text-slate-800">Email</label><input id="email" type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100" placeholder="you@example.com" /></div><div><label htmlFor="message" className="text-sm font-semibold text-slate-800">Message</label><textarea id="message" rows="5" required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100" placeholder="Tell us about your project" /></div><Button className="w-full" size="lg" type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : <>Send message <Send className="h-4 w-4" /></>}</Button>{submitStatus.type && <div className={`flex items-center gap-3 rounded-xl border p-4 text-sm ${submitStatus.type === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'}`}>{submitStatus.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}<span>{submitStatus.message}</span></div>}</form></div><div className="rounded-2xl bg-slate-600 p-7 text-white md:p-8"><p className="text-sm font-semibold text-purple-300">Let's connect</p><h3 className="mt-3 text-3xl font-extrabold">Start with a conversation.</h3><p className="mt-4 leading-7 text-slate-300">No complicated brief needed. A few lines about your goal are enough to get started.</p><div className="mt-8 space-y-3">{contactInfo.map(({ icon: Icon, label, value, href }) => <a key={label} href={href} className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-purple-400/60 hover:bg-white/5"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white"><Icon className="h-4 w-4" /></span><span><span className="block text-xs text-slate-400">{label}</span><span className="font-semibold">{value}</span></span></a>)}</div></div></div></div></section>
}

export default Contact
