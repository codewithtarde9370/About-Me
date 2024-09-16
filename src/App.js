import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Views/Home/Home'
import SocialLinks from './Components/SocialLinks/SocialLinks'
import About from './Views/About/About'

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
      
        <SocialLinks/>

    </div>
  )
}

export default App