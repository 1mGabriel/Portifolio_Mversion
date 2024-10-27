import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LinksBar from './Components/LinksBar'
import About from './Components/About'
import Tools from './Components/Tools'
import Competencies from './Components/Competencies'
import Destaques from './Components/Destaques'
import AllProjects from './Components/AllProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <header>
    <Navbar/>
    <Hero/>
  </header>
    
  <nav>
   <LinksBar/>
  </nav>
  <section>
    <About/>
  </section>
  <section>
  <Tools/>
  </section>
  <section>
    <Competencies/>
  </section>
  <section>
    <Destaques/>
  </section>
  <section>
    <AllProjects/>
  </section>
    </>
  )
}

export default App
