import clsx from 'clsx';
import Link from '@docusaurus/Link';
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
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/overview">
            Read the Docs
          </Link>
          <Link className="button button--link button--lg" to="/docs/gameplay/guide">
            Gameplay Guide
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
    to: '/docs/overview',
  },
  {
    title: 'Gameplay',
    description: 'Stage flow, win/lose rules, and systems tables.',
    to: '/docs/gameplay/guide',
  },
  {
    title: 'Technical',
    description: 'Setup, scripts, content tooling, and compliance notes.',
    to: '/docs/technical',
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
                <Link className="button button--primary button--sm" to={link.to}>
                  Open
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
