import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className='text-xl mt-20'>
        I'm Abhiram Gummula, a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript, React JS, and Tailwind CSS. Graduating from the prestigious Indian Institute of Technology Tirupati with a Bachelor's degree in Technology, I possess a unique blend of technical skills and a creative mindset. Meticulous attention to detail, a keen eye for design, and a commitment to excellence are the cornerstones of my work. I specialize in building visually stunning and user-friendly websites, leveraging my proficiency in front-end technologies.
    </p><br />
        <p className='text-xl'>
        Beyond my technical expertise, I thrive on challenges and constantly seek opportunities to broaden my skill set. I have successfully completed a range of projects, including the development of  a front-end for an app that resembles YouTube and a food ordering app that showcases my web development skills. Additionally, I have gained valuable experience in data analysis and visualization, utilizing powerful tools like Power BI, Tableau, and SQL. My passion for continuous learning extends to exploring new technologies and staying up-to-date with the latest industry trends. With a drive for innovation and a dedication to delivering impactful solutions, I am committed to exceeding expectations and creating meaningful experiences for users. I invite you to collaborate with me and be a part of this exciting journey!
        </p>

      </div>
    </div>
  )
}

export default About
