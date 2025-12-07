import StaticPageLayout from '../components/StaticPageLayout';

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/refund`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'Refund Policy - RankUp NEET-UG | Course Cancellation & Money Back',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Complete Refund Policy for RankUp NEET-UG preparation platform. Learn about course cancellation, refund eligibility, processing time, and money-back guarantee terms.',

  // Keywords
  keywords: [
    'NEET UG refund policy',
    'medical course cancellation',
    'RankUp money back guarantee',
    'NEET preparation refund',
    'course fee refund',
    'educational refund policy',
    'RankUp cancellation policy',
    'NEET coaching refund',
    'refund terms education',
    'money back guarantee NEET'
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
    title: 'Refund Policy - RankUp NEET-UG Course Cancellation & Money Back',
    description: 'Complete Refund Policy for RankUp NEET-UG preparation courses. Learn about refund eligibility, processing, and cancellation terms.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-refund.jpg`,
        width: 1200,
        height: 630,
        alt: 'RankUp Refund Policy - Course Cancellation & Money Back',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy - RankUp NEET-UG Money Back Guarantee',
    description: 'Complete Refund Policy for RankUp NEET-UG preparation courses with cancellation terms and processing details',
    site: '@rankup_neet',
    creator: '@rankup_neet',
    images: [`${baseUrl}/twitter-refund.jpg`],
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
      name: 'RankUp Finance Team',
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
  category: 'Finance & Legal',
  classification: 'Education Refund Policy',
  abstract: 'Refund Policy for RankUp NEET-UG preparation platform detailing course cancellation, refund eligibility, processing procedures, and money-back guarantee terms.',
  subject: 'Refund Policy, Course Cancellation, Money Back Guarantee',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '30 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp Refund Policy',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/refund',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/refund',
    },
    web: {
      url: 'https://rankupp.in/refund',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // Refund Policy Schema
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "name": "Refund Policy - RankUp NEET-UG",
          "description": "Complete Refund Policy for RankUp NEET-UG preparation platform",
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
                "name": "Refund Policy",
                "item": canonicalUrl
              }
            ]
          }
        },
        {
          "@type": "Offer",
          "name": "RankUp NEET-UG Refund Policy",
          "description": "Refund terms and conditions for RankUp NEET-UG preparation courses",
          "url": canonicalUrl,
          "offeredBy": {
            "@type": "Organization",
            "name": "RankUp Education",
            "url": "https://rankupp.in"
          },
          "eligibleRegion": {
            "@type": "Country",
            "name": "India"
          },
          "availabilityStarts": "2024-01-01",
          "availabilityEnds": "2030-12-31"
        }
      ]
    }),

    // FAQ Schema for Refund Policy
    'application/ld+json-faq': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is RankUp's refund eligibility period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refund requests are accepted within 7 days of course purchase for unused courses. Partial refunds may apply after course usage begins."
          }
        },
        {
          "@type": "Question",
          "name": "How long does refund processing take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approved refunds are processed within 7-14 business days and credited to the original payment method used during purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any non-refundable fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Processing fees and taxes may be non-refundable. Please refer to our detailed refund policy for specific amounts and conditions."
          }
        }
      ]
    }),

    // Twitter specific
    'twitter:label1': 'Refund Period',
    'twitter:data1': '7 Days',
    'twitter:label2': 'Processing Time',
    'twitter:data2': '7-14 Business Days',
    'twitter:label3': 'Contact for Refunds',
    'twitter:data3': 'support@rankupp.in',
  },
};

// Breadcrumb Schema
const breadcrumbSchema = {
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
      "name": "Refund Policy",
      "item": canonicalUrl
    }
  ]
};

// Offer Schema for Refund Terms
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "RankUp NEET-UG Refund Policy Terms",
  "description": "Terms and conditions for refunds on RankUp NEET-UG preparation courses",
  "url": canonicalUrl,
  "category": "Educational Service Refund",
  "eligibleCustomerType": {
    "@type": "BusinessEntityType",
    "name": "Individual Student"
  },
  "eligibleQuantity": {
    "@type": "QuantitativeValue",
    "value": "1"
  },
  "priceSpecification": {
    "@type": "PriceSpecification",
    "price": "0",
    "priceCurrency": "INR",
    "valueAddedTaxIncluded": true
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "availability": "https://schema.org/InStock",
  "availableAtOrFrom": {
    "@type": "Organization",
    "name": "RankUp Education",
    "url": "https://rankupp.in"
  },
  "businessFunction": "http://purl.org/goodrelations/v1#ProvideRefund"
};

