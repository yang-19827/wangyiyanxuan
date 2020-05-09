import axios from 'axios'
import config from './config'

let axiosins = axios.create({
  baseURL: config.baseURL
})
axiosins.interceptors.request.use((axiosConfig) => {
  config.hooks && config.hooks.beforeReq && config.hooks.beforeReq.call(config)
  return axiosConfig;
})
axiosins.interceptors.response.use(
  (response) => {
    config.hooks && config.hooks.successReq && config.hooks.successReq.call(config,response)
    return response.data
  },
  (error) => { 
    config.hooks && config.hooks.failReq && config.hooks.failReq.call(config)
    return Promise.reject(error) 
  }
)
export default axiosins