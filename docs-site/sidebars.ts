import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      items: ['overview/index', 'overview/showcase'],
    },
    {
      type: 'category',
      label: 'Gameplay',
      collapsible: false,
      items: ['gameplay/guide'],
    },
    {
      type: 'category',
      label: 'Technical',
      collapsible: false,
      items: [
        'technical/index',
        'technical/content-pipeline',
        'technical/testing',
        'technical/infra',
        'technical/compliance',
        'technical/privacy-disclosures',
      ],
    },
  ],
};

export default sidebars;
