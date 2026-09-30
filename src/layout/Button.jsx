

const Button = ({ className = '', size = 'default', children, ...props }) => {
  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    default: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-base'
  }

  return (
    <button className={`rounded-full bg-purple-700 text-white font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${sizes[size]} ${className}`} {...props}>
      <span className="flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}

export default Button
