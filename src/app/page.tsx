"use client";

import InvitationPage from "@/pages/InvitationPage";
import OpeningPage from "@/pages/OpeningPage";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openButton = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.6,
        onComplete: () => setIsOpen(true),
      });
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    }
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      {/* <InvitationPage/> */}
      {isOpen ? <InvitationPage /> : <OpeningPage openButton={openButton} />}
    </div>
  );
};

export default page;
