// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

require("dotenv").config();

const config = {
  title: "Web Reaper Docs",
  tagline: "Quick reference for web development tips, tools, and techniques.",
  url: "https://webreaper.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "Web Reaper", // Usually your GitHub org/user name.
  // projectName: "Docs", // Usually your repo name.

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/img/site.webmanifest",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "mask-icon",
        href: "/img/safari-pinned-tab.svg",
        color: "#b6b6fb",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        href: "/img/favicon.ico",
      },
    },
  ],

  plugins: [
    [
      "docusaurus2-dotenv",
      {
        path: "./.env",
        safe: false,
        systemvars: false,
        silent: false,
        expand: false,
        defaults: false,
      },
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Boston343/web-dev-docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Boston343/web-dev-docs/blob/main",
          blogSidebarCount: 5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // https://docusaurus.io/docs/search
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: "webreaper",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      metadata: [
        {
          name: "keywords",
          content:
            "docusaurus, material ui, website, development, coding, react, html, css, javascript, jquery, oauth, bootstrap, node, express, ejs, database, mongodb, mongoose, rest, graphql, hashing, salting, cookies, sessions",
        },
        {
          name: "msapplication-TileColor",
          content: "#b6b6fb",
        },
        {
          name: "msapplication-config",
          content: "/img/browserconfig.xml",
        },
        {
          name: "theme-color",
          content: "#b6b6fb",
        },
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },
      navbar: {
        title: "Web Reaper Docs",
        hideOnScroll: true,
        logo: {
          alt: "Web Reaper Logo",
          // src: "img/logo.svg",
          src: "img/favicon.ico",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog/", label: "Blog", position: "left" },
          {
            href: "https://github.com/Boston343/web-dev-docs",
            position: "right",
            className: "navbar__item-github",
            "aria-label": "GitHub repository",
          },
          // {
          //   type: "search",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Blog",
            items: [
              {
                label: "Material UI with Docusaurus",
                href: "/blog/material-ui-theme-with-docusaurus/",
              },
            ],
          },
          {
            title: "External",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/BowTiedWebReapr",
              },
              {
                label: "GitHub",
                href: "https://github.com/Boston343",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web Reaper`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
