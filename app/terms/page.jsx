import StaticPageLayout from '../components/StaticPageLayout';

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/terms`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'Terms and Conditions - RankUp NEET-UG | User Agreement & Legal Terms',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Complete Terms and Conditions for RankUp NEET-UG preparation platform. User agreement, legal terms, service conditions, and platform usage guidelines for medical entrance coaching.',

  // Keywords
  keywords: [
    'NEET UG terms and conditions',
    'medical coaching agreement',
    'RankUp user terms',
    'NEET preparation terms',
    'educational platform terms',
    'terms of service education',
    'RankUp legal terms',
    'NEET coaching conditions',
    'user agreement medical',
    'platform usage terms'
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
    title: 'Terms and Conditions - RankUp NEET-UG User Agreement',
    description: 'Complete Terms and Conditions governing the use of RankUp NEET-UG preparation platform. User agreement, legal terms, and service conditions.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-terms.jpg`,
        width: 1200,
        height: 630,
        alt: 'RankUp Terms and Conditions - User Agreement & Legal Terms',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - RankUp NEET-UG Legal Terms',
    description: 'Complete Terms and Conditions for RankUp NEET-UG preparation platform with user agreement and legal terms',
    site: '@rankup_neet',
    creator: '@rankup_neet',
    images: [`${baseUrl}/twitter-terms.jpg`],
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
      name: 'RankUp Legal Department',
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
  category: 'Legal & Compliance',
  classification: 'Education Terms of Service',
  abstract: 'Terms and Conditions governing the use of RankUp NEET-UG preparation platform including user agreement, service terms, and legal conditions.',
  subject: 'Terms of Service, User Agreement, Legal Terms',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '30 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp Terms & Conditions',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/terms',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/terms',
    },
    web: {
      url: 'https://rankupp.in/terms',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // Terms of Service Schema
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TermsOfService",
          "@id": `${canonicalUrl}#termsofservice`,
          "name": "RankUp NEET-UG Terms and Conditions",
          "description": "Complete Terms and Conditions governing the use of RankUp NEET-UG preparation platform",
          "url": canonicalUrl,
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": new Date().toISOString(),
          "publisher": {
            "@type": "Organization",
            "name": "RankUp Education",
            "url": "https://rankupp.in",
            "logo": `${baseUrl}/logo.png`
          },
          "about": {
            "@type": "Thing",
            "name": "Educational Service Terms",
            "description": "Terms governing educational platform usage and services"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Students, Parents, Educational Users"
          },
          "countryOfOrigin": {
            "@type": "Country",
            "name": "India"
          },
          "legislation": {
            "@type": "Legislation",
            "name": "Information Technology Act, 2000",
            "jurisdiction": "India"
          }
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "name": "Terms and Conditions - RankUp NEET-UG",
          "description": "Complete Terms and Conditions document for RankUp NEET-UG preparation platform",
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
                "name": "Terms and Conditions",
                "item": canonicalUrl
              }
            ]
          }
        }
      ]
    }),

    // FAQ Schema for Terms
    'application/ld+json-faq': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can use RankUp NEET-UG platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RankUp platform is available to students preparing for NEET-UG and their parents/guardians. Users must be at least 13 years old or have parental consent."
          }
        },
        {
          "@type": "Question",
          "name": "What are the payment terms for RankUp courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Payments must be made in full before course access. We accept various payment methods including credit/debit cards, UPI, and net banking. All payments are non-transferable."
          }
        },
        {
          "@type": "Question",
          "name": "Can I share my RankUp account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, account sharing is strictly prohibited. Each account is for individual use only. Violation may result in account suspension without refund."
          }
        }
      ]
    }),

    // Twitter specific
    'twitter:label1': 'Last Updated',
    'twitter:data1': new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    'twitter:label2': 'Governing Law',
    'twitter:data2': 'Indian Law',
    'twitter:label3': 'Minimum Age',
    'twitter:data3': '13 Years',
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
      "name": "Terms and Conditions",
      "item": canonicalUrl
    }
  ]
};

// Legislation Schema for Legal Documents
const legislationSchema = {
  "@context": "https://schema.org",
  "@type": "Legislation",
  "name": "RankUp Terms and Conditions",
  "description": "Terms of Service document for RankUp NEET-UG preparation platform",
  "url": canonicalUrl,
  "jurisdiction": {
    "@type": "AdministrativeArea",
    "name": "India",
    "alternateName": "IN"
  },
  "legislationLegalValue": "Binding",
  "legislationType": "Terms of Service",
  "legislationApplies": {
    "@type": "Audience",
    "audienceType": "Users of RankUp Platform"
  },
  "dateCreated": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "datePublished": "2024-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "RankUp Education",
    "url": "https://rankupp.in"
  }
};

