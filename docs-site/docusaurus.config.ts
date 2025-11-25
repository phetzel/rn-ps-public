import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const publicDocsOwner = process.env.PUBLIC_DOCS_OWNER?.trim();
const publicDocsRepo = process.env.PUBLIC_DOCS_REPO?.trim();
const docsGithubUrlFromEnv = process.env.DOCS_GITHUB_URL?.trim();
const docsSiteUrlOverride = process.env.DOCS_SITE_URL?.trim();
const docsBaseUrlOverride = process.env.DOCS_BASE_URL?.trim();

const githubPagesUrl = publicDocsOwner ? `https://${publicDocsOwner}.github.io` : undefined;

if (!publicDocsOwner || !publicDocsRepo) {
  console.warn(
    'PUBLIC_DOCS_OWNER or PUBLIC_DOCS_REPO is missing. Default URLs will be used; production deploys may fail.',
  );
}

const docsGithubUrl =
  docsGithubUrlFromEnv ??
  (publicDocsOwner && publicDocsRepo
    ? `https://github.com/${publicDocsOwner}/${publicDocsRepo}`
    : undefined);

const docsEditUrl = docsGithubUrl
  ? `${docsGithubUrl.replace(/\/$/, '')}/tree/main/docs-site/`
  : undefined;

const siteUrl = docsSiteUrlOverride ?? githubPagesUrl ?? 'https://press-office.example.com';

const baseUrl = docsBaseUrlOverride ?? (publicDocsRepo ? `/${publicDocsRepo}/` : '/');

const config: Config = {
  title: 'Press Office Docs',
  tagline: 'Handbook for the Press Secretary Simulation Game',
  favicon: 'img/favicon.png',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  // [NOTE] The `future.v4` flag enables Docusaurus v4 features while running on v3 (3.9.2).
  // This is intended for gradual migration and may introduce breaking changes or unexpected behavior.
  // See: https://docusaurus.io/docs/next/migration/v4#futurev4-flag
  // Ensure the team is aware of any behavioral differences this may cause.
  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl,

  organizationName: publicDocsOwner ?? 'press-office',
  projectName: publicDocsRepo ?? 'rn-ps',

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
