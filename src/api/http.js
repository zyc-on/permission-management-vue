import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

instance.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
})

instance.interceptors.response.use(res => {
  if (res.data.message && res.status >= 200 && res.status < 400) {
    Message({
      type: 'success',
      message: res.data.message
    })
  }
  return res
}, err => {
  if (err.response.data.message) {
    Message({
      type: 'error',
      message: err.response.data.message
    })
  }
  return Promise.reject(err)
})
export default instance
