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
