import BreadCrumb from "@/components/breadcrumb";
import CampaignCard from "@/components/campaign/CampaignCard";
import CreatorCard from "@/components/creator/CreatorCard";
import { CreateCampaignOne } from "@/components/forms/user-create-campaign-stepper/create-profile";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
const breadcrumbItems = [{ title: "My Followers", link: "/dashboard/followers" }];
export default function page() {
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-center justify-between">
                    <Heading title={"My Followers"} description={"I am following"} />
                </div>
                <Separator />
                <div className="mt-10 flex justify-between flex-wrap">
                    <CreatorCard isFollow={true}/>
                    <CreatorCard isFollow={true}/>
                    <CreatorCard isFollow={true}/>
                    <CreatorCard isFollow={true}/>
                </div>
            </div>
        </ScrollArea>
    );
}
