import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
        <h1 className='w-full text-3xl font-bold text-blue-500'>React.</h1>
        <ul className='flex hidden'>
            <li className='p-5'>About</li>
            <li className='p-5'>Projects</li>
            <li className='p-5'>Contact</li>
            <li className='p-5'>Resume</li>
        </ul>
        <div>
            <AiOutlineMenu size={20}/>
        </div>
        <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#191919]' >
        <h1 className='w-full text-3xl font-bold text-blue-500'>React.</h1>
        <ul className='pt-12 uppercase'>
            <li className='p-5'>About</li>
            <li className='p-5'>Projects</li>
            <li className='p-5'>Contact</li>
            <li className='p-5'>Resume</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar