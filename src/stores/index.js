import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }

//上面兩行等價於下面這行
//接收user模塊的所有按需導出
//從此別的模塊引入只需要寫import { xxx } from '@/stores'
export * from './modules/user'
