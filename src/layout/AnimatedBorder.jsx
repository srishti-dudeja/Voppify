import React from 'react'

export const AnimatedBorder = ({ children }) => (
  <button className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-purple-400 hover:text-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
    {children}
  </button>
)
