import React from 'react'

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I made the completely irrational decision of starting a career in coding at the ripe old age of 40!
              <br className="hidden lg:inline-block text-xl" />
              <p className='text-xl pt-6'>
              Most would find this completely mad... but I see life experiences as an irrefutable asset in the industry.
              </p>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              World Renowned Drone Pilot. Award-Winning Wedding Officiant. Collegent Basketball National Champion
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 shadow-white">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./src/assets/Porfolio-Image.webp"
            />
          </div>
        </div>
      </section>
    );
  }