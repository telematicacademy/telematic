const { description, name } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Guía y FAQ de Telematic',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: `/telematic/`,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/guide/',
      },
      {
        text: 'FAQ',
        link: '/faq/'
      },
      {
        text: 'Test',
        link: '/test/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guía',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],

      '/test/': [
        {
          title: 'test',
          collapsable: false,
          children: [
            '',
            'test-child',
            'test-child-02',
          ]
        }
      ],

      '/faq/': [
        {
          title: 'FAQ',
          collapsable: false,
          children: [
            '',
            'faq-empresa',
            'faq-test'
          ]
        }
      ],

      '/': [
        '',
      ]

    },


    
  },

    markdown: {
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}