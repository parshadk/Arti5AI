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
            <h2 className='font-bold'>Your output</h2>
            <div className='flex gap-2'>
                <Button className='flex gap-2 '><Download className='w-4 h-4'/> Download  </Button>
                <Button className='flex gap-2 ' onClick={()=>navigator.clipboard.writeText(geminiOP)}><Copy className='w-4 h-4'/> Copy </Button>
                <Button className='flex gap-2'><Share className='w-4 h-4'/>Share</Button>
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

