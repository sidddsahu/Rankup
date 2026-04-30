"use client";

import { useState } from "react";
import pyqData from "../data/pyqData";
import PdfCard from "../components/PdfCard";

export default function PyqClient() {
  const [activeSubject, setActiveSubject] = useState("Biology");
  const [search, setSearch] = useState("");

  const current = pyqData.find(
    (s) => s.subject === activeSubject
  );

  const filteredChapters = current.chapters.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto px-6">

      {/* SUBJECT TABS */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {pyqData.map((s) => (
          <button
            key={s.subject}
            onClick={() => setActiveSubject(s.subject)}
            className={`px-6 py-2 rounded-full border ${
              activeSubject === s.subject
                ? "bg-[#1E3A5F] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {s.subject}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search chapter..."
        className="w-full p-3 border rounded-lg mb-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CHAPTER GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredChapters.length > 0 ? (
          filteredChapters.map((chapter, i) => (
            <PdfCard key={i} chapter={chapter} />
          ))
        ) : (
          <p>No chapters found</p>
        )}
      </div>

    </section>
  );
}