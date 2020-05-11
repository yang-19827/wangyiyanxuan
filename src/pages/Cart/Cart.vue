<template>
	<div class="cartContainer">
		<div class="title">购物车</div>
		<!-- 没有登录 -->
		<div v-if="false">
			<div class="header">
				<span>30天无忧退货</span>
				<span>48小时快速退货</span>
				<span>满99元免邮费</span>
			</div>
			<div class="contentContainer">
				<img class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imagediv&type=webp" />
				<button @click="$router.replace('/Login')">登录</button>
				<div class="addMore">去添加点什么吧</div>
			</div>
		</div>
		
		<!-- 登录：购物车有数据 -->
		<!-- 购物车列表 -->
		<div v-else class="contentContainer">
			<div v-if="cartList.length">
				<div class="cartList">
					<div class="cartItem" v-for="(item,index) in cartList" :key='item.id'>
						<span class='iconfont icon-xuanzhong' :class="{selected:item.isSelected}" @click="changeSelected(item.isSelected,index)"></span>
						<div class="shopItem">
							<img class="shopImg" :src="item.listPicUrl" />
							<div class="shopInfo">
								<span>{{item.name}}</span>
								<span class="price">￥{{item.retailPrice}}</span>
							</div>
						</div>
						<!-- 控制数量 -->
						<div class="countCtrl">
							<span class="add" @click="changeCount(true,index)"> + </span>
							<span class="count"> {{item.count}} </span>
							<span class="del" @click="changeCount(false,index)"> - </span>
						</div>
					</div>
					
				</div>
				<!-- 底部下单 -->
				<div class="cartFooter">
					<span class='iconfont icon-xuanzhong' :class="{selected:selectedAll}" @click="clickAllSelected(selectedAll)"></span>
					<span class="allSelected">已选 {{cartList.length}}</span>
					<div class="right">
						<span class="totalPrice">合计: ￥{{getShopPrice}}</span>
						<span class="preOrder">下单</span>
					</div>
				</div>
			</div>
			<div v-else>
				<!-- 登录： 购物车没有数据 -->
				<img class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imagediv&type=webp" />
				<div class="hint">购物车还是空的，赶紧去购物吧</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cartList:[
		{
				"count": 1,
				"isSelected":true,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1586040,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1586040,
		    "sellVolume": 4315,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/8d3d3daec71799e08c5853ce9e05b440.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539930828979,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576200840751,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 699,
		    "categoryL2Id": 0,
		    "retailPrice": 525,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 6,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "珍贵的软滑感，女式高领纯小山羊绒衫2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/ffd34ce21098cacad33371fcff8bd9f9.png",
		    "pointsPrice": 0,
		    "simpleDesc": "亲近温暖，拥抱温柔与纯粹",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300011138,
		    "displaySkuId": 300014019,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
				"count": 1,
				"isSelected":true,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1593000,
		            "tagId": 128111156,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1593000,
		    "sellVolume": 3168,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/59c9d23abdfdaac58ede7b3e70934817.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539929494550,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575512503370,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 799,
		    "categoryL2Id": 0,
		    "retailPrice": 623,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 3,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "软糯似baby肌肤，男式高领纯小山羊绒衫",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/631f945255aad262ff1b9ce51662f74b.png",
		    "pointsPrice": 0,
		    "simpleDesc": "绒毛取自未满1岁的山羊羊羔",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1630007,
		    "displaySkuId": 1630008,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	],
			}
    },
    methods:{
      changeSelected(selected,index){
        this.cartList[index].isSelected = !selected
      },
      clickAllSelected(selected){
        this.cartList.forEach(item =>{
          item.isSelected = !selected
        })
      },
      changeCount(flag,index){
        if(flag) this.cartList[index].count += 1
        else {
          if(this.cartList[index].count === 1) this.cartList.splice(index,1)
          else this.cartList[index].count -= 1
        }
      }
    },
    computed:{
      selectedAll(){
        let flag = true
        this.cartList.forEach((item)=>{
          if(!item.isSelected) flag = false
        })
        return flag
      },
      // getShopCount(){
      //   return 2
      // },
      getShopPrice(){
        return this.cartList.reduce((per,item)=>{
          return per += item.count * item.retailPrice
        },0)
      }
    }
		
	}
</script>

<style lang="stylus">
  .cartContainer
    position relative
    background #f4f4f4
    height calc(100vh - 50px)
    .title
      font-size 16px
      line-height 40px
      margin-left 15px
    .header
      display flex
      background #eee
      span
        width 33.333%
        height 40px
        line-height 40px
        text-align center
        font-size 13px
    .contentContainer
      display flex
      flex-direction column
      align-items center
      justify-content center
      button
        width 240px
        height 46px
        background #DD1A21
        color #fff
        font-size 16px
        line-height 46px
        border none
      .addMore
        text-align center
        font-size 13px
        color #7f7f7f
        line-height 30px
    .cartList
      height 100%
      .cartItem
        position relative
        display flex
        height 86px
        background #fff
        margin-top 10px
        padding 10px
        .iconfont
          font-size 20px
          line-height 82px
          margin 0 20px
          color #999
          &.selected
            color: #BB2C08
        .shopItem
          display flex 
          .shopImg
            width 86px
            height 86px
            background #eee
          .shopInfo
            font-size 14px
            display flex
            flex-direction column
            margin-left 20px
            span
              line-height 30px
            .price
              color: #BB2C08
        .countCtrl
          position absolute
          right 10px
          bottom 15px
          span
            display inline-block
            width 30px
            height 25px
            text-align center
            line-height 25px
            border 1px solid #EEEEEE
            &:nth-child(2)
              border none
              border-top 1px solid #EEEEEE
              border-bottom 1px solid #EEEEEE
    .cartFooter
      position absolute
      display flex	
      bottom 0
      left 0
      height 46px
      line-height 46px
      width 100%
      background #fff
      font-size 15px
      .iconfont
        font-size 20px
        margin 0 10px
        color: #999
        &.selected
          color: #BB2C08
      .right 
        height 48px
        position absolute
        right 0
        .totalPrice
          display inline-block
          height 48px
          line-height 48px
        .preOrder
          display inline-block
          background #DD1A21
          width 112px
          height 48px
          line-height 48px
          text-align center
          font-size 14px
          color #fff
          margin-left 15px
    .hint
      text-align center
      font-size 14px
		
</style>
