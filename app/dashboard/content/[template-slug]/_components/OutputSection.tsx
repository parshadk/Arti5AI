import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, Download, Share } from 'lucide-react';


interface props{
    geminiOP:string;
}


function OutputSection({geminiOP}:props) {

    const editorRef:any=useRef();

    useEffect(()=>{
        const editorInstance=editorRef.current.getInstance();
        editorInstance.setMarkdown(geminiOP);
    },[geminiOP]);

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='font-bold'>Output</h2>
            <div className='flex gap-2'>
                <Button className='flex gap-2 w-full py-6 cursor-pointer hover:scale-110 transition-all border bg-primary p-5 rounded-xl   text-center text-xs font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring'><Download className='w-4 h-4'/> <p className='hidden lg:block'>Download</p>  </Button>
                <Button className='flex gap-2 w-full py-6 cursor-pointer hover:scale-110 transition-all border bg-primary p-5 rounded-xl   text-center text-xs font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring' onClick={()=>navigator.clipboard.writeText(geminiOP)}><Copy className='w-4 h-4'/> <p className='hidden lg:block'>Copy</p> </Button>
                <Button className='flex gap-2 w-full py-6 cursor-pointer hover:scale-110 transition-all border bg-primary p-5 rounded-xl   text-center text-xs font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring'><Share className='w-4 h-4'/><p className='hidden lg:block'>Share</p></Button>
            </div>
            
        </div>
        <Editor
            ref={editorRef}
            initialValue="Output will be displayed here" 
            height="400px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            onChange={()=>(editorRef.current.getInstance().getMarkdown())}
        />
    </div>
  )
}

export default OutputSection

