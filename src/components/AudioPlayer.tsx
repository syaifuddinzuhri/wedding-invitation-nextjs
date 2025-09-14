"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay diblokir browser:", err);
        setIsPlaying(false); // kalau gagal, set ke paused
      });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" />

      <div className="fixed bottom-4 right-[-20%] z-50">
        <div className="relative flex items-center justify-center">
          <div
            className={`absolute w-8 h-8 rounded-full border-2 border-transparent border-t-yellow-500 ${
              isPlaying && "animate-spin"
            }`}
            style={{ animationDuration: "3s" }}
          />

          <button
            onClick={togglePlay}
            className="relative z-10 p-2 rounded-full bg-yellow-800 text-white hover:bg-yellow-700 shadow-lg transition"
          >
            {isPlaying ? <FaPause size={6} /> : <FaPlay size={6} />}
          </button>
        </div>
      </div>
    </>
  );
}
