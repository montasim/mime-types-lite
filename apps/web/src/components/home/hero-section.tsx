import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PACKAGE_VERSION } from '@/config/site';

import { RoutingCard } from './routing-card';

export function HeroSection() {
  return (
    <section className="site-shell grid items-center gap-14 py-16 lg:min-h-[570px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-20">
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="gap-2 rounded-sm font-mono text-[9px] tracking-wider uppercase"
          >
            <span className="size-1.5 rounded-full bg-success" /> v{PACKAGE_VERSION}
          </Badge>
          <span className="font-mono text-[9px] tracking-wider text-muted-foreground uppercase">
            zero dependencies · Node 20+
          </span>
        </div>
        <h1 className="max-w-2xl text-5xl leading-[0.94] font-black tracking-[-0.055em] uppercase sm:text-6xl lg:text-7xl">
          Know what
          <br />
          <span className="text-primary">you’re sending.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          A small, reviewed vocabulary of MIME constants and practical helpers for headers, uploads,
          URLs, and file extensions.
        </p>
        <div className="mt-7 flex flex-col gap-2 sm:flex-row">
          <Button size="lg" asChild>
            <Link to="/docs">
              Read the docs <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#install">
              Install <ArrowDown />
            </a>
          </Button>
        </div>
      </div>
      <RoutingCard />
    </section>
  );
}
