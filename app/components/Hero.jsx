"use client";

import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
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
        // NOTE: use optimized logo (webp/svg) in production
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
        "publisher": { "@id": "https://www.rankupp.in/#org" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.rankupp.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.rankupp.in/#app",
        "name": "RankUp — NEET-UG Preparation App",
        "url": "https://www.rankupp.in/",
        "applicationCategory": "Education",
        "operatingSystem": "ANDROID, iOS, Web",
        "description":
          "NEET-UG preparation app with flashcards, QBank, mock tests and AI analytics.",
        // use optimized hero social image (AVIF/WebP)
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
        className="relative w-full h-[520px] md:h-[640px] py-8 overflow-hidden"
        role="banner"
        aria-label="RankUp hero"
      >
        {/* Background wrapper - Image fill requires parent position relative */}
        <div className="absolute inset-0 -z-10">
          {/*
            -- Mobile LCP image: priority (this is the image Lighthouse flagged)
            -- Provide sizes so Next chooses smaller images on small viewports
          */}
          <Image
            src="/deepak2.webp"               // replace with deepak2.webp after conversion
            alt="RankUp mobile NEET practice preview"
            fill
            priority                       // ONLY the LCP image gets priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover md:hidden"
            // for additional hint to browser - next/image forwards attributes, but this is safe
            fetchPriority="high"
          />

          {/* Desktop/large view image - lazy (non-blocking) */}
          <Image
            src="/deepak3.webp"               // replace with deepak3.webp after conversion
            alt="RankUp NEET-UG preparation interface preview"
            fill
            loading="lazy"                  // do not block initial paint on mobile
            sizes="(min-width: 769px) 50vw, 100vw"
            className="object-cover hidden md:block"
            // lower priority for browser
            fetchPriority="low"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.65)] to-transparent -z-5"
          aria-hidden="true"
        />

        {/* Main Content */}
        <div className="relative z-10 py-20 md:py-32 px-6 md:px-16 text-white max-w-4xl">
          <p
            className="text-sm uppercase tracking-wide text-purple-200 font-medium"
            aria-hidden
          >
            New: NEET-UG focused — curated question banks
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            RankUp — Ace NEET-UG with Smart Revision
          </h1>

          <p className="mt-4 text-lg text-purple-200 max-w-xl">
            Subject-wise practice, active-recall flashcards, and analytics to
            boost your NEET-UG rank faster.
          </p>

          {/* Buttons */}
          <nav
            aria-label="Download RankUp app"
            className="flex items-center max-w-3xl mt-4 gap-6"
          >
            <a
              href={playStore}
              rel="noopener noreferrer"
              aria-label="Get RankUp on Google Play"
              className="group flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-2 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <FaGooglePlay
                className="text-white text-2xl group-hover:scale-110 transition"
                aria-hidden
              />
              <div>
                <p className="text-xs text-blue-100">GET IT ON</p>
                <p className="text-white font-semibold text-sm md:text-lg">
                  Google Play
                </p>
              </div>
            </a>

            <a
              href={appStore}
              rel="noopener noreferrer"
              aria-label="Download RankUp on App Store"
              className="group flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <FaApple
                className="text-white text-2xl group-hover:scale-110 transition"
                aria-hidden
              />
              <div>
                <p className="text-xs text-blue-100">Download on the</p>
                <p className="text-white font-semibold text-sm md:text-lg">
                  App Store
                </p>
              </div>
            </a>
          </nav>
        </div>

        {/* JSON-LD SEO (non-blocking) */}
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
