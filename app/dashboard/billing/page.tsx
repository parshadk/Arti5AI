import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

function billing() {
  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">Upgrade Subscription</h2>
      </div>
      <div className="mt-5 py-6 px-4 rounded flex flex=row ">
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle className="text-bold ">Starter</CardTitle>
            <hr/>
            <CardTitle>Free</CardTitle>
            <hr/>
            
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex flex-row my-2 gap-2">
                <Check />
                10,000 words
              </p>
            </div>
            <Button className="mt-5">Go to Home</Button>
          </CardContent>
        </Card>
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardTitle>100 Rupees </CardTitle>
            
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex flex-row my-2 gap-2">
                <Check />
                10,000 words per purchase
              </p>
            </div>
            <Button className="mt-5">Purchase</Button>
          </CardContent>
        </Card>
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardTitle>300 Rupees</CardTitle>   
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex flex-row my-2 gap-2">
                <Check />
                40,000 words per purchase
              </p>
            </div>
            <Button className="mt-5">Purchase</Button>
          </CardContent>
        </Card>
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardTitle>500 Rupees</CardTitle>   
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex flex-row my-2 gap-2">
                <Check />
                70,000 words per purchase
              </p>
            </div>
            <Button className="mt-5">Purchase</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default billing;
