import React from 'react'
import { TEMPLATE } from './TempList'
import Image from 'next/image'

function TempCard(item:TEMPLATE) {
  return (
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-110 transition-all'>
        <Image src={item.icon} alt="icon" width={50} height={50}/>
        <h2 className='font-medium text-large'>{item.name}</h2>
        <p className='text-gray-400 line-clamp-3'>{item.desc}</p> 
      
    </div>
  )
}

export default TempCard
