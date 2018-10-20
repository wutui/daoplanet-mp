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
    path: 'pages/organization/detail',
    config: {
      navigationBarTitleText: '岛屿详情'
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
