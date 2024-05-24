import { useState } from 'react'

import './App.css'
import { Navbar } from './components'
import { Home, Projects, Contact, About } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
