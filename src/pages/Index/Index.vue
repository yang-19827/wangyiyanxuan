<template>
  <div class="indexContainer">
    <div class="header">
      <router-link to='/Index'>
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"/>
      </router-link>
      <div class="search" @click="$router.push('/Search')">
        <i></i>
        <span>搜索商品，共99999款好物</span>
      </div>
      <div class="login">
        登录
      </div>
    </div>
    <div class="navContainer">
      <div class="scrollWrap" v-if='indexData.kingKongModule'>
        <div class="navItem action">
          <span>推荐</span>
        </div>
        <div class="navItem"  v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="contentContainer">
      <div class="content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in indexData.focusList" :key="index">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="serveContainer">
          <ul class="serveList">
            <li class="serveItem" v-for="(item,index) in indexData.policyDescList" :key='index'>
              <img :src="item.icon" alt="">
              <span>{{item.desc}}</span>
            </li>
          </ul>
        </div>
        <div class="categoryContainer">
          <ul class="categoryList" v-if="indexData.kingKongModule">
            <li class="categoryItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>
        <div class="newUser">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
          </div>
          <div class="gift">
              <div class="header">
                <span>新人专享礼</span>
              </div>
              <div class="content">
                <div class="left">
                  <span>新人专属礼包</span>
                  <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                </div>
                <div class="right" v-if="indexData.indexActivityModule">
                  <div class='rightItem one'>
                    <div class="circle">
                      <span class="new">{{indexData.indexActivityModule[0].activityPrice}}</span>
                      <span class="old">{{indexData.indexActivityModule[0].originPrice}}</span>
                    </div>
                    <div class="text">
                      <span class="title">{{indexData.indexActivityModule[0].title}}</span>
                      <span class="desc">{{indexData.indexActivityModule[0].subTitle}}</span>
                    </div>
                    <img :src="indexData.indexActivityModule[0].showPicUrl" alt="">
                  </div>
                  <div class='rightItem two'>
                    <div class="circle">
                      <span class="new">￥9.9</span>
                      <span class="old">￥18.9</span>
                    </div>
                       <div class="text">
                        <span class="title">新人拼团</span>
                        <span class="desc">1元起包邮</span>
                      </div>
                      <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="hotListContainer">
          <div class="header">
            类目热销榜
          </div>
          <div class="big">
            <div class="bigItem" v-for="(item, index) in bigItem" :key="index">
              <span>{{item.categoryName}}</span>
              <img :src="item.showPicUrl" alt="">
            </div>
          </div>
          <div class="small">
            <div class="smallItem"  v-for="(item, index) in smallItem" :key="index">
                <span>{{item.categoryName}}</span>
                <img :src="item.showPicUrl" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState,mapActions} from 'vuex'
