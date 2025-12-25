"use client";

import { useEffect, useState } from "react";

export default function ComingSoonPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Agar pehle hi close kar diya ho to dobara na dikhe
    const alreadyClosed = localStorage.getItem("rankup_popup_closed");
    if (alreadyClosed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 18000); // ⏳ 18 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem("rankup_popup_closed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40">
      <div className="relative w-[92%] max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-slideUp">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute right-3 top-3 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="text-xl font-bold text-gray-900 text-center">
          🚀 RankUp App is Coming Soon!
        </h2>

        <p className="mt-3 text-sm text-gray-600 text-center">
          India’s smartest <span className="font-semibold">NEET-UG preparation app</span> is launching
          very soon on
          <br />
          <span className="font-semibold text-gray-800">
            Google Play Store & Apple App Store
          </span>
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>✅ PYQs & Smart QBank</li>
          <li>✅ AI Performance Analytics</li>
          <li>✅ Daily Smart Revision Plan</li>
          <li>✅ Full-Length NEET Test Series</li>
        </ul>

        {/* Footer */}
        <div className="mt-5 text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            ⏳ Launching Very Soon
          </span>
        </div>
      </div>
    </div>
  );
}
