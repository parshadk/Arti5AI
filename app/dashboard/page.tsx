"use client"
import React, { useState } from 'react'
import TempList from "./_components/TempList";
import SearchList from './_components/SearchList';

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>();
  return (
    <div>
      <SearchList onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <TempList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
