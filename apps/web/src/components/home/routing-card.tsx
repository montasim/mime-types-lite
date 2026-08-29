import { fromExtension, matchesMimeType } from 'mime-types-lite';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function RoutingCard() {
  const [filename, setFilename] = useState('client.bundle.js?v=2');
  const mimeType = fromExtension(filename);
  const categoryPattern = mimeType ? `${mimeType.split('/')[0]}/*` : '*/*';
  const matched = mimeType ? matchesMimeType(mimeType, categoryPattern) : false;

  return (
    <div className="relative rotate-[1deg] rounded-lg border border-border bg-card p-5 shadow-[14px_14px_0_var(--color-route-shadow)] sm:p-6">
      <span
        className="absolute -top-2.5 right-9 h-5 w-16 -rotate-3 bg-signal/75"
        aria-hidden="true"
      />
      <div className="flex justify-between font-mono text-[10px] leading-4 font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        <span>Live route</span>
        <span className="text-primary"># 01</span>
      </div>

      <label
        className="mt-6 block text-[10px] leading-4 font-semibold tracking-wide text-muted-foreground uppercase"
        htmlFor="route-file"
      >
        Incoming file
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="route-file"
          value={filename}
          onChange={(event) => setFilename(event.target.value)}
          className="h-11 min-w-0 flex-1 rounded-sm border border-border bg-muted px-3 font-mono text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
        <Button type="button" variant="outline" onClick={() => setFilename('report.pdf')}>
          Try PDF
        </Button>
      </div>

      <div className="mx-auto flex h-12 w-1/2 items-center" aria-hidden="true">
        <span className="h-px flex-1 bg-primary" />
        <i className="size-2 rounded-full bg-signal" />
        <span className="h-px flex-1 bg-primary" />
      </div>

      <div className="relative bg-primary p-4 text-primary-foreground">
        <span className="block font-mono text-[10px] leading-4 text-white/65 uppercase">
          fromExtension( )
        </span>
        <strong className="mt-1 block overflow-x-auto font-mono text-lg leading-6 font-semibold tracking-tight whitespace-nowrap">
          {mimeType ?? 'undefined'}
        </strong>
        {mimeType && (
          <span className="absolute right-3 -bottom-3 rounded-full border-2 border-card bg-success px-2.5 py-1 font-mono text-[10px] leading-4 font-semibold text-white uppercase">
            {matched ? `matches ${categoryPattern}` : 'no match'}
          </span>
        )}
      </div>
      <p className="mt-6 text-right font-mono text-[10px] leading-4 text-muted-foreground">
        Filename lookup · no byte inspection
      </p>
    </div>
  );
}
