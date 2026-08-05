const facts = [
  ['0', 'runtime dependencies'],
  ['Typed', 'literal unions included'],
  ['Curated', 'common types, not a database'],
  ['Universal', 'server and browser ready'],
] as const;

export function ProofStrip() {
  return (
    <section
      className="grid grid-cols-2 border-y border-border bg-card lg:grid-cols-4"
      aria-label="Package qualities"
    >
      {facts.map(([value, label]) => (
        <div
          key={value}
          className="flex min-h-24 flex-col justify-center border-r border-b border-border px-[max(1rem,4vw)] odd:last:border-r-0 lg:border-b-0 lg:last:border-r-0"
        >
          <strong className="text-xl font-black tracking-tight text-primary uppercase sm:text-2xl">
            {value}
          </strong>
          <span className="mt-1 text-[11px] text-muted-foreground">{label}</span>
        </div>
      ))}
    </section>
  );
}
