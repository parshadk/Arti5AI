"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { aiOP, userSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { Result } from 'postcss';
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsage';

function UsageCredit() {

  const router = useRouter();
  const goToBilling = () => {
    router.push("/dashboard/billing");
  };
    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
    const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
    const {updatedCredit,setUpdatedCredit}=useContext(UpdateCreditUsageContext);
    const[maxWords,setMaxWords]=useState(10000);
    const fetchData=async()=>{
      {/*@ts-ignore */}
        const result:HISTORY[]=await db.select().from(aiOP).where(eq(aiOP.createdBy,user?.primaryEmailAddress?.emailAddress));
        
        GetTotalUsage(result)
    }

    const IsUserSubscribe=async()=>{
      try {
        const result = await db.select().from(userSubscription).where(eq(userSubscription.email, user?.primaryEmailAddress?.emailAddress)).execute();
    
        if (result.length > 0) { 
          setUserSubscription(true);
          setMaxWords(100000);
        } else {
          setUserSubscription(false); 
        }
      } catch (error) {
        console.error("Error in IsUserSubscribe:", error);
      }
    }
    useEffect(()=>{
        user&&fetchData();
        user&&IsUserSubscribe();
    },[user]);

    useEffect(()=>{
      user&&fetchData();
    },[updatedCredit&&user])

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
            <div className='h-2 bg-slate-500 rounded-full' style={{width:(totalUsage/maxWords)*100+"%"}}></div>
        </div>
        <h2 className='text-sm my-2 '>{totalUsage}/{maxWords} credits used</h2>
      </div>
      <Button className='w-full my-3' onClick={goToBilling}>Upgrade</Button>
    </div>
  )
}

export default UsageCredit
