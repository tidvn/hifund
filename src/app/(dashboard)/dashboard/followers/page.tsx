import BreadCrumb from "@/components/common/breadcrumb";
import CreatorCard from "@/components/app/creator/CreatorCard";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ava1 from "@/public/images/jack.jpeg";
import ava2 from "@/public/images/ben.png";
import ava3 from "@/public/images/jone.png";
import ava4 from "@/public/images/avatar.jpg";
import cover1 from "@/public/images/cover1.png";
import cover2 from "@/public/images/cover2.jpg";
import cover3 from "@/public/images/cover3.jpg";
import cover4 from "@/public/images/cover4.webp";

const breadcrumbItems = [
  { title: "My Followers", link: "/dashboard/followers" },
];
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
          <CreatorCard isFollow={true} artistName="Jacky" concept="Singers" ava={ava1.src} cover={cover1.src} campaigns="10" funded="5" supporters="1000" />
          <CreatorCard isFollow={true} artistName="M.R.5" concept="Artist" ava={ava2.src} cover={cover2.src} campaigns="20" funded="10" supporters="200"/>
          <CreatorCard isFollow={true} artistName="Jone LCA" concept="NFT Creators" ava={ava3.src} cover={cover3.src} campaigns="15" funded="8" supporters="1801"/>
          <CreatorCard isFollow={true} artistName="Maroom 6" concept="Developer" ava={ava4.src} cover={cover4.src} campaigns="78" funded="9" supporters="812"/>
        </div>
      </div>
    </ScrollArea>
  );
}
