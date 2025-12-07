"use client";

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useStaticPages } from '/hooks/useStaticPages';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

// Fallback content for contact page agar API mein na ho
const fallbackContactContent = {
  contact: {
    title: "Contact Us - RankUp NEET-UG Preparation Platform",
    content: `
      <h1>Get in Touch with RankUp</h1>
      <p>We're here to help you with any questions about our NEET-UG preparation platform. Reach out to us through any of the following channels:</p>

      <h2>Email Support</h2>
      <p><strong>Technical Support:</strong> <a href="mailto:support@rankupp.in" aria-label="Email technical support">support@rankupp.in</a></p>

      <h2>Phone Support</h2>
      <p><strong>Mobile:</strong> <a href="tel:+917389338475" aria-label="Call RankUp support">+91-7389338475</a></p>
      <p><em>Available Monday to Friday, 9:00 AM - 6:00 PM IST</em></p>

      <h2>Office Address</h2>
      <address>
        RankUp Education Platform<br>
        DR. L C CHOURASIYA KE PICHE,<br>
        SHANTI NAGAR COLONY, <br>
        SAGAR ROAD CHHATARPUR,<br>
        Madhya Pradesh, India
      </address>

      <h2>Business Hours</h2>
      <ul>
        <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
        <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
        <li><strong>Sunday:</strong> Closed</li>
      </ul>

      <div class="bg-blue-50 p-4 rounded-lg mt-6">
        <h3 class="text-blue-800 font-semibold">Quick Response Guarantee</h3>
        <p class="text-blue-700">We respond to all emails within 24 hours and urgent queries within 4 hours during business days.</p>
      </div>
    `,
    metaTitle: "Contact Us - RankUp NEET-UG Preparation Platform | Support & Assistance",
    metaDesc: "Contact RankUp for NEET-UG preparation support. Get technical help, billing assistance, and partnership opportunities. Email: support@rankupp.in, Phone: +91-7389338475.",
    canonicalUrl: "/contact",
    openGraph: {
      title: "Contact RankUp NEET-UG Preparation Support",
      description: "Reach out to RankUp for expert NEET-UG preparation assistance and support",
      type: "website",
      url: "/contact",
      siteName: "RankUp NEET-UG Preparation"
    }
  }
};

// JSON-LD Schema for Contact Page
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RankUp NEET-UG Preparation Platform",
  "url": "https://rankupp.in",
  "logo": "https://rankupp.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7389338475",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "DR. L C CHOURASIYA KE PICHE, SHANTI NAGAR COLONY, SAGAR ROAD",
    "addressLocality": "Chhatarpur",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "471001",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://facebook.com/rankup",
    "https://twitter.com/rankup",
    "https://linkedin.com/company/rankup"
  ]
};

