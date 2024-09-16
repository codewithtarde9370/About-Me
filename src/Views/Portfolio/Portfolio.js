import React from 'react'
import QuickLinks from './../../Assets/ftb-link.png'
import ExpenseTracker from './../../Assets/et.png'
import AddTasks from './../../Assets/addtask.png'


function Portfolio() {
    const portfolios=[
        {
            id:1,
            src:QuickLinks
        },
        {
            id:2,
            src:ExpenseTracker
        },
        {
            id:3,
            src:AddTasks
        },
    ]
  return (
    <div 
    name="portfolio"
    className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Here is a showcase of some of my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
             portfolios.map(({id,src}) => {
                return(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                    <img 
                    src={src}
                    className='ronded-md duration-200 hover:scale-105'
                    alt='work glimpse'/>

                    <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo </button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
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