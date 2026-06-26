/**
 * Seo – lightweight SEO helper for ARMORY.
 *
 * Meta tags (title, description, OG, Twitter) are handled by TanStack Router's
 * `head()` in each route config. This component adds **only** the pieces that
 * `head()` cannot inject natively:
 *   • JSON-LD structured data
 *
 * Drop <Seo /> anywhere in your page JSX – it renders an invisible <script>.
 */

const SITE_URL = 'https://armoryweb.vercel.app';

interface SeoProps {
  /** Page title (used in structured data) */
  title: string;
  /** Page meta description (used in structured data) */
  description: string;
  /** Path segment, e.g. "/about" */
  path?: string;
  /** Schema.org @type – defaults to "WebPage" */
  schemaType?: string;
}

export function Seo({
  title,
  description,
  path = '/',
  schemaType = 'WebPage',
}: SeoProps) {
  const url = `${SITE_URL}${path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'ARMORY',
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** Helper to build a canonical link entry for head().links */
export function canonicalLink(path: string) {
  return { rel: 'canonical' as const, href: `${SITE_URL}${path}` };
}
