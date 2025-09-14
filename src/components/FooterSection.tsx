import React from "react";

const FooterSection = () => {
  return (
    <div className="relative overflow-hidden main-color-2 text-center bg-color-2 flex flex-col items-center gap-5 footer-section">
      <div className="py-6 px-5">
        <div className="relative mt-5" data-aos="zoom-in" data-aos-delay="500">
          <img
            src="/images/pengantin2.png"
            alt=""
            className="w-60 mx-auto h-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <img
            src="/images/save.png"
            className="w-30 absolute bottom-5 left-1/2 transform -translate-x-1/2 scale-infinite"
            alt=""
          />
        </div>

        <h1
          className="font-pacifico text-3xl mt-8"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Rikha & Solihin
        </h1>
        <h1
          className="font-pacifico text-xl"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          26.09.2025
        </h1>

        <h1
          className="font-roboto-slab font-bold text-xl mt-10 mb-6"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          TERIMA KASIH
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="font-roboto-slab text-xs"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
          kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <h5 className="mt-10 font-lobster text-xs" data-aos="zoom-in">
          Wassalaamu'alaikum Warahmatullaahi Wabarakaatuh
        </h5>
      </div>
      <img src="/images/footer.png" alt="" className="scale-infinite" />
    </div>
  );
};

export default FooterSection;
