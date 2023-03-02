import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './components/Home/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout/>} >

          <Route index element={<Home/>}/>
        </Route>
        

      </Routes>
    </>
  )
}

export default App
