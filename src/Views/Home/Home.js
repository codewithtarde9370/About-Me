import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Tejasvi from './../../Assets/tejasvi.jpeg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'


function Home() {
  return (
<>
<Navbar/>
<div name="home" className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 '>

{/* <h1 className='px-8 pt-28 absolute text-4xl'>Welcome to my Portfolio</h1> */}

    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div>
            <h2 className='text-4xl sm:text-7xl font-bold from-white'>I'm a Full-Stack Developer</h2>
            <p className='to-gray-500 py-4 max-w-md'>
            Hi, I'm Tejasvi Tarde, a Full-Stack Developer with six months of experience, specializing in web development using technologies like React.js, Node.js, Express.js and MongoDB. I’m currently pursuing a Bachelor of Computer Engineering and actively learning Oracle APEX and SQL with a focus on Oracle databases. This training complements my full-stack skills and aligns with my goal of building a career in Oracle-based enterprise applications. I’m passionate about continuous learning and excited to apply my technical knowledge to create scalable, secure business solutions.
            </p>
            <div> 
            <Link to='portfolio' className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-950 cursor-pointer hover:scale-105 duration-200'>Portfolio <span
            className='mx-1'><MdOutlineKeyboardArrowRight/></span></Link>
           </div>
        </div>
        <div>
    <img src={Tejasvi} alt='My profile' className='rounded-2xl mx-10 w-2/3 md:w-full '/>

    </div>
        
     </div>
    

</div>
</>
  )
}

export default Home