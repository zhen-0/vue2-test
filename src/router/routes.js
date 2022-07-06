// 添加路由路径
const format = () => import('../views/format.vue')

export default [
  {
    path: '/',
    name: 'Home',
    redirect: '/format'
  },
  {
    path: '/format',
    name: 'FormatCode',
    component: format
  }
]
