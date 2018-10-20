module.exports = [
  {
    path: 'pages/index',
    config: {
      navigationBarTitleText: '氘星',
      enablePullDownRefresh: true
    }
  },
  {
    path: 'pages/sign',
    config: {
      navigationBarTitleText: '登录'
    }
  },
  {
    path: 'pages/counter'
  },
  {
    path: 'pages/web',
    config: {
      navigationBarTitleText: '无退社区'
    }
  },
  {
    path: 'pages/organization/detail',
    config: {
      navigationBarTitleText: '岛屿详情'
    }
  },
  {
    path: 'pages/organization/search',
    config: {
      navigationBarTitleText: '搜索岛'
    }
  },
  {
    path: 'pages/organization/plan',
    config: {
      navigationBarTitleText: '经济发展方案'
    }
  },
  {
    path: 'pages/organization/create',
    config: {
      navigationBarTitleText: '创建岛屿'
    }
  },
  {
    path: 'pages/organization/task',
    config: {
      navigationBarTitleText: '任务详情'
    }
  },
  {
    path: 'packageA/logs',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志'
    }
  }
]
