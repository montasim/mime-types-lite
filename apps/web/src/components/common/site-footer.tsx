import { Link } from '@tanstack/react-router';

import { GITHUB_URL, NPM_URL } from '@/config/site';

import { Logo } from './logo';

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-shell flex min-h-24 flex-col items-start justify-between gap-5 py-6 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-xs text-muted-foreground">MIT © Mohammad Montasim Al Mamun Shuvo</p>
        <nav
          className="flex gap-5 text-xs font-semibold text-muted-foreground"
          aria-label="Footer navigation"
        >
          <Link to="/docs" className="hover:text-foreground">
            Docs
          </Link>
          <a href={NPM_URL} className="hover:text-foreground">
            npm
          </a>
          <a href={GITHUB_URL} className="hover:text-foreground">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
