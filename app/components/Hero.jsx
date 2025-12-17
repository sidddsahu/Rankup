"use client";

import Image from "next/image";
import { FaGooglePlay, FaApple, FaStar } from "react-icons/fa";
import Script from "next/script";

export default function Hero({ playStore = "#", appStore = "#" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.rankupp.in/#org",
        "name": "RankUp",
        "url": "https://www.rankupp.in/",
        "logo": "https://www.rankupp.in/logo.webp",
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://twitter.com/yourhandle",
          "https://www.instagram.com/yourhandle"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.rankupp.in/#website",
        "url": "https://www.rankupp.in/",
        "name": "RankUp",
        "publisher": { "@id": "https://www.rankupp.in/#org" }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.rankupp.in/#app",
        "name": "RankUp — NEET-UG Preparation App",
        "applicationCategory": "Education",
        "operatingSystem": "ANDROID, iOS, Web",
        "description":
          "NEET-UG preparation app with PYQs, smart revision, mock tests and analytics.",
        "image": "https://www.rankupp.in/og-hero.webp",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      }
    ]
  };

  return (
    <>
      <header
        className="relative w-full py-16 overflow-hidden"
        role="banner"
        aria-label="RankUp hero"
      >
        {/* Background Images */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/deepak2.webp"
            alt="RankUp NEET practice preview on mobile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover md:hidden"
            fetchPriority="high"
          />

          <Image
            src="/deepak3.webp"
            alt="RankUp NEET-UG app interface preview"
            fill
            loading="lazy"
            sizes="(min-width: 769px) 50vw, 100vw"
            className="object-cover hidden md:block"
            fetchPriority="low"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6 md:px-16 pt-24 md:pt-32 text-white">
          {/* Badge */}
          <p className="text-sm uppercase tracking-wide text-purple-200 font-medium">
            Trusted by NEET Aspirants Across India 🇮🇳
          </p>

          {/* Heading */}
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Ace NEET-UG with Smart Revision 🚀
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg text-purple-200 max-w-2xl">
            PYQs • Concept-wise Practice • Smart Analytics
            <br className="hidden md:block" />
            Everything you need to boost your NEET rank faster.
          </p>

          {/* Trust */}
          <div className="flex items-center gap-3 mt-4 text-sm text-yellow-300">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            <span className="text-purple-100 ml-2">
              4.8/5 • 10,000+ Students
            </span>
          </div>

          {/* CTA */}
          <div className="flex  items-center gap-2 mt-8">
            {/* Primary CTA */}
            <a
              href={playStore}
              aria-label="Download RankUp app free"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-3  py-4 rounded-2xl font-semibold shadow-xl transition-all hover:-translate-y-1"
            >
              <FaGooglePlay className="text-xl" />
              Download FREE App
            </a>

            {/* Secondary */}
            <a
              href={appStore}
              aria-label="Download RankUp on App Store"
              className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-4 rounded-2xl hover:bg-white/20 transition-all"
            >
              <FaApple className="text-xl" />
              App Store
            </a>
          </div>

          {/* Urgency */}
          <p className="mt-6 text-sm text-purple-200">
            ⏳ NEET 2025 is approaching — start smart preparation today.
          </p>

          {/* QR (Desktop Only) */}
          {/* <div className="hidden md:flex items-center gap-4 mt-8 bg-white/10 p-4 rounded-xl w-fit">
            <Image
              src="/qr-rankup.webp"
              alt="Scan to install RankUp app"
              width={80}
              height={80}
            />
            <p className="text-sm text-purple-100">
              Scan & install the app instantly 📲
            </p>
          </div> */}
        </div>

        {/* JSON-LD */}
        <Script
          id="hero-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </header>
    </>
  );
}
