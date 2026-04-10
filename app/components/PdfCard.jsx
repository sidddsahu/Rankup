"use client";

import { useState, useEffect } from "react";

export default function PdfCard({ chapter }) {
  const [opened, setOpened] = useState(false);

  // 🔹 CHECK LOCAL VIEW STATUS
  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("viewedPdfs")) || [];
    if (viewed.includes(chapter.name)) {
      setOpened(true);
    }
  }, [chapter.name]);

  // 🔹 HANDLE VIEW (FREE PDF)
  const handleOpen = async () => {
    const viewed = JSON.parse(localStorage.getItem("viewedPdfs")) || [];

    if (!viewed.includes(chapter.name)) {
      const updated = [...viewed, chapter.name];
      localStorage.setItem("viewedPdfs", JSON.stringify(updated));
    }

    setOpened(true);

    // 🔥 OPTIONAL: BACKEND TRACKING
    try {
      await fetch("/api/track", {
        method: "POST",
        body: JSON.stringify({
          chapter: chapter.name,
          action: "view",
        }),
      });
    } catch (e) {
      console.log("Tracking failed");
    }

    // OPEN PDF
    window.open(chapter.pdf, "_blank");
  };

  // 🔹 HANDLE DOWNLOAD
  const handleDownload = async () => {
    try {
      await fetch("/api/track", {
        method: "POST",
        body: JSON.stringify({
          chapter: chapter.name,
          action: "download",
        }),
      });
    } catch (e) {
      console.log("Download tracking failed");
    }
  };

  return (
    <div className="bg-[#f5f9ff] p-6 rounded-xl shadow hover:shadow-xl transition relative">

      {/* 🔥 BADGE */}
      <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
        FREE
      </span>

      <h4 className="font-semibold text-lg">{chapter.name}</h4>

      <p className="text-sm text-gray-500 mt-1">
        📄 {chapter.questions} Questions
      </p>

      {/* 🔥 VALUE LINE */}
      <p className="text-xs text-gray-400 mt-1">
        PDF contains selected PYQs for quick revision
      </p>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleOpen}
          className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg text-sm hover:bg-[#16324a]"
        >
          View PDF
        </button>

        <a
          href={chapter.pdf}
          download
          onClick={handleDownload}
          className="px-4 py-2 border border-[#1E3A5F] text-[#1E3A5F] rounded-lg text-sm hover:bg-[#1E3A5F] hover:text-white"
        >
          Download
        </a>
      </div>

      {/* ✅ VIEWED STATUS */}
      {opened && (
        <p className="text-green-600 text-xs mt-3">✔ Viewed</p>
      )}

      {/* 🔥 APP FUNNEL (MAIN CONVERSION PART) */}
      <div className="mt-5 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm font-semibold">
          🔒 Unlock Full Chapter Questions
        </p>

        <p className="text-xs text-gray-600 mt-1">
          Get complete {chapter.questions}+ PYQs with solutions, mock tests &
          performance tracking inside the RankUp App.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=yourapp"
          target="_blank"
          className="inline-block mt-3 px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700"
        >
          Download App 🚀
        </a>
      </div>
    </div>
  );
}