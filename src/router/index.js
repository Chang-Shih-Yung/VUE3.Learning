import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/login/loginPage.vue'
//初始化vue-router4.x(vue3)
const router = createRouter({
  //import.meta.env.BASE_URL是vite的全局变量，用于获取项目的根路径
  //不寫死，到vit.config.js中配置base
  //歷史紀錄模式，不是hash模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //路由結構配置
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/articleManage.vue')
        }
      ]
    }
  ]
})

export default router
