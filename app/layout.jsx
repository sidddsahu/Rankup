import Header from './components/Header';
import './globals.css';
// import Header from "@/components/Header";

export const metadata = {
  title: 'RankUp — NEET-UG Preparation App',
  description: 'RankUp helps NEET-UG aspirants with smart flashcards, tests, and analytics to boost scores.',
  openGraph: {
    title: 'RankUp — NEET-UG Preparation App',
    description: 'Smart flashcards, AI revision planner & detailed analytics for NEET-UG.',
    url: 'https://yourdomain.com',
    images: ['/og-image.png'],
  },
  robots: 'index, follow'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (replace G-XXXXXXX) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config','G-XXXXXXX');`}} />
        {/* IndexNow meta (replace key & url) */}
        <meta name="indexnow" content="https://www.bing.com/indexnow?url=https://yourdomain.com&key=REPLACE_WITH_KEY" />
        {/* Primary JSON-LD: Organization & MobileApplication injected here server-side per page as needed */}
      </head>
       <Header />
      <body>{children}</body>
    </html>
  );
}
