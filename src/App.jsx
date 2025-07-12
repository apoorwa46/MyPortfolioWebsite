import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  )

}

export default App
