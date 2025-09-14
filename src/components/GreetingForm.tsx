"use client";

import React, { useState } from "react";
import { GiOppositeHearts } from "react-icons/gi";
import HorizontalLine from "./HorizontalLine";
import { Greeting } from "@/types/sheet";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

interface GreetingFormProps {
  onSubmitSuccess?: () => void;
}

const GreetingForm: React.FC<GreetingFormProps> = ({ onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [type, setType] = useState<"hadir" | "tidak_hadir" | "">("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !comment || !type) {
      toast.error("Mohon isi semua field!", {
        autoClose: 2000,
        hideProgressBar: true,
        position: "top-right",
        theme: "colored",
      });
      return;
    }

    const newGreeting: Greeting = {
      id: uuidv4(),
      name,
      comment,
      type: type as "hadir" | "tidak_hadir",
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      const res = await fetch("/api/greetings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGreeting),
      });

      const data = await res.json();
      toast.success("Ucapan berhasil dikirim!", {
        autoClose: 1500,
        hideProgressBar: true,
        position: "top-right",
        theme: "colored",
      });

      setName("");
      setComment("");
      setType("");

      onSubmitSuccess?.();
    } catch (err) {
      toast.error("Gagal mengirim ucapan!", {
        autoClose: 2000,
        hideProgressBar: true,
        position: "top-right",
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10" data-aos="zoom-in" data-aos-delay="200">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="w-full bg-white rounded-md py-2 px-3 text-sm border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
            placeholder="Masukkan Nama Kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <textarea
            rows={3}
            className="w-full bg-white rounded-md py-2 px-3 text-sm border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
            placeholder="Masukkan Ucapan dan Doa"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <select
            className="w-full bg-white rounded-md py-2 px-3 text-sm border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
            value={type}
            onChange={(e) => setType(e.target.value as "hadir" | "tidak_hadir")}
          >
            <option value="" disabled>
              Konfirmasi Kehadiran
            </option>
            <option value="hadir">Hadir</option>
            <option value="tidak_hadir">Tidak Hadir</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-color-2 main-color-2 border-1 b-white shadow-lg font-medium text-sm py-2 px-8 rounded-full transition float-end disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : "Kirim"}
        </button>
      </form>
    </div>
  );
};

export default GreetingForm;
