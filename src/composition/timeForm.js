export function timeForm(date) {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return new Date(date).toLocaleString('ru-Ru', options)
}
