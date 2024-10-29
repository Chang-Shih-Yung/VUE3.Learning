import { defineStore } from 'pinia'
import { ref } from 'vue'
//用戶模塊 ex:token setToken removeToken
export const useUerStore = defineStore(
  'bigUser',
  () => {
    const token = ref('')
    function setToken(newToken) {
      token.value = newToken
    }
    function removeToken() {
      token.value = ''
    }

    return { token, removeToken, setToken }
  },
  { persist: true } //加入持久化配置，刷新頁面token不丟失
)
