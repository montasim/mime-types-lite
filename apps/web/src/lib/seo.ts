import { SITE_URL, siteConfig } from '@/config/site';

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function createSeoHead({
  title = siteConfig.title,
  description = siteConfig.description,
  path = '/',
}: SeoOptions = {}) {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const imageUrl = new URL('/og-image.png', SITE_URL).toString();

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: siteConfig.keywords.join(', ') },
      { name: 'author', content: siteConfig.author },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'mime-types-lite package documentation' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  };
}
