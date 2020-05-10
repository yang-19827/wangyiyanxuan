<template>
  <div class="buyContainer">
    <ele-Header>
      <template>
        <span class="txt">值得买</span>
      </template>
    </ele-Header>
    <div class="contentContainer" ref="wrap">
      <div ref="content">
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
          <div class="left">
            <ShopItem v-for="(item,index) in evenBuyDatas" :key="index" :shopItem='item'></ShopItem>
          </div>
          <div class="right">
            <ShopItem v-for="(item,index) in oddBuyDatas" :key="index" :shopItem='item'></ShopItem>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import Header from 'components/Header/Header.vue'
import ShopItem from 'components/ShopItem/ShopItem.vue'
export default {
  data() {
    return {
      buyNavDatas:[],
      oddBuyDatas:[],
      evenBuyDatas:[],
      page:1
    }
  },
  components:{
    'ele-Header':Header,
    'ShopItem' :ShopItem
  },
  methods: {
    // 获取最大滑动Y
    getMaxScroll(){
        let innerHeight = this.$refs.content.offsetHeight
        let wrapHeight = this.$refs.wrap.offsetHeight
        return innerHeight - wrapHeight
    },
    // 请求每页数据
    async getPagesData(pageNumber){
      //分页数据
      let autoData = await this.$http.buy.getBuyAutoData({page:pageNumber,size:10})
      autoData.result.forEach((item,index) => {
        if(index % 2 === 0) item.topics && this.evenBuyDatas.push(item.topics[0])
        else item.topics && this.oddBuyDatas.push(item.topics[0])
      });
    }
  },
  async mounted(){
    // 导航数据
    let navData = await this.$http.buy.getBuyNavData()
    this.buyNavDatas = navData.navList
    //首页数据
    let data = await this.$http.buy.getBuyData()
    data.forEach((item,index) => {
      if(index % 2 === 0) this.evenBuyDatas.push(item.topics[0])
      else this.oddBuyDatas.push(item.topics[1])
    });
        // this.BScroll && this.BScroll.refresh()
        // this.BScroll.refresh()
    this.$nextTick(()=>{
      this.BSscroll = new BScroll('.contentContainer',{
          scrollY: true,
          click:true,
          pullUpLoad:true
      })
      this.BSscroll && this.BSscroll.refresh()
      this.BSscroll.on('pullingUp',()=>{
        this.page += 1
        this.getPagesData(this.page)
        this.BSscroll.finishPullUp()
      })
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
  },
  watch: {
    evenBuyDatas(){
      // this.$nextTick(()=>{
      //   this.maxScrollY = this.BSscroll.maxScrollY
      //   //滚动结束后的回调
      //   this.BSscroll.on('scrollEnd',({x,y})=>{
      //     // console.log("111")
      //     this.timer = setTimeout(()=>{
      //       clearTimeout(this.timer)
      //       if(y === this.maxScrollY){
      //         this.page += 1
      //         this.getPagesData(this.page)
      //       }
      //     },500)
      //   })
      // })
      // this.$nextTick(()=>{
      //   let maxScrollY =  this.getMaxScroll()
      //   console.log(maxScrollY)
      //   this.BSscroll.on('scrollEnd',({x,y})=>{
      //     if(maxScrollY >= -y) {
      //       this.page += 1
      //       this.getPagesData(this.page)
      //     }
      //   })
      // })
      
        // this.BScroll.refresh()
        // this.BScroll.on('scrollEnd',({x,y})=>{
        //   this.scrolly =
        // })
    }
  },
}
</script>

<style lang='stylus'>
  .buyContainer
    width 100%
    height 100%
    .contentContainer
      height calc(100vh - 95px)
      overflow hidden
      background-color: #eee;
      .ListBannerContainer
        width 100%
        height 342px
        position relative
        margin-bottom 15px
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
      .shopList
        display flex
        justify-content space-evenly
</style>