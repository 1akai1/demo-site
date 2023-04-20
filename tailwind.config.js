/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				md: '950px',
				media600: '600px',
				media900: '900px',
				media1600: '1600px',
			},
		},
	},
	plugins: [],
}
