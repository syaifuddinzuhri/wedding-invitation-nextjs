import React from "react";

const EventSection = () => {
  return (
    <div className="relative overflow-hidden bg-color-2 p-5 flex flex-col items-center gap-5 event-section">
      <div className="w-full p-6 bg-color rounded-xl text-center relative overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="absolute top-2 left-0 w-[30%]"
        >
          <img
            src="/images/motif-16.png"
            alt=""
            className="w-full scale-x-[-1]"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="absolute top-2 right-0 w-[30%]"
        >
          <img src="/images/motif-16.png" alt="" className="w-full" />
        </div>
        <h1
          className="font-pacifico text-3xl text-gray-800"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Akad Nikah
        </h1>
        <div
          className="font-roboto-slab main-color flex flex-col gap-1 my-3"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="text-xl">Jum'at</h1>
          <h1 className="text-5xl font-bold">26</h1>
          <h1 className="text-xl">September 2025</h1>
        </div>
        <h1
          className="font-roboto-slab text-sm text-gray-800"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Pukul: 09.00 s/d Selesai
        </h1>
      </div>
      <div className="w-full p-6 bg-color rounded-xl text-center relative overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="absolute top-2 left-0 w-[30%]"
        >
          <img
            src="/images/motif-16.png"
            alt=""
            className="w-full scale-x-[-1]"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="absolute top-2 right-0 w-[30%]"
        >
          <img src="/images/motif-16.png" alt="" className="w-full" />
        </div>
        <h1
          className="font-pacifico text-3xl text-gray-800"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Resepsi
        </h1>
        <div
          className="font-roboto-slab main-color flex flex-col gap-1 my-3"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="text-xl">Jum'at</h1>
          <h1 className="text-5xl font-bold">26</h1>
          <h1 className="text-xl">September 2025</h1>
        </div>
        <h1
          className="font-roboto-slab text-sm text-gray-800"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Pukul: 14.00 s/d Selesai
        </h1>
      </div>
      <div className="mt-5 main-color-2 text-center font-roboto-slab">
        <h1
          className="font-bold text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          SCAN LOKASI
        </h1>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src="/images/qr.png"
          className="mx-auto w-60 rounded-xl my-8"
          alt=""
        />
        <h1
          className="font-roboto-slab text-md"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Dusun Talang RT 02 RW 06 Desa Watuagung <br />
          Kec. Prigen Kab. Pasuruan
        </h1>
      </div>
      <a
        data-aos="fade-up"
        data-aos-delay="200"
        href="https://maps.app.goo.gl/BvkxEdWZHjki14bL8"
        target="_blank"
        className="cursor-pointer bg-white border-1 b-yellow-100 hover:shadow-lg main-color font-medium py-2 px-8 rounded-full transition"
      >
        Buka Maps
      </a>
    </div>
  );
};

export default EventSection;
