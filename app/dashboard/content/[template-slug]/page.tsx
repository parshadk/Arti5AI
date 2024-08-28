"use client"
import React from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import { TEMPLATE } from '../../_components/TempList'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PROPS{
    params:{
        'template-slug':string
    }
    
}

function CreateContent(props:PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    
    const GenerateAIcontent=(FormData:any)=>{

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
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIcontent(v)}/>
            </div>
            <div className='col-span-2'>
                <OutputSection/>
            </div>    
        </div>
    </div>    
  )
}

export default CreateContent
