import { createStore } from 'vuex'
import state from '../store/state'
import * as mutations from '../store/mutations'
import * as actions from '../store/actions'
import * as getters from '../store/getters'

const store = createStore({
	state,
	getters,
	mutations,
	actions,
})

export default store
