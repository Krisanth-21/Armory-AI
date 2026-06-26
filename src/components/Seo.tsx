import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

const SITE_URL = 'https://armoryweb.vercel.app';

export const Seo = ({
  title,
  description,
  path = '/',
  ogImage = '/og-image.png',
}: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel='canonical' href={`${SITE_URL}${path}`} />

    {/* Open Graph */}
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:url' content={`${SITE_URL}${path}`} />
    <meta property='og:image' content={ogImage} />
    <meta property='og:type' content='website' />

    {/* Twitter */}
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={ogImage} />

    {/* Structured Data */}
    <script type='application/ld+json'>
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": SITE_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      })}
    </script>
  </Helmet>
);
