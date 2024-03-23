import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MilestoneDetails } from "@/types/milestones";

interface MilestoneDetailsTabProps {
  milestone: MilestoneDetails;
  isSupported?:boolean;
}

export default function MilestoneDetailsTab(props: MilestoneDetailsTabProps) {
  let {milestone, isSupported= true} = props;
  return (
    <div  >
      <div className="text-2xl font-bold tracking-tight font-poppins ">
        Milestone {milestone.milestoneName}
      </div>
      <div>Latest submission of the Milestone {milestone.milestoneName}.</div>
      <Table className="mt-10 border-collapse  border border-slate-400 rounded-lg bg-white ">
        <TableBody>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone submitted at
            </TableHead>
            <TableCell className="border border-slate-400">
               {milestone.submitedAt}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Title
            </TableHead>
            <TableCell className="border border-slate-400">
              {milestone.title}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Outputs
            </TableHead>
            <TableCell className="border border-slate-400">
               {milestone.outputs?.promise?.map((x, i) =>
                <div key={i}>{x}</div>
              )}
            </TableCell>
            {isSupported&&<TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">{milestone.outputs?.result && milestone.outputs?.result[0]}</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-white p-3 px-5 bg-red-500 rounded-lg font-semibold">
                    <div className="text-3xl">{milestone.outputs?.result && milestone.outputs?.result[1]}</div>
                    <div>refusals</div>
                  </div>
                </div>
                <Button className="mt-5">Open Milestone Outputs reviews</Button>
              </div>
            </TableCell>}
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Acceptance criteria
            </TableHead>
            <TableCell className="border border-slate-400">
              <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
                {
                  milestone.criteria?.promise?.map((x, i) =>
                    <li key={i}>
                      {x}
                    </li>
                  )
                }
              
              </ul>
            </TableCell>
            {isSupported&&<TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">{milestone.criteria?.result && milestone.criteria?.result[0]}</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-white p-3 px-5 bg-red-500 rounded-lg font-semibold">
                    <div className="text-3xl">{milestone.criteria?.result && milestone.criteria?.result[1]}</div>
                    <div>refusals</div>
                  </div>
                </div>
                <Button className="mt-5">Open Milestone Outputs reviews</Button>
              </div>
            </TableCell>}
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Evidence of milestone completion
            </TableHead>
            <TableCell className="border border-slate-400">
              <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
                
                {
                  milestone.evidence?.promise?.map((x, i) =>
                    <li key={i}>
                      {x}
                    </li>
                  )
                }
              </ul>
            </TableCell>
            {isSupported&&<TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">{milestone.evidence?.result && milestone.evidence?.result[0]}</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-white  p-3 px-5 bg-red-500 rounded-lg font-semibold">
                    <div className="text-3xl">{milestone.evidence?.result && milestone.evidence?.result[1]}</div>
                    <div>refusals</div>
                  </div>
                </div>
                <Button className="mt-5">Open Milestone Outputs reviews</Button>
              </div>
            </TableCell>}
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Delivery Week
            </TableHead>
            <TableCell className="border border-slate-400">
              <div className="font-semibold text-2xl">{milestone.delivery&&milestone.delivery}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Cost
            </TableHead>
            <TableCell className="border border-slate-400">
              {
                  milestone.cost?.promise?.map((x, i) =>
                    <div key={i} className="font-semibold text-2xl">
                      {x}
                    </div>
                  )
              }
            </TableCell>
          </TableRow>
          {isSupported&&<TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Completion
            </TableHead>
            <TableCell className="border border-slate-400">
              <div className="font-semibold text-2xl">{milestone.completion}</div>
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>}
        </TableBody>
      </Table>

    </div>
  );
}
