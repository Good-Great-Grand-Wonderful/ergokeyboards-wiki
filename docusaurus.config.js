// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ergokeyboards',
  tagline: 'Build guides, firmware help, and tuning docs for Ergokeyboards boards',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://wiki.ergokeyboards.com',
  baseUrl: '/',

  organizationName: 'good-Great-Grand-Wonderful',
  projectName: 'ergokeyboards-wiki',

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
            'https://github.com/Good-Great-Grand-Wonderful/ergokeyboards-wiki/tree/main/',
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
        title: 'Ergokeyboards',
        logo: {
          alt: 'Good Great Grand Wonderful logo',
          src: 'img/logo.svg',
        },
        items: [
          // One entry per keyboard; switch to a dropdown when there are a few.
          {
            type: 'docSidebar',
            sidebarId: 'crossesV2',
            label: 'Crosses V2',
            position: 'left',
          },
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
                href: 'https://trackball-config.ergokeyboards.com/',
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
