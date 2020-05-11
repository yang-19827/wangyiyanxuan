<template>
  <div class="listContainer">
	  <div class="listItem" v-for="(item,index) in itemList" :key='index' @click="toDetail(item)">
		  <img :src="item.listPicUrl" />
		  <text>{{item.name}}</text>
		  <text style='color: red;font-weight: bold;'>￥{{item.retailPrice}}</text>
	  </div>
	</div>
</template>

<script>
export default {
  props:['itemList'],
  methods:{
		toDetail(shopObj){
			
		}
	}
}
</script>

<style lang="stylus">
	.listContainer
		display flex
		flex-wrap wrap
		justify-content space-around
		/* 解决最后一行只有一个元素的时候不能靠左布局 */
		&:after
			content ''
			width 172px
			height 0
			
		.listItem
			width 172px
			display flex
			flex-direction column
			img
				width 172px
				height 172px
			text
				white-space pre-wrap
				font-size 14px
				line-height 25px
				text-align left
</style>