// WebPage Schema
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms and Conditions - RankUp NEET-UG Preparation",
  "description": "Official Terms and Conditions document for RankUp NEET-UG preparation platform detailing user agreement and service terms",
  "url": canonicalUrl,
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${baseUrl}/terms-hero.jpg`,
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
    "@type": "TermsOfService",
    "name": "RankUp Terms and Conditions",
    "text": "Complete Terms and Conditions document for RankUp NEET-UG preparation platform"
  }
};

// Article Schema for Detailed Terms
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "RankUp NEET-UG Terms and Conditions: Complete User Agreement",
  "description": "Comprehensive Terms and Conditions detailing user agreement, service terms, and legal conditions for RankUp NEET-UG platform",
  "image": `${baseUrl}/terms-article.jpg`,
  "author": {
    "@type": "Organization",
    "name": "RankUp Legal Department",
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
  "keywords": "terms and conditions, user agreement, terms of service, NEET UG, educational terms",
  "articleSection": "Legal Documents",
  "articleBody": "Complete Terms and Conditions document detailing user agreement, service terms, payment conditions, intellectual property rights, and legal obligations for RankUp NEET-UG platform."
};

// Contract Schema
const contractSchema = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  "name": "RankUp NEET-UG Terms and Conditions Agreement",
  "description": "Digital contract document containing Terms and Conditions for RankUp NEET-UG preparation services",
  "url": canonicalUrl,
  "dateCreated": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "encodingFormat": "text/html",
  "fileSize": "15KB",
  "creator": {
    "@type": "Organization",
    "name": "RankUp Education",
    "url": "https://rankupp.in"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "RankUp Education"
  },
  "license": "https://rankupp.in/terms",
  "isAccessibleForFree": true,
  "typicalAgeRange": "13-"
};

export default function TermsPage() {
  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* TermsOfService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Legislation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legislationSchema) }}
      />

      {/* Digital Document Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contractSchema) }}
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
                "name": "What is the minimum age to use RankUp platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Users must be at least 13 years old to create an account. Users under 18 require parental/guardian consent and supervision while using the platform."
                }
              },
              {
                "@type": "Question",
                "name": "Can I cancel my RankUp subscription?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can cancel your subscription as per our refund policy. However, access to course materials will cease immediately upon cancellation."
                }
              },
              {
                "@type": "Question",
                "name": "What content usage rights do I have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You receive a limited, non-exclusive, non-transferable license to access course materials for personal educational use only. Redistribution, copying, or commercial use is strictly prohibited."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I violate the terms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Violations may result in immediate account suspension, termination of services, and legal action if necessary. Serious violations may lead to permanent ban from the platform."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any restrictions on platform usage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                    "text": "Yes, users must not: share accounts, attempt to hack the platform, upload malicious content, harass other users, or use automated systems to access the platform beyond normal usage."
                }
              },
              {
                "@type": "Question",
                "name": "How are disputes resolved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All disputes are subject to the exclusive jurisdiction of courts in Chhatarpur, Madhya Pradesh, India. We encourage users to contact our support team first for resolution attempts."
                }
              },
              {
                "@type": "Question",
                "name": "Can terms be modified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we reserve the right to modify these terms at any time. Continued use of the platform after modifications constitutes acceptance of the updated terms."
                }
              },
              {
                "@type": "Question",
                "name": "What personal information is collected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We collect necessary information for service provision including name, contact details, academic information, and usage data. All data is protected as per our Privacy Policy."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any academic guarantees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While we provide quality education resources, we do not guarantee specific exam results. Success depends on individual effort, consistency, and application of learned concepts."
                }
              },
              {
                "@type": "Question",
                "name": "What about third-party content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our platform may include third-party content, links, or services. We are not responsible for third-party content and users should review their terms independently."
                }
              }
            ]
          })
        }}
      />

      {/* Contract Legal Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "RankUp Platform Terms of Service",
            "description": "Legal terms and conditions governing the use of RankUp educational platform",
            "url": canonicalUrl,
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": "student"
            },
            "availableLanguage": ["English", "Hindi"],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "legal support",
              "email": "legal@rankupp.in",
              "availableLanguage": "English"
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
            "cssSelector": [".terms-introduction", ".user-agreement", ".legal-notices"],
            "xpath": [
              "/html/head/title",
              "/html/head/meta[@name='description']/@content"
            ]
          })
        }}
      />

      {/* Main Content */}
      <StaticPageLayout slug="terms" pageTitle="Terms and Conditions" />
    </>
  );
}