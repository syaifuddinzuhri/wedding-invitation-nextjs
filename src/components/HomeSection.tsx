import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HomeSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".fade-up"), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen py-10 relative px-5 flex flex-col justify-center items-center gap-5 home-section"
    >
      <img
        data-aos="zoom-in"
        data-aos-delay="200"
        src={"/images/motif-6.svg"}
        className="absolute top-2 left-2 w-20 transform scale-x-[-1] scale-y-[-1]"
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="200"
        src={"/images/motif-6.svg"}
        className="absolute top-2 right-2 w-20 transform scale-y-[-1]"
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="200"
        src={"/images/motif-6.svg"}
        className="absolute bottom-2 left-2 w-20 transform scale-x-[-1] "
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="200"
        src={"/images/motif-6.svg"}
        className="absolute bottom-2 right-2 w-20 transform "
        alt=""
      />

      <div className="my-10"></div>
      <h3
        className="text-2xl main-color font-italiana font-bold text-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        The Wedding Of
      </h3>
      <div className="w-60" data-aos="zoom-in" data-aos-delay="200">
        <img
          src="/images/pengantin2.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />
      </div>

      <p
        data-aos="zoom-in"
        data-aos-delay="100"
        className="font-pacifico main-color text-2xl font-medium"
      >
        Rikha & Solihin
      </p>

      <div
        className="py-10 px-5 flex flex-col justify-center items-center"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <p className="font-roboto-slab text-center text-xs main-color">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>
        <p className="font-roboto-slab text-center mt-3 font-bold text-xs main-color">
          Ar-Rum:21
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
