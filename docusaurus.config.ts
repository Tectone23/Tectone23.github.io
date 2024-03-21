import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs"; // add this

const config: Config = {
  title: "Tectone Desktop Documentation",
  tagline: "Simplify Tectone Development",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://tectone23.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Tectone23", // Usually your GitHub org/user name.
  projectName: "Tectone23.github.io", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    tailwindPlugin,
    // [
    //   "docusaurus2-dotenv",
    //   {
    //     // path: "./.env", // The path to your environment variables.
    //     safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
    //     systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
    //     silent: false, //  If true, all warnings will be suppressed
    //     expand: false, // Allows your variables to be "expanded" for reusability within your .env file
    //     defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
    //   },
    // ],
  ], // update this
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      style: "dark",
      // title: "Tectone Desktop",
      logo: {
        alt: "Tectone23",
        src: "img/White_Logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/tectone23",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "Getting Started",
              to: "/docs/category/getting-started",
            },
            {
              label: "Guides",
              to: "/docs/category/guides",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/tectone23",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tectone23",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/tectone23",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tectone23.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