export default {
  name:"Index",
  computed: {
    ...mapState({
      indexData:state => state.index.indexData
    }),
    bigItem(){
      if(this.indexData.categoryHotSellModule){
        return this.indexData.categoryHotSellModule.categoryList.slice(0,2)
      }
    },
    smallItem(){ 
      if(this.indexData.categoryHotSellModule){
        return this.indexData.categoryHotSellModule.categoryList.slice(2)
      }
    },
  },
  components:{
  },
  methods: {
    ...mapActions({
      changeindexdata:'getIdnexData'
    })
  },
  async mounted(){
   await this.changeindexdata()
  },
  watch: {
    indexData(){
      this.$nextTick(()=>{
        new BScroll('.navContainer',{
          scrollX: true,
          click:true
        })
        new BScroll('.contentContainer',{
          scrollY: true,
          click:true
        })
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
    }
  },
}
</script>

<style lang='stylus'>
  .indexContainer
    width 100%
    height 100%
    >.header
      height 44px
      width 100%
      display flex
      padding 5px 10px
      box-sizing border-box
      align-items center
      a
        width 69px
        height 20px
      img 
        width 100% 
        height 100%
      .search
        display flex
        background-color #eee
        width 221px
        height 28px
        align-items center
        border-radius 5px
        margin 0 12px 0 12px
        i
          width 14px
          height 14px
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
          background-size 100%
          margin 0 6px 0 10px
        span 
          font-size 14px
          color #666
      .login
        width 37px
        height 18px
        border 1px solid #DD1A21
        color #DD1A21
        text-align center
        line-height 18px
        border-radius 5px
        font-size 14px
    .navContainer
      width 100%
      height 30px
      .scrollWrap
        display flex 
        padding-left  15px
        .navItem
          position relative
          height 30px
          font-size 14px
          color #333
          padding 0 5px
          margin 0 5px
          white-space nowrap
          text-align center
          line-height 30px
          &.action::after
            position absolute
            content ''
            display block
            height 2px
            width 100%
            background-color #DD1A21
            left 0 
            bottom 2px
    .contentContainer
      height calc(100vh - 115px)
      overflow hidden
      background-color #eee
      margin-bottom 50px
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
      .serveContainer
        background-color #fff
        height 36px
        box-sizing border-box
        padding 0 15px
        line-height 36px
        .serveList
          display flex
          align-items center
          .serveItem
            display flex
            align-items center
            flex 1
            img 
              width 16px
              height 16px
            span 
              color #333
      .categoryContainer
        background-color #fff
        .categoryList
          display flex
          flex-wrap wrap
          .categoryItem
            display flex
            flex-direction column
            align-items center
            margin 5px 10px
            flex 1
            img 
              width 55px
              height 55px
              margin-bottom 8px
      .newUser
        background-color #fff
        margin-top 10px
        .banner
          img 
            width 100%
            height 120px
        .gift
          width 100%
          height 279px
          padding-bottom 15px
          margin 10px 0
          .header
            position relative
            height 45px
            width 100%
            padding 0 15px
            line-height 45px
            font-size 16px
            text-align center
            &::before
              content: '';
              position: absolute;
              top: 22px;
              width: 25px;
              height: 2px;
              background: #333;
              left 133px
            &::after
              content: '';
              position: absolute;
              top: 22px;
              width: 25px;
              height: 2px;
              background: #333;
              right 135px
          .content
            width 100%
            height 219px
            display flex
            .left
              flex 1
              background-color #F9E9CF
              span 
                display inline-block
                font-size 16px
                padding 22px 0px 0px 22px 
                color #333
              img 
                width 129px
                height 129px
                margin 18px 0px 0px 28px 
            .right
              flex 1
              .rightItem
                position relative
                height 107.5px
                display flex
                margin-left 3px
                .circle
                    position absolute
                    right 30px
                    top 8px
                    display block
                    border-radius 50%
                    width 40px
                    height 40px
                    background-color #F59524
                    opacity 0.7
                    color #fff
                    text-align center
                    display flex
                    flex-direction column
                    align-items center
                    justify-content center
                    .new
                      font-size 14px
                    .old
                      font-size 10px
                      text-decoration line-through
                &.one
                  background-color #FBE2D3
                  margin-bottom 3px
                &.two
                  background-color #FFECC2
                .text
                  display flex
                  flex-direction column
                  padding 9px 12px 0 19px
                  .title
                    font-size 16px
                    color #333
                    white-space nowrap
                    margin 10px 0 5px 0
                  .desc
                    font-size 12px
                    color #666
                img 
                  width 100px
                  height 100px
      .hotListContainer
        background-color #fff
        padding 0 12px 15px 12px 
        .header
          height 50px
          width 100%
          padding 0 20px
          font-size 16px
          line-height 50px
        .big
          display flex
          .bigItem
            display flex
            align-items center
            flex 1
            &:nth-of-type(1)
              background-color #F9F3E4
            &:nth-of-type(2)
              background-color #EBEFF6
            img 
              width 100px
              height 100px
            span
              font-size 14px
              position relative
              margin 0px 15px 0 15px
              &:after
                content ""
                display block
                width 25px
                height 2px
                background-color #333
                position absolute
                left 0px
                top 22px
        .small
          display flex
          flex-wrap wrap 
          justify-content space-between
          .smallItem
            display flex
            flex-direction column
            align-items center
            width 82.5px
            height 90px
            margin-top 5px
            background-color #F5F5F5
            span  
              font-size 12px
              margin 8px 0 5px 0
            img 
              width 60px
              height 60px
              
</style>