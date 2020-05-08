<template>
  <div class="showEmail">
    <div class="logo">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <form class='phoneContainer' @submit.prevent="onSubmit">
      <div class="email">
        <input 
          type="email" 
          name="email" 
          placeholder="请输入邮箱"
          v-validate="`required|email`"
        >
          <span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="pwd">
        <input type="text" name="pwd" placeholder="密码" v-validate="`required|pwd`">
        <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
      </div>
      <div class="text">
        <span style="color:#666">注册账号</span>
        <span style="color:#666">忘记密码</span>
      </div>
      <button class="btn">登录</button>
    </form>
    <div class="or" @click="$router.push('/Login/index')">其他登录方式></div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  components:{
      [Toast.name]:Toast
    },
  methods: {
    async onSubmit(){
      const flag = await this.$validator.validateAll(["email","pwd"])
      if(flag){
        console.log('表单提交了')
      }else{
        Toast.fail("请输入正确的用户信息")
      }
    }
  },
}
</script>

<style lang='stylus'>
  .showEmail
    width 335px
    height 258px
    margin 0 auto
    .logo
      text-align center
      margin 40px 0 40px 0
      img 
        width 134px
        height 45px
    .phoneContainer
      .email
        position relative
        width 100%
        height 45px
        border-bottom  1px solid #eee
        input 
          position absolute
          top 50%
          transform translateY(-50%)
          display block
          width 100%
          height 21px
          font-size 14px
      .pwd
        position relative
        width 100%
        height 45px
        border-bottom  1px solid #eee
        margin-top 15px
        input 
          position absolute
          top 50%
          transform translateY(-50%)
          display block
          width 100%
          height 21px
          font-size 14px
      .text
        display flex
        font-size 14px
        justify-content space-between
        margin 20px 0 15px 0
      .btn
        width 100% 
        height 45px
        background-color #DD1A21
        color #ffffff
        text-align center
        line-height 45px
        display block
        outline-style none
        border none 
        border-radius 5px
        margin-bottom 10px
        font-size 14px
        &.off
          opacity 0.5
          pointer-events none
      .accept
        display flex
        align-items center
        .wrap
          width 14px
          height 14px
          border 1px solid #ccc
          margin-right 5px
          line-height 14px
          text-align center
    .or
      font-size 14px
      color #666
      text-align center
      height 40px
      line-height 40px
      margin-top 60px
</style>