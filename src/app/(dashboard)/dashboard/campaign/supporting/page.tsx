import BreadCrumb from "@/components/breadcrumb";
import CampaignCard from "@/components/campaign/CampaignCard";
import { CreateCampaignOne } from "@/components/forms/user-create-campaign-stepper/create-profile";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
const breadcrumbItems = [{ title: "My Supporting Campaigns", link: "/dashboard/campaign/supporting" }];
export default function page() {
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-center justify-between">
                    <Heading title={"My Supporting Campaigns"} description={"My supporting campaigns I am following"} />
                </div>
                <Separator />
                <div className="mt-10 flex justify-between flex-wrap">
                    <CampaignCard className="mb-6" />
                    <CampaignCard className="mb-6" />
                    <CampaignCard className="mb-6" />
                    <CampaignCard className="mb-6" />
                    <CampaignCard className="mb-6" />
                    <CampaignCard className="mb-6" />
                </div>
            </div>
        </ScrollArea>
    );
}
