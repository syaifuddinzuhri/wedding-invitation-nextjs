"use client";
import { useSheet } from "@/contexts/SheetContext";
import { Guest } from "@/types/sheet";
import { useSearchParams } from "next/navigation";
import React from "react";

const GuestBox = () => {
  const { data } = useSheet();

  const searchParams = useSearchParams();
  const guest = searchParams?.get("guest");

  const guestData = data.find(
    (g) => g.name.toLowerCase() === guest?.toLowerCase()
  );

  if (!guestData) return null;

  return (
    <div className="w-80 my-6 px-6">
      <p className="text-center mb-2 text-xs">Kepada Yth.</p>
      <div className="border border-yellow-800 rounded-lg py-4 px-6 text-center border-3 bg-box">
        <h5 className="font-bold">{guestData?.name}</h5>
        <div className="h-[20]"></div>
        <p>{guestData?.address}</p>
      </div>
    </div>
  );
};

export default GuestBox;
