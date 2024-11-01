import { ref } from 'vue'
import { defineStore } from 'pinia'

//數字計數器模塊
export const useCountStore = defineStore('big-count', () => {
  const count = ref(100)
  const add = (n) => (count.value += n)

  return { count, add }
})
