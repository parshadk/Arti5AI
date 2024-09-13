import React from 'react'
import { TEMPLATE } from './TempList'
import Image from 'next/image'
import Link from 'next/link'

function TempCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug} >
    <div className='p-5 shadow-md rounded-md border bg-gray-300 flex flex-col gap-3 hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all h-[100%]'>
        <Image src={item.icon} alt="icon" width={50} height={50}/>
        <h2 className='font-medium text-large'>{item.name}</h2>
        <p className='text-black-400 line-clamp-3'>{item.desc}</p> 
      
    </div>
    </Link>
  )
}

export default TempCard
