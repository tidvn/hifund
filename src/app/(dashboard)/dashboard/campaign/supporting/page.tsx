import BreadCrumb from "@/components/common/breadcrumb";
import CampaignCard from "@/components/app/campaign/CampaignCard";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CampaignPreview } from "@/types/campaign";
import ava1 from "@/public/images/MTP.jpg";
import ava2 from "@/public/images/ben.png";
import ava3 from "@/public/images/jone.png";
import ava4 from "@/public/images/avatar.jpg";
const breadcrumbItems = [
  { title: "My Supporting Campaigns", link: "/dashboard/campaign/supporting" },
];
const campaignCard:CampaignPreview[]=[
  {
    concept:"Singes",
    name:"Chung Ta Cua Tuong Lai",
    budget:"400",
    desc:"A song recorded by Vietnamese singer and songwriter Son Tung M-TP in his debut studio EP, Us (2020). The song was recorded by Son Tung M-TP composed and performed, released in 2024 as a follow-up single to the EP after more than 3 years of absence.",
    funded:"250",
    ava:ava1.src
  },
  {
    concept:"Artist",
    name:"NFT Hat's Cat",
    budget:"300",
    desc:"It's time to VOTE for your favorite paintings. Please note that there are TWO albums for you to cast your votes in. Both of the albums are linked below. Voting ends 3/27/24 8:00 pm eastern standard time. Vote for as many as you would like. GOOD LUCK Everyone!",
    funded:"100",
    ava:ava2.src
  },
  {
    concept:"Actors",
    name:"A part of Picture",
    budget:"250",
    desc:"Congrats to all of the winners from the fun filled evening of ART GAMES!  Art Game Night Video now available from last night's fun!  You can check it out here",
    funded:"90",
    ava:ava3.src
  },
  {
    concept:"Dancer",
    name:"Sun in the space",
    budget:"100",
    desc:"Load up on your art supplies with these EXTREME spring sale prices here!  Discounts will appear at time of check out in your cart.",
    funded:"80",
    ava:ava4.src
  },
  {
    concept:"Titok",
    name:"Mar in universe",
    budget:"150",
    desc:"This is definitely a little under-produced by my recent standards. Could use a couple more drafts and a more creative set/wardrobe (you’ll recognize the top I auditioned in our most recent livestream lol)",
    funded:"170",
    ava:ava2.src
  },
  {
    concept:"Album",
    name:"Candy candy",
    budget:"90",
    desc:"Ten weeks ago I started work on a video I wanted to call  I did a couple years",
    funded:"10",
    ava:ava3.src
  }
];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-center justify-between">
          <Heading
            title={"My Supporting Campaigns"}
            description={"My supporting campaigns I am following"}
          />
        </div>
        <Separator />
        <div className="mt-10 flex justify-between flex-wrap">
        <CampaignCard className="mb-6" campain={campaignCard[3]}/>
            <CampaignCard className="mb-6" campain={campaignCard[2]} url="/dashboard/campaign/supporting/1"/>
            <CampaignCard className="mb-6" campain={campaignCard[4]} url="/dashboard/campaign/supporting/1"/>
            <CampaignCard className="mb-6" campain={campaignCard[1]} url="/dashboard/campaign/supporting/1"/>
            <CampaignCard className="mb-6" campain={campaignCard[5]} url="/dashboard/campaign/supporting/1"/>
            <CampaignCard className="mb-6" campain={campaignCard[0]} url="/dashboard/campaign/supporting/1"/>
        </div>
      </div>
    </ScrollArea>
  );
}
