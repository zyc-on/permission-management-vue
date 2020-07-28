export default [
  {
    path: '/menus',
    name: 'Menus',
    component: () => import('@/views/MenuManagement')
  }, {
    path: '/menus2',
    name: 'Test',
    component: () => import('@/views/MenuManagement2')
  }
]
