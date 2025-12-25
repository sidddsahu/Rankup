"use client";

import { useEffect, useState } from 'react';
import { useStaticPages } from '/hooks/useStaticPages';
import Head from 'next/head';

const fallbackContactContent = {
  contact: {
    title: "Contact Us",
    content: `
      <h2>Get in Touch with RankUp</h2>
      <p>We're here to help you with any questions about our NEET-UG preparation platform.</p>
      <div class="flex justify-between flex-wrap">
          <div>
        <h3>📧 Email Support</h3>
      <p><strong>support@rankupp.in</strong></p>
      </div>

<div>
  <h3>📞 Phone</h3>
      <p><strong>+91-7389338475</strong></p>
</div>
      </div>


    `,
    metaTitle: "Contact Us - RankUp",
    metaDesc: "Contact RankUp support team."
  }
};

export default function StaticPageLayout({ slug, pageTitle }) {
  const { currentPage, loading, error, getStaticPage, clearCurrentPage } = useStaticPages();
  const [mounted, setMounted] = useState(false);

  // 🔹 Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setMounted(true);
    getStaticPage(slug);
    return () => clearCurrentPage();
  }, [slug]);

  const displayPage =
    error && slug === 'contact'
      ? fallbackContactContent.contact
      : currentPage;

  const formatContent = (content) => {
    if (!content) return '';
    return content
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };

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

  // 🔥 CONTACT FORM SUBMIT (API CONNECTED)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch(
        'https://rankup-api-temp.onrender.com/api/v1/support/send-message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!data.status) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMsg(data.message);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{displayPage?.metaTitle || pageTitle}</title>
        <meta
          name="description"
          content={displayPage?.metaDesc || pageTitle}
        />
      </Head>

      <div className="min-h-screen mt-12 bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-2xl">
              {getPageIcon()}
            </div>
            <h1 className="text-4xl font-bold text-[#1E3A5F] mt-4">
              {displayPage?.title || pageTitle}
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <article
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: formatContent(displayPage?.content),
              }}
            />
          </div>

          {/* 🔥 CONTACT FORM */}
          {slug === 'contact' && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">
                Send us a Message
              </h2>

              {successMsg && (
                <p className="bg-green-100 text-green-700 p-3 rounded mb-4">
                  ✅ {successMsg}
                </p>
              )}

              {errorMsg && (
                <p className="bg-red-100 text-red-700 p-3 rounded mb-4">
                  ❌ {errorMsg}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border p-3 rounded"
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border p-3 rounded"
                />

                <select
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full border p-3 rounded"
                >
                  <option value="">Select Subject</option>
                  <option>Technical Support</option>
                  <option>Billing Inquiry</option>
                  <option>Feature Request</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border p-3 rounded"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1E3A5F] text-white py-3 rounded hover:bg-[#2c4d75]"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
