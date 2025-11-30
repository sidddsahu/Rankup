import StaticPageLayout from '../components/StaticPageLayout';

export default function AboutPage() {
  return <StaticPageLayout slug="about" pageTitle="About Us" />;
}

export const metadata = {
  title: 'About Us - RankUp',
  description: 'Learn more about RankUp - The modern NEET-UG preparation platform.',
};