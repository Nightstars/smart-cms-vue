const myappsRouter = {
  route: null,
  name: null,
  title: '应用管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/myapps/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '我的应用',
      type: 'view',
      name: 'myownapps',
      route: '/myapps/own',
      filePath: 'view/myapps/myapps-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default myappsRouter