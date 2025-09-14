"use client";

import React, { useState } from "react";
import GreetingForm from "./GreetingForm";
import ReplyList from "./ReplyList";

const ListOfGreetingSection = () => {
  const [refresh, setRefresh] = useState(false);

  // callback untuk trigger refresh
  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="py-20">
      <h1
        className="font-bold mb-5 text-2xl main-color text-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Kirimkan Ucapan & Doa Restu
      </h1>
      <p
        className="text-center text-xs main-color"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Tinggalkan pesan manis, doa, atau harapan terbaikmu untuk perjalanan
        cinta kami.
      </p>

      <GreetingForm onSubmitSuccess={handleRefresh} />
      <ReplyList refresh={refresh} />
    </div>
  );
};

export default ListOfGreetingSection;
