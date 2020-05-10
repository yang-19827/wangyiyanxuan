<template>
  <div class="navContainer">
    <van-tabbar  active-color='red' route>
      <van-tabbar-item icon="home-o" replace to="/Index">
        首页
        </van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to="/Category">
        分类
      </van-tabbar-item>
      <van-tabbar-item icon="fire-o" replace to="/Buy">
        值得买
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o" replace to="/Cart">
        购物车
      </van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/Person">
        个人
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import router from 'router'
export default {
  name:'footerNav',
  data() {
    return {
    }
  },
  methods: {
    goTo(path){
      console.log(router)
      router.replace(path)
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