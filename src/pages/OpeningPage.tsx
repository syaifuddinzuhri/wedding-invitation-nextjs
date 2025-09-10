"use client";

import GuestBox from "@/components/GuestBox";
import LoadingPage from "@/components/LoadingPage";
import { useSheet } from "@/contexts/SheetContext";
import { useSearchParams } from "next/navigation";
import React from "react";

interface OpeningPageProps {
  openButton: () => void;
}

const OpeningPage = ({ openButton }: OpeningPageProps) => {
  const { data } = useSheet();

  const searchParams = useSearchParams();
  const guest = searchParams?.get("guest");

  const guestData = data.find(
    (g) => g.name.toLowerCase() === guest?.toLowerCase()
  );

  if (!data || data.length === 0) {
    return <></>;
  }

  if (!guestData) {
    return <></>;
  }

  return (
    <div className="min-h-screen relative bg-white section opening-page">
      <div className="opening-content">
        <img src={"/images/motif-3.webp"} className="motif-1" alt="" />
        <div className="section-content">
          <img src={"/images/motif-9.svg"} className="" alt="" />
          <h1 className="font-cookie text-5xl text-center main-color">
            Wedding Invitation
          </h1>
          <h1 className="font-lobster text-3xl text-center main-color">
            Rikha & Solihin
          </h1>
          <div className="flex flex-col items-center">
            <img
              src={"/images/motif-4.png"}
              className="motif-2 mt-10 mb-10"
              alt=""
            />
            <h1 className="font-lobster text-md text-center main-color">
              Jum'at, 26 September 2025
            </h1>
          </div>
          {guestData && <GuestBox guest={guestData} />}
          <button
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
