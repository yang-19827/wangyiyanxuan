<template>
  <div class="userContainer">
    <ele-Header>
      <template>
        <div class="text"></div>
      </template>
    </ele-Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/Header/Header.vue'
export default {
  name:"User",
  data() {
    return {
      showPage:'',
      siAccept:true,
      phone:""
    }
  },
  components:{
    'ele-Header':Header
  },
  methods: {
    onSubmit(){
      console.log("表单提交了")
    }
  },
}
</script>

<style lang='stylus'>
  .userContainer
    position relative
    width 100%
    height 100%
</style>