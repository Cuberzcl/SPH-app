import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const _request = axios.create({
  baseURL: '/mock',
  timeout: 5000
})

// 请求拦截器
_request.interceptors.request.use(
  function (config) {
    //启动进度条
    nprogress.start()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

//响应拦截器
_request.interceptors.response.use(
  function (res) {
    //结束进度条
    nprogress.done()
    return res
  },
  function (err) {
    return Promise.reject(err)
  }
)

export default _request
