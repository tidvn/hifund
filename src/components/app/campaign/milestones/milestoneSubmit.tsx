import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MilestoneDetails } from '@/types/milestones';
import React from 'react'
interface MilestoneSubmitProps {
    className?: string;
    milestone: MilestoneDetails;
};
export default function MilestoneSubmit(props: MilestoneSubmitProps) {
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
                <Input type="file" className='w-72 mb-5'/>
                <Textarea placeholder="Type your text here." />
                <Button className="mt-5">Submit this miletone</Button>
            </div>
        </div>
    )
}
