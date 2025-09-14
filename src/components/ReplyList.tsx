"use client";
import React, { useEffect, useState } from "react";
import HorizontalLine from "./HorizontalLine";
import { Greeting } from "@/types/sheet";
import { CgComment } from "react-icons/cg";
import { GiOppositeHearts } from "react-icons/gi";

interface ReplyListProps {
  refresh?: boolean; // trigger refetch
}

const ITEMS_PER_PAGE = 5;

const ReplyList: React.FC<ReplyListProps> = ({ refresh }) => {
  const [greetings, setGreetings] = useState<Greeting[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGreetings = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/greetings");
        const json = await res.json();
        const data: Greeting[] = json.data;
        data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setGreetings(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchGreetings();
  }, [refresh]);

  const totalPages = Math.ceil(greetings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = greetings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mt-10">
      {loading ? (
        <p className="text-center text-gray-500 py-5">Loading...</p>
      ) : currentItems.length === 0 ? (
        <></>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-800 text-xs mb-5">
            <GiOppositeHearts />
            <p>{greetings.length} Ucapan</p>
          </div>
          {currentItems.map((g) => (
            <div
              key={g.id}
              className="rounded-md p-3 pt-0 border border-transparent border-b-gray-200"
            >
              <div className="flex gap-2">
                <div className="pt-1">
                  <CgComment className="main-color" />
                </div>
                <div>
                  <p className="font-bold text-sm main-color">{g.name}</p>
                  <p className="text-gray-700 mt-1 text-xs">{g.comment}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {g.type === "hadir" ? "Hadir" : "Tidak Hadir"} •{" "}
                    {new Date(g.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-5">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReplyList;
