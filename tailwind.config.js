/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/*.liquid",
		"./templates/*.liquid",
		"./templates/customers/*.liquid",
		"./sections/*.liquid",
		"./snippets/*.liquid",
	],
	theme: {
		extend: {
			fontFamily: {
				default: ["'Nanum Myeongjo', serif"],
			},
		},
	},
	plugins: [],
};
