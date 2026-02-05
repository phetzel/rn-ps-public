import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/icon.png"
          alt="Press Office icon"
          className={styles.heroLogo}
          width={96}
          height={96}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={useBaseUrl('docs/overview')}>
            Read the Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

const quickLinks = [
  {
    title: 'Overview',
    description: 'Project goals, tone, and portfolio-ready highlights.',
    to: 'docs/overview',
  },
  {
    title: 'Gameplay',
    description: 'Stage flow, win/lose rules, and systems tables.',
    to: 'docs/gameplay/guide',
  },
  {
    title: 'Technical',
    description: 'Setup, scripts, content tooling, and compliance notes.',
    to: 'docs/technical',
  },
  {
    title: 'Compliance',
    description: 'Privacy disclosures, ATT/UMP flow, and store prep.',
    to: 'docs/compliance',
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation hub for the Press Secretary simulation project"
    >
      <HomepageHeader />
      <main>
        <section className="container">
          <div className={styles.cards}>
            {quickLinks.map((link) => (
              <article key={link.to} className={styles.card}>
                <Heading as="h3">{link.title}</Heading>
                <p>{link.description}</p>
                <div className={styles.cardFooter}>
                  <Link className="button button--primary button--sm" to={useBaseUrl(link.to)}>
                    Open
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
