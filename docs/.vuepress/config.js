import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({

  lang: 'zh-CN',
  title: '学生学业与发展评价系统',
  description: '用户手册',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索'
        }
      }
    }),
  ],
  theme: defaultTheme({
    logo: 'assets/logo.png',
    
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '教师端',
        link: '/teacher/'
      },
      {
        text: '学生端',
        link: '/student/'
      },
      {
        text: '联系我们',
        link: '/contact/'
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
