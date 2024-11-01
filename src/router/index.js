import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/login/LoginPage.vue'
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
      //根路徑是layoutContainer，
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      ///layoutContainer是一級路由
      //redirect 属性用于将一个路径重定向到另一个路径。它可以用于简化路由配置
      //这意味着当用户访问根路径 /layoutContainer 时，他们会自动被重定向到 /article/manage
      //非同步
      redirect: '/article/manage',
      //以下是二級路由(呈現方式都會是一級+二級)
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        }
      ]
    }
  ]
})

export default router
