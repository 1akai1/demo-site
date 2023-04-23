import store from '../store'
/**
 * @param {string} url - URL-адрес для получения данных
 * @param {string} mutationName - Имя мутации
 * @param {string} stateName - Имя состояния
 * @param {string} router - объект router
 */
export async function getDataWithServer(url, mutationName, stateName, router) {
	try {
		store.dispatch('getData', {
			url: url,
			mutationName: mutationName,
			stateName: stateName,
		})
	} catch {
		router.push({ name: 'NotFound', params: { pathMatch: 404 } })
	}
}
