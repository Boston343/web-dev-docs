// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const githubLogo = require("./static/img/github.svg");

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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Web Reaper", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

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
      // algolia: {
      //   // https://docusaurus.io/docs/search
      //   appId: "process.env.ALGOLIA_APP_ID",
      //   apiKey: process.env.ALGOLIA_API_KEY,
      //   indexName: "example",
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: "search",
      // },
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
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: "Web Reaper Docs",
        hideOnScroll: true,
        logo: {
          alt: "Reaper",
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
          { to: "/blog", label: "Blog", position: "left" },
          {
            // href: "https://github.com/Boston343/web-dev-docs",
            // label: "GitHub",
            // "aria-label": "GitHub repository",
            position: "right",
            type: "html",
            value:
              "<a href='https://github.com/Boston343/web-dev-docs' class='navbar__item-github navbar__item navbar__link' target='_blank' rel='noopener noreferrer' aria-label='Github repository'></a>",
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
                href: "/blog/material-ui-theme-with-docusaurus",
              },
            ],
          },
          {
            title: "External",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/LastChaos343",
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
