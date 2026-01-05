"use client";

import { useEffect, useState } from "react";

export default function RequestCallbackPopup() {
  // 🔹 Popup control
  const [showPopup, setShowPopup] = useState(false);

  // 🔹 Form state (SAME AS CONTACT FORM)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ⏱️ Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 BACKEND CONNECTED (SAME API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://api.rankupp.in/api/v1/support/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!data.status) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccessMsg(data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // ✅ Auto close popup after success
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // ❌ Popup hidden
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative">

        {/* ❌ Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-[#1E3A5F] text-white text-center py-5 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📞 Request Call Back</h2>
          <p className="text-sm opacity-90 mt-1">
            Our NEET expert will call you shortly
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {successMsg && (
            <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
              ✅ {successMsg}
            </p>
          )}

          {errorMsg && (
            <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
              ❌ {errorMsg}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            />

            <select
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            >
              <option value="">Select Subject</option>
              <option>Enquiry</option>
              <option>NEET Guidance</option>
              <option>Technical Support</option>
              <option>Billing Inquiry</option>
              <option>Other</option>
            </select>

            <textarea
              rows="4"
              placeholder="Message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#1E3A5F] text-white py-3 rounded-lg font-semibold hover:bg-[#2c4d75]"
            >
              {submitting ? "Requesting..." : "Request Call Back"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
