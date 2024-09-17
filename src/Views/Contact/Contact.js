import React from 'react'

function Contact() {

  return (
    <div
    name="contact"
    className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form to get in touch with me</p>
            </div>
           <div>
            <form 
            action='https://getform.io/f/ayvpzdrb'
            method='post'
            className='flex flex-col w-full md:w-1/2'>

            <input
          type='text'
          name='name'
          placeholder='Name'
          className='my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        />
            <input
          type='email'
          name='email'
          className='my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          placeholder='Email'
        />

     <textarea
     name='message'
     placeholder='Type your message here'
     rows='6'
     className='my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
>
     </textarea>

<button type='submit' className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-950 cursor-pointer hover:scale-105 duration-200'>Let's Talk </button>

            </form>
           </div>
        </div>
    </div>
  )
}

export default Contact