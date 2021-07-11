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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/logo.png",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
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
        text: "GitHub",
        link: "https://github.com/uiuxarghya/project-xii",
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
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/theme-default",
    "@vuepress/search",
    {
      searchMaxSuggestions: 10,
    },
  ]["@vuepress/back-to-top"],
};
