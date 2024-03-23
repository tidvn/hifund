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
  submitedAt?: string;
  title?: string;
  outputs?: ContraintsOutta;
  criteria?: ContraintsOutta;
  evidence?: ContraintsOutta;
  delivery?: string;
  cost?: ContraintsOutta;
  completion?: string;
}

interface ContraintsOutta {
  promise?: string[];
  result?: string[];
};
export default function MilestoneDetailsTab(props: MilestoneDetailsTabProps) {
  let { milestoneName = "0", submitedAt, title, outputs, criteria, evidence, delivery, cost, completion } = props;
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
               {submitedAt}
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Title
            </TableHead>
            <TableCell className="border border-slate-400">
              {title}
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Outputs
            </TableHead>
            <TableCell className="border border-slate-400">
               {outputs?.promise?.map((x, i) =>
                <div key={i}>{x}</div>
              )}
            </TableCell>
            <TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">{outputs?.result && outputs?.result[0]}</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-black p-3 px-5 bg-[#faf5ff] rounded-lg font-semibold">
                    <div className="text-3xl">{outputs?.result && outputs?.result[1]}</div>
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
                {
                  criteria?.promise?.map((x, i) =>
                    <li key={i}>
                      {x}
                    </li>
                  )
                }
              
              </ul>
            </TableCell>
            <TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-white p-3 px-5 bg-green-500 rounded-lg font-semibold me-3">
                    <div className="text-3xl">{criteria?.result && criteria?.result[1]}</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-black p-3 px-5 bg-[#faf5ff] rounded-lg font-semibold">
                    <div className="text-3xl">{criteria?.result && criteria?.result[1]}</div>
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
                
                {
                  evidence?.promise?.map((x, i) =>
                    <li key={i}>
                      {x}
                    </li>
                  )
                }
              </ul>
            </TableCell>
            <TableCell className="border border-slate-400">
              <div>
                <div className="flex justify-between">
                  <div className="w-1/2 text-black p-3 px-5 bg-[#faf5ff] rounded-lg font-semibold me-3">
                    <div className="text-3xl">{evidence?.result && evidence?.result[1]}</div>
                    <div>approvals</div>
                  </div>
                  <div className="w-1/2 text-white  p-3 px-5 bg-red-500 rounded-lg font-semibold">
                    <div className="text-3xl">{evidence?.result && evidence?.result[1]}</div>
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
              <div className="font-semibold text-2xl">{delivery&&delivery}</div>
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Milestone Cost
            </TableHead>
            <TableCell className="border border-slate-400">
              {
                  cost?.promise?.map((x, i) =>
                    <div key={i} className="font-semibold text-2xl">
                      {x}
                    </div>
                  )
                }
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">
              Completion
            </TableHead>
            <TableCell className="border border-slate-400">
              <div className="font-semibold text-2xl">{completion}</div>
            </TableCell>
            <TableCell className="border border-slate-400"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
