"use client"
import { History, Home, Info, Settings2,  User, Wallet } from 'lucide-react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import UsageCredit from './UsageCredit'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

function SideNav() {
    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:"/dashboard"
        },
        {
            name:'History',
            icon:History,
            path:"/dashboard/history"
        },
        {
            name:'Billing',
            icon:Wallet,
            path:"/dashboard/billing"
        },
        {
            name:'Setting',
            icon:Settings2,
            path:"/dashboard/setting"
        },
        {
            name:'About',
            icon:Info,
            path:"/dashboard/about"
        }
    ]

    const router=useRouter();
    const path=usePathname();

    const handleMenuItemClick = (path:any) => {
        router.push(path);
    };

    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div>
      <div className='h-screen  relative p-5 shadow-sm border bg-gradient-to-br from-green-100  via-indigo-200  to-blue-200' >
        <div className='flex justify-center p-1'>
            <Image src={'/txtlogo.png'} alt='logo' width={150} height={100}/>
        </div>
        <hr className='my-3'/>
        <div className='mt-3'>
          
            {MenuList.map((menu,index)=>(<Link href={menu.path} key={menu.name} className={`flex gap-2 mt-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer 
                ${path ==menu.path && 'bg-primary text-white'}`} >
                  <menu.icon/>
                  <h2>{menu.name}</h2>
            </Link>))}
          
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageCredit/>
            <div className=' bg-primary px-3 flex justify-center rounded-full gap-3 items-center text-white py-2 m-5'>
             <UserButton/><h2>User Profile</h2>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default SideNav
