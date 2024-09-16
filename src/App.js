import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Views/Home/Home'
import SocialLinks from './Components/SocialLinks/SocialLinks'
import About from './Views/About/About'
import Portfolio from './Views/Portfolio/Portfolio'

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
      
        <SocialLinks/>

    </div>
  )
}

export default App