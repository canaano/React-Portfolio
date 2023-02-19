import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-blue-500 uppercase font-bold md:text-6xl sm:text-5xl text-3xl md:py-6'>
                Hey, I'm Canaan Owens
                </h1>
            <p className='p-2 md:text-4xl sm:text-3xl text-2xl font-bold'>
                I am a developer in California
            </p>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl p-2 font-bold'>I am skilled in</p>
                <p className='md:text-3xl sm:text-2xl text-xl p-2 font-bold pl-1 font-family-[Permanent Marker]'>
                <Typewriter
                options={{
                    strings: ['REACT', 'JAVASCRIPT', 'CSS', 'NODE.JS'],
                    autoStart: true,
                    loop: true,
                }} />
                </p>
            </div>
        </div>
        </div>
  )
}

export default Hero