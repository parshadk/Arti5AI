"use client"
import React, { useState } from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import { TEMPLATE } from '../../_components/TempList'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/aiModel'

interface PROPS{
    params:{
        'template-slug':string
    }
    
}

function CreateContent(props:PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

    const [loading,setLoading]=useState(false);
    
    const [geminiOP,setGeminiOP]=useState<string>('');


    const GenerateAIcontent=async(formData:any)=>{
        setLoading(true);
    
        const SelectedPrompt=selectedTemplate?.aiPrompt;
        const finalAIprompt=JSON.stringify(formData)+", "+SelectedPrompt;
        

        const result=await chatSession.sendMessage(finalAIprompt);

        console.log(result.response.text());
        setGeminiOP(result?.response.text());
        setLoading(false);
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
