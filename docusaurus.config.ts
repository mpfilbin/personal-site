import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mike Filbin',
  tagline: '...TODO: Come up with a tagline...',
  favicon: 'img/favicon.ico',
  plugins: [
    'docusaurus-plugin-sass'
  ],
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mike.filb.in',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mpfilbin', // Usually your GitHub org/user name.
  projectName: 'personal-site', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Mike Filbin',
      style: 'dark',
      logo: {
        alt: 'Mike Filbin Headshot',
        src: 'img/headshots/headshot_transparent.png',
      },
      items: [

        {to: '/about', label: 'About Me', position: 'left'},
        {to: '/resume', label: 'Resume', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {
          label: 'Runs',
          position: 'left', // or 'right'
          items: [
            {
              label: 'Golen Leaf Half Marathon',
              to: '/running/routes/golden-leaf',
            }
          ]
        },
        {
          href: 'https://github.com/mpfilbin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/michael-filbin',
            }
          ],
        },
        {
          title: 'More',
          items: [],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Michael Filbin. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
