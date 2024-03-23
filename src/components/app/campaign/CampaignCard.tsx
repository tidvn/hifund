import React from "react";

import "./CampaignCard.css";
import Link from "next/link";

import usdc from "@/public/images/usdc1.png";
import { CampaignPreview } from "@/types/campaign";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ava from "@/public/images/MTP.jpg";
interface CampaignCardProps {
  className?: string;
  campain: CampaignPreview;
  url?:string;
};
export default function CampaignCard(props: CampaignCardProps) {
  let {url="/dashboard/campaign/1", campain, className } = props;
  return (
    <div
      data-project={113224}
      data-funding-id={1100041}
      className={`sc-8745d327-1 sc-9feed45b-1 cAaXhS jUKeQF ${className}`}
    >
      <div draggable="false" className="sc-9feed45b-0 ikUwhB">
        <div className="sc-8745d327-12 XqVBZ">HiFund Concept: {campain.concept}</div>
        <div data-title-container="true" className="sc-8745d327-3 kUvQUd">
          <h2 className="sc-8745d327-0 hlLPhh">{campain.name}</h2>
          <div className="sc-8745d327-6 sc-9feed45b-6 gFXFOC jijtLa">
            <div
              role="cell"
              aria-label="Budget"
              className="sc-8745d327-7 jBemPS flex items-center"
            >
              <img src={usdc.src} alt="" className="w-7 h-7" />
              &nbsp;
              {campain.budget}

            </div>
            <div className="sc-8745d327-9 hHNegW">Budget</div>
          </div>
        </div>
        <div
          id=":Rs5a93l6:"
          aria-hidden="true"
          role="region"
          aria-label="Content detail"
          className="sc-82034fa5-1 cIrbgb"
          style={{ height: "4.375rem" }}
        >
          <div className="sc-82034fa5-2 ezfdOw" />
          <p className="sc-8745d327-10 KRXNV">
            {campain.desc}
          </p>
        </div>
        <button
          aria-controls=":Rs5a93l6:"
          aria-label="Read more detail"
          aria-expanded="false"
          className="sc-82034fa5-0 fXppRt"
        >
          <svg
            data-icon="true"
            width={8}
            height={12}
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-1c34d5df-0 ekOQFM sc-82034fa5-3 ilMIKY"
          >
            <path
              d="M0.294921 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 -6.1633e-08L0.294921 1.41Z"
              fill="currentColor"
            />
          </svg>
          {/* */}
          <Link href={url}>Read more detail </Link>
        </button>
        <hr className="sc-8745d327-11 jfVDXW" />
        <div className="flex justify-between items-center">
          <dl className="sc-9feed45b-3 etjhPf">
            <span className="sc-9feed45b-2 kNCPhJ">Supports{/* */}:</span>
            <dl className="sc-9feed45b-3 etjhPf">
              <dt aria-label="Votes yes" className="sc-9feed45b-4 hLyWJG">
                Funded
              </dt>
              <dd className="sc-9feed45b-5 bFwqPl flex items-center">
                <img src={usdc.src} alt="" className="w-4 h-4" />
                &nbsp;
                {campain.funded}
              </dd>
            </dl>
          </dl>
          <Avatar className="h-8 w-8 rounded-full border border-black">
            <AvatarImage src={campain.ava} alt={""} />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
