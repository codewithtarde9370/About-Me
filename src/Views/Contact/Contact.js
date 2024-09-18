import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Contact() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Use a ternary operator to check if fields are empty or not
    !name || !email || !message
      ? toast.error('All fields are required.')
      : (() => {
          // Proceed with form submission (if all fields are filled)
          const formData = new FormData(e.target);
          fetch('https://getform.io/f/ayvpzdrb', {
            method: 'POST',
            body: formData,
          })
          .then(() => {
            toast.success('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
          })
          .catch((error) => {
            toast.error('Failed to submit the form. Please try again.');
          });
        })(); // IIFE (Immediately Invoked Function Expression) to execute the logic
  };
  

  return (
    <div
    name="contact"
    className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form to get in touch with me</p>
            </div>
           <div>
            <form 
            className='flex flex-col w-full md:w-1/2'>

            <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        />
            <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          placeholder='Email'
        />

     <textarea
     name='message'
     placeholder='Type your message here'
     value={message}
     onChange={(e) => setMessage(e.target.value)}

     rows='6'
     className='my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
>
     </textarea>

<button type='submit' onClick={handleSubmit} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-950 cursor-pointer hover:scale-105 duration-200'>Let's Talk </button>

            </form>
           </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default Contact