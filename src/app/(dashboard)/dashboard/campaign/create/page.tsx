import BreadCrumb from "@/components/common/breadcrumb";
import { CreateCampaignOne } from "@/components/app/forms/user-create-campaign-stepper/create-profile";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [
  { title: "Create Campaign", link: "/dashboard/campaign/create" },
];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <CreateCampaignOne categories={[]} initialData={null} />
      </div>
    </ScrollArea>
  );
}
