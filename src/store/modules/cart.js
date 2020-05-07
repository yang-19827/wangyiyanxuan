import {ADDCARTLIST,COUNTCHANGEMUTATION,CHANGESELECTED,SELECTEDALLCLICK} from '../mutation-type.js'
import Vue from 'vue'
const state = {
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
const mutations ={
	//详情页添加商品
	[ADDCARTLIST](state,shopObj){
		let item = state.cartList.find(item => item.id === shopObj.id)
		if(item){	//购物车中有当前商品
			item.count += 1
		}else{	//购物车没有该商品
			Vue.set(shopObj,'count',1)
			Vue.set(shopObj,'isSelected',true)
			// shopObj.count = 1
			state.cartList.push(shopObj)
		}
	},
	//添加按钮
	[COUNTCHANGEMUTATION](state,{isAdd,index}){
		if(isAdd){//添加
			state.cartList[index].count +=1
		}else{//减少
			if(state.cartList[index].count>1){
				state.cartList[index].count -=1
			}else{
				state.cartList.splice(index,1)
			}
		}
	},
	//选择按钮切换逻辑
	[CHANGESELECTED](state,{selected,index}){
		state.cartList[index].isSelected = !selected
	},
	//全选按钮点击逻辑
	[SELECTEDALLCLICK](state,selected){
		state.cartList.forEach(item => (item.isSelected = !selected))
	}
}
const getters={
	// 全选全不选按钮
	seletedAllChange(state){
		let seleted = true
		state.cartList.forEach(item => !item.isSelected && (seleted = false))
		return seleted
	},
	// 获取商品全部数量
	getShopCount(state){
		return state.cartList.reduce((pre,item)=>(pre += item.count),0)
	},
	// 获取商品总价格
	getShopPrice(state){
		return state.cartList.reduce((pre,item)=>(pre += item.count * item.retailPrice),0)
	}
}
export default {
	state,
	mutations,
	getters
}