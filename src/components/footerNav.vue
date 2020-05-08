<template>
  <div class="navContainer">
    <van-tabbar v-model='index' active-color='red'>
      <van-tabbar-item icon="home-o">
        <router-link to='/Index'>首页</router-link>
        </van-tabbar-item>
      <van-tabbar-item icon="apps-o">
        <router-link to='/Category'>分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="fire-o">
        <router-link to='/Buy'>值得买</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o">
        <router-link to='/Cart'>购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="user-o">
        <router-link to='/Login'>个人</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name:'footerNav',
  data() {
    return {
      index:0
    }
  },
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem .name]:TabbarItem ,
  }
}
</script>

<style lang='stylus'>
  .navContainer
    display flex
    bottom 0
    left 0
    .van-tabbar-item--active
      a
        color red
    
</style>