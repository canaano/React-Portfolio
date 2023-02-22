import React from 'react'
import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center solid border-t-2'>
        <ul className='text-blue-500 md:flex items-center'>
            <a href='mailto:canaan@simpledronemedia.com'>
                <li className='p-6 text-3xl'><SiMinutemailer /></li>
            </a>
            <a href="https://github.com/canaano">
                <li className='p-6 text-3xl'><SiGithub /></li>
            </a>
            <a href="https://www.linkedin.com/in/canaan-owens-5231581a3/">
                <li className='p-6 text-3xl'><SiLinkedin /></li>
            </a>
        </ul>
    </footer>
  )
}

export default Footer