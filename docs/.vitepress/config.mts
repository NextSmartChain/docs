import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { type DefaultTheme } from 'vitepress'
import {HeadConfig} from "vitepress/types/shared";

// https://vitepress.dev/reference/site-config

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'NEXT Blockchain',
      link: '/next/explore-the-network',
      activeMatch: '/next/'
    },
    {
      text: 'NEXT Explorer',
      link: 'https://explorer.nextsmartchain.com',
      activeMatch: 'https://explorer.nextsmartchain.com'
    }
  ];
}

function sidebarNEXT(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'NEXT Blockchain',
      base: '/next/',
      items: [
        { text: 'Explore the Network', link: 'explore-the-network' },
        { text: 'Add to Metamask', link: 'add-to-metamask' },
        { text: 'Verified Addresses', link: 'verified-addresses' },
      ],
    },
    {
      text: 'Developer Docs',
      base: '/next/developer/',
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Run a Node Interactively', link: 'run-a-node-interactively' },
        { text: 'Run a Node Service', link: 'run-a-node-service' },
        { text: 'Run a Node with Docker', link: 'run-a-node-with-docker' },
        { text: 'Setup Firewall', link: 'setup-firewall' },
        { text: 'Become a Validator', link: 'become-a-validator' },
        { text: 'Validator Commands', link: 'validator-commands' },
        { text: 'Register a Validator', link: 'register-a-validator' },
        { text: 'Staking Rewards', link: 'staking-rewards' },
        { text: 'Issues / FAQ', link: 'issues-faq' },
      ]
    }
  ]
}

function sidebarNEXTWallet(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'NEXT Coin',
      base: '/wallet/',
      items: [
        { text: 'Overview', link: 'overview' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'NEXT Smart Chain Documentation',
  description: "NEXT Smart Chain is a instant and low-cost blockchain developed for trading and huge volumes.",

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'NEXT Ecosystem Docs',

    footer: {
      copyright: 'Copyright © 2024 <a href="https://www.nextsmartchain.com/">NEXT Smart Chain</a>'
    },

    editLink: {
      pattern: 'https://github.com/nextsmartchain/docs/edit/main/docs/:path'
    },

    sidebar: {
      '/next/': { base: '/next/', items: sidebarNEXT() },
      '/wallet/': { base: '/wallet/', items: sidebarNEXTWallet() },
    },

    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nextsmartchain/docs' },
    ],
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  head: head(),

  base: '/docs',

  sitemap: {
    hostname: 'https://docs.nextsmartchain.com'
  }
})

function head(): HeadConfig[] {
  return [
    // adding some redirects
    [
      'script',
      { id: 'redirects' },
      `;(() => {
        const redirects = {
          '/next': '/next/explore-the-network',
          '/next/': '/next/explore-the-network',
          '/next/developer': '/next/developer/getting-started',
          '/next/developer/': '/next/developer/getting-started',
          '/validator': '/next/developer/become-a-validator',
          '/validator/': '/next/developer/become-a-validator',
        }
        const redirect = redirects[window.location.pathname]
        if (redirect) {
          window.location.replace(redirect)
        }
      })()`
    ],

    // facebook meta
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/next-logo.svg' }],

    // twitter meta
    ['meta', { property: 'twitter:title', content: 'NEXT Smart Chain Documentation'}],
    ['meta', { property: 'twitter:card', content: 'summary'}],
    ['meta', { property: 'twitter:site', content: '@nextsmartchain'}],
    ['meta', { property: 'twitter:description', content: 'NEXT Smart Chain is a instant confirming blockchain with low gas-fees.'}],
    ['meta', { property: 'twitter:image', content: '/next-logo.svg'}],

    // generic meta
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0195fe' }],
    ['meta', { name: 'msapplication-TileColor', content: '#0195fe' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ];
}

