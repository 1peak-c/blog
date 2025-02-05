import { type DefaultTheme } from 'vitepress'
export function sidebarDefult(): DefaultTheme.SidebarItem[]  {
  return [
    {
      text: '开启旅程',
      collapsed: false,
      items: [
        {text: '博客开始', link: '/start'}
      ]
    }
  ]
}

export function sidebarProgramLearning(): DefaultTheme.SidebarItem[]  {
  return [
    {
      text: '原子化css',
      collapsed: false,
      items: [
        {text: 'tailwindcss', link: '/tailwindcss'}
      ]
    },
    {
      text: 'webpack',
      collapsed: false,
      items: [
        {text: 'css Tree Shaking', link: '/webpack/purgeCssPlugin'}
      ]
    }
  ]
}

export function sidebarJavaLearning() {
  return [
    {
      text: 'java base',
      collapsed: false,
      items: [
        {text: '线程', link: '/base/thread'}
      ]
    }
  ]
}