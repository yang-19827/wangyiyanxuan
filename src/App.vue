<template>
  <div id="app">
    <router-view></router-view>
    <footerNav v-show="$route.meta.showFooter"></footerNav>
  </div>
</template>
<script>
import footerNav from "components/FooterNav/FooterNav.vue"
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
