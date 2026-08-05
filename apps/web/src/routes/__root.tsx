import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { SiteFooter } from '@/components/common/site-footer';
import { SiteHeader } from '@/components/common/site-header';
import { siteConfig } from '@/config/site';
import appCss from '@/styles/app.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#f5f6f1' },
      { name: 'application-name', content: siteConfig.name },
      { name: 'apple-mobile-web-app-title', content: siteConfig.name },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <RootDocument>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          src="https://www.supportkori.com/widget.js"
          data-id="montasim"
          data-message="Support montasim"
          data-color="#FFDD00"
          data-position="right"
        />
        <Scripts />
      </body>
    </html>
  );
}

function NotFoundPage() {
  return (
    <main
      id="main-content"
      className="site-shell grid min-h-[60vh] place-items-center py-20 text-center"
    >
      <div>
        <p className="section-kicker">404 / Unknown route</p>
        <h1 className="mt-3 text-4xl font-black uppercase">No known page type</h1>
        <a href="/" className="mt-5 inline-block text-sm font-bold text-primary">
          Return home →
        </a>
      </div>
    </main>
  );
}
