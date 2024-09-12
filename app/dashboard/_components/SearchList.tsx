import { Search } from 'lucide-react'
import React from 'react'

function SearchList({onSearchInput}:any) {
  return (

      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-mg bg-white my-5 w-[30% ] rounded'>
            <Search className='text-primary'/>
            <input type="text " placeholder='Search' className='bg-transparent w-full outline-none text-black' onChange={(event)=>onSearchInput(event.target.value)}/>
        </div>
      </div>
    
  )
}

export default SearchList
