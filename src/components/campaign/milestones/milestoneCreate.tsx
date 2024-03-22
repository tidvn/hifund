import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
interface MilestoneDetailsTabProps{
  milestoneName?:string;
};

export default function MilestoneCreateTab(props: MilestoneDetailsTabProps) {
  let{milestoneName="0"} = props;
  return (
    <div className='p-8'>
      <div className="text-2xl font-bold tracking-tight font-poppins ">Milestone {milestoneName}</div>
      <div>Latest submission of the Milestone {milestoneName}.</div>
      <Table className='mt-10 border-collapse  border border-slate-400 rounded-lg bg-white '>
        <TableBody>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">Milestone Title</TableHead >
            <TableCell className='border border-slate-400'><Input type="text" placeholder="Milestone Title" /></TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">Milestone Outputs</TableHead >
            <TableCell className='border border-slate-400'>
                <Textarea placeholder="Type your Outputs of this Milestone." />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">Acceptance criteria</TableHead >
            <TableCell className='border border-slate-400'>
                <Textarea placeholder="Type your Acceptance criteria of this Milestone." />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">Evidence of milestone completion</TableHead >
            <TableCell className='border border-slate-400'>
                <Textarea placeholder="Type your Evidence of milestone completion" /> 
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">Delivery Week</TableHead >
            <TableCell className='border border-slate-400'>
                <Input type="date" placeholder="Delivery At" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-black font-semibold border border-slate-400">Milestone Cost</TableHead >
            <TableCell className='border border-slate-400'>
                <Input type="text" placeholder="%" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
