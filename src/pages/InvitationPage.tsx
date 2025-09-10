"use client";

import CountdownSection from "@/components/CountdownSection";
import EventSection from "@/components/EventSection";
import FooterSection from "@/components/FooterSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import PeopleSection from "@/components/PeopleSection";
import WeddingGift from "@/components/WeddingGift";
import React, { useRef } from "react";

const InvitationPage = () => {
  // refs untuk setiap section
  const homeRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const giftRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">
      {/* Sections dengan ref */}
      <div ref={homeRef}>
        <HomeSection />
      </div>
      <div ref={peopleRef}>
        <PeopleSection />
      </div>
      <div ref={dateRef}>
        <CountdownSection />
        <EventSection />
      </div>
      <div ref={giftRef}>
        <WeddingGift />
      </div>
      <div ref={noteRef}>
        <FooterSection />
      </div>

      <Navbar
        scrollToHome={() => scrollTo(homeRef)}
        scrollToPeople={() => scrollTo(peopleRef)}
        scrollToDate={() => scrollTo(dateRef)}
        scrollToGift={() => scrollTo(giftRef)}
        scrollToNote={() => scrollTo(noteRef)}
      />
    </div>
  );
};

export default InvitationPage;
