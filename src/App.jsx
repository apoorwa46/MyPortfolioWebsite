import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Certificate from './Components/Certificates/Certificates'

function App() {

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Certificate />
      <Education />
      <Footer />
    </div>
  )

}

export default App
