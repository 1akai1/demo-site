export function getNav(state) {
	let nav = []
	if (state.categories.length) {
		for (const itemNav of state.categories) {
			nav.push({ name: itemNav.name, id: itemNav.id })
		}
	} else {
		nav.push('Ошибка')
	}
	return nav
}
export function getNewsFeed(state) {
	let newsFeed = []
	if (state.articles.length) {
		newsFeed = [...state.articles].reverse().slice(0, 10)
	} else {
		newsFeed.push('Ошибка')
	}
	return newsFeed
}
