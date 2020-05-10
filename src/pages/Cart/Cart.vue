<template>
	<div class="cartContainer">
		<div class="title">购物车</div>
		<!-- 没有登录 -->
		<div v-if="true">
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
		<div v-else>
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
					<span class='iconfont icon-xuanzhong' :class="{selected:seletedAllChange}" @click="clickAllSelected(seletedAllChange)"></span>
					<span class="allSelected">已选 {{getShopCount}}</span>
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
				
			}
		},
		
	}
</script>

<style lang="stylus">
  .cartImg
    display block
    width 124px
    height 124px
    margin 150px auto 25px
  .cartContainer
    position relative
    background #f4f4f4
    height 100%
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
      position fixed
      display flex	
      bottom 0
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
