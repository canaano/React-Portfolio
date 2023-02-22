import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center solid border-t-2'>
        <ul className='text-blue-500 md:flex items-center'>
            <li className='p-6'>Email</li>
            <li className='p-6'>Github</li>
            <li className='p-6'>LinkedIn</li>
        </ul>
    </footer>
  )
}

export default Footer