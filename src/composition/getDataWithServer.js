import store from '../store'
/**
 * @param {string} url - URL-адрес для получения данных
 * @param {string} mutationName - Имя мутации
 * @param {string} stateName - Имя состояния
 * @param {string} router - объект router
 * @param {number} timestop - объект router
 */
export async function getDataWithServer(url, mutationName, stateName, router, timestop = 0) {
	try {
		setTimeout(() => {
			store.dispatch('getData', {
				url: url,
				mutationName: mutationName,
				stateName: stateName,
			})
		}, timestop)
	} catch {
		router.push({ name: 'NotFound', params: { pathMatch: 404 } })
	}
}
