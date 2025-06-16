import { defineConfig } from 'vitepress'
import { gitbookSidebar } from './sidebar/gitbook'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Logic's Site",
  description: "A Knowledge Site",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: [
    './index'
  ],

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }
    ],
  ],

  themeConfig: {
     logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
     socialLinks: [
      { icon: 'github', link: 'https://github.com/logic3579/logic3579.github.io' }
    ],
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
    //     indexName: 'vitepress'
    //   }
    // },

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
