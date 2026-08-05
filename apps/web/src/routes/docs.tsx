import { createFileRoute } from '@tanstack/react-router';

import { DocsPage } from '@/components/docs/docs-page';
import { SITE_URL, siteConfig } from '@/config/site';
import { createSeoHead } from '@/lib/seo';

const title = 'Documentation — mime-types-lite';
const description =
  'API documentation for mime-types-lite constants, extension lookup, MIME normalization, validation, matching, and TypeScript types.';
const seo = createSeoHead({ title, description, path: '/docs' });

export const Route = createFileRoute('/docs')({
  head: () => ({
    ...seo,
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: title,
          description,
          url: `${SITE_URL}/docs`,
          author: { '@type': 'Person', name: siteConfig.author },
          about: { '@type': 'SoftwareApplication', name: siteConfig.name },
        }),
      },
    ],
  }),
  component: DocsRoute,
});

function DocsRoute() {
  return (
    <div id="main-content">
      <DocsPage />
    </div>
  );
}
