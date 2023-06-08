import React from 'react'
import project1 from "../assets/portfolio/project-1.jpg"
import project2 from "../assets/portfolio/project-2.jpg"
import project3 from "../assets/portfolio/project-3.jpg"
import project4 from "../assets/portfolio/project-4.jpg"
import project5 from "../assets/portfolio/project-5.jpg"
import project6 from "../assets/portfolio/project-6.jpg"
import project7 from "../assets/portfolio/project-7.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "BMI Calculator",
      codeLink: "https://github.com/abhiram-gummula/BMI-calculator",
      demoLink: "https://abhiram-gummula.github.io/BMI-calculator/",
    },
    {
      id: 2,
      src: project2,
      title: "English Dictionary",
      codeLink: "https://github.com/abhiram-gummula/english-dictionary",
      demoLink: "https://abhiram-gummula.github.io/english-dictionary/",
    },
    {
      id: 3,
      src: project3,
      title: "Note App",
      codeLink: "https://github.com/abhiram-gummula/note-app",
      demoLink: "https://abhiram-gummula.github.io/note-app/",
    },
    {
      id: 4,
      src: project4,
      title: "Random Quote Generator",
      codeLink: "https://github.com/abhiram-gummula/random-quote-generator",
      demoLink: "https://abhiram-gummula.github.io/random-quote-generator/",
    },
    {
      id: 5,
      src: project5,
      title: "Rock Paper Scissors Game",
      codeLink: "https://github.com/abhiram-gummula/rock-paper-scissors",
      demoLink: "https://abhiram-gummula.github.io/rock-paper-scissors/",
    },
    {
      id: 6,
      src: project6,
      title: "Food Ordering App",
      codeLink: "https://github.com/abhiram-gummula/food-ordering-app",
      demoLink: "https://abhiram-gummula.github.io/food-ordering-app/",
    },
    {
      id: 7,
      src: project7,
      title: "My-Tube App",
      codeLink: "https://github.com/abhiram-gummula/my-youtube",
      demoLink: "https://abhiram-gummula.github.io/my-youtube/",
    },
  ]
  return (
    <div
      name="portfolio"
      className="lg:h-auto bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="pb-6 mt-10">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, codeLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className='font-bold text-xl text-center mt-2'>{title}</p>
              <div className="flex items-center justify-center">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </a>
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;