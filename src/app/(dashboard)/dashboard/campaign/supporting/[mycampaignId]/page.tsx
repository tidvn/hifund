"use client";

import { MilestoneRecap } from "@/components/app/campaign/milestones/milestoneRecap";
import { CalendarDateRangePicker } from "@/components/common/date-range-picker";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import usdc from "@/public/images/usdc1.png";
import { MilestoneRecapCard } from "@/types/milestones";



const milestoneRecap: MilestoneRecapCard[] = [
  {
    milestoneNumber: "1",
    cost: "100",
    startedAt: "Week 1 - Apr 2024 ",
    schedule: ["10 - Initial payment", "70 -  Day 1", "20 - Day 2"]
  },
  {
    milestoneNumber: "2",
    cost: "200",
    startedAt: "Week 2 - Apr 2024 ",
    schedule: ["30 - Initial payment", "100 -  Day 1", "20 - Day 2"]
  },
  {
    milestoneNumber: "3",
    cost: "50",
    startedAt: "Week 3 - Apr 2024 ",
    schedule: ["20 - Initial payment", "100 -  Day 1", "30 - Day 2"]
  },
  {
    milestoneNumber: "4",
    cost: "50",
    startedAt: "Week 4 - Apr 2024 ",
    schedule: ["20 - Initial payment", "50 -  Day 1", "30 - Day 2"]
  },
];


export default function CampaignDetails() {
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
            <div className="text-xl font-semibold tracking-tight font-poppins flex items-center bg-[#faf5ff] p-5 rounded-xl">
              Donated: 
              100&nbsp;
              <img src={usdc.src} alt="" className="w-8 h-8" />
              
            </div>
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
        <div className="">
          <div className="text-3xl font-bold tracking-tight font-poppins my-10 mb-4">
            About this campaign
          </div>
          <div
            className={`relative p-6 rounded-lg bg-[#faf5ff] text-justify ${!isReadMore && "h-52"} overflow-hidden`}
          >
            <div className="mb-8 ">
              <div className="text-xl font-semibold tracking-tight font-poppins mb-3">
                [GENERAL] Name and surname of main applicant
              </div>
              <span>Danial Gonzalez</span>
            </div>
            <div className="mb-8 ">
              <div className="text-xl font-semibold tracking-tight font-poppins mb-3">
                [GENERAL] Are you delivering this project as an individual or as
                an entity (whether formally incorporated or not)
              </div>
              <span>Entity (Incorporated)</span>
            </div>
            <div className="mb-8 ">
              <div className="text-xl font-semibold tracking-tight font-poppins mb-3">
                [GENERAL] Please specify how many months you expect your project
                to last (from 1-5 weeks)
              </div>
              <span>3</span>
            </div>
            <div className="mb-8 ">
              <div className="text-xl font-semibold tracking-tight font-poppins mb-3">
                [GENERAL] Summarize your solution to the problem (200-character
                limit including spaces)
              </div>
              <span>
                We will build a dedicated time-traveling UPLC debugger, with
                integration for the Aiken programming language. This will save
                developer time through a familiar “step-through” debugger
                experience.
              </span>
            </div>
            <div className="mb-8 ">
              <div className="text-xl font-semibold tracking-tight font-poppins mb-3">
                [SOLUTION] Please describe your proposed solution.
              </div>
              <p>
                Our proposal is focused on significantly enhancing the debugging
                experience for developers working with UPLC and Aiken on the
                Cardano blockchain. We plan to develop a time-traveling debugger
                for UPLC. This tool will allow developers to execute their
                compiled UPLC code step-by-step, inspect the state at each step,
                and even navigate backwards in time. Additionally, if the code
                was compiled from Aiken, it will expose the Aiken code that
                produced the resulting UPLC. The goal is to make the debugging
                process more intuitive and efficient, helping developers quickly
                identify and resolve issues in their smart contracts.
              </p>
            </div>
            <div className="mb-8 ">
              <div className="text-xl font-semibold tracking-tight font-poppins mb-3">
                [CAPABILITY & FEASIBILITY] What is your capability to deliver
                your project with high levels of trust and accountability? How
                do you intend to validate if your approach is feasible?
              </div>
              <p>
                Our team, comprising experienced blockchain developers and
                software engineers, has a proven track record in delivering
                high-quality development tools. We will validate our approach
                through continuous testing and community feedback, ensuring our
                solution meets the real-world needs of Aiken developers.
              </p>
            </div>
            <div
              className={`bg-[rgba(250,245,255,0.75)] absolute left-0 bottom-0 right-0 flex justify-center text-blue-600 font-semibold cursor-pointer  mt-5 ${!isReadMore && "shadow-inner-top"} mb-5`}
            >
              {!isReadMore ? (
                <div className="flex animate-bounce" onClick={() => setReadMore(true)}>
                  <ChevronDown />
                  Read more
                </div>
              ) : (
                <div className="flex animate-bounce" onClick={() => setReadMore(false)}>
                  <ChevronUp />
                  Read less
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-3xl font-bold tracking-tight font-poppins my-10 mb-4">
            Milestones Recap
          </div>
          <Button>
            <Link href="/dashboard/campaign/supporting/1/milestones">
              Review milestones
            </Link>
          </Button>
          <div className="grid gap-5 grid-cols-3 my-5">
            <MilestoneRecap milestoneRecap={milestoneRecap[0]} />
            <MilestoneRecap milestoneRecap={milestoneRecap[1]} />
            <MilestoneRecap milestoneRecap={milestoneRecap[2]} />
            <MilestoneRecap milestoneRecap={milestoneRecap[3]} />
          </div>
          <Button>
            <Link href="/dashboard/campaign/supporting/1/milestones">
              Review milestones
            </Link>
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}
