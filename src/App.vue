<script setup>
//pinia統一導出方式:去看index.js
import { useUerStore, useCountStore } from '@/stores'
// import { useCountStore } from '@/stores/modules/counter.js'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
const home = () => {
  router.push('/')
}

const userStore = useUerStore()
const countStore = useCountStore()
const goList = () => {
  router.push('/')
}
</script>

<template>
  <hr />
  <router-view></router-view>
  <hr />
  <hr />

  <div>
    我是App
    <el-button @click="home">跳首頁</el-button>
    <el-button @click="goList">跳列表頁</el-button>

    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>

    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('Bearer sidfhfeiwhuvyweqrjh')">登入</el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>

    <hr />

    {{ countStore.count }}
    <el-button @click="countStore.add(2)">加法2</el-button>
  </div>
</template>

<style scoped></style>
