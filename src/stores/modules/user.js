import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//用戶模塊 ex:token setToken removeToken
export const useUerStore = defineStore(
  'bigUser',
  () => {
    const token = ref(0)
    const doubleCount = computed(() => token.value * 2)
    function setToken(newToken) {
      token.value = newToken
    }
    function removeToken() {
      token.value = ''
    }

    return { token, doubleCount, removeToken, setToken }
  },
  { persist: true } //加入持久化配置
)
