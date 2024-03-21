import BreadCrumb from "@/components/breadcrumb";
import { CreateProfileOne } from "@/components/forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/components/ui/scroll-area";
import cover from '@/public/images/MTP2.png'
import ava from '@/public/images/MTP.jpg'
import { FaLink } from "react-icons/fa6";
import { GrStakeholder } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs/tab"
import CampaignCard from "@/components/campaign/CampaignCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile/myprofile" }];

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="profile-page ">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${cover.src})`
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative pt-20 bg-gray-200">
          <div className="container mx-auto px-10">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={ava.src}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20  max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link href="/dashboard/campaign/create">
                        <Button className="w-fit">
                          <PenSquare size={"1.2em"} />&nbsp;
                          Create Campaign
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                          22
                        </span>
                        <span className="text-sm text-gray-400">Campaigns</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                          10
                        </span>
                        <span className="text-sm text-gray-400">Funded&nbsp;Campaigns</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                          89
                        </span>
                        <span className="text-sm text-gray-400">Supporters</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-3xl font-semibold leading-normal mb-2 text-gray-700">
                    Son Tung MTP
                  </h3>
                  <div className="items-center flex justify-center text-sm leading-normal mt-0 mb-2 text-gray-400 ">
                    <FaLink size={"1.2em"} />&nbsp;
                    hifund.com/sontungmtp
                  </div>
                  <div className="flex justify-center items-center  mb-2 text-gray-600 mt-10">
                    <GrStakeholder size={"1.2em"} />&nbsp;&nbsp;
                    <div className="">My Pool: addr_test1qzegp84qufks983xnfczplquh...</div>
                  </div>
                  <div className="flex justify-center items-center mb-2 text-gray-600 ">
                    <MdOutlineAccountBalanceWallet size={"1.2em"} />&nbsp;&nbsp;
                    <div className="">My Wallet Address: addr_test1qzegp84qufks983xnfczplquhz8l4elzwh...</div>
                  </div>
                </div>
                <div className=" py-5">
                  <div className="flex flex-wrap justify-center">
                    <Tabs defaultValue="myCampaigns" className="w-full">
                      <TabsList className="justify-center">
                        <TabsTrigger value="home">Home</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="myCampaigns">My Campaigns</TabsTrigger>
                        <TabsTrigger value="mySupportingCampaigns">My Supporting Campaigns</TabsTrigger>
                      </TabsList>
                      <TabsContent value="home" className="flex justify-center">
                        <div className="w-1/2">Feed here</div>
                      </TabsContent>
                      <TabsContent value="about" className="flex justify-center">
                        <div className=" w-1/2">
                          <div>Artist name: Son Tung MTP</div>
                          <div>Artist name: Son Tung MTP</div>
                          <div>Artist name: Son Tung MTP</div>
                        </div>
                      </TabsContent>
                      <TabsContent value="myCampaigns">
                        <div className="mt-10 flex justify-between flex-wrap">
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                        </div>
                      </TabsContent>
                      <TabsContent value="mySupportingCampaigns">
                        <div className="mt-10 flex justify-between flex-wrap">
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                          <CampaignCard className="mb-6" />
                        </div>
                      </TabsContent>
                    </Tabs>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-gray-200 pt-1 pb-6 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-gray-500 font-semibold py-1">
                    @Copyright{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-gray-500 hover:text-gray-800"
                      target="_blank"
                    >
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-gray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      {" "}
                      HiFund Dev Team
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </ScrollArea>
  );
}
