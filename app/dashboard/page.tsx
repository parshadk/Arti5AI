"use client"
import React, { useState } from 'react'
import TempList from "./_components/TempList";
import SearchList from './_components/SearchList';

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>();
  return (
    <div>
      <div className='flex w-full justify-end'>'
        <SearchList onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      </div>
      <TempList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
