import { ExternalLink, ShieldAlert } from 'lucide-react';

import { CodeBlock } from '@/components/common/code-block';
import { InstallationTabs } from '@/components/common/installation-tabs';
import { Button } from '@/components/ui/button';
import { GITHUB_URL, PACKAGE_VERSION } from '@/config/site';
import { apiReferences, modernValues } from '@/content/api';

import { ApiReferenceSection } from './api-reference-section';
import { DocsSidebar } from './docs-sidebar';

export function DocsPage() {
  return (
    <main>
      <header className="border-b border-border py-14">
        <div className="site-shell grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="section-kicker">Documentation / v{PACKAGE_VERSION}</p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.045em] uppercase sm:text-6xl">
              Small API.
              <br />
              <span className="text-primary">Clear contracts.</span>
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            Constants and helpers for the MIME work application code does every day. Typed,
            dependency-free, and deliberately curated.
          </p>
        </div>
      </header>

      <div className="site-shell grid items-start gap-10 py-12 lg:grid-cols-[170px_minmax(0,720px)_150px] lg:justify-between">
        <div className="hidden lg:block">
          <DocsSidebar />
        </div>

        <div className="min-w-0">
          <section id="installation" className="docs-section scroll-mt-6">
            <p className="section-kicker">Get started</p>
            <h2>Installation</h2>
            <p>
              Install with any current JavaScript package manager. Node.js 20 or newer is supported.
            </p>
            <InstallationTabs className="mt-6" />
            <div className="mt-4 grid grid-cols-2 border border-border sm:grid-cols-4">
              {['ES modules', 'CommonJS', 'Browsers', 'TypeScript'].map((item) => (
                <span
                  key={item}
                  className="border-r border-b border-border px-2 py-3 text-center font-mono text-[8px] text-muted-foreground uppercase last:border-r-0 sm:border-b-0"
                >
                  <i className="mr-1.5 inline-block size-1.5 rounded-full bg-success" />
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="quick-start" className="docs-section scroll-mt-6">
            <p className="section-kicker">Get started</p>
            <h2>Quick start</h2>
            <p>
              Import only the surface you need, or use the immutable <code>MIME</code> object for
              dynamic access.
            </p>
            <CodeBlock
              label="example.ts"
              code={`import { MIME, fromExtension, matchesMimeType } from 'mime-types-lite';

MIME.JSON; // 'application/json'
fromExtension('reports/annual.pdf'); // 'application/pdf'
matchesMimeType('image/png', 'image/*'); // true`}
            />
          </section>

          {apiReferences.map((reference) => (
            <ApiReferenceSection key={reference.id} reference={reference} />
          ))}

          <section id="standards" className="docs-section scroll-mt-6">
            <p className="section-kicker">Guides</p>
            <h2>Standards & legacy values</h2>
            <p>
              Preferred constants follow current registrations and specifications. Historic values
              remain available through <code>LEGACY_MIME</code>.
            </p>
            <div className="mt-5 overflow-x-auto border border-border">
              <div className="grid min-w-[620px] grid-cols-[0.65fr_1fr_1fr] bg-muted px-4 py-3 font-mono text-[8px] font-bold text-muted-foreground uppercase">
                <span>Format</span>
                <span>Preferred</span>
                <span>Legacy</span>
              </div>
              {modernValues.map((item) => (
                <div
                  key={item.label}
                  className="grid min-h-14 min-w-[620px] grid-cols-[0.65fr_1fr_1fr] items-center border-t border-border px-4 text-[10px]"
                >
                  <strong>{item.label}</strong>
                  <code className="font-mono text-primary">{item.preferred}</code>
                  <code className="font-mono text-muted-foreground">{item.legacy}</code>
                </div>
              ))}
            </div>
          </section>

          <section id="security" className="docs-section scroll-mt-6">
            <p className="section-kicker">Guides</p>
            <h2>Security boundary</h2>
            <div className="my-5 grid gap-4 border border-signal/45 bg-signal-soft p-5 sm:grid-cols-[42px_1fr]">
              <span className="grid size-10 place-items-center rounded-full bg-signal text-white">
                <ShieldAlert className="size-5" />
              </span>
              <div>
                <strong className="text-sm">Do not trust the label alone</strong>
                <p className="mt-1 text-xs leading-6 text-signal-foreground">
                  A filename extension, browser File.type, or HTTP Content-Type header can be
                  attacker-controlled.
                </p>
              </div>
            </div>
            <p>
              For untrusted uploads, also inspect file signatures, enforce size limits, store files
              safely, and process them with hardened tooling.
            </p>
            <Button variant="outline" asChild className="mt-2">
              <a href={`${GITHUB_URL}/blob/main/SECURITY.md`}>
                Read the security policy <ExternalLink />
              </a>
            </Button>
          </section>
        </div>

        <aside className="sticky top-5 hidden flex-col lg:flex" aria-label="On this page">
          <span className="mb-2 font-mono text-[8px] font-bold tracking-widest text-muted-foreground/70 uppercase">
            On this page
          </span>
          {[
            'installation',
            'constants',
            'from-extension',
            'normalize',
            'matching',
            'types',
            'security',
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="py-1 text-[10px] text-muted-foreground capitalize hover:text-primary"
            >
              {id.replaceAll('-', ' ')}
            </a>
          ))}
          <div className="mt-6 border border-border bg-card p-3">
            <small className="text-[8px] text-muted-foreground">Current version</small>
            <strong className="mt-1 block text-xl text-primary">{PACKAGE_VERSION}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
