import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PACKAGE_NAME } from '@/config/site';
import { cn } from '@/lib/utils';

const commands = {
  npm: `npm install ${PACKAGE_NAME}`,
  pnpm: `pnpm add ${PACKAGE_NAME}`,
  yarn: `yarn add ${PACKAGE_NAME}`,
  bun: `bun add ${PACKAGE_NAME}`,
} as const;

type PackageManager = keyof typeof commands;

interface InstallationTabsProps {
  className?: string;
}

export function InstallationTabs({ className }: InstallationTabsProps) {
  const [manager, setManager] = useState<PackageManager>('npm');
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    await navigator.clipboard.writeText(commands[manager]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Tabs
      value={manager}
      onValueChange={(value) => setManager(value as PackageManager)}
      className={cn(
        'overflow-hidden rounded-md border border-white/10 bg-code text-code-foreground shadow-lg',
        className
      )}
    >
      <TabsList className="grid grid-cols-4 border-b border-white/10 bg-white/3">
        {Object.keys(commands).map((value) => (
          <TabsTrigger
            key={value}
            value={value}
            className="border-r border-white/10 px-3 py-3 font-mono text-[10px] font-bold text-white/45 last:border-0 data-[state=active]:bg-white/6 data-[state=active]:text-white"
          >
            {value === 'bun' ? 'Bun' : value}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(commands).map(([value, command]) => (
        <TabsContent key={value} value={value} className="m-0">
          <div className="flex min-h-20 items-center gap-3 px-5">
            <span className="font-mono font-bold text-signal">$</span>
            <code className="min-w-0 flex-1 overflow-x-auto font-mono text-xs whitespace-nowrap sm:text-sm">
              {command}
            </code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-white/55 hover:bg-white/10 hover:text-white"
              onClick={() => {
                void copyCommand();
              }}
            >
              {copied ? <Check /> : <Copy />}{' '}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
