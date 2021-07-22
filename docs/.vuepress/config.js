module.exports = {
  title: 'Long_Note',
  description: '主页',
  themeConfig: {
    nav: [
      {text: 'TypeScript',link:'/TypeScript/TypeScript'},
      {text: 'utils',link:'/Utils/utils'},
      {text: '插件',link:'/Plugin/Plugin'}
    ],
    sidebar: [
      {
          title: 'Note',
          collapsable: false, //是否展开
      },
      ['./TypeScript/TypeScript','TypeScript'],
      ['./Utils/utils','utils'],
      ['./Plugin/Plugin','插件'],
      {
          title: '其他',
          collapsable: false
      }
    ]
  }
}