import CountdownSection from "@/components/CountdownSection";
import EventSection from "@/components/EventSection";
import FooterSection from "@/components/FooterSection";
import HomeSection from "@/components/HomeSection";
import PeopleSection from "@/components/PeopleSection";
import WeddingGift from "@/components/WeddingGift";
import React from "react";

const InvitationPage = () => {
  return (
    <div>
      <HomeSection />
      <PeopleSection />
      <CountdownSection />
      <EventSection />
      <WeddingGift />
      <FooterSection />
    </div>
  );
};

export default InvitationPage;
