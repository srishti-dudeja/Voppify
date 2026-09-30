import React from 'react'

const Button = ({ className = '', size = 'default', children, ...props }) => {
  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-base md:text-lg'
  }

  return (
    <button
      className={`purple-gradient text-white rounded-full font-semibold shadow-lg shadow-purple-500/20 hover:-translate-y-0.5 hover:shadow-purple-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}

export default Button
