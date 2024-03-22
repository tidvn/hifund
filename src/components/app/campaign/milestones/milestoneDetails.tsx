import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface MilestoneDetailsTabProps {
  milestoneName?: string;
}

export default function MilestoneDetailsTab(props: MilestoneDetailsTabProps) {
  let { milestoneName = "0" } = props;
  return (
    <div className="p-8">
      <div className="text-2xl font-bold tracking-tight font-poppins ">
        Milestone {milestoneName}
      </div>
      <div>Latest submission of the Milestone {milestoneName}.</div>
      <Table className="mt-10 border-collapse  border border-slate-400 rounded-lg bg-white ">
        <TableBody>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone submitted at
            </TableHead>
            <TableCell className="border border-slate-400">
              February 21, 2024 at 6:15 AM
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Title
            </TableHead>
            <TableCell className="border border-slate-400">
              Chung Ta Cua Tuong Lai
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Outputs
            </TableHead>
            <TableCell className="border border-slate-400">
              A functional command-line debugger for UPLC
            </TableCell>
            <TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">2</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-black p-3 px-5 bg-[#faf5ff] rounded-lg font-semibold">
                    <div className="text-3xl">0</div>
                    <div>refusals</div>
                  </div>
                </div>
                <Button className="mt-5">Open Milestone Outputs reviews</Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Acceptance criteria
            </TableHead>
            <TableCell className="border border-slate-400">
              <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Debugger allows for the execution of UPLC code step-by-step
                </li>
                <li>
                  Capability to display terms in scope and call stack on command
                </li>
                <li>Usable in a standard development environment</li>
              </ul>
            </TableCell>
            <TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">2</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-black p-3 px-5 bg-[#faf5ff] rounded-lg font-semibold">
                    <div className="text-3xl">0</div>
                    <div>refusals</div>
                  </div>
                </div>
                <Button className="mt-5">Open Milestone Outputs reviews</Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Evidence of milestone completion
            </TableHead>
            <TableCell className="border border-slate-400">
              <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
                <li>Release of the debugger tool on GitHub</li>
                <li>Documentation outlining usage and capabilities</li>
                <li>A video demonstration of the debugger in action</li>
              </ul>
            </TableCell>
            <TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-black p-3 px-5 bg-[#faf5ff] rounded-lg font-semibold me-3">
                    <div className="text-3xl">0</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-white  p-3 px-5 bg-red-500 rounded-lg font-semibold">
                    <div className="text-3xl">1</div>
                    <div>refusals</div>
                  </div>
                </div>
                <Button className="mt-5">Open Milestone Outputs reviews</Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Delivery Week
            </TableHead>
            <TableCell className="border border-slate-400">
              <div className="font-semibold text-2xl">3 - Jun 2024</div>
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Cost
            </TableHead>
            <TableCell className="border border-slate-400">
              <div className="font-semibold text-2xl">30.00%</div>
              <div className="font-semibold text-2xl">SOL 42,000.00</div>
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Project Completion
            </TableHead>
            <TableCell className="border border-slate-400">
              <div className="font-semibold text-2xl">50%</div>
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
