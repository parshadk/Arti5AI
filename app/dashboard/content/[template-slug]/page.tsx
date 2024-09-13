"use client"
import React, { useContext, useState } from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import { TEMPLATE } from '../../_components/TempList'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/aiModel'
import { db } from '@/utils/db'
import { aiOP } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { User } from '@clerk/nextjs/server'
import { date } from 'drizzle-orm/mysql-core'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubsContext } from '@/app/(context)/UserSubsContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsage'

interface PROPS{
    params:{
        'template-slug':string
    }
    
}

function CreateContent(props:PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

    const [loading,setLoading]=useState(false);
    
    const [geminiOP,setGeminiOP]=useState<string>('');

    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
    const {userSubs,setUserSubs}=useContext(UserSubsContext);
    const {updatedCredit,setUpdatedCredit}=useContext(UpdateCreditUsageContext); 

    /** 
     * 
     * @param formData
     * @returns
    */ 
    const router=useRouter();
    const GenerateAIcontent=async(formData:any)=>{
        setLoading(true);
        if(totalUsage>=10000 && !userSubs){
            router.push('dashboard/billing')
            return;
        }
        const SelectedPrompt=selectedTemplate?.aiPrompt;
        const finalAIprompt=JSON.stringify(formData)+", "+SelectedPrompt;
        

        const result=await chatSession.sendMessage(finalAIprompt);

        
        setGeminiOP(result?.response.text());
        await SaveinDB(formData,selectedTemplate?.slug,result?.response.text())
        setLoading(false);
        setUpdatedCredit(Date.now());
    }
    
    const SaveinDB=async(formData:any,slug:any,aiOutput:string)=>{
        const result=await db.insert(aiOP).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiOutput,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('L'),


        });
    }
  return (
    <div>
        <div className='p-5'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft/>Back</Button>
            </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            <div>
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIcontent(v)} loading={loading}/>
            </div>
            <div className='col-span-2'>
                <OutputSection geminiOP={geminiOP}/>
            </div>    
        </div>
    </div>    
  )
}

export default CreateContent
