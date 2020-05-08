<template>
  <div id="app">
    <router-view></router-view>
    <footerNav v-show="$route.meta.showFooter"></footerNav>
  </div>
</template>
<script>
import footerNav from "components/footerNav.vue"
export default {
  name: 'App',
  components:{
    footerNav:footerNav,
  }
}
</script>

<style scoped lang='stylus'>
@import url('//at.alicdn.com/t/font_1804243_c6tokc53hin.css')
  #app
    width 100%
    height 100%
</style>
