import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index.js'
import cart from './modules/cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		index,
		cart
	}
})