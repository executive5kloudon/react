import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './conponents/home'
import About from './conponents/about'
import Contact from './conponents/contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
