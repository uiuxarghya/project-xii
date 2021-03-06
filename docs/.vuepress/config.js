const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Projects",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#2e42ef" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#2e42ef",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/logo.png",
    searchPlaceholder: "Search...",
    smoothScroll: true,
    repo: "uiuxarghya/project-xii",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Improve this page",
    lastUpdated: true,
    nextLinks: true,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Subjects",
        ariaLabel: "Subjects Menu",
        items: [{ text: "Chemistry", link: "/chemistry/" }],
      },
      {
        text: "About",
        link: "/about/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: true,
          children: ["", "using-vue"],
        },
        {
          title: "Chemistry",
          collapsable: false,
          children: ["/chemistry/"],
        },
        {
          text: "Others",
          collapsable: false,
          children: ["/about/"],
        },
      ],
      "/chemistry/": [
        {
          title: "Polymers",
          collapsable: false,
          children: ["", "classification-of-polymers"],
        },
        {
          title: "Natural Polymers",
          collapsable: false,
          children: ["natural-polymers-introduction", "starch", "proteins"],
        },
      ],
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ["@vuepress/theme-default"],
    {
      "@vuepress/pwa": {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
    },
    {
      "@vuepress/search": {
        searchMaxSuggestions: 10,
      },
    },
    ["@vuepress/back-to-top"],
  ],
};
