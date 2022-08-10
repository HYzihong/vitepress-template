/**
 * @type {import('vitepress').UserConfig}
*/

const pkg = require("../../package.json");
import nav from './view/nav.js'
import sidebar from './view/sidebar.js'

module.exports = {
  title: "my blog", // 网站标题
  description: "my blog.", //网站描述  渲染成页面的 `<meta name="description" content="A VitePress site">`
  base: "/blog/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  lang: "zh-CN", //语言 页面 HTML 的 lang 属性 `<html lang="en-US">`
  head: [
    // 改变title的图标
    [
      "link",
      {
        rel: "icon",
        //图片放在public文件夹下
        href: "/logo.jpeg",
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.jpeg",
    repo: pkg.repository,
    // 这里可以集成 algolia 搜索
    //   头部导航
    nav,
    //   侧边导航
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HYzihong' }
    ]
  },
};
