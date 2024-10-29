<script setup>
// import { useRoute } from 'vue-router'
//獲取當前路由參數（內部細項目）
// const route = useRoute()

//獲取路由對象
import { useRouter } from 'vue-router'
const router = useRouter()

const home = () => {
  router.push('/')
}
</script>

<template>
  <div class="test-page">
    <div>我是Test</div>
    <el-button @click="home">Back Home</el-button>
  </div>
</template>

<style scoped>
.test-page {
  margin: 2rem;
}
</style>
