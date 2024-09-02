"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { aiOP } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageCredit() {

    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);

    const fetchData=async()=>{
        {/*@ts-ignore*/}
        const result:HISTORY[]=await db.select().from(aiOP).where(eq(aiOP.createdBy,user?.primaryEmailAddress?.emailAddress));
        
        GetTotalUsage(result)
    }
    useEffect(()=>{
        user&&fetchData();
    },[user])

    const GetTotalUsage=(result:HISTORY[])=>{
        let totalCr:number=0;
        result.forEach(element=>{
            totalCr=totalCr+Number(element.aiResponse?.length)
        });
        setTotalUsage(totalCr)
        console.log(result)
    }


  return (
    <div className='m-5 mb-0'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-white w-full rounded-full mt-3'>
            <div className='h-2 bg-slate-500 rounded-full' style={{width:(totalUsage/10000)*100+"%"}}></div>
        </div>
        <h2 className='text-sm my-2 '>{totalUsage}/10000 credits used</h2>
      </div>
      <Button className='w-full my-3'>Upgrade</Button>
    </div>
  )
}

export default UsageCredit
