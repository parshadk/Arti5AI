"use client"
import React, { useContext, useState } from "react";
import axios from "axios";
import { Check, Loader2 } from "lucide-react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { UserSubsContext } from '@/app/(context)/UserSubsContext';

function billing() {

  const [loading,setLoading]=useState(false);
  const router=useRouter();
  const {user}=useUser();

  const {userSubs,setUserSubs}=useContext(UserSubsContext);
  const goToDashboard=()=>{
    router.push('/dashboard');
  }
  const CreateSubscription=()=>{
    setLoading(true);
    axios.post('/api/create-subscription',{}).then(
      resp=>{
        console.log(resp.data);
        OnPayment(resp.data.id)

      },(error)=>{
        setLoading(false);
      })
  }

const OnPayment=(subId:string)=>{
  const options={
    "key":process.env.PUBLIC_RAZORPAY_KEY_ID,
    "subscription_id":subId,
    "name":'Arti5AI',
    description:"Monthly Subscription",
    handler:async(resp:any)=>{
      console.log(resp);
      if(resp){
        SaveSubcription(resp?.razorpay_payment_id);
      }
      setLoading(false);
    }
  }
  // @ts-ignore
  const rzp=new window.Razorpay(options);
  rzp.open();
}

const SaveSubcription=async(paymentId:string)=>{ 
  const result=await db.insert(UserSubscription).values({
    email:user?.primaryEmailAddress?.emailAddress,
    userName:user?.fullName,
    active:true,
    paymentId:paymentId,
    joinDate:moment().format('L')
  });
  console.log(result);
  if(result){
    window.location.reload();
  }
}


  return (
    <div className="bg-blue-200">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto  max-w-3xl px-2 py-4 sm:px-6 sm:py-12 lg:px-8  rounded-xl">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center   md:gap-8 ">
          <div className="rounded-2xl border border-black-200 p-6 hover:border-primary cursor-pointer bg-gray-400 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h1 className="text-xl font-medium text-gray-900">
                Free <span className=" ">Plan</span>
              </h1>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  0 $
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700">10,000 Words/ Month </span>
              </li>
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700"> 50+ Templates </span>
              </li>
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700">Unlimated Download </span>
              </li>
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700">1 Month History</span>
              </li>
            </ul>
            <Button onClick={goToDashboard} className="mt-8 flex w-full rounded-full border bg-primary py-6   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring  active:text-indigo-500">
              <span>Get Started</span>
            </Button>
          </div>
        
          <div className="rounded-2xl border border-black-200 p-6 hover:border-primary cursor-pointer items-center bg-gray-400  shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h1 className="text-xl font-medium text-gray-900">
                Monthly <span className="">Plan</span>
              </h1>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  3.59$
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700">100,000 Words/Month </span>
              </li>
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700"> Access to all Templates</span>
              </li>
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700"> Unlimated Download  </span>
              </li>
              <li className="flex items-center gap-1">
                <Check />
                <span className="text-gray-700"> 1 year History </span>
              </li>
            </ul>
            <Button disabled={loading} onClick={ ()=> CreateSubscription()}
            className="mt-8 flex  w-full gap-2 rounded-full border bg-primary  py-6 text-center text-sm font-medium  text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring  active:text-indigo-500">
              <span >{userSubs?'Active Plan':'Get Started'}</span>
              {loading&&<Loader2 className="animate-spin"/>}
              
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default billing;
