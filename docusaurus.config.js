// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crosses V2',
  tagline: 'Build, flash, and tune your Crosses V2 split keyboard',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  // TODO: swap in the real domain once it's decided. Everything else is
  // domain-agnostic (all internal links are root-relative).
  url: 'https://crosses-v2-docs.example.com',
  baseUrl: '/',

  organizationName: 'good-Great-Grand-Wonderful',
  projectName: 'crosses-v2-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/good-Great-Grand-Wonderful/crosses-v2-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/crosses-v2-hero.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Crosses V2',
        logo: {
          alt: 'Good Great Grand Wonderful logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://ergokeyboards.com',
            label: 'Store',
            position: 'right',
          },
          {
            href: 'https://discord.gg/uQb9UgrGbe',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/good-Great-Grand-Wonderful/crosses-v2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/uQb9UgrGbe',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Crosses V2 on GitHub',
                href: 'https://github.com/good-Great-Grand-Wonderful/crosses-v2',
              },
              {
                label: 'Firmware releases',
                href: 'https://github.com/Good-Great-Grand-Wonderful/crosses-v2/releases',
              },
              {
                label: 'Store',
                href: 'https://ergokeyboards.com',
              },
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'Trackball tuning app',
                href: 'https://trackball-config.vincentfranco.com/',
              },
              {
                label: 'ZMK docs',
                href: 'https://zmk.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Good Great Grand Wonderful LLC`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
