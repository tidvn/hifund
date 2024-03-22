'use client'

import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs/tab"
import { useState } from "react";
import MilestoneDetailsTab from "@/components/campaign/milestones/milestoneDetails";


export default function MilestonesDetails() {
    const [isReadMore, setReadMore] = useState<boolean>(false);
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-4xl font-extrabold tracking-tight font-poppins">
                        Chung Ta Cua Tuong Lai 👋
                    </h2>
                    <div className="hidden md:flex items-center space-x-2">
                        <CalendarDateRangePicker />
                        <Button>Support</Button>
                    </div>
                </div>
                <div className="p-6 bg-[#faf5ff] w-fit">
                    <div className="text-2xl font-semibold tracking-tight font-poppins">SOLANA 11,200.00</div>
                    <span>for total milestones and campaign</span>
                </div>
                <div>
                    <div className="text-3xl font-bold tracking-tight font-poppins my-10 mb-4">Milestones Details</div>
                    <Tabs defaultValue="m1" className="w-full bg-[#faf5ff] p-4 rounded-lg">
                        <TabsList className="">
                            <TabsTrigger value="m1">Milestone 1</TabsTrigger>
                            <TabsTrigger value="m2">Milestone 2</TabsTrigger>
                            <TabsTrigger value="m3">Milestone 3</TabsTrigger>
                            <TabsTrigger value="mfinal">Milestone Final</TabsTrigger>
                        </TabsList>
                        <TabsContent value="m1">
                            <MilestoneDetailsTab milestoneName="1"/>
                        </TabsContent>
                        <TabsContent value="m2" >
                            <MilestoneDetailsTab milestoneName="2"/>
                        </TabsContent>
                        <TabsContent value="m3" >
                            <MilestoneDetailsTab milestoneName="3"/>
                        </TabsContent>
                        <TabsContent value="mfinal" >
                            <MilestoneDetailsTab milestoneName="Final"/>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </ScrollArea>
    );
}
