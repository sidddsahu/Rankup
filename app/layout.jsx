import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'RankUp — NEET-UG Preparation App',
  description: 'RankUp helps NEET-UG aspirants with smart flashcards, tests, and analytics to boost scores.',
  openGraph: {
    title: 'RankUp — NEET-UG Preparation App',
    description: 'Smart flashcards, AI revision planner & detailed analytics for NEET-UG.',
    url: 'https://www.rankupp.in',
    images: ['/og-image.png'],
  },
  robots: 'index, follow'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X3HCWNWJB3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','G-X3HCWNWJB3', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* IndexNow meta */}
        <meta
          name="indexnow"
          content="https://www.bing.com/indexnow?url=https://www.rankupp.in&key=YOUR_INDEXNOW_KEY"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
