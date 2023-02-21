import React from 'react'

export const Card = ({ data }) => {
  return (
    <div className='grid grid-cols-1 bg-white rounded-xl max-w-xs'>
        <img className='rounded-xl rounded-b-none' 
        src='https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
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


