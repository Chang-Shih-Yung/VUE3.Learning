<!-- <script setup>
import { useUerStore } from '@/stores'
import { useRouter } from 'vue-router'
// import { useRoute } from 'vue-router'
//獲取當前路由參數（內部細項目）
// const route = useRoute()
//獲取路由對象
const router = useRouter()

// const home = () => {
//   router.push('/')
// }

const test = () => {
  router.push('/')
}
const userStore = useUerStore()
</script>

<template>
  <div class="home-page">
    <!-- <el-button @click="home">Back Home</el-button> -->
    <el-button @click="test">TestPage</el-button>
    <p>{{ userStore.token }}</p>
    <el-button type="primary" @click="userStore.setToken('fgrve1387489342343224')">登入</el-button>
    <el-button type="success" @click="userStore.removeToken()">退出</el-button>
  </div>
</template>

<style scoped>
.home-page {
  margin: 2rem;
}
</style> -->
