import React from "react";

const PeopleSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-color-2 p-5 flex flex-col justify-center items-center gap-5 people-section">
      <div className="relative h-full w-full bg-color rounded-xl relative p-8 bg-white flex flex-col justify-around items-center text-center">
        <div className="flex flex-col items-center gap-5">
          <h5
            className="mt-10 font-lobster main-color text-xs"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Assalaamu'alaikum Warahmatullaahi Wabarakaatuh
          </h5>
          {/* <img
            src="/images/bismillah.png"
            className="w-50"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="200"
          /> */}
          <p
            data-aos="zoom-in"
            data-aos-delay="300"
            className="font-roboto-slab main-color text-xs"
          >
            Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
            serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>
        </div>

        <div className="pt-10">
          {/* <p
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-pacifico main-color text-3xl font-medium mb-4"
          >
            Rikha
          </p> */}
          <div
            className="overflow-hidden rounded-full w-40 h-60 border-3 border-yellow-700 mx-auto mb-4 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="/images/female.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <p
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-pacifico main-color text-2xl font-medium"
          >
            Roikhatul Jannah
          </p>
          <p
            className="font-roboto-slab main-color text-xs"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Putri dari Bapak M. Ilyas dan Ibu Kholishotin
          </p>
          <p
            className="font-roboto-slab main-color text-xs"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Talang, Watuagung, Prigen
          </p>
        </div>

        <img
          src="/images/and.png"
          width={40}
          className="my-10"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="300"
        />

        <div className="pb-10">
          {/* <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="font-pacifico main-color text-3xl font-medium mb-4"
          >
            Solihin
          </p> */}
          <div
            className="overflow-hidden rounded-full w-40 h-60 border-3 border-yellow-700 mx-auto mb-4 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src="/images/male.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="font-pacifico main-color text-2xl font-medium"
          >
            Muhammad Solihin
          </p>
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="font-roboto-slab main-color text-xs"
          >
            Putra dari Bapak Kasuwi dan Ibu Tarinah
          </p>
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="font-roboto-slab main-color text-xs"
          >
            Karang Panas, Dayurejo, Prigen
          </p>
        </div>

        <div data-aos="fade-right" className="absolute bottom-0 left-0 w-[20%]">
          <img
            src="/images/motif-12.svg"
            alt=""
            className="w-full scale-x-[-1]"
          />
        </div>

        <div data-aos="fade-left" className="absolute bottom-0 right-0 w-[20%]">
          <img src="/images/motif-12.svg" alt="" className="w-full" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="absolute top-2 left-0 w-[20%]"
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
          className="absolute top-2 right-0 w-[20%]"
        >
          <img src="/images/motif-16.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
