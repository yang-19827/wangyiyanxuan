<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index">
          <img :src="item.picUrl ? item.picUrl : item" alt="">
        </div>
      </div>
      <div class="swiper-pagination">
        
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  props:{
    bannerData:Array
  },
  mounted(){
  },
  watch: {
    bannerData(){
      // this.$nextTick(()=>{
      new Swiper('.swiper-container',{
          autoplay:true,
          loop:true,
          pagination:{
            el: '.swiper-pagination',
            type:'custom',
            renderCustom: function(swiper, current, total) { //自定义分页器
            var paginationHtml  = "";
            for(let i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if(i == (current - 1)) {
                paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                paginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return paginationHtml;
          }
          }
        })
    // })
    }
  },
}
</script>

<style lang='stylus' scoped>
  .swiper-container
    background-color #fff
    height 148px
    .swiper-wrapper
      height 148px
      img 
        width 100%
        height 100%
    .swiper-pagination
      fons-size 999px
      .swiper-pagination-customs
        width 20px
        height 2px
        background-color #ffffff
        opacity .4
        margin 0 3px
        display inline-block
        &.swiper-pagination-customs-active
          opacity 1
</style>