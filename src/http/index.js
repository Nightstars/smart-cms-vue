import axios from 'axios'

// axios.create 创建axios 实例
const http = axios.create({
  baseURL: 'http://cloudapps.life:61208/api/3',
  timeout: 1000,
  // headers: {'': ''}
})

// 添加请求拦截器
http.interceptors.request.use(
  config =>
    // config.headers.token = '1234567890'
    // eslint-disable-next-line implicit-arrow-linebreak
    config,
  // error =>
  // d对请求错误做些什么
  // Promise.reject(error),
)

// 添加响应拦截器
http.interceptors.response.use(
  response => response.data,
  error => {
    // Promise.reject(error)
    console.log(error)
  },
)

export default http
