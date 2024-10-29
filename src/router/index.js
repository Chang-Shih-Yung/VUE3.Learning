import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
//初始化vue-router4.x(vue3)
const router = createRouter({
  //import.meta.env.BASE_URL是vite的全局变量，用于获取项目的根路径
  //不寫死，到vit.config.js中配置base
  //歷史紀錄模式，不是hash模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/TestDemo',
      component: () => import('@/components/TestDemo.vue')
    }
  ]
})

export default router
