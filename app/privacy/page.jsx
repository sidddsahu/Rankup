import StaticPageLayout from '../components/StaticPageLayout';

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/privacy`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'Privacy Policy - RankUp NEET-UG | Student Data Protection & Security',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Read RankUp\'s comprehensive Privacy Policy for NEET-UG preparation platform. Learn how we protect student data, ensure security, and comply with data protection regulations in India.',

  // Keywords
  keywords: [
    'NEET UG privacy policy',
    'student data protection',
    'medical coaching privacy',
    'RankUp data security',
    'GDPR compliance India',
    'educational data privacy',
    'NEET preparation privacy',
    'student information security',
    'privacy policy education',
    'data protection policy'
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
    title: 'Privacy Policy - RankUp NEET-UG Student Data Protection',
    description: 'Complete Privacy Policy detailing how RankUp protects student data and ensures security for NEET-UG preparation platform.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-privacy.jpg`,
        width: 1200,
        height: 630,
        alt: 'RankUp Privacy Policy - Student Data Protection',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - RankUp NEET-UG Data Protection',
    description: 'Learn how RankUp protects student data and ensures security for NEET-UG preparation platform',
    site: '@rankup_neet',
    creator: '@rankup_neet',
    images: [`${baseUrl}/twitter-privacy.jpg`],
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
      name: 'RankUp Legal Team',
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
  classification: 'Education Privacy Policy',
  abstract: 'Privacy Policy for RankUp NEET-UG preparation platform detailing student data protection, security measures, and compliance with Indian regulations.',
  subject: 'Data Protection, Privacy Policy, Student Security',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '30 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp Privacy Policy',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/privacy',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/privacy',
    },
    web: {
      url: 'https://rankupp.in/privacy',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // Privacy Policy Schema
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "PrivacyPolicy",
          "@id": `${canonicalUrl}#privacypolicy`,
          "name": "RankUp NEET-UG Privacy Policy",
          "description": "Privacy Policy detailing data protection practices for RankUp NEET-UG preparation platform",
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
            "name": "Data Protection",
            "description": "Student data security and privacy protection"
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
          "name": "Privacy Policy - RankUp NEET-UG",
          "description": "Complete Privacy Policy document for RankUp NEET-UG preparation platform",
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
                "name": "Privacy Policy",
                "item": canonicalUrl
              }
            ]
          }
        }
      ]
    }),

    // FAQ Schema for Privacy Policy
    'application/ld+json-faq': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What data does RankUp collect from students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We collect necessary information for educational services including name, contact details, academic information, and learning progress data to personalize the learning experience."
          }
        },
        {
          "@type": "Question",
          "name": "How does RankUp protect student data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use SSL encryption, secure servers, access controls, and regular security audits to protect all student data. Our systems comply with Indian data protection standards."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request deletion of my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can request data deletion by contacting our support team. We process deletion requests in accordance with applicable laws and our retention policies."
          }
        }
      ]
    }),

    // Twitter specific
    'twitter:label1': 'Last Updated',
    'twitter:data1': new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    'twitter:label2': 'Applicable Laws',
    'twitter:data2': 'IT Act 2000, India',
    'twitter:label3': 'Data Protection',
    'twitter:data3': 'Enterprise-grade Security',
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
      "name": "Privacy Policy",
      "item": canonicalUrl
    }
  ]
};

// Legislation Schema for Legal Documents
const legislationSchema = {
  "@context": "https://schema.org",
  "@type": "Legislation",
  "name": "RankUp Privacy Policy",
  "description": "Privacy Policy document for RankUp NEET-UG preparation platform",
  "url": canonicalUrl,
  "jurisdiction": {
    "@type": "AdministrativeArea",
    "name": "India",
    "alternateName": "IN"
  },
  "legislationLegalValue": "Binding",
  "legislationType": "Privacy Policy",
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
  "name": "Privacy Policy - RankUp NEET-UG Preparation",
  "description": "Official Privacy Policy document for RankUp NEET-UG preparation platform detailing data protection practices",
  "url": canonicalUrl,
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${baseUrl}/privacy-hero.jpg`,
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
    "@type": "PrivacyPolicy",
    "name": "RankUp Privacy Policy",
    "text": "Complete Privacy Policy document for RankUp NEET-UG preparation platform"
  }
};

// Article Schema for Detailed Policy
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "RankUp NEET-UG Privacy Policy: Student Data Protection",
  "description": "Comprehensive Privacy Policy detailing how RankUp protects student information and ensures data security",
  "image": `${baseUrl}/privacy-article.jpg`,
  "author": {
    "@type": "Organization",
    "name": "RankUp Legal Team",
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
  "keywords": "privacy policy, data protection, student security, NEET UG, educational data",
  "articleSection": "Legal Documents",
  "articleBody": "Complete Privacy Policy document detailing data collection, usage, protection, and student rights for RankUp NEET-UG platform."
};

export default function PrivacyPage() {
  return (
    <>
      {/* Privacy Policy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* Legislation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legislationSchema) }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Additional FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does RankUp share student data with third parties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We only share data with trusted service providers essential for our educational services, and only under strict confidentiality agreements. We never sell student data."
                }
              },
              {
                "@type": "Question",
                "name": "How long does RankUp retain student data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We retain student data for as long as necessary to provide our services, comply with legal obligations, and for legitimate educational purposes, after which it is securely deleted."
                }
              },
              {
                "@type": "Question",
                "name": "Is RankUp compliant with Indian data protection laws?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we comply with the Information Technology Act, 2000 and related rules. We follow industry best practices for data protection and security."
                }
              },
              {
                "@type": "Question",
                "name": "How can parents review their child's data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                    "text": "Parents/guardians can request access to their child's data by contacting our support team with proper verification. We prioritize transparency and parental control over minor's data."
                }
              },
              {
                "@type": "Question",
                "name": "What security measures protect payment information?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All payment transactions are processed through PCI-DSS compliant payment gateways. We never store complete payment card details on our servers."
                }
              }
            ]
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
            "cssSelector": [".privacy-intro", ".data-collection", ".security-measures"],
            "xpath": [
              "/html/head/title",
              "/html/head/meta[@name='description']/@content"
            ]
          })
        }}
      />

      {/* Main Content */}
      <StaticPageLayout slug="privacy" pageTitle="Privacy Policy" />
    </>
  );
}