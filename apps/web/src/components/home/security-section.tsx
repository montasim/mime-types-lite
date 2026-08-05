import { Link } from '@tanstack/react-router';
import { ShieldAlert } from 'lucide-react';

export function SecuritySection() {
  return (
    <section className="site-shell mb-20 grid items-center gap-5 border border-signal/45 bg-signal-soft p-6 sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_1fr_auto] lg:gap-8">
      <div className="grid size-12 place-items-center rounded-full bg-signal text-white">
        <ShieldAlert className="size-5" />
      </div>
      <div>
        <p className="section-kicker text-signal-foreground">A useful boundary</p>
        <h2 className="mt-1 text-2xl font-black tracking-tight uppercase">
          A MIME type is a label, not proof.
        </h2>
      </div>
      <p className="text-xs leading-6 text-signal-foreground sm:col-start-2 lg:col-start-auto">
        Extensions and Content-Type headers can be attacker-controlled. Inspect signatures and
        enforce limits for untrusted uploads.
      </p>
      <Link
        to="/docs"
        hash="security"
        className="text-xs font-bold whitespace-nowrap text-signal-foreground sm:col-start-2 lg:col-start-auto"
      >
        Security notes →
      </Link>
    </section>
  );
}
