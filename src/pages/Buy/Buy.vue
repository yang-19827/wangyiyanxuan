<template>
  <div class="buyContainer">
    <ele-Header>
      <template>
        <span class="txt">值得买</span>
      </template>
    </ele-Header>
    <div class="ListBannerContainer">
      <div class="title">
        <img class="logo" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="text">严选好物 用心生活</div>
        <img class="bg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in buyNavDatas" :key="index">
            <img :src="item.picUrl">
            <div class="title">{{item.mainTitle}}</div>
            <div class="desc">{{item.viceTitle}}</div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="shopList">
        <ShopItem></ShopItem>
      <div class="right">
        <ShopItem></ShopItem>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Header from 'components/Header/Header.vue'
import ShopItem from 'components/ShopItem/ShopItem.vue'
export default {
  data() {
    return {
      buyNavDatas:[],
      buyDatas:[]
    }
  },
  components:{
    'ele-Header':Header,
    'ShopItem' :ShopItem
  },
  async mounted(){
    let navData = await this.$http.buy.getBuyNavData()
    let data = await this.$http.buy.getBuyData()
    console.log(data)
    this.buyNavDatas = navData.navList
    this.$nextTick(()=>{
      new Swiper('.swiper-container',{
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
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
        },
      })
    })
  }
}
</script>

<style lang='stylus'>
  .buyContainer
    width 100%
    height 100%
    .ListBannerContainer
      width 100%
      height 342px
      position relative
      .logo
        width 65px
        height 34px
        position absolute
        left 8px
        top 30px
        z-index 1
      .text
        position absolute
        left 80px
        top 45px
        z-index 1
        color #fff
        font-size 15px
      .bg
        width 100%
        height 259px
        position absolute
        left 0
        top 0
      .swiper-container
        width 355px
        height 270px
        background-color #fff
        border-radius 10px
        position absolute
        top 70px
        left 0
        right 0
        bottom 0
        margin auto
        .swiper-wrapper
          display flex
          align-content stretch 
          .swiper-slide
            width 60px !important
            height 105px
            display flex
            flex-direction column
            align-items center
            justify-content space-evenly
            margin-top 10px !important
            margin-right 0px !important
            img 
              width 60px
              height 60px
            .title
              font-weight bold
              font-size 15px
              white-space nowrap
            .desc
              font-size 12px
              color #666
              white-space nowrap
        .swiper-pagination-customs
          display inline-block
          width 20px
          height 2px
          background-color rgba(0,0,0,0.3)
        .swiper-pagination-customs-active
          background-color red
        .swiper-pagination
          top 235px
        
    
</style>