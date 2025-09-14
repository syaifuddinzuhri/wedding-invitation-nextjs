import React from "react";
import {
  MdCardGiftcard,
  MdDateRange,
  MdHome,
  MdNoteAlt,
  MdPeopleAlt,
} from "react-icons/md";
import AudioPlayer from "./AudioPlayer";

interface NavbarProps {
  scrollToHome: () => void;
  scrollToPeople: () => void;
  scrollToDate: () => void;
  scrollToGift: () => void;
  scrollToNote: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToPeople,
  scrollToDate,
  scrollToGift,
  scrollToNote,
}) => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 border border-yellow-800 px-6 py-3 bg-white/30 backdrop-blur-sm rounded-full shadow-lg z-50">
      <div className="flex gap-3 justify-center">
        <button
          className="cursor-pointer bg-yellow-800 p-2 rounded-md text-white hover:shadow-lg transition"
          onClick={scrollToHome}
        >
          <MdHome />
        </button>
        <button
          className="cursor-pointer bg-yellow-800 p-2 rounded-md text-white hover:shadow-lg transition"
          onClick={scrollToPeople}
        >
          <MdPeopleAlt />
        </button>
        <button
          className="cursor-pointer bg-yellow-800 p-2 rounded-md text-white hover:shadow-lg transition"
          onClick={scrollToDate}
        >
          <MdDateRange />
        </button>
        <button
          className="cursor-pointer bg-yellow-800 p-2 rounded-md text-white hover:shadow-lg transition"
          onClick={scrollToGift}
        >
          <MdCardGiftcard />
        </button>
        <button
          className="cursor-pointer bg-yellow-800 p-2 rounded-md text-white hover:shadow-lg transition"
          onClick={scrollToNote}
        >
          <MdNoteAlt />
        </button>

        <AudioPlayer />
      </div>
    </div>
  );
};

export default Navbar;
