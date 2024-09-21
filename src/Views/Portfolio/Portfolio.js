import React from 'react'
import QuickLinks from './../../Assets/portfolio/ftb-link.png'
import ExpenseTracker from './../../Assets/portfolio/blog.png'
import AddTasks from './../../Assets/portfolio/addtask.png'


function Portfolio() {
    const portfolios=[
        {
            id:1,
            src:QuickLinks,
            demo:"https://ftb-link.netlify.app/login",
            code:"https://github.com/codewithtarde9370/FTB_link.git",
        },
        {
            id:2,
            src:ExpenseTracker,
            demo:"https://healthyblogs-tardetejasvi.netlify.app/",
            code:"https://github.com/codewithtarde9370/Blog-App.git"
        },
        {
            id:3,
            src:AddTasks,
            demo:"https://addtasks-reactapp-bytardetejasvi.netlify.app/",
            code:"https://github.com/codewithtarde9370/todolist-using-react.git"
        },
    ]
  return (
    <div 
    name="portfolio"
    className="text-white w-full bg-gradient-to-b from-black via-black to-gray-700 min-h-screen md:h-screen"
  >
    {/* text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 md:h-screen sm:min-h-full */}
  
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Here is a showcase of some of my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
             portfolios.map(({id,src,demo,code}) => {
                return(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

<img 
  src={src}
  className="rounded-md duration-200 hover:scale-105"
  alt="work glimpse"
/>

<div className="flex justify-center items-center">
  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
    <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
  </button>
  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
    <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
  </button>
</div>


                </div>
                )
             })


            }
                        </div>

            
        </div>
    </div>
  )
}

export default Portfolio