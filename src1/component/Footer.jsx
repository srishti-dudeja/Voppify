

const Footer = () => (
  <footer className="border-t border-purple-100 bg-purple-50/40 px-6 py-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <a href="#home" className="text-2xl font-black text-purple-700">Voppify<span className="text-fuchsia-500">.</span></a>
        <p className="mt-2 max-w-sm text-sm text-slate-500">Creative strategy, technology and performance marketing for ambitious brands.</p>
      </div>
      <div className="flex gap-6 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-purple-700">About</a>
        <a href="#projects" className="hover:text-purple-700">Services</a>
        <a href="#contact" className="hover:text-purple-700">Contact</a>
        
      </div>
    </div>
  </footer>
)

export default Footer
