<template>
	<div>
			<div class="header" @click="toLogin">
				<!-- <image class="userImg" :src="userInfo.avatarUrl?userInfo.avatarUrl:'../../static/images/personal/personal.png'" mode=""></image> -->
        <img class="userImg" src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
				<div class='userInfo' >
					<p>{{userInfo.nickName?userInfo.nickName:'未登录'}}</p>
					<p v-if='!userInfo.nickName'>点击登录账号</p>
				</div>
			</div>
			
			<div class="content">
				<h2>我的资产</h2>
				<p class='line'></p>
				<div class="myAssetList">
					<div class='assetItem'>
						<span>￥0</span>
						<span>回馈金</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>红包</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>优惠券</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>津贴</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>礼品卡</span>
					</div>
				</div>
				<!-- 列表选项 -->
				<div class="personalList">
					<div class="navItem" v-for='(item, index) in personalList' :key='index'>
						<i class='iconfont ' :class='item.icon'></i>
						<p>{{item.name}}</p>
					</div>
				</div>
			</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					
				},
				personalList: [
						{
							name: '我的订单',
							icon: 'icon-dingdan11'
						},
						{
							name: '我的拼团',
							icon: 'icon-pintuandingdan'
						},
						{
							name: '领红包',
							icon: 'icon-tubiaolunkuo-1'
						},
						{
							name: '我的积分',
							icon: 'icon-jifen3'
						},
						{
							name: '地址管理',
							icon: 'icon-dizhiguanli'
						},
						{
							name: '账号安全',
							icon: 'icon-dingdan11'
						},
						{
							name: '联系客服',
							icon: 'icon-zhanghaoanquan'
						},
						{
							name: '用户反馈',
							icon: 'icon-tubiaolunkuo-'
						},
						{
							name: '帮助中心',
							icon: 'icon-bangzhuzhongxin'
						},
						{
							name: '退还/售后',
							icon: 'icon-shouhou'
						}
					]
				
			};
		},
		methods: {
			toLogin(){
				// if(!this.userInfo.gender){
				// 	uni.navigateTo({
				// 		url:"/pages/login/login"
				// 	})
        // }
        this.$router.replace('/Login')
			}
		},
		// mounted() {
		// 	let userInfo = uni.getStorageSync("userInfo")
		// 	if(userInfo){//已登陆
		// 		this.userInfo = JSON.parse(JSON.parse(userInfo).rawData)
		// 	}
		// }
	}
</script>

<style scoped lang="stylus">
  .header
    display flex
    background #EED7B5
    padding 20px 0
    .userImg 
      width 50px
      height 50px
      margin 0 25px 0 15px
      background #FFFFFF
      border-radius 25px
    .userInfo
      position relative
      left -223px
      top 4px
      p
        height 25px
        line-height 25px
      &:first-child
        font-size 25px
      &:last-child
        font-size 12px
	.content
		h2
			font-size 13px
			line-height 50px
			margin-left 5%
		.line
			width 90%
			height 1px
			background #eee
			margin 0 auto
		.myAssetList
			width 90%
			margin 10px auto
			display flex 
			.assetItem
				width 25%
				display flex
				flex-direction column
				align-items center
				font-size 12px
				color #333333
				line-height 20px
		.personalList
			display flex
			flex-wrap wrap
			border-top 1px solid #EEEEEE
			.navItem
				width 33.3333%
				text-align center
				border-bottom 1px solid #EEEEEE
				border-right 1px solid #EEEEEE
				box-sizing border-box
				padding 15px 0
				&:nth-child(3n)
					border-right none
				.iconfont 
					font-size 30px
				p
					font-size 12px
					line-height 40px
</style>

