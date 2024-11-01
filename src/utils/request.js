/*看後端json文件，布置全局的資料響應式處理*/
///https://apifox.com/apidoc/shared-26c67aee-0233-4d23-aab7-08448fdf95ff/api-93850050///

import axios from 'axios'
//Pinia倉庫，index.js導出
import { useUerStore } from '@/stores'
//案需導入
import { ElMessage } from 'element-plus'
import router from '@/router'

//基地址
const baseURL = 'http://big-event-vue-api-t.itheima.net'
//創建axios實例
const instance = axios.create({
  baseURL,
  timeout: 5000 // 设置超时时间为 5 秒
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    //用Pinia倉庫
    const useStore = useUerStore()
    if (useStore.token) {
      //看後端文檔，Header中Authorization是token
      config.headers.Authorization = useStore.token // 在请求头中携带 token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }

    // TODO 3. 处理业务失败

    //但凡事非0的情況提示:業務失敗～拋出錯誤
    //res.data是後端返回的json對象整體，message是後端返回的json對象中的message
    //不是message，那就是server服務異常
    ElMessage.error(res.data.message || '服務異常')
    //返回錯誤狀態
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    //錯誤特殊情況：401權限不足、token過期>>>攔截並回到登陸頁面
    if (err.response && err.response.status === 401) {
      router.push('/')
    }
    //錯誤默認情況
    ElMessage.error(err.response.data.message || '服務異常')
    return Promise.reject(err)
  }
)

export default instance
//按須導出基地址
export { baseURL }
