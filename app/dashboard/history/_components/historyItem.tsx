"use client";

import { Button } from '@/components/ui/button';
import { aiOP } from '@/utils/schema';
import { Copy } from 'lucide-react';
import React from 'react';


const HistoryItem = (aiResponse:any) => {
    return (
        <h2 className='w-4 h-4'>
            <Button className='flex flex-row gap-2 cursor-pointer hover:scale-105 transition-all w-full border bg-primary px-8 py-4 rounded-xl   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring' onClick={() => navigator.clipboard.writeText(aiResponse)}>
                Copy
            </Button>
        </h2>
    );
};

export default HistoryItem;


