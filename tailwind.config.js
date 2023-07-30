module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				other: { min: '340px', max: '1200px' },
				special: { min: '980px' },
			},
			colors: {
				buttonBlue: '#23abe3',
				buttonBlueHover: '#188CBB',
			},
		},
		plugins: [],
	},
}
