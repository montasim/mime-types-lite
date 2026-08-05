import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Find a type from a path',
    description: 'Accepts extensions, filenames, Windows paths, and URLs with query strings.',
    code: `fromExtension('reports/annual.pdf')
// 'application/pdf'

fromExtension('PHOTO.JPEG')
// 'image/jpeg'`,
    anchor: 'from-extension',
  },
  {
    title: 'Normalize headers',
    description: 'Remove parameters, trim whitespace, lowercase, and validate.',
    code: `normalizeMimeType(
  ' Application/JSON; charset=utf-8 '
)
// 'application/json'`,
    anchor: 'normalize',
  },
  {
    title: 'Match the category',
    description: 'Test exact media types, category wildcards, or the universal wildcard.',
    code: `matchesMimeType(
  'image/avif',
  'image/*'
)
// true`,
    anchor: 'matching',
  },
] as const;

export function ApiSection() {
  return (
    <section className="border-t border-border py-20">
      <div className="site-shell">
        <div className="grid gap-5 lg:grid-cols-[0.5fr_1fr_0.7fr] lg:gap-14">
          <p className="section-kicker">The useful middle</p>
          <h2 className="section-title mt-0">
            More than constants.
            <br />
            Less than a database.
          </h2>
          <p className="section-copy mt-0">
            Resolve a filename, clean a real Content-Type header, or test a category wildcard with
            functions that compose.
          </p>
        </div>

        <div className="mt-12 grid border-t border-l border-border lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex min-h-[350px] flex-col border-r border-b border-border p-6"
            >
              <h3 className="text-2xl font-black tracking-tight uppercase">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              <pre className="mt-6 flex-1 overflow-x-auto bg-code p-4 font-mono text-[11px] leading-6 text-code-foreground">
                <code>{feature.code}</code>
              </pre>
              <Link
                to="/docs"
                hash={feature.anchor}
                className="mt-5 inline-flex items-center gap-3 font-mono text-[10px] font-bold text-primary"
              >
                {feature.anchor} <ArrowRight className="size-3" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
