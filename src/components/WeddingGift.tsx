import React from "react";
import { toast } from "react-toastify";

const WeddingGift = () => {
  async function handleCopy(text: string) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      toast("Berhasil disalin!", {
        autoClose: 1000,
        hideProgressBar: true,
        position: "top-right",
        theme: "colored",
      });
    } catch (err) {
    } finally {
    }
  }

  return (
    <div className="font-roboto-slab py-10 px-5 flex flex-col justify-center items-center gap-5 home-section">
      <img
        src="/images/motif-9.svg"
        className="w-30"
        alt=""
        data-aos="fade-down"
        data-aos-delay="200"
      />
      <h1
        className="font-bold text-2xl main-color"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        WEDDING GIFT
      </h1>
      <p
        className="text-center text-sm main-color"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </p>
      <div
        className="rounded-xl overflow-hidden shadow-lg relative"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        <img src="/images/bri.png" alt="" />
        <button
          onClick={() => handleCopy("227101004787508")}
          className="absolute bottom-[20] text-gray-700 left-[30] cursor-pointer bg-white border-1 b-gray-100 hover:shadow-lg font-medium text-sm py-1 px-4 rounded-full transition"
        >
          Salin
        </button>
      </div>
      <div
        className="rounded-xl overflow-hidden shadow-lg relative"
        data-aos="fade-left"
        data-aos-delay="1600"
      >
        <img src="/images/spay.png" alt="" />
        <button
          onClick={() => handleCopy("085646272106")}
          className="absolute bottom-[20] text-gray-700 left-[30] cursor-pointer bg-white border-1 b-gray-100 hover:shadow-lg font-medium text-sm py-1 px-4 rounded-full transition"
        >
          Salin
        </button>
      </div>
    </div>
  );
};

export default WeddingGift;
