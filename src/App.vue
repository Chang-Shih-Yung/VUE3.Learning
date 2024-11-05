<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'

// isRegister的true或false，來切換註冊或登錄表單
const isRegister = ref(true)

/*用戶註冊*/
// 整個用於提交el-form的對象：裡面有username、password、repassword
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})

// el-form表單驗證規則
const rules = ref({
  username: [{ required: true, message: '請輸入用戶名', trigger: 'blur' }],
  password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }],
  repassword: [{ required: true, message: '請再次輸入密碼', trigger: 'blur' }]
})
</script>

<template>
  <!-- el-row一行分成24等分 -->
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <!-- offset左側margin份數  -->
    <el-col :span="6" :offset="3" class="form">
      <!-- el-form是表單組件 -->
      <!-- isRegister 為true，看到註冊相關表單  -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <!-- 表單的一行 -->
        <el-form-item>
          <h1>用戶註冊</h1>
        </el-form-item>
        <el-form-item prop="username">
          <!-- el-input輸入框 -->
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="請輸入用戶名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="請輸入密碼"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="formModel.repassword"
            :prefix-icon="Lock"
            type="password"
            placeholder="再次輸入密碼"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space> 註冊 </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false"> &lt; 返回 </el-link>
        </el-form-item>
      </el-form>
      <el-form ref="form" size="large" autocomplete="off" v-else>
        <!-- isRegister 為false，看到登錄相關表單  -->
        <el-form-item>
          <h1>用戶登錄</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>記住我</el-checkbox>
            <el-link type="primary" :underline="false">忘記密碼？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space>登錄</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true"> 註冊 > </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #000013;

  .bg {
    background: url('@/assets/bg/bg.png') no-repeat center / cover;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
      background-color: #a200ff;

      &:hover {
        background-color: #7000b1;
      }
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  h1 {
    color: #bd30ff;
  }

  .el-link {
    transition: all 0.3s;
    color: #7a7a7a;

    &:hover {
      color: #cccccc;
      transition: all 0.3s;
    }
  }
}
</style>
