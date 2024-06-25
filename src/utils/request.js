import axios from 'axios'
import { useUerStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 10000 // 设置超时时间为 10 秒
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const useStore = useUerStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token // 在请求头中携带 token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 200) {
      return res
    }
    //業務失敗～拋出錯誤
    ElMessage.error(res.data.message || '服務異常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    //錯誤情況：401權限不足、token過期>>>攔截登陸
    if (err.response && err.response.status === 401) {
      router.push('/login')
    }
    ElMessage.error(err.response.data.message || '服務異常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