// WebPage Schema
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Refund Policy - RankUp NEET-UG Preparation",
  "description": "Official Refund Policy for RankUp NEET-UG preparation courses detailing cancellation terms and refund procedures",
  "url": canonicalUrl,
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${baseUrl}/refund-hero.jpg`,
    "width": 1200,
    "height": 630
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "ReadAction",
    "target": canonicalUrl
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "RankUp Refund Policy Document",
    "text": "Complete refund policy terms and conditions for RankUp NEET-UG preparation platform"
  }
};

// Article Schema for Detailed Policy
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "RankUp NEET-UG Refund Policy: Course Cancellation & Money Back",
  "description": "Comprehensive Refund Policy detailing cancellation terms, refund eligibility, and money-back procedures for RankUp NEET-UG courses",
  "image": `${baseUrl}/refund-article.jpg`,
  "author": {
    "@type": "Organization",
    "name": "RankUp Finance Department",
    "url": "https://rankupp.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "RankUp Education",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    }
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": canonicalUrl
  },
  "keywords": "refund policy, course cancellation, money back guarantee, NEET UG, educational refund",
  "articleSection": "Financial Policies",
  "articleBody": "Complete Refund Policy document detailing terms for course cancellation, refund eligibility criteria, processing procedures, and money-back guarantee for RankUp NEET-UG platform."
};

// MoneyBack Guarantee Schema
const moneyBackSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "RankUp NEET-UG Money Back Guarantee",
  "description": "Money back guarantee for RankUp NEET-UG preparation courses",
  "url": canonicalUrl,
  "offeredBy": {
    "@type": "Organization",
    "name": "RankUp Education"
  },
  "eligibleTransactionVolume": {
    "@type": "PriceSpecification",
    "minPrice": 1000,
    "maxPrice": 100000,
    "priceCurrency": "INR"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "eligibleCustomerType": {
    "@type": "BusinessEntityType",
    "name": "Individual Student"
  },
  "availability": "https://schema.org/InStock",
  "priceSpecification": {
    "@type": "UnitPriceSpecification",
    "priceType": "https://schema.org/ListPrice",
    "priceCurrency": "INR",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": "1"
    }
  },
  "hasMerchantReturnPolicy": {
    "@type": "MerchantReturnPolicy",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 7,
    "returnMethod": "https://schema.org/ReturnByMail",
    "returnFees": "https://schema.org/FreeReturn",
    "returnShippingFeesAmount": {
      "@type": "MonetaryAmount",
      "value": 0,
      "currency": "INR"
    }
  }
};

export default function RefundPage() {
  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* Offer Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Money Back Guarantee Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moneyBackSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Comprehensive FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is RankUp's refund policy for NEET-UG courses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RankUp offers a 7-day money-back guarantee for unused courses. Refund requests must be submitted within 7 days of purchase. After course access or usage begins, partial refunds may apply based on usage."
                }
              },
              {
                "@type": "Question",
                "name": "How do I request a refund for my RankUp course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Submit a refund request by emailing support@rankupp.in with your order details, reason for refund, and payment confirmation. Our team will process your request within 24-48 business hours."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to receive my refund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Approved refunds are processed within 7-14 business days. The time to reflect in your account depends on your bank/payment provider, typically taking an additional 3-7 business days."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any cancellation fees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A nominal processing fee of ₹500 or 5% of the course fee (whichever is lower) may apply for cancellations after 24 hours of purchase. GST and payment gateway charges are non-refundable."
                }
              },
              {
                "@type": "Question",
                "name": "What if I'm not satisfied with the course quality?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you're unsatisfied with the course quality within the first 7 days, you're eligible for a full refund. We encourage you to contact our support team first to address any concerns before requesting a refund."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get a refund after attending live classes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Partial refunds may be available if you've attended up to 2 live classes. The refund amount will be calculated proportionally based on unused course access remaining."
                }
              },
              {
                "@type": "Question",
                "name": "What payment methods are eligible for refunds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Refunds are processed to the original payment method used during purchase - credit/debit cards, UPI, net banking, or wallets. Cash payments require bank transfer refunds."
                }
              },
              {
                "@type": "Question",
                "name": "Do demo classes affect refund eligibility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, attending free demo classes does not affect your refund eligibility. The refund period starts from the date of full course purchase, not demo class attendance."
                }
              }
            ]
          })
        }}
      />

      {/* Merchant Return Policy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MerchantReturnPolicy",
            "name": "RankUp NEET-UG Course Refund Policy",
            "description": "Refund policy for RankUp NEET-UG preparation courses",
            "applicableCountry": "IN",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 7,
            "returnMethod": "https://schema.org/ReturnAtKiosk",
            "returnFees": "https://schema.org/OriginalShippingFees",
            "customerRemorseReturnFees": "https://schema.org/FreeReturn",
            "returnPolicySeasonalOverride": {
              "@type": "MerchantReturnPolicySeasonalOverride",
              "merchantReturnDays": 14,
              "startDate": "2024-01-01",
              "endDate": "2024-12-31"
            }
          })
        }}
      />

      {/* Speakable Schema for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SpeakableSpecification",
            "cssSelector": [".refund-policy", ".money-back-guarantee", ".refund-process"],
            "xpath": [
              "/html/head/title",
              "/html/head/meta[@name='description']/@content"
            ]
          })
        }}
      />

      {/* Main Content */}
      <StaticPageLayout slug="refund" pageTitle="Refund Policy" />
    </>
  );
}