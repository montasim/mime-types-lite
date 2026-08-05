import { Link } from '@tanstack/react-router';
import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { GITHUB_URL, NPM_URL } from '@/config/site';

import { Logo } from './logo';

const navigation = [
  { label: 'Overview', to: '/' as const },
  { label: 'Documentation', to: '/docs' as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="site-shell flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&.active]:bg-muted [&.active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            href={NPM_URL}
          >
            npm
          </a>
          <Button variant="outline" size="sm" asChild className="ml-2 rounded-full">
            <a href={GITHUB_URL}>
              GitHub <ExternalLink />
            </a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="site-shell grid gap-1 border-t border-border py-3 md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" href={NPM_URL}>
            npm
          </a>
          <a className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" href={GITHUB_URL}>
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  );
}
