"use client";

import { useEffect, useState } from 'react';
import { useStaticPages } from '/hooks/useStaticPages';
import Head from 'next/head';

// Fallback content for contact page agar API mein na ho
const fallbackContactContent = {
  contact: {
    title: "Contact Us",
    content: `
      <h2>Get in Touch with RankUp</h2>
      <p>We're here to help you with any questions about our NEET-UG preparation platform. Reach out to us through any of the following channels:</p>

      <h3>📧 Email Support</h3>

      <p><strong>Technical Support:</strong> support@rankupp.in</p>
     

      <h3>📞 Phone Support</h3>
      <p><strong>Mobile:</strong> +91-7389338475</p>

      <p><i>Available Monday to Friday, 9:00 AM - 6:00 PM IST</i></p>

      <h3>🏢 Office Address</h3>
      <p>RankUp Education Platform<br>
      DR. L C CHOURASIYA KE PICHE,<br> SHANTI NAGAR COLONY, <br>SAGAR ROAD
CHHATARPUR,
<br>

    </p>

      <h3>🕒 Business Hours</h3>
      <ul>
        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
        <li>Saturday: 10:00 AM - 4:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>

      <div class="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 class="text-blue-800 font-semibold">Quick Response Guarantee</h4>
        <p class="text-blue-700">We respond to all emails within 24 hours and urgent queries within 4 hours during business days.</p>
      </div>
    `,
    metaTitle: "Contact Us - RankUp NEET-UG Preparation",
    metaDesc: "Get in touch with RankUp support team for technical help, billing queries, and partnership opportunities."
  }
};

export default function StaticPageLayout({ slug, pageTitle }) {
  const { currentPage, loading, error, getStaticPage, clearCurrentPage } = useStaticPages();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    getStaticPage(slug);

    return () => {
      clearCurrentPage();
    };
  }, [slug, getStaticPage, clearCurrentPage]);

  // Use fallback content for contact page if API fails
  const displayPage = error && slug === 'contact' ? fallbackContactContent.contact : currentPage;

  // Function to clean and format HTML content
  const formatContent = (content) => {
    if (!content) return '';

    let formattedContent = content
      .replace(/<p>&lt;(.*?)&gt;/g, '<$1>')
      .replace(/&lt;\/(.*?)&gt;<\/p>/g, '</$1>')
      .replace(/&lt;(.*?)&gt;/g, '<$1>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    return formattedContent;
  };

  // Get appropriate icon for each page
  const getPageIcon = () => {
    const icons = {
      terms: '📝',
      privacy: '🔒',
      about: '🏢',
      refund: '💳',
      contact: '📞'
    };
    return icons[slug] || '📄';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A5F] mx-auto"></div>
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
            <div className="text-red-600 bg-red-50 p-6 rounded-lg">
              <p className="text-lg mb-4">Error loading page: {error}</p>
              <button
                onClick={() => getStaticPage(slug)}
                className="px-6 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{displayPage?.metaTitle || pageTitle}</title>
        <meta
          name="description"
          content={displayPage?.metaDesc || `Read our ${pageTitle} for RankUp NEET-UG preparation platform.`}
        />
        <meta name="keywords" content={`RankUp, NEET-UG, ${pageTitle}, preparation`} />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen mt-12  bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E3A5F] rounded-full mb-4">
              <span className="text-2xl text-white font-bold">
                {getPageIcon()}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              {displayPage?.title || pageTitle}
            </h1>
            {displayPage?.updatedAt && (
              <p className="text-gray-600 text-lg">
                Last updated: {new Date(displayPage.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <article
                className="prose prose-lg max-w-none
                          prose-headings:text-[#1E3A5F] prose-headings:font-bold
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
                dangerouslySetInnerHTML={{
                  __html: displayPage ? formatContent(displayPage.content) :
                  `<p>Content loading...</p>`
                }}
              />
            </div>

            {/* Footer - Only show for API pages, not fallback */}
            {displayPage?.version && (
              <div className="bg-gray-50 px-8 py-6 border-t">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-600 text-sm">
                    Version {displayPage?.version || '1.0'} • Published by {displayPage?.publishedBy || 'System'}
                  </p>
                  <div className="mt-4 md:mt-0 flex gap-4">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      ✅ Published
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      📄 {displayPage?.slug?.toUpperCase() || 'PAGE'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Fallback notice for contact page */}
            {error && slug === 'contact' && (
              <div className="bg-yellow-50 px-8 py-4 border-t border-yellow-200">
                <p className="text-yellow-700 text-sm text-center">
                  📝 Showing default contact information. For the most updated details, please check our app.
                </p>
              </div>
            )}
          </div>

          {/* Additional Contact Form for Contact Page */}
          {slug === 'contact' && (
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 text-center">Send us a Message</h2>
              <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all">
                      <option>Select a subject</option>
                      <option>Technical Support</option>
                      <option>Billing Inquiry</option>
                      <option>Feature Request</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all resize-vertical"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1E3A5F] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#2c4d75] transition-all duration-300"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] transition-all duration-300 hover:shadow-lg"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}