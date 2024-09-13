"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';

import { ClerkProvider } from '@clerk/nextjs';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubsContext } from '../(context)/UserSubsContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsage';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [userSubs, setUserSubs] = useState<boolean>(false);
  const [updatedCredit, setUpdatedCredit] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubsContext.Provider value={{ userSubs, setUserSubs }}>
        <UpdateCreditUsageContext.Provider
          value={{ updatedCredit, setUpdatedCredit }}
        >
          <div className="bg-blue-200 h-full">
            <div className="md:w-64 hidden md:block fixed">
              <SideNav />
            </div>
            <div className="md:ml-64">{children}</div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubsContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout
