
import { aiOP } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server'
import { desc } from 'drizzle-orm';
import Image from 'next/image';
import React from 'react'
import { TEMPLATE } from '../_components/TempList';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import HistoryItem from './_components/historyItem';

export interface HISTORY{
  id:Number,
  formData:string,
  aiResponse:string,
  templateSlug:string,
  createdBy:string,
  createdAt:string
}

async function History() {

  const user=await currentUser();
  {/*@ts-ignore*/}
  const HistoryList:HISTORY[]=await db.select().from(aiOP).where(eq(aiOP?.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(aiOP.id));

  const GetTemplateName=(slug:string)=>{
    const template:TEMPLATE|any=Templates?.find((item)=>item.slug==slug)
    return template;
  }
  
  return (
    <div className='m-5 p-5 border rounded-lg bg-white'>
      <h2 className='font-bold text-3xl'>History</h2>
      <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 bg-slate-300 rounded-lg'>
        <h2 className='col-span-2'>Template</h2>
        <h2 className='col-span-2'>AI response</h2>
        <h2>No. of words </h2>
        <h2>Date</h2>
        <h2>Copy</h2>
      </div>
      {HistoryList.map((item:HISTORY,index:number)=>(
        <>
          <div className='grid grid-cols-7 my-5 py-3 px-3 bg-slate-300 rounded-lg'>
            <h2 className='col-span-2 flex gap-2 items-center'>
              <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='icon'/>
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className=' col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
            <h2>{item?.aiResponse.length}</h2>
            <h2>{item.createdAt}</h2>
            <HistoryItem aiResponse={item.aiResponse} />
          </div>
        </>
      ))}


    </div>
  )
}


export default History
