const booksRouter = {
  route: null,
  name: null,
  title: '书籍管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-demo',
  filePath: 'view/books/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加书籍',
      type: 'view',
      name: 'booksAdd',
      route: '/books/add',
      filePath: 'view/books/books-create.vue',
      inNav: true,
      icon: 'iconfont icon-demo',
    },
    {
      title: '书籍列表',
      type: 'view',
      name: 'booksList',
      route: '/books/list',
      filePath: 'view/books/books-list.vue',
      inNav: true,
    },
  ],
}

export default booksRouter
