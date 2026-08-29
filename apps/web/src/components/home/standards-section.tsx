import { Link } from '@tanstack/react-router';

import { modernValues } from '@/content/api';

export function StandardsSection() {
  return (
    <section className="border-t border-border py-20">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
        <div>
          <p className="section-kicker">Standards first</p>
          <div className="mt-10 hidden size-24 -rotate-6 place-items-center rounded-full border border-primary text-center text-lg leading-none font-semibold text-primary lg:grid">
            1.9<small className="block font-mono text-[10px] tracking-widest">EDITION</small>
          </div>
        </div>
        <div>
          <h2 className="section-title mt-0">
            The modern answer,
            <br />
            with the old one nearby.
          </h2>
          <p className="section-copy">
            Current standards are the defaults. Historical values remain in{' '}
            <code className="font-mono text-xs text-foreground">LEGACY_MIME</code> when
            interoperability requires them.
          </p>
          <div className="mt-8 border-t border-border">
            {modernValues.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="grid min-h-14 grid-cols-[0.65fr_1.35fr] items-center border-b border-border text-sm"
              >
                <span className="font-semibold">{item.label}</span>
                <code className="overflow-x-auto font-mono text-xs leading-[1.5] whitespace-nowrap text-primary">
                  {item.preferred}
                </code>
              </div>
            ))}
          </div>
          <Link
            to="/docs"
            hash="standards"
            className="mt-5 inline-flex text-xs leading-[1.5] font-semibold text-primary"
          >
            View standards and aliases →
          </Link>
        </div>
      </div>
    </section>
  );
}
