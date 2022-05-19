// eslint-disable-next-line no-undef
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			colors: {
				'theme':'#E9F3FF'
			},
			fontFamily: {
				'pacifico': ['"Pacifico"', 'cursive'],
				'm-plus': ['"M PLUS Rounded 1c"', 'sans-serif']
			}
		},
	},
	plugins: [],
}
