import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
// import { Particle } from './components/Particles/Particle'
// import { Particle } from './components/Particles/Particle'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />

        </Route>


      </Routes>
    </>
  )
}

export default App
