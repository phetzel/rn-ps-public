import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const docsGithubUrl = process.env.DOCS_GITHUB_URL;
const docsEditUrl = docsGithubUrl
  ? `${docsGithubUrl.replace(/\/$/, '')}/tree/main/docs-site/`
  : undefined;

const config: Config = {
  title: 'Press Office Docs',
  tagline: 'Handbook for the Press Secretary simulation project',
  favicon: 'img/favicon.png',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  future: {
    v4: true,
  },

  url: 'https://press-office.example.com',
  baseUrl: '/',

  organizationName: 'press-office',
  projectName: 'rn-ps',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: docsEditUrl,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: docsEditUrl,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Press Office Docs',
      logo: {
        alt: 'Press Office icon',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        ...(docsGithubUrl
          ? [
              {
                href: docsGithubUrl,
                label: 'GitHub',
                position: 'right' as const,
              },
            ]
          : []),
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Gameplay',
              to: '/docs/gameplay/guide',
            },
            {
              label: 'Technical',
              to: '/docs/technical',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            ...(docsGithubUrl
              ? [
                  {
                    label: 'GitHub',
                    href: docsGithubUrl,
                  },
                ]
              : []),
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Press Office.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
