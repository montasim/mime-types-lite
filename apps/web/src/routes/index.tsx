import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from '@/components/home/home-page';
import { GITHUB_URL, NPM_URL, PACKAGE_VERSION, SITE_URL, siteConfig } from '@/config/site';
import { createSeoHead } from '@/lib/seo';

const seo = createSeoHead();

export const Route = createFileRoute('/')({
  head: () => ({
    ...seo,
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: siteConfig.name,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Node.js 20+, modern browsers',
          softwareVersion: PACKAGE_VERSION,
          description: siteConfig.description,
          url: SITE_URL,
          downloadUrl: NPM_URL,
          codeRepository: GITHUB_URL,
          license: 'https://opensource.org/license/mit',
          author: { '@type': 'Person', name: siteConfig.author },
        }),
      },
    ],
  }),
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <div id="main-content">
      <HomePage />
    </div>
  );
}
