<template>
  <div class="userContainer">
    <div class="header">
      <router-link to="/Index">
        <i class="iconfont icon-shangchengicon21"></i>
      </router-link>
      <div class="text"></div>
      <div class="right">
        <router-link to='/Search'>
          <i class="iconfont icon-fangdajing search"></i>
        </router-link>
        <router-link to='/Cart'>
          <i class="iconfont icon-shop"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"User"
}
</script>

<style lang='stylus'>
  .userContainer
    width 100%
    height 100%
    .header
      display flex
      justify-content space-between
      font-size 23px
      padding 0 15px
      align-items center
      height 44px
      .text
        width 86px
        height 27px
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp')
        background-size 100%
      i
        font-size 26px
        &.search
          position relative
          left -12px
</style>