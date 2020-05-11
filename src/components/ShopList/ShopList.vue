<template>
  <div class="cateContainer">
    <div class="content" v-if="cateObj">
      <div class="swiper-container" >
          <div class="swiper-wrapper" v-if="cateObj.category">
            <div class="swiper-slide" v-for="(item,index) in cateObj.category.bannerUrlList" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
          <span class="title">{{cateObj.category.name}}</span>
          <span class="desc">{{cateObj.category.frontName}}</span>
          <Shop :itemList="cateObj.itemList"></Shop>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import Shop from 'components/Shop/Shop.vue'
export default {
  name:'ShopList',
  // 父组件传进来的id
  props:['id'],
  data(){
    return{
      cateDatas:[]
    }
  },
  components:{
    'Shop':Shop
  },
  async mounted(){
    this.cateDatas = await this.$http.index.getIndexList()
    // new BScroll('.contentContainer',{
    //       scrollY: true,
    //       click:true
    //     })
    this.$nextTick(()=>{
        // console.log(this.bscroll)
        this.bscroll = new BScroll('.cateContainer',{
          scrollY: true,
          click:true,
          mouseWheel: true,//开启鼠标滚轮
        })
        this.bscroll.scrollTo(0,0,0)
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
      })
  },
  computed:{
    cateObj(){
     return this.cateDatas.find((item,index) => {
          // console.log(item.category.parentId,this.id)
          return item.category.parentId === this.id
        })
    }
  },
  updated(){
  },
  watch: {
    cateObj(){
      
    }
  },
}
</script>

<style lang='stylus'>
  .cateContainer
    height  calc(100vh - 115px)
    .content
      .swiper-container
          background-color #fff
          height 148px
          .swiper-wrapper
            height 148px
            img 
              width 100%
              height auto
          .swiper-pagination-customs
            width 20px
            height 2px
            background-color #ffffff
            opacity .4
            margin 0 3px
            display inline-block
            &.swiper-pagination-customs-active
              opacity 1
        .title
          display block
          text-align center
          font-size 17px
          color #333
          line-height 35px
        .desc
          display block
          text-align center
          font-size 12px
          color #999
          line-height 20px
</style>