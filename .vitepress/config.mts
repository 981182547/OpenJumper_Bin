import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/OpenJumper_Bin/',
  title: "OpenJumper_Bin",
  description: "项目测试固件与文档",
  themeConfig: {
    // 开启本地全局搜索（加上这三行即可）
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '固件下载', link: '/firmwares' } // 顶部导航加一个入口
    ],

    sidebar: [
      {
        text: '硬件项目固件文档',
        items: [
          { text: '小智系列 (Xiaozhi)', link: '/xiaozhi' },
          { text: 'Cubic 核心板', link: '/cubic' },
          { text: 'ESP-NOW 无线测试', link: '/espnow' },
          { text: '其他综合测试', link: '/others' },
          { text: '全部固件列表', link: '/firmwares' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 这里以后可以改成你们公司或个人的 GitHub 主页
    ]
  }
})
