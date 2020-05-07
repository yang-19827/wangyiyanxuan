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
		  <!-- <div class="right">
        <div class="rightScroll">
          <img class="bigImg" :scr="categoryItem.imgUrl"/>
          <div class="listWrap">
            <div class="item" v-for="(item,index) in categoryItem.subCateList" :key="index">
              <img class="smallImg" :src="item.wapBannerUrl"/>
              <text>{{item.name}}</text>
            </div>
          </div>
        </div>
		  </div> -->
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
      navId:1005000
    }
  },
  async mounted(){
     this.CateNavDatas = await this.$http.category.getCateNavDatas()
     this.CateListsDatas = await this.$http.category.getCateListsDatas()
     this.$nextTick(()=>{
        new BScroll('.leftScroll',{
          scrollY: true
        })
     })
  }
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
      border-radius 5px
		.cateContainer
			box-sizing border-box
			width 100%
			height calc(100vh - 38px)
			border-top 1px solid #eee
			padding-top 8px
			display flex
			.left
				width 20%
				height 100%
				box-sizing border-box
				border-right 1px solid #eee
				.leftScroll
					.leftScrollItem
						position relative
						height 40px
						color #666
						line-height 40px
						font-size 14px
						text-align center
						&.active::after
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
					height 100%
					.bigImg
						display block
						width 260px
						height 95px
						margin 10px auto
					.listWrap
						width 100%
						display flex
						flex-wrap wrap
						.item
							width 33%
							padding 5px
							box-sizing border-box
							display flex
							flex-direction column
							align-items center
							image
								width 90%
								height 72px
							text
								font-size 13px
</style>