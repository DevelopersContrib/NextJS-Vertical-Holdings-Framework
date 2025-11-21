import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { getData } from '@/lib/data'
export const dynamic = 'force-dynamic'
import nextDynamic from 'next/dynamic';

const First100FoundersModalWrapper = nextDynamic(
  () => import('@/components/First100FoundersModalWrapper'),
  { ssr: false }
);

// Async function to generate SEO metadata
export async function generateMetadata() {
  const c = await getData();

  const domain = c.data.domainName;
  const title =
    !c.data.title || c.data.title.trim() === ''
      ? 'Welcome to ' + domain
      : c.data.title;
  const description =
    !c.data.description || c.data.description.trim() === ''
      ? `Join a vibrant community of developers, influencers, and entrepreneurs on ${domain}, all using the versatile CONTRIB token to power their token economies!`
      : c.data.description;
  const keywords =
    !c.data.keywords || c.data.keywords.trim() === ''
      ? ['website']
      : c.data.keywords.split(',');
  const author =
    !c.data.author || c.data.author.trim() === '' ? 'contrib' : c.data.author;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: 'website',
      locale: 'en_US',
      url: `https://${domain}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <First100FoundersModalWrapper />
        {children}
      </body>
    </html>
  )
}
