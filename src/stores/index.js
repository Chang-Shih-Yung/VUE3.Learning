import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

//導出pinia：這樣在main.js中就可以掛載pinia
export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }

//上面兩行等價於下面這行
//從此別的模塊引入只需要寫import { xxx } from '@/stores'

//接收user/counter模塊的所有按需導出
export * from './modules/user'
export * from './modules/counter'
