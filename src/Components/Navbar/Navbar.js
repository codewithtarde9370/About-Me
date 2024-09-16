import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from 'react-router-dom'

function Navbar() {
    const [nav, setNav] = useState(false)

    const navLinks = [
{
    id: 1,
    link:'home'
},
{
    id: 2,
    link:"about"
},
{
    id: 3,
    link:"portfolio"
},
{
    id: 4,
    link:"contact"
}
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white fixed px-4'>
        <div>
            <h1 className=' text-5xl font-signature'>Tejasvi Tarde</h1>
        </div>
{/* 
        <ul>
        <Link to="/">Home</Link> 
        <Link to="/about">Home</Link> 
        <Link to="/contact">Home</Link> 
        <Link to="/resume">Home</Link> 
        </ul> */}
        <ul className='hidden md:flex'>
            {
                navLinks.map(({link,id}) => {
                    return (
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200'>{link}</li>
                    )
                })
            }
        </ul>

        <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={()=>setNav(!nav)}>
            {nav ? <FaTimes size={36}/> :<FaBars size={36}/>}

        </div>

        {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-300'>
        {
                navLinks.map(({link,id}) => {
                    return (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                    )
                })
            }
    
        </ul>)}

    </div>
  )
}

export default Navbar