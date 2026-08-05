import { apiReferences } from '@/content/api';

const startLinks = [
  { id: 'installation', label: 'Installation' },
  { id: 'quick-start', label: 'Quick start' },
] as const;

export function DocsSidebar() {
  const groups = ['Constants', 'Lookup', 'Validation', 'Types'] as const;

  return (
    <aside
      className="sticky top-5 flex max-h-[calc(100vh-2.5rem)] flex-col gap-5 overflow-y-auto"
      aria-label="Documentation navigation"
    >
      <NavGroup title="Start" links={startLinks} />
      {groups.map((group) => (
        <NavGroup
          key={group}
          title={group}
          links={apiReferences
            .filter((item) => item.group === group)
            .map((item) => ({ id: item.id, label: item.name }))}
        />
      ))}
      <NavGroup
        title="Guides"
        links={[
          { id: 'standards', label: 'Standards & legacy' },
          { id: 'security', label: 'Security' },
        ]}
      />
    </aside>
  );
}

interface NavGroupProps {
  title: string;
  links: readonly { id: string; label: string }[];
}

function NavGroup({ title, links }: NavGroupProps) {
  return (
    <div className="flex flex-col">
      <span className="mb-1.5 font-mono text-[8px] font-bold tracking-widest text-muted-foreground/70 uppercase">
        {title}
      </span>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="py-1 text-[11px] text-muted-foreground hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
