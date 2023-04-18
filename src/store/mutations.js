// export function setArticles(state, data) {
// 	state.articles = data || []
// }
// export function setCategories(state, data) {
// 	state.categories = data || []
// }

export function setData(state, { data, stateName }) {
	state[stateName] = data
	// debugger
}
export function setNav(state, data) {
	state.nav = data || []
}
