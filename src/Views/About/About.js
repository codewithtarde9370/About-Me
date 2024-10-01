import React from 'react'

function About() {
  return (
    <div
     name="about"
     className='text-white w-full bg-gradient-to-b from-black via-black to-gray-700 min-h-screen md:h-screen'>
      {/* w-full h-screen bg-gradient-to-b  from-black via-black to-gray-700 text-white sm:min-h-full */}
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p>
            Hello! I'm Tejasvi Tarde, a passionate Full-Stack Developer with over 6 months of hands-on experience in building dynamic and responsive web applications. My journey in web development began during my third year of engineering when I discovered my love for creating interactive digital experiences. Since then, I've spent six months enhancing my skills in both frontend and backend technologies.
            <br></br>

My expertise lies in working with the MERN stack (MongoDB, Express.js, React.js, Node.js), along with a strong foundation in HTML, CSS, and JavaScript. I enjoy solving complex problems and crafting user-friendly interfaces. Through my projects and internships, I've gained practical knowledge in full-stack development, from designing intuitive frontends to implementing robust backend logic.And I am actively learning Oracle APEX and SQL with a focus on Oracle databases. I’m passionate about continuous learning and excited to apply my technical knowledge to create scalable, secure business solutions.
<br></br>
I’m always eager to learn new technologies, collaborate with like-minded professionals, and contribute to innovative projects that make a difference. Let’s build something amazing together!


            </p>
        </div>
    </div>
  )
}

export default About