"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import MilestoneDetailsTab from "@/components/app/campaign/milestones/milestoneDetails";
import { CalendarDateRangePicker } from "@/components/common/date-range-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/app/tabs/tab";
import usdc from "@/public/images/usdc1.png";
import { MilestoneDetails } from "@/types/milestones";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
const milestoneDetails: MilestoneDetails[] = [
  {
    milestoneName: "1 - Selecting a beat",
    submitedAt: "February 21, 2024 at 6:15 AM",
    title: "Chung Ta Cua Tuong Lai",
    outputs: {
      promise: ["A lively hip-hop beat with a fast tempo."],
      result: ["8", "0"]
    },
    criteria: {
      promise: ["The beat incorporates unique sound effects",
        "Utilizes suitable beat patterns",
        "Creates an immersive musical environment"],
      result: ["8", "0"]
    },
    evidence: {
      promise: ["File beat (MP3)",
        "Result adjust tempo > 90",
        "Musical instruments"],
      result: ["8", "0"]
    },
    delivery: "Week 1",
    cost: {
      promise: ["10.00%", "100"],
      result: ["6", "0"]
    },
    completion: "100%"
  },
  {
    milestoneName: "2 - Writing the melody",
    submitedAt: "February 26, 2024 at 6:15 AM",
    title: "Chung Ta Cua Tuong Lai",
    outputs: {
      promise: ["A catchy and memorable melody"],
      result: ["0", "0"]
    },
    criteria: {
      promise: ["The melody showcases diverse variations",
        "Employs notes that complement the song's emotions",
        "Creates an engaging musical line for the listeners"],
      result: ["1", "0"]
    },
    evidence: {
      promise: ["File audio (MP3)",
        "File notes of melody",
        "File doing Study"],
      result: ["1", "0"]
    },
    delivery: "Week 2",
    cost: {
      promise: ["20.00%", "200"],
      result: ["0", "0"]
    },
    completion: "50%"
  },
  {
    milestoneName: "3 - Crafting the lyrics",
    submitedAt: "March 1, 2024 at 6:15 AM",
    title: "Chung Ta Cua Tuong Lai",
    outputs: {
      promise: ["Lyrics conveying a positive message about love and hope"],
      result: ["0", "0"]
    },
    criteria: {
      promise: ["The lyrics employ vibrant language",
        "Harmonize with the melody and beat",
        "Tell a profound and emotive story"],
      result: ["1", "0"]
    },
    evidence: {
      promise: ["A verse-chorus-bridge-chorus song structure.",
        "Lyrics file",
        "File Audio lyric (MP3)"],
      result: ["1", "0"]
    },
    delivery: "Week 3",
    cost: {
      promise: ["25.00%", "50"],
      result: ["0", "0"]
    },
    completion: "0%"
  },
  {
    milestoneName: "4 - Recording",
    submitedAt: "March 6, 2024 at 6:15 AM",
    title: "Chung Ta Cua Tuong Lai",
    outputs: {
      promise: ["A high-quality recorded version and a live stage performance of the song"],
      result: ["1", "0"]
    },
    criteria: {
      promise: ["The recorded version exhibits clear, balanced, and professional-grade audio production",
        "While the live performance captures the emotion and enthusiasm of the song",
      ],
      result: ["0", "0"]
    },
    evidence: {
      promise: ["File Audio (MP3) official",
        "Lyrics final file",
      ],
      result: ["1", "0"]
    },
    delivery: "Week 4",
    cost: {
      promise: ["25.00%", "50"],
      result: ["0", "0"]
    },
    completion: "0%"
  }

];

export default function MilestonesDetails() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tight font-poppins">
            Chung Ta Cua Tuong Lai 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Dialog>
              <DialogTrigger asChild>
                <Button><HeartHandshake /> &nbsp;Donate</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                  <DialogTitle>Confirm donate this project</DialogTitle>
                  <DialogDescription className=" text-left">

                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-left font-bold">
                      Amount
                    </Label>
                    <Input id="name" placeholder="USDC" className="col-span-3" />
                    <div className="col-span-4 italic text-sm">*The amount does not exceed the amount of the missing fund</div>
                  </div>
                  <div className="font-bold">Onboading From: Jan 20, 2023</div>
                  <div className="font-bold">Onboading From: Feb 09, 2023</div>
                  <div>
                    <Label htmlFor="name" className="text-left font-bold">
                      Platform terms and conditions
                    </Label>
                    <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
                      <li>The amount will be locked in the smart contract as a commitment</li>
                      <li>Your money will be returned to your wallet if
                        <ul className="ml-6 list-disc">
                          <li>The creator confirms cancellation when onboarding ends</li>
                          <li>Creators Miletones are not accepted until the deadline</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
                <DialogFooter>
                  <Button>
                    <Link href="/dashboard/campaign/supporting">
                      Confirm
                    </Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
              <MilestoneDetailsTab milestone={milestoneDetails[0]} isSupported={false} />
            </TabsContent>
            <TabsContent value="m2">
              <MilestoneDetailsTab milestone={milestoneDetails[1]} isSupported={false} />
            </TabsContent>
            <TabsContent value="m3">
              <MilestoneDetailsTab milestone={milestoneDetails[2]} isSupported={false} />
            </TabsContent>
            <TabsContent value="mfinal">
              <MilestoneDetailsTab milestone={milestoneDetails[3]} isSupported={false} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
}
