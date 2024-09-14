'use client'

import React from 'react'
import { AlignLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSideNav } from './../../(context)/SideNavContext'

export default function ToggleButton() {
  const { toggleSideNav } = useSideNav()

  return (
    <Button
      variant="ghost"
      className="fixed top-4 left-4 z-100 lg:hidden"
      onClick={toggleSideNav}
    >
      <AlignLeft className="h-6 w-6" />
    </Button>
  )
}