<template>
  <div class="Container">
	  <div class="title">
      <i></i>
      <span>搜索商品，共99999款好物</span>
    </div>
	  <div class="cateContainer">
		  <div class="left">
			  <div class="leftScroll">
				  <div 
					class="leftScrollItem" 
					:class="{active : navId === item.id}"
					v-for="(item) in CateNavDatas.categoryL1List"
					:key='item.id'
					@click="changeNav(item.id)"
					>{{item.name}}</div>
			  </div>
		  </div>
		  <div class="right" v-if="categoryItem">
        <div class="rightScroll">
          <img class="bigImg" :src="categoryItem.bannerUrl"/>
          <div class="listWrap">
            <div class="item" v-for="(item,index) in categoryItem.categoryList ? categoryItem.categoryList : categoryItem.subCateList" :key="index">
              <img class="smallImg" :src="item.wapBannerUrl"/>
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
		  </div>
	  </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:"Category",
  data() {
    return {
      CateNavDatas:{},
      CateListsDatas:[],
      navId:11
    }
  },
  computed: {
    categoryItem(){
      return this.CateListsDatas.find((cateItem) => {
          return cateItem.id === this.navId
      })
    }
  },
  methods: {
    changeNav(id){
      this.navId = id
    }
  },
  async mounted(){
     this.CateNavDatas = await this.$http.category.getCateNavDatas()
     this.CateListsDatas = await this.$http.category.getCateListsDatas()
  },
  watch: {
    CateNavDatas(){
      this.$nextTick(()=>{
        new BScroll('.left',{
          scrollY: true,
          click:true
        })
     })
    },
    categoryItem(){
      this.$nextTick(()=>{
        new BScroll('.right',{
          scrollY: true,
          click:true
        })
      })
    }
  },
}
</script>

<style lang='stylus'>
  .Container
    width 100%
    .title
      width 94%
      margin 5px auto
      height 28px
      line-height 28px
      background-color #ededed
      text-align center
      font-size 14px
      border-redius 5px
      color #666
    .cateContainer
      box-sizing border-box
      width 100%
      height calc(100vh - 90px)
      border-top 1px solid #eee
      padding-top 18px
      display flex
      overflow hidden
      .left 
        width 20%
        height 100%
        box-sizing border-box
        border-right 1px solid #eeeeee
        .leftScroll
          .leftScrollItem
            position relative
            height 40px
            color #666
            line-height 40px
            font-size 14px
            text-align center
            margin-bottom  10px
            &.active:after
              content ""
              width 2px
              height 70%
              background-color #b4282d
              position absolute
              left 3px
              top 15%
              opacity 0.5
      .right
        width 80%
        height 100%
        .rightScroll
          width 100%
          .bigImg
            display block
            width 260px
            height 95px
            margin 0px auto
          .listWrap
            width 100%
            display flex
            flex-wrap wrap
            .item
              width  33%
              padding 5px
              box-sizing border-box
              display flex
              flex-direction column
              align-items center
              img 
                width 90%
                height 67px
                margin-bottom 10px
              span
                display block 
                height 20px
                font-size 12px
                color #666

</style>