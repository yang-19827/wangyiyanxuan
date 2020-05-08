import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from "@/router"
import myAxios from '@/ajax'
import store from '@/store'
Vue.config.productionTip = false
Vue.prototype.$http = myAxios
import '@/veeValidate' //表单验证
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
