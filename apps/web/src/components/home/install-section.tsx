import { InstallationTabs } from '@/components/common/installation-tabs';

export function InstallSection() {
  return (
    <section
      id="install"
      className="site-shell grid scroll-mt-8 items-end gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
    >
      <div>
        <p className="section-kicker">Install / package manager</p>
        <h2 className="section-title">
          One package.
          <br />
          Use your tool.
        </h2>
        <p className="section-copy">
          Type declarations ship with the package. There is nothing else to configure.
        </p>
      </div>
      <InstallationTabs />
    </section>
  );
}
