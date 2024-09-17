import React from 'react'
import Mongodb from './../../Assets/experience/mongodb.svg'
import Html from './../../Assets/experience/html.png'
import Css from './../../Assets/experience/css.png'
import Js from './../../Assets/experience/js.png'
import Node from './../../Assets/experience/node.png'
import ex from './../../Assets/experience/ex.png'
import Git from './../../Assets/experience/git.png'
import Bootstrap from './../../Assets/experience/bootstrap.png'
import Tailwind from './../../Assets/experience/tailwind.png'
import react from './../../Assets/experience/react.png'

function Experience() {
    const tools= [
        {
            id:1,
            src:Html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:Css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:Js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'ReactJs',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:Node,
            title:'NodeJs',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:ex,
            title:'ExpressJs',
            style:'shadow-white'
        },
        {
            id:7,
            src:Mongodb,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:Git,
            title:'GitHub',
            style:'shadow-white'
        },
        {
            id:9,
            src:Bootstrap,
            title:'Bootstrap',
            style:'shadow-purple-500'
        },
         {
            id:10,
            src:Tailwind,
            title:'Tailwind CSS',
            style:'shadow-sky-400'
        },
    ]
  return (
    <div
    name="experience"
    className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 md:min-h-screen h-auto bg-cover'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>I’ve worked extensively with these tools and technologies to build robust solutions</p>
            </div>
            <div className='text-center w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>

                {
                    tools.map(({id,title,src,style})=>{
                        return(
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='technology and tool' className='w-20 mx-auto'/>
                    
                    <p className='mt-4'>{title}</p>
                </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Experience