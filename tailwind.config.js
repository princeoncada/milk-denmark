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
        backgroundSize: {
            "full": "100%",
            "105%": "105%",
        },
		extend: {
			fontFamily: {
				nanum: ["'Nanum Myeongjo', serif"],
                causten: ["'Causten'"],
			},
		},
	},
	plugins: [],
};
