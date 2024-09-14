'use client'

import React, { createContext, useState, useContext } from 'react'

type SideNavContextType = {
  isSideNavOpen: boolean
  toggleSideNav: () => void
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined)

export function SideNavProvider({ children }: { children: React.ReactNode }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }

  return (
    <SideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
      {children}
    </SideNavContext.Provider>
  )
}

export function useSideNav() {
  const context = useContext(SideNavContext)
  if (context === undefined) {
    throw new Error('useSideNav must be used within a SideNavProvider')
  }
  return context
}