"use client";

import React, { useEffect, useState } from "react";

const CountdownSection = () => {
  const targetDate = "2025-09-26T09:00:00";
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-10 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-5 countdown-section">
        <div className="relative">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="absolute left-[-100] w-20 top-[5]"
          >
            <img
              src="/images/motif-8.svg"
              alt=""
              className="w-full scale-x-[-1]"
            />
          </div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="font-roboto-slab text-xl font-bold main-color"
          >
            MENUJU HARI BAHAGIA
          </h1>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="absolute right-[-100] w-20 top-[5]"
          >
            <img src="/images/motif-8.svg" alt="" className="w-full" />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="font-roboto-slab main-color flex gap-10 items-center justify-center"
        >
          <div className="text-center">
            <h5 className="text-2xl">{timeLeft.days}</h5>
            <h5>Hari</h5>
          </div>
          <div className="text-center">
            <h5 className="text-2xl">{timeLeft.hours}</h5>
            <h5>Jam</h5>
          </div>
          <div className="text-center">
            <h5 className="text-2xl">{timeLeft.minutes}</h5>
            <h5>Menit</h5>
          </div>
          <div className="text-center">
            <h5 className="text-2xl">{timeLeft.seconds}</h5>
            <h5>Detik</h5>
          </div>
        </div>
        <button
          data-aos="fade-up"
          data-aos-delay="200"
          className="cursor-pointer bg-white border-1 b-yellow-100 hover:shadow-lg main-color font-medium py-2 px-8 rounded-full transition"
        >
          SAVE THE DATE
        </button>
      </div>
    </div>
  );
};

export default CountdownSection;
