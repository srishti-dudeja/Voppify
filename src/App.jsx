import React from 'react'
import Navbar from './component/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Experience from './section/Experience'
import Testimonials from './section/Testimonials'
import Contact from './section/Contact'
import Footer from './component/Footer'

const App = () => <div className="min-h-screen overflow-x-hidden bg-white"><Navbar /><main><Hero /><About /><Projects /><Experience /><Testimonials /><Contact /></main><Footer /></div>

export default App
