<template>
  <div class='showAll'>
    <div class="logo">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="login">
      <div class="phone" @click="$router.push('/Login/phone')">
        <i class="iconfont icon-shouji"></i>
        <span>手机号快捷登录</span>
      </div>
      <div class="email" @click="$router.push('/Login/email')">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
    </div>
    <div class="footer">
      <div class="wechat">
        <i class="iconfont icon-wechat"></i>
        <span>微信</span>
      </div>
      <div class="qq">
        <i class="iconfont icon-ziyuan"></i>
        <span>QQ</span>
      </div>
      <div class="weibo">
        <i class="iconfont icon-iconfontweibowukuang-copy"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus'>
  .showAll
    height calc(100vh - 45px)
    background-color #eee
    .logo
      text-align center
      padding 80px 0 120px 0
      img 
        width 134px
        height 45px
    .login
      font-size 14px
      text-align center
      line-height 40px
      width 335px
      margin 0 auto
      i 
        font-size 20px
        position relative
        top 2px
        left -6px
      .phone
        width 335px
        height 47px
        background-color #DD1A21
        border-radius 5px
        color #ffffff
        border 1px solid #DD1A21
        margin-bottom  20px
      .email
        width 335px
        height 47px
        border-radius 5px
        color #DD1A21
        border 1px solid #DD1A21
    .footer
      position absolute
      bottom 30px
      left 50%
      transform translateX(-50%)
      display flex
      color #666
      div
        width 91px
        height 20px
        text-align center
        font-size 14px
        line-height 20px
        &.qq
          border-left 1px solid #666
          border-right 1px solid #666
</style>