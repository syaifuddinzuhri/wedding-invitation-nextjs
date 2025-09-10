"use client";

import InvitationPage from "@/pages/InvitationPage";
import OpeningPage from "@/pages/OpeningPage";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openButton = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      // Smooth scroll ke top viewport
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      {isOpen ? <InvitationPage /> : <OpeningPage openButton={openButton} />}
    </div>
  );
};

export default page;
