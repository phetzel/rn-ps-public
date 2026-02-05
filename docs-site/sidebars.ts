import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
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
      items: ['gameplay/guide', 'gameplay/glossary'],
    },
    {
      type: 'category',
      label: 'Technical',
      collapsible: false,
      items: [
        'technical/index',
        'technical/architecture',
        'technical/database',
        'technical/content-pipeline',
        'technical/testing',
        'technical/ci-cd',
      ],
    },
    {
      type: 'category',
      label: 'Compliance',
      collapsible: false,
      items: ['compliance/index', 'compliance/privacy'],
    },
  ],
};

export default sidebars;
