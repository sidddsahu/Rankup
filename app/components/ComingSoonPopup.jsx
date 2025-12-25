"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoonPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); // ⏳ 20 seconds after every refresh

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="relative w-[92%] max-w-xl">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-gray-600 shadow hover:text-black"
        >
          ✕
        </button>

        {/* Banner Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/coming.png"
            alt="RankUp App Coming Soon"
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
}