export default function StaticPageLayout({ slug, pageTitle }) {
  const router = useRouter();
  const { currentPage, loading, error, getStaticPage, clearCurrentPage } = useStaticPages();
  const [mounted, setMounted] = useState(false);

  // Use useCallback for stable function references
  const handleGetStaticPage = useCallback(() => {
    getStaticPage(slug);
  }, [getStaticPage, slug]);

  const handleClearCurrentPage = useCallback(() => {
    clearCurrentPage();
  }, [clearCurrentPage]);

  useEffect(() => {
    setMounted(true);
    handleGetStaticPage();

    return () => {
      handleClearCurrentPage();
    };
  }, [slug, handleGetStaticPage, handleClearCurrentPage]);

  // Determine which content to display
  const displayPage = useMemo(() => {
    if (error && slug === 'contact') {
      return fallbackContactContent.contact;
    }
    return currentPage;
  }, [error, slug, currentPage]);

  // Get full canonical URL
  const getCanonicalUrl = useMemo(() => {
    const baseUrl = 'https://rankupp.in';
    const path = displayPage?.canonicalUrl || `/${slug}`;
    return `${baseUrl}${path}`;
  }, [slug, displayPage]);

  // Generate structured breadcrumb data
  const breadcrumbSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rankupp.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle,
        "item": getCanonicalUrl
      }
    ]
  }), [pageTitle, getCanonicalUrl]);

  // Function to clean and format HTML content with semantic improvements
  const formatContent = useCallback((content) => {
    if (!content) return '';

    let formattedContent = content
      .replace(/<p>&lt;(.*?)&gt;/g, '<$1>')
      .replace(/&lt;\/(.*?)&gt;<\/p>/g, '</$1>')
      .replace(/&lt;(.*?)&gt;/g, '<$1>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    // Add semantic improvements
    formattedContent = formattedContent
      .replace(/<h1>/g, '<h1 itemprop="headline">')
      .replace(/<p>/g, '<p itemprop="text">')
      .replace(/<img/g, '<img loading="lazy"')
      .replace(/<a href=/g, '<a rel="noopener noreferrer" href=');

    return formattedContent;
  }, []);

  // Get appropriate icon and structured data for each page
  const getPageMetaData = useCallback(() => {
    const metaData = {
      terms: {
        icon: '📝',
        schemaType: 'Legislation',
        description: 'Terms and Conditions for RankUp NEET-UG Preparation Platform'
      },
      privacy: {
        icon: '🔒',
        schemaType: 'PrivacyPolicy',
        description: 'Privacy Policy for RankUp NEET-UG student data protection'
      },
      about: {
        icon: '🏢',
        schemaType: 'AboutPage',
        description: 'About RankUp - Leading NEET-UG Preparation Platform'
      },
      refund: {
        icon: '💳',
        schemaType: 'Offer',
        description: 'Refund Policy for RankUp NEET-UG courses and subscriptions'
      },
      contact: {
        icon: '📞',
        schemaType: 'ContactPage',
        description: 'Contact RankUp for NEET-UG preparation support'
      }
    };
    return metaData[slug] || { icon: '📄', schemaType: 'WebPage', description: pageTitle };
  }, [slug, pageTitle]);

  const pageMeta = getPageMetaData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A5F] mx-auto"
                 role="status"
                 aria-label="Loading">
              <span className="sr-only">Loading {pageTitle}...</span>
            </div>
            <p className="text-gray-600 mt-4">Loading {pageTitle}...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && slug !== 'contact') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-4">{pageTitle}</h1>
            <div className="text-red-600 bg-red-50 p-6 rounded-lg" role="alert">
              <p className="text-lg mb-4">Error loading page: {error}</p>
              <button
                onClick={handleGetStaticPage}
                className="px-6 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:ring-offset-2"
                aria-label="Try loading page again"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Generate meta keywords based on page content
  const generateMetaKeywords = useMemo(() => {
    const baseKeywords = ['RankUp', 'NEET-UG', 'Medical Entrance', 'Preparation', 'MBBS'];
    const pageSpecific = {
      terms: ['Terms', 'Conditions', 'Agreement', 'Legal'],
      privacy: ['Privacy', 'Data Protection', 'Security', 'GDPR'],
      about: ['About Us', 'Company', 'Mission', 'Vision'],
      refund: ['Refund', 'Cancellation', 'Money Back', 'Policy'],
      contact: ['Contact', 'Support', 'Help', 'Customer Service']
    };

    return [...baseKeywords, ...(pageSpecific[slug] || []), pageTitle].join(', ');
  }, [slug, pageTitle]);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title itemProp="name">{displayPage?.metaTitle || `${pageTitle} - RankUp NEET-UG Preparation`}</title>
        <meta
          name="description"
          content={displayPage?.metaDesc || `Read our ${pageTitle} for RankUp NEET-UG preparation platform. ${pageMeta.description}`}
          itemProp="description"
        />

        {/* Keywords */}
        <meta name="keywords" content={generateMetaKeywords} />

        {/* Canonical URL */}
        <link rel="canonical" href={getCanonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getCanonicalUrl} />
        <meta
          property="og:title"
          content={displayPage?.openGraph?.title || displayPage?.metaTitle || `${pageTitle} - RankUp NEET-UG`}
        />
        <meta
          property="og:description"
          content={displayPage?.openGraph?.description || displayPage?.metaDesc || `RankUp NEET-UG ${pageTitle}`}
        />
        <meta property="og:site_name" content="RankUp NEET-UG Preparation" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={displayPage?.updatedAt || new Date().toISOString()} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rankup" />
        <meta name="twitter:creator" content="@rankup" />
        <meta
          name="twitter:title"
          content={displayPage?.metaTitle || `${pageTitle} - RankUp NEET-UG`}
        />
        <meta
          name="twitter:description"
          content={displayPage?.metaDesc || `RankUp NEET-UG ${pageTitle}`}
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="RankUp Education" />
        <meta name="copyright" content={`Copyright © ${new Date().getFullYear()} RankUp`} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": pageMeta.schemaType,
              "headline": displayPage?.title || pageTitle,
              "description": displayPage?.metaDesc || pageMeta.description,
              "url": getCanonicalUrl,
              "datePublished": displayPage?.createdAt || new Date().toISOString(),
              "dateModified": displayPage?.updatedAt || new Date().toISOString(),
              "author": {
                "@type": "Organization",
                "name": "RankUp Education",
                "url": "https://rankupp.in"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RankUp",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://rankupp.in/logo.png",
                  "width": 512,
                  "height": 512
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": getCanonicalUrl
              },
              ...(slug === 'contact' ? contactSchema : {})
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      <main
        className="min-h-screen mt-12 bg-gradient-to-br from-blue-50 to-indigo-100 py-12"
        itemScope
        itemType={`https://schema.org/${pageMeta.schemaType}`}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center text-sm text-gray-600">
              <li className="inline-flex items-center">
                <a href="/" className="hover:text-[#1E3A5F] transition-colors" aria-label="Go to homepage">
                  Home
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="inline-flex items-center" aria-current="page">
                <span className="text-[#1E3A5F] font-semibold">{pageTitle}</span>
              </li>
            </ol>
          </nav>

          {/* Header Section */}
          <header className="text-center mb-12">
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-[#1E3A5F] rounded-full mb-4"
              aria-hidden="true"
            >
              <span className="text-2xl text-white font-bold">
                {pageMeta.icon}
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              itemProp="headline"
            >
              {displayPage?.title || pageTitle}
            </h1>
            {displayPage?.updatedAt && (
              <time
                dateTime={displayPage.updatedAt}
                className="text-gray-600 text-lg"
                itemProp="dateModified"
              >
                Last updated: {new Date(displayPage.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </header>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <article
                className="prose prose-lg max-w-none
                          prose-headings:text-[#1E3A5F] prose-headings:font-bold
                          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                          prose-p:text-gray-700 prose-p:leading-relaxed
                          prose-strong:text-[#1E3A5F] prose-strong:font-bold
                          prose-ul:text-gray-700 prose-ol:text-gray-700
                          prose-li:text-gray-700 prose-li:my-2
                          prose-blockquote:border-l-[#1E3A5F] prose-blockquote:bg-blue-50
                          prose-blockquote:px-6 prose-blockquote:py-4
                          prose-a:text-[#1E3A5F] prose-a:underline hover:prose-a:text-[#2c4d75]
                          prose-table:border-collapse prose-table:w-full
                          prose-th:bg-[#1E3A5F] prose-th:text-white prose-th:p-3
                          prose-td:border prose-td:p-3 prose-td:text-gray-700
                          prose-img:rounded-lg prose-img:shadow-md"
                itemProp="articleBody"
                dangerouslySetInnerHTML={{
                  __html: displayPage ? formatContent(displayPage.content) :
                  `<p>Content loading...</p>`
                }}
              />
            </div>

            {/* Page Metadata */}
            {displayPage?.version && (
              <footer className="bg-gray-50 px-8 py-6 border-t">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-600 text-sm">
                    <span itemProp="version">Version {displayPage?.version || '1.0'}</span>
                    <span className="mx-2">•</span>
                    <span itemProp="publisher">Published by {displayPage?.publishedBy || 'RankUp System'}</span>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-4">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full" aria-label="Published status">
                      ✅ Published
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" aria-label="Page type">
                      📄 {displayPage?.slug?.toUpperCase() || 'PAGE'}
                    </span>
                  </div>
                </div>
              </footer>
            )}

            {/* Fallback notice for contact page */}
            {error && slug === 'contact' && (
              <div className="bg-yellow-50 px-8 py-4 border-t border-yellow-200" role="note">
                <p className="text-yellow-700 text-sm text-center">
                  📝 Showing default contact information. For the most updated details, please check our app.
                </p>
              </div>
            )}
          </div>

          {/* Additional Contact Form for Contact Page */}
          {slug === 'contact' && (
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8" itemScope itemType="https://schema.org/ContactPage">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 text-center">Send us a Message</h2>
              <div className="max-w-2xl mx-auto">
                <form
                  className="space-y-6"
                  action="/api/contact"
                  method="POST"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/ContactForm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all"
                        placeholder="Enter your name"
                        required
                        aria-required="true"
                        itemProp="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                        required
                        aria-required="true"
                        itemProp="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all"
                      required
                      aria-required="true"
                      itemProp="description"
                    >
                      <option value="">Select a subject</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Billing Inquiry">Billing Inquiry</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all resize-vertical"
                      placeholder="How can we help you?"
                      required
                      aria-required="true"
                      itemProp="text"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1E3A5F] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#2c4d75] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:ring-offset-2"
                    aria-label="Send message to RankUp"
                    itemProp="potentialAction"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:ring-offset-2"
              aria-label="Go back to homepage"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}