export function getNav(state) {
	let data = []
	if (state.nav.length) {
		for (const itemNav of state.nav) {
			data.push({ name: itemNav.name, url: itemNav.url, id: itemNav.id })
		}
	} else {
		data.push('Ошибка')
	}
	return data
}
export const getNewsFeed = (state) => (size) => {
	let data = []
	if (state.articles.length) {
		data = [...state.articles].reverse().slice(0, size)
	} else {
		data.push('Ошибка')
	}
	return data
}
export const getPostList = (state) => (size) => {
	let data = []
	if (state.categories.length) {
		// debugger
		data = state.categories.map((element) => {
			element.articles = element.articles.reverse().slice(0, size)
			return element
		})
		// console.log(data)
	} else {
		data.push('Ошибка')
	}
	return data
}

export function check(state) {
	if (state.articles.length) return true
	if (state.categories.length) return true
	if (state.post.length) return true
	return false
}
export function checkCategories(state) {
	if (state.categories.length) return true
	return false
}
