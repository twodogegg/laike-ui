// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '开发指南',   // 必要的
        // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/guide/home',
          '/guide/quickstart'
        ]
      }
    ]
  }
}