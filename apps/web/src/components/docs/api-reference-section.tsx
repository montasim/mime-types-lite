import { CodeBlock } from '@/components/common/code-block';
import type { ApiReference } from '@/content/api';

interface ApiReferenceSectionProps {
  reference: ApiReference;
}

export function ApiReferenceSection({ reference }: ApiReferenceSectionProps) {
  return (
    <section id={reference.id} className="docs-section scroll-mt-6">
      <p className="section-kicker">{reference.group}</p>
      <h2>{reference.name}</h2>
      <p>{reference.description}</p>
      {reference.signature && (
        <div className="my-5 overflow-x-auto border-l-2 border-primary bg-route-shadow px-4 py-3 font-mono text-[10px] whitespace-nowrap text-primary">
          {reference.signature}
        </div>
      )}
      <CodeBlock code={reference.example} label={`${reference.name}.ts`} />
      {reference.note && (
        <div className="mt-4 grid gap-2 border border-primary/20 bg-route-shadow p-4 text-xs sm:grid-cols-[70px_1fr]">
          <strong className="text-primary">Note</strong>
          <p className="m-0 text-muted-foreground">{reference.note}</p>
        </div>
      )}
    </section>
  );
}
