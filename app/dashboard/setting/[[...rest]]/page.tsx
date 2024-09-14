import { UserProfile } from '@clerk/nextjs';
import React from 'react'

function Setting() {
  return (
    <div className='flex justify-center items-center h-full p-3'>
      <UserProfile ></UserProfile>
    </div>
  )
}

export default Setting;
