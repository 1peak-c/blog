import { defineConfig } from 'vitepress'
import { github } from './meta'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cBlogs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: './chodocs-logo.svg',
    // outline: 'deep',

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1peak-c/blog' }
    ],

    footer: {
      message: `用心去做高质量的专业前端内容网站，记录学习成长过程`,
      copyright: `版权所有 © 2022-${new Date().getFullYear()} |  <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">仓库传送门</a>`,
    },
  }
})
