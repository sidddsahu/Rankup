import Faq from "../components/Faq";

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/faqs`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'FAQs - RankUp NEET-UG | Frequently Asked Questions & Answers',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Find answers to all your questions about RankUp NEET-UG preparation platform. Comprehensive FAQ covering subscriptions, features, technical support, and study guidance.',

  // Keywords
  keywords: [
    'NEET UG FAQs',
    'RankUp frequently asked questions',
    'NEET preparation queries',
    'medical coaching FAQ',
    'RankUp platform questions',
    'NEET study doubts',
    'educational platform FAQ',
    'RankUp subscription questions',
    'NEET coaching support',
    'study app queries'
  ],

  // Canonical URL
  alternates: {
    canonical: canonicalUrl,
    languages: {
      'en-US': canonicalUrl,
    },
  },

  // Open Graph for Social Media
  openGraph: {
    title: 'FAQs - RankUp NEET-UG Frequently Asked Questions',
    description: 'Get answers to all your questions about RankUp NEET-UG preparation platform, features, pricing, and study methods.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-faqs.jpg`,
        width: 1200,
        height: 630,
        alt: 'RankUp FAQs - Frequently Asked Questions for NEET-UG Preparation',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs - RankUp NEET-UG Frequently Asked Questions',
    description: 'Comprehensive FAQ for RankUp NEET-UG preparation platform with answers to common queries',
    site: '@rankup_neet',
    creator: '@rankup_neet',
    images: [`${baseUrl}/twitter-faqs.jpg`],
  },

  // Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Authors and Copyright
  authors: [
    {
      name: 'RankUp Support Team',
      url: 'https://rankupp.in',
    },
  ],

  // Manifest and Theme Color
  manifest: '/manifest.json',
  themeColor: '#1E3A5F',

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },

  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  // Other Meta
  category: 'Education Support',
  classification: 'Educational FAQ & Help Center',
  abstract: 'Frequently Asked Questions for RankUp NEET-UG preparation platform covering all aspects of the platform and NEET preparation.',
  subject: 'NEET UG FAQs, Educational Queries, Platform Support',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '7 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp FAQs',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/faqs',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/faqs',
    },
    web: {
      url: 'https://rankupp.in/faqs',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // FAQ Schema
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faqpage`,
          "name": "Frequently Asked Questions - RankUp NEET-UG",
          "description": "Complete FAQ for RankUp NEET-UG preparation platform with answers to common queries",
          "url": canonicalUrl,
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is RankUp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RankUp is India's modern NEET-UG preparation platform offering AI-powered flashcards, smart revision, daily capsules, performance analytics, and personalized study guidance."
              }
            },
            {
              "@type": "Question",
              "name": "Is RankUp free or paid?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RankUp offers both free features and premium plans. You can use basic features for free, and upgrade anytime for full access to tests, QBank, flashcards, and analytics."
              }
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "name": "FAQs - RankUp NEET-UG Preparation",
          "description": "Frequently Asked Questions page for RankUp NEET-UG preparation platform",
          "url": canonicalUrl,
          "breadcrumb": {
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
                "name": "FAQs",
                "item": canonicalUrl
              }
            ]
          }
        }
      ]
    }),

    // Twitter specific
    'twitter:label1': 'Questions Answered',
    'twitter:data1': '50+',
    'twitter:label2': 'Response Time',
    'twitter:data2': '24 Hours',
    'twitter:label3': 'Support Available',
    'twitter:data3': '24/7 Email',
  },
};

// FAQPage Schema
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does RankUp help with NEET UG preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RankUp provides comprehensive NEET UG preparation through AI-powered flashcards, smart revision algorithms, daily study capsules, performance analytics, mock tests, and personalized study plans designed by medical toppers."
      }
    },
    {
      "@type": "Question",
      "name": "What makes RankUp different from other NEET coaching platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RankUp is founded by MBBS Gold Medalists and NEET PG toppers who have actual exam experience. We focus on proven strategies, smart learning techniques, and personalized guidance rather than just content delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use RankUp on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, RankUp is fully responsive and works perfectly on mobile devices. We also offer a mobile app for both Android and iOS for offline access and push notifications."
      }
    },
    {
      "@type": "Question",
      "name": "Does RankUp provide NCERT solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, RankUp provides comprehensive NCERT-based solutions, important questions, and concept explanations aligned with the latest NEET UG syllabus and pattern."
      }
    },
    {
      "@type": "Question",
      "name": "How often is the content updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our content is updated regularly based on the latest NEET UG syllabus, previous year question patterns, and student performance analytics. We ensure all material is current and relevant."
      }
    }
  ]
};

// QAPage Schema
const qaPageSchema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "Frequently Asked Questions about RankUp NEET-UG Preparation",
    "text": "Common questions and answers about RankUp NEET-UG preparation platform",
    "answerCount": 20,
    "upvoteCount": 150,
    "dateCreated": "2024-01-01T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "RankUp Education"
    },
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "RankUp is a comprehensive NEET-UG preparation platform offering AI-powered learning tools, personalized study plans, and expert guidance from medical toppers.",
      "dateCreated": "2024-01-01T00:00:00Z",
      "upvoteCount": 100,
      "url": canonicalUrl,
      "author": {
        "@type": "Organization",
        "name": "RankUp Support Team"
      }
    },
    "suggestedAnswer": [
      {
        "@type": "Answer",
        "text": "Yes, RankUp offers both free and premium plans to suit different student needs and budgets.",
        "dateCreated": "2024-01-01T00:00:00Z",
        "upvoteCount": 50,
        "url": canonicalUrl
      }
    ]
  }
};

export default function FAQsPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* QAPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaPageSchema) }}
      />

      {/* Main Content */}
      <Faq />
    </>
  );
}