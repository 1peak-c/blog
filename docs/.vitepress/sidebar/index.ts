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
