import { ApiSection } from './api-section';
import { HeroSection } from './hero-section';
import { InstallSection } from './install-section';
import { ProofStrip } from './proof-strip';
import { SecuritySection } from './security-section';
import { StandardsSection } from './standards-section';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProofStrip />
      <InstallSection />
      <ApiSection />
      <StandardsSection />
      <SecuritySection />
    </main>
  );
}
