import ajax from '@/ajax'
import {
	CHANGEINDEXDATA
} from '../mutation-type.js'
const state = {
	indexData:{}
}
const mutations = {
	[CHANGEINDEXDATA](state,indexData){
		state.indexData = indexData
	}
}
const actions = {
	async getIdnexData({commit}){
		let indexDataResult = await ajax.index.getIndexData()
		commit(CHANGEINDEXDATA,indexDataResult)
	}
}
export default {
	state,
	mutations,
	actions
}