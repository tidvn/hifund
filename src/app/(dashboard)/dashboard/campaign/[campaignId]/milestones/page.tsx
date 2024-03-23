"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import MilestoneDetailsTab from "@/components/app/campaign/milestones/milestoneDetails";
import { CalendarDateRangePicker } from "@/components/common/date-range-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/app/tabs/tab";
import usdc from "@/public/images/usdc1.png";
interface MilestonesDetailsProps {
  className?: string;

}

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
          <div className="text-2xl font-semibold tracking-tight font-poppins flex items-center">
            <img src={usdc.src} alt="" className="w-8 h-8" />
            &nbsp;
            400
          </div>
          <span>for total milestones and campaign</span>
        </div>
        <div>
          <div className="text-3xl font-bold tracking-tight font-poppins my-10 mb-4">
            Milestones Details
          </div>
          <Tabs
            defaultValue="m1"
            className="w-full bg-[#faf5ff] p-4 rounded-lg"
          >
            <TabsList className="">
              <TabsTrigger value="m1">Milestone 1</TabsTrigger>
              <TabsTrigger value="m2">Milestone 2</TabsTrigger>
              <TabsTrigger value="m3">Milestone 3</TabsTrigger>
              <TabsTrigger value="mfinal">Milestone Final</TabsTrigger>
            </TabsList>
            <TabsContent value="m1">
              <MilestoneDetailsTab milestoneName="1" submitedAt="February 21, 2024 at 6:15 AM" title="Chung Ta Cua Tuong Lai" outputs={{promise:["A functional command-line debugger for UPLC"],result:["1","0"]}} criteria={{promise:["Debugger allows for the execution of UPLC code step-by-step", " Capability to display terms in scope and call stack on command", "Usable in a standard development environment"],result:["1","0"]}} evidence={{promise:["Release of the debugger tool on GitHub","Documentation outlining usage and capabilities","A video demonstration of the debugger in action"],result:["1","0"]}} delivery="Week 1" cost={{promise:["30.00%", "100"],result:["1","0"]}} completion="50%"/>
            </TabsContent>
            <TabsContent value="m2">
            <MilestoneDetailsTab milestoneName="2" submitedAt="February 21, 2024 at 6:15 AM" title="Chung Ta Cua Tuong Lai" outputs={{promise:["A functional command-line debugger for UPLC"],result:["1","0"]}} criteria={{promise:["Debugger allows for the execution of UPLC code step-by-step", " Capability to display terms in scope and call stack on command", "Usable in a standard development environment"],result:["1","0"]}} evidence={{promise:["Release of the debugger tool on GitHub","Documentation outlining usage and capabilities","A video demonstration of the debugger in action"],result:["1","0"]}} delivery="Week 1" cost={{promise:["30.00%", "100"],result:["1","0"]}} completion="50%"/>
            </TabsContent>
            <TabsContent value="m3">
            <MilestoneDetailsTab milestoneName="3" submitedAt="February 21, 2024 at 6:15 AM" title="Chung Ta Cua Tuong Lai" outputs={{promise:["A functional command-line debugger for UPLC"],result:["1","0"]}} criteria={{promise:["Debugger allows for the execution of UPLC code step-by-step", " Capability to display terms in scope and call stack on command", "Usable in a standard development environment"],result:["1","0"]}} evidence={{promise:["Release of the debugger tool on GitHub","Documentation outlining usage and capabilities","A video demonstration of the debugger in action"],result:["1","0"]}} delivery="Week 1" cost={{promise:["30.00%", "100"],result:["1","0"]}} completion="50%"/>
            </TabsContent>
            <TabsContent value="mfinal">
            <MilestoneDetailsTab milestoneName="4" submitedAt="February 21, 2024 at 6:15 AM" title="Chung Ta Cua Tuong Lai" outputs={{promise:["A functional command-line debugger for UPLC"],result:["1","0"]}} criteria={{promise:["Debugger allows for the execution of UPLC code step-by-step", " Capability to display terms in scope and call stack on command", "Usable in a standard development environment"],result:["1","0"]}} evidence={{promise:["Release of the debugger tool on GitHub","Documentation outlining usage and capabilities","A video demonstration of the debugger in action"],result:["1","0"]}} delivery="Week 1" cost={{promise:["30.00%", "100"],result:["1","0"]}} completion="50%"/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
}
