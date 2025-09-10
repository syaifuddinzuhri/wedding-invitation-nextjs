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

  useEffect(() => {
    if (motifRef.current && buttonRef.current) {
      gsap.timeline().from(buttonRef.current, {
        opacity: 0,
        y: 200,
        duration: 4,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative bg-white section opening-page">
      <div className="opening-content">
        <img
          src="/images/motif-3.webp"
          className="motif-1 absolute bottom-0"
          ref={motifRef}
        />

        <div className="section-content">
          <img
            src={"/images/motif-9.svg"}
            className=""
            alt=""
            data-aos="fade-down"
            data-aos-once="true"
          />
          <h1
            className="font-cookie text-5xl text-center main-color"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Wedding Invitation
          </h1>
          <h1
            className="font-lobster text-3xl text-center main-color"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-once="true"
          >
            Rikha & Solihin
          </h1>
          <div className="flex flex-col items-center">
            <img
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-once="true"
              src={"/images/motif-4.png"}
              className="motif-2 mt-10 mb-10"
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
