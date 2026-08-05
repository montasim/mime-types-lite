import { Link } from '@tanstack/react-router';

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="mime-types-lite home"
    >
      <svg viewBox="0 0 36 36" aria-hidden="true" className="size-8 shrink-0">
        <rect width="36" height="36" rx="10" fill="currentColor" className="text-primary" />
        <circle cx="11" cy="13" r="2.5" fill="white" />
        <circle cx="25" cy="23" r="2.5" fill="white" />
        <path d="M22.5 8.5 13.5 27.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span className="text-sm font-bold tracking-tight group-hover:text-primary">
          mime-types-lite
        </span>
      )}
    </Link>
  );
}
