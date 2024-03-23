import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MilestoneDetails } from '@/types/milestones';
import { Download } from 'lucide-react';
import React from 'react'
interface MilestoneConfirmProps {
    className?: string;
    milestone: MilestoneDetails;
};
export default function MilestoneConfirm(props: MilestoneConfirmProps) {
    let { className, milestone } = props;
    return (
        <div className="p-8">
            <div className="text-2xl font-bold tracking-tight font-poppins mb-10">
                Submission for milestone {milestone.milestoneName}
            </div>
            <div className='rounded-xl p-8 bg-white border mb-6'>
                <div className='font-semibold'>Expected Output</div>
                <div>
                    {milestone.outputs?.promise?.map((x, i) =>
                        <div key={i}>{x}</div>
                    )}
                </div>
            </div>
            <div className='bg-white rounded-xl p-8 border flex flex-col items-center space-x-8'>
                <div className='flex cursor-pointer'>
                    <div className='flex items-center p-2 rounded-xl border bg-[#faf5ff] mb-3 me-3'>
                        <Download />&nbsp;
                        <div className='italic'>submited file 1.pdf</div>
                    </div>
                    <div className='flex items-center p-2 rounded-xl border bg-[#faf5ff] mb-3'>
                        <Download />&nbsp;
                        <div className='italic'>submited file 2.mp3</div>
                    </div>
                </div>
                
                <Textarea disabled value={"This is link 1: output1.com/outpu1"} className='mb-10'/>
                <Textarea placeholder='Type your feed back here' />
                <div className='flex justify-center mt-5 '>
                    <Button className="bg-green-500 me-5">Approve</Button>
                    <Button className="bg-red-500">Refuse</Button>
                </div>
            </div>
        </div>
    )
}
