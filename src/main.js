import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//掛載pinia
import pinia from './stores/index.js'
import '@/assets/main.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
