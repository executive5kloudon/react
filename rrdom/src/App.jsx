import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
  )
}

export default App
