import React from 'react'

export const AnimatedBorder = ({ children }) => (
  <button className="relative rounded-full border border-purple-200 bg-white px-7 py-3.5 text-base font-semibold text-purple-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
    <span className="relative z-10">{children}</span>
  </button>
)
