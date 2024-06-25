<script setup>
import { useUerStore } from '@/stores'
import { useRouter } from 'vue-router'
// import { useRoute } from 'vue-router'
//獲取當前路由參數（內部細項目）
// const route = useRoute()
//獲取路由對象
const router = useRouter()

const home = () => {
  router.push('/home')
}

const list = () => {
  router.push('/list')
}
const userStore = useUerStore()
</script>

<template>
  <div>我是App</div>
  <TestDemo></TestDemo>
  <el-button @click="home">home</el-button>
  <el-button @click="list">list</el-button>
  <p>{{ userStore.token }}</p>
  <el-button type="primary" @click="userStore.setToken('fgrve1387489342343224')">登入</el-button>
  <el-button type="success" @click="userStore.removeToken()">退出</el-button>
</template>

<style scoped></style>
