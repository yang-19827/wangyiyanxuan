import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN'

VeeValidate.Validator.localize('zh_CN',{
    messages: zh_CN.messages,
    attributes:{
      phone:'手机号',
      code:"验证码",
      email: "邮箱",
      pwd:"密码"
    }
})
VeeValidate.Validator.extend('phone', {
  validate: value => {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
  },
  getMessage: field => field + '格式不正确'
})
VeeValidate.Validator.extend('code', {
  validate: value => {
    return /^\d{6}$/.test(value)
  },
  getMessage: field => field + '格式不正确'
})
VeeValidate.Validator.extend('email', {
  validate: value => {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)
  },
  getMessage: field => field + '格式不正确'
})
VeeValidate.Validator.extend('pwd', {
  validate: value => {
    return /^\d{6,12}$/.test(value)
  },
  getMessage: field => field + '格式不正确'
})