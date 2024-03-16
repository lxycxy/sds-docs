import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '学生学业与发展评价系统',
  description: '用户手册',

  theme: defaultTheme({
    logo: 'assets/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: {
      '/teacher/': [
        {
          title: '教师端',
          collapsable: false,
          children: [
            '/teacher/traingplan'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
