"use client"

import { TEMPLATE } from '@/app/dashboard/_components/TempList'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2Icon, LoaderCircle, LoaderIcon, LoaderPinwheel } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
interface PROPS{
    selectedTemplate?:TEMPLATE;
    userFormInput:any;
    loading:boolean;
}

function FormSection({selectedTemplate,userFormInput,loading}:PROPS) {

    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormInput(formData)
    }

    const [formData,setFormData]=useState<any>();

    const handleInputChange=(e:any)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }

  return (
    <div className='p-5 flex flex-col shadow-md border rounded-lg bg-white '>
        {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt='icon' width={50} height={50}/>
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 '>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>

        {selectedTemplate?.form?.map((item,index)=>(
            <div className=' my-2 flex flex-col gap-2 mb-5'>

                <label className='font-bold'>{item.label}</label>

                {item.field=='input'? <Input name={item.name} required={item?.required} onChange={handleInputChange} className={`border-black cursor-pointer hover:scale-105 transition-all`}/> 
                : item.field=='textarea'?<Textarea name={item.name} required={item?.required} onChange={handleInputChange} className={`border-black cursor-pointer hover:scale-105 transition-all`}/> : null }
            </div>
        ))}

        <Button type='submit' className='w-full py-6 cursor-pointer hover:scale-105 transition-all border bg-primary p-5 rounded-xl   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring' disabled={loading}>
          <div className='gap-2 flex '>
            {loading && <Loader2Icon className='animate-spin'/>}
            Generate Content  
          </div>
        </Button>
      </form>
    </div>
  )
}

export default FormSection
