import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function SocialLinks() {
const links= [
    {
        id:1,
        child: (
            <>
            LinkedIn<FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/tejasvitarde',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child: (
            <>
            GitHub<FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/codewithtarde9370/',
        style:''
    },
    {
        id:3,
        child: (
            <>
            Email<MdOutlineMail size={30}/>
            </>
        ),
        href:'mailto:tejasvitarde36@gmail.com',
        style:''
    },
    {
        id:4,
        child: (
            <>
            Resume<BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true,
    }
]

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                links.map(({id,child,style,href})=>{
                    return (
                        <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                <a href={href} className='w-full flex justify-between items-center text-white'>{child}</a>
                </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SocialLinks