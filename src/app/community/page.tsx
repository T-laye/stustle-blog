import React from "react";
import CommunityHero from "../../components/community/CommunityHero";
import HeroImage from "../../components/community/HeroImage";
import GrowthPath from "../../components/community/GrowthPath";
import StustlersReview from "../../components/community/StustlersReview";

export default function Page() {
  return (
    <div className="pt-[80px] pb-20">
      <CommunityHero />
      <HeroImage />
      <GrowthPath />
      <StustlersReview />
    </div>
  );
}
