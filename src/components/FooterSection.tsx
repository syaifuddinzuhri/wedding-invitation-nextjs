import React from "react";

const FooterSection = () => {
  return (
    <div className="relative overflow-hidden main-color-2 text-center bg-color-2 flex flex-col items-center gap-5 footer-section">
      <div className="py-6 px-5">
        <img
          data-aos="zoom-in"
          data-aos-delay="2000"
          src="/images/save.png"
          className="w-70 mt-10 mx-auto mb-4"
          alt=""
        />
        <h1
          className="font-pacifico text-3xl"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          Rikha & Solihin
        </h1>
        <h1
          className="font-pacifico text-xl"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          26.09.2025
        </h1>
        <h1
          className="font-roboto-slab font-bold text-xl mt-10 mb-6"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          TERIMA KASIH
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="2000"
          className="font-roboto-slab text-sm"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
          kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>
      </div>
      <img
        src="/images/footer.png"
        alt=""
        data-aos="fade-up"
        data-aos-delay="2000"
      />
    </div>
  );
};

export default FooterSection;
