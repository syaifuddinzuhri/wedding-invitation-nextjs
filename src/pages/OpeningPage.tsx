"use client";

import GuestBox from "@/components/GuestBox";
import LoadingPage from "@/components/LoadingPage";
import { useSheet } from "@/contexts/SheetContext";
import { useSearchParams } from "next/navigation";
import React from "react";

const OpeningPage = () => {
  const { data } = useSheet();

  const searchParams = useSearchParams();
  const guest = searchParams?.get("guest");

  const guestData = data.find(
    (g) => g.name.toLowerCase() === guest?.toLowerCase()
  );

  if (!data || data.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen relative bg-white section opening-page">
      <div className="opening-content">
        <img src={"/images/motif-3.webp"} className="motif-1" alt="" />
        <div className="section-content mt-8">
          <img src={"/images/motif-9.svg"} className="" alt="" />
          <h1 className="font-cookie text-5xl text-center main-color">
            Wedding Invitation
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
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;

{
  /* <h1 className="font-cookie text-4xl">Wedding Invitation</h1>
      <h1 className="font-imperial text-4xl">Save the Date</h1>
      <h1 className="font-lobster text-4xl">Roikhatul Jannah</h1>
      <h1 className="font-lobster text-4xl">Muhammad Solihin</h1> */
}
