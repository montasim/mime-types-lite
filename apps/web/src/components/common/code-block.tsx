import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  label?: string;
  className?: string;
}

export function CodeBlock({ code, label = 'TypeScript', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className={cn('overflow-hidden rounded-md bg-code text-code-foreground', className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[10px] tracking-wider text-white/45 uppercase">
          {label}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-[10px] text-white/55 hover:bg-white/10 hover:text-white"
          onClick={() => {
            void copyCode();
          }}
        >
          {copied ? <Check /> : <Copy />} {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-6">
        <code>{code}</code>
      </pre>
    </div>
  );
}
