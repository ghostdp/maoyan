import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state : {
		username : ''
	},
	mutations : {
		USER_NAME(state,payload){
			state.username = payload;
		}
	}
});