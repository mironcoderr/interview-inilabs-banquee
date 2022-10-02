/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"primary": "#5BB5A2",
				"black": "#1A191E",
				"muted": "rgba(26, 25, 30, 0.5)",
				"light-blue": "#DFEBF1",
				"light-gray": "#E8E8E8",
				"light-green": "#E8F2EE",
				"light-purple": "#DFE1F1",
				"light-maroon": "#F1DFDF",
			},
			fontFamily: {
				"dm": ["DM Sans", "sans-serif"],
				"inter": ["Inter", "sans-serif"],
				"material": ["'Material Icons'"],
			},
			screens: {
				"rh": {"min": "0px", "max": "950px"}, // responsive header device
			}
		},
	},
	plugins: [],
}