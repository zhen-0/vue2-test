import axios from 'axios'
// import { URL_ENCODED, JSON, FORM_DATA } from 'consts'
// import qs from 'qs'

// 全局默认设置
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common.Authorization = 'AUTH_TOKEN'
axios.defaults.timeout = 2500
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 设置请求
const option = {

}

const instance = axios.create(option)

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// get请求
export const $get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((res) =>
      resolve(res)
    ).catch(err => {
      reject(err)
    })
  })
}

// post请求
export const $post = (url, params, config) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then((res) =>
      resolve(res)
    ).catch(err => {
      reject(err)
    })
  })
}
