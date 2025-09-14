"use client";

import GuestBox from "@/components/GuestBox";
import { useSheet } from "@/contexts/SheetContext";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface OpeningPageProps {
  openButton: () => void;
}

const OpeningPage = ({ openButton }: OpeningPageProps) => {
  const motifRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="min-h-screen relative bg-white section opening-page">
      <div className="opening-content w-full min-h-screen">
        <img
          src="/images/motif-7.svg"
          className="absolute bottom-2 left-2 transform w-20"
        />
        <img
          src="/images/motif-7.svg"
          className="absolute bottom-2 right-2 transform w-20 transform scale-x-[-1]"
        />

        <div className="section-content">
          <img
            src={"/images/motif-9.svg"}
            className="w-50"
            alt=""
            data-aos="fade-down"
            data-aos-once="true"
          />
          <h1
            className="font-cookie text-5xl text-center main-color mt-8"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Wedding Invitation
          </h1>
          <div className="flex flex-col items-center">
            <img
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-once="true"
              src={"/images/motif-15.png"}
              className="motif-2 mt-10 mb-5 w-70 scale-infinite"
              alt=""
            />
            <h1
              className="font-lobster text-md text-center main-color"
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              Jum'at, 26 September 2025
            </h1>
          </div>
          <GuestBox />
          <button
            ref={buttonRef}
            onClick={openButton}
            className="cursor-pointer bg-yellow-700 hover:bg-yellow-800 hover:shadow-lg main-color-2 font-medium py-2 px-8 rounded-full transition"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
