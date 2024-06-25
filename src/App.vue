<script setup>
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
</script>

<template>
  <div>我是App</div>
  <TestDemo></TestDemo>
  <el-button @click="home">home</el-button>
  <el-button @click="list">list</el-button>
</template>

<style scoped></style>
