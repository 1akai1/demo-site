import axiosClient from '../components/UX/axiosClient'

// export function getArticles({ commit }, url) {
// 	axiosClient.get(url).then(({ data }) => commit('setArticles', data))
// }
// export function getCategories({ commit }, url) {
// 	axiosClient.get(url).then(({ data }) => commit('setCategories', data))
// }

export async function getData({ commit }, { url, mutationName, stateName }) {
	axiosClient
		.get(url)
		.then(({ data }) =>
			commit(mutationName, { data: data, stateName: stateName })
		)
	// debugger
}
