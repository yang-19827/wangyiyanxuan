import { loading, success, fail } from './toast'
export default (axios, config) => {
  //检测配置对象是否符合
  let modelName = config.name || "default"
  if (!config.api) {
    throw new Error(`${modelName}中必须包含api属性`)
  }
  if (Object.prototype.toString.call(config.api) !== "[object Object]") {
    throw new Error(`${modelName}api属性必须为对象`)
  }
  //发送请求的逻辑
  let methodsObj = {};
  let api = config.api
  for (let apiName in api) {
    let { url, method, isForm, isToast, hooks,corsUrl ,token} = api[apiName]
    methodsObj[apiName] = async (data = {}) => {
      let body = ''
      let transformData = {}
      hooks = hooks || {}
      //是否携带token
      let headers = {};
      let tokenString = ''
      if(token)  tokenString = token()
      //若token()执行的结构为undefind则不添加Authorization属性
      if(tokenString) headers.Authorization = tokenString
      //请求级别的 自定义钩子函数
      let { beforeReq, successReq, failReq } = hooks
      if (isForm) {
        transformData = new FormData();
        for (let key in data) {
          transformData.append(key, data[key])
        }
      } else {
        transformData = data
      }
      //解决携带跨域的请求
      if(corsUrl){
        url = corsUrl + url;
        corsUrl = ''
      }
      try {
        beforeReq && beforeReq.call(config)
        isToast && loading()
        switch (method) {
          case "get":
          case "delete":
            body = await axios({
              url,
              method,
              params: transformData,
              headers
            })
            break;
          case 'post':
          case 'put':
            body = await axios({
              url,
              method,
              data: transformData
            })
            break;
        }
        successReq && successReq.call(config,body)
        isToast && success()
      } catch (err) {
        failReq && failReq.call(config)
        isToast && fail()
        return Promise.reject(err)
      }
      return body.data
    }
  }
  return methodsObj
}