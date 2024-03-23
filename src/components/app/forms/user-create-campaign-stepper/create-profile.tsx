"use client";
import MilestoneCreateTab from "@/components/app/campaign/milestones/milestoneCreate";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { profileSchema, type ProfileFormValues } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/app/tabs/tab";

interface ProfileFormType {
  initialData: any | null;
  categories: any;
}

export const CreateCampaignOne: React.FC<ProfileFormType> = ({
  initialData,
}) => {
  const [loading, setLoading] = useState(false);
  const title = "Create Your Campaign";
  const description =
    "To create your resume, we first need some information about your campaign.";
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const [milestones, setMilestones] = useState([
    { value: "m1", name: "Milestone 1" },
  ]);

  const addMilestone = () => {
    const newMilestone = {
      value: `m${milestones.length + 1}`,
      name: `Milestone ${milestones.length + 1}`,
    };
    setMilestones([...milestones, newMilestone]);
  };

  const defaultValues = {
    jobs: [
      {
        jobtitle: "",
        employer: "",
        startdate: "",
        enddate: "",
        jobcountry: "",
        jobcity: "",
      },
    ],
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    control,
    formState: { errors },
  } = form;

  const steps = [
    {
      id: "Step 1",
      name: "Introduction about your campaign",
    },
    {
      id: "Step 2",
      name: "Milestones Settings",
    },
    { id: "Step 3", name: "Complete" },
  ];

  const next = async () => {
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <div>
        <ul className="flex gap-4">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex h-full w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <Form {...form}>
        <form className="space-y-8 w-full bg-[#faf5ff] p-8 rounded-lg">
          <div className={"md:inline-block w-full"}>
            {currentStep === 0 && (
              <div className="space-y-10">
                <FormItem>
                  <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                    Campaign Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your Campaign"
                      className="bg-white"
                    />
                  </FormControl>
                </FormItem>
                <div className="grid gap-5 grid-cols-2">
                  <FormItem>
                    <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                      [GENERAL] Name and surname of main applicant
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Creator Name"
                        className="bg-white"
                      />
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                      Total funds request
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="SOL"
                        className="bg-white"
                      />
                    </FormControl>
                  </FormItem>
                </div>
                <FormItem>
                  <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                    [GENERAL] Are you delivering this project as an individual
                    or as an entity (whether formally incorporated or not)
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your Campaign"
                      className="bg-white"
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                    [GENERAL] Please specify how many months you expect your
                    project to last (from 1-5 weeks)
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="From 1-5 weeks"
                      className="bg-white"
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                    [GENERAL] Summarize your solution to the problem
                    (200-character limit including spaces)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="200-character limit including spaces"
                      className="bg-white"
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                    [SOLUTION] Please describe your proposed solution.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="200-character limit including spaces"
                      className="bg-white"
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-xl font-semibold tracking-tight font-poppins">
                    [CAPABILITY & FEASIBILITY]What is your capability to deliver
                    your project with high levels of trust and accountability?
                    How do you intend to validate if your approach is feasible?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="200-character limit including spaces"
                      className="bg-white"
                    />
                  </FormControl>
                </FormItem>
              </div>
            )}
            {currentStep === 1 && (
              <>
                <Tabs
                  defaultValue="m1"
                  className="w-full bg-[#faf5ff] p-4 rounded-lg"
                >
                  <TabsList className="">
                    {milestones.map((milestone) => (
                      <TabsTrigger
                        key={milestone.value}
                        value={milestone.value}
                      >
                        {milestone.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {milestones.map((milestone) => (
                    <TabsContent key={milestone.value} value={milestone.value}>
                      <MilestoneCreateTab milestoneName={milestone.name} />
                    </TabsContent>
                  ))}
                </Tabs>
                <div className="flex justify-center mt-4">
                  <Button
                    type="button"
                    className="flex justify-center"
                    size={"lg"}
                    onClick={addMilestone}
                  >
                    Add Milestone
                  </Button>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <div>
                <h1>Completed</h1>
                <div className="flex items-center space-x-2 my-5">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
                <Button>
                  <Link href="/dashboard/campaign/mycampaign">
                    Submit Campaign
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button> */}
        </form>
      </Form>
      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
