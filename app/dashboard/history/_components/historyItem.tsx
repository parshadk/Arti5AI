"use client";

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import React from 'react';
import { HISTORY } from '../page';

const HistoryItem = (aiResponse:any) => {
    return (
        <h2>
            <Button className='flex flex-row gap-2' onClick={() => navigator.clipboard.writeText(aiResponse)}>
                <Copy /> Copy
            </Button>
        </h2>
    );
};

export default HistoryItem;
