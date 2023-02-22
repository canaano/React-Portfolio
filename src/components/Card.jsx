import React from 'react'

export const Card = ({ data }) => {
  return (
    <div id="projects" className='grid grid-cols-1 bg-white rounded-xl max-w-xs '>
        <img className='rounded-xl rounded-b-none' 
        src={data.logo}/>
        <div className='p-4'>
            <h2 className='font-bold'>{data.name}</h2>
            <p className='text-sm mt-3'>{data.description}</p>
            <a href={data.link}>
                <button className='bg-blue-500 text-white px-2 py-1 rounded-full mt-3'>
                {data.buttonText}</button>
            </a>
        </div>
    </div>
  )
}


