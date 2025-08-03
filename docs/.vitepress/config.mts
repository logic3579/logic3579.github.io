import { defineConfig } from 'vitepress'
import { gitbookSidebar } from './data/gitbook'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Logic's Site",
  description: "A Knowledge Site",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/books.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/books.png' }]
  ],

  // markdown headers level config
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    headers: {
      level: [2, 3, 4] // show h2, h3, h4
    }
  },

  // theme config
  themeConfig: {
    // outline config
    outline: {
      level: [2, 3], // show h2, h3 in outline
      label: 'On this page'
    },

    logo: { src: '/books.svg', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/logic3579/logic3579.github.io' }
    ],
    footer: {
      message: 'Power by VitePress & Vue',
      copyright: 'Copyright © 2025-present Logic'
    },

    search: {
      provider: 'algolia',
      options: {
        // account: logic3579@duck.com
        appId: 'DV059DHAUJ',
        apiKey: '1f4946de04485cd13ef66d172cd148a8',
        indexName: 'yakir'
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Gitbook', link: '/gitbook/README' },
      { text: 'About', link: '/about/README' }
    ],

    sidebar: {
      '/gitbook/': gitbookSidebar,
      '/about/': [
        {
          text: 'About',
          items: [
            { text: 'Overview', link: '/about/README' },
          ]
        }
      ]
    },
  }
})
