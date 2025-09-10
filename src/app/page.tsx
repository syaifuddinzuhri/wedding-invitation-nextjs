"use client";

import InvitationPage from "@/pages/InvitationPage";
import OpeningPage from "@/pages/OpeningPage";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fade, setFade] = useState<boolean>(false);

  const openButton = () => {
    // Mulai animasi fade out
    setFade(true);
    setTimeout(() => {
      setIsOpen(true); // Tampilkan InvitationPage
      setFade(false); // Fade in
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas
    }, 300); // durasi fade out 300ms
  };

  return (
    <div
      className={`transition-opacity duration-300 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {isOpen ? <InvitationPage /> : <OpeningPage openButton={openButton} />}
    </div>
  );
};

export default Page;
