import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, Download, Share } from 'lucide-react';

function OutputSection() {

    const editorRef:any=useRef();

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='font-bold'>Your output</h2>
            <div className='flex gap-2'>
                <Button className='flex gap-2 '><Download className='w-4 h-4'/> Download  </Button>
                <Button className='flex gap-2 '><Copy className='w-4 h-4'/> Copy </Button>
                <Button className='flex gap-2'><Share className='w-4 h-4'/>Share</Button>
            </div>
            
        </div>
        <Editor
            ref={editorRef}
            initialValue="hello !"
            previewStyle="vertical"   
            initialEditType="markdown"
            useCommandShortcut={true}
            onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
        />
    </div>
  )
}

export default OutputSection
