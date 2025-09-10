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
      className="h-screen py-10 relative px-5 flex flex-col justify-center items-center gap-5 home-section"
    >
      <img
        src={"/images/motif-6.svg"}
        className="absolute top-2 left-2 w-30 transform scale-x-[-1] scale-y-[-1]"
        alt=""
      />
      <img
        src={"/images/motif-6.svg"}
        className="absolute top-2 right-2 w-30 transform scale-y-[-1]"
        alt=""
      />
      <img
        src={"/images/motif-6.svg"}
        className="absolute bottom-2 left-2 w-30 transform scale-x-[-1] "
        alt=""
      />
      <img
        src={"/images/motif-6.svg"}
        className="absolute bottom-2 right-2 w-30 transform "
        alt=""
      />
      <h3 className="text-2xl main-color font-italiana font-bold text-center">
        The Wedding Of
      </h3>
      <img
        src={"/images/motif-15.png"}
        className="w-80 my-16 scale-infinite"
        alt=""
      />

      <div>
        <p className="font-roboto-slab text-center text-sm main-color">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>
        <p className="font-roboto-slab text-center mt-3 font-bold text-sm main-color">
          Ar-Rum:21
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
