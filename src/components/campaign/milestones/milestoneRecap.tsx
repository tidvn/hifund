import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"

interface MilestoneRecapProps{
    milestoneNumber?:string;
    className?:string;
};

export function MilestoneRecap(props: MilestoneRecapProps) {
    let {milestoneNumber = "0", className} = props; 
    return (
        <Card className={`bg-[#faf5ff] outline-none border-0 ${className}`}>
            <CardHeader>
                <CardTitle className="underline text-4xl font-bold font-poppins">M{milestoneNumber}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex justify-between">
                            <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                                <div className="text-3xl">2</div>
                                <div>approvals</div>
                            </div>
                            <div className="w-1/2 text-black p-3 px-5 bg-white rounded-lg font-semibold">
                                <div className="text-3xl">0</div>
                                <div>refusals</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="text-gray-400">Milestone cost:</Label>
                            <Label className="font-bold text-2xl">SOL 42,000.00</Label>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="text-gray-400">Stated delivery on:</Label>
                            <Label className="font-bold text-xl">Week 1 - Jun 2024</Label>
                        </div>
                        <div className="bg-[#eceffe] p-4 font-semibold">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Payments schedule:
                            </p>
                            <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
                                <li>SOL 11,200.00 - Initial payment</li>
                                <li>SOL 11,200.00 - Month 1</li>
                                <li>SOL 11,200.00 - Month 2</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    )
}