import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout/>} />
        

      </Routes>
    </>
  )
}

export default App
