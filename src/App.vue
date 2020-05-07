<template>
  <div id="app">
    <router-view></router-view>
    <footerNav></footerNav>
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
  #app
    width 100%
    height 100%
</style>
