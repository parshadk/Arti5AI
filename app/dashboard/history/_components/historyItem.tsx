"use client";

import { Button } from '@/components/ui/button';
import { aiOP } from '@/utils/schema';
import { Copy } from 'lucide-react';
import React from 'react';


const HistoryItem = (aiResponse:any) => {
    return (
        <h2 className='w-4 h-4'>
            <Button className='flex flex-row gap-2 ' onClick={() => navigator.clipboard.writeText(aiResponse)}>
                Copy
            </Button>
        </h2>
    );
};

export default HistoryItem;


