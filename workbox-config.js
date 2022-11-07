module.exports = {
	globDirectory: 'C:/Users/mundo/Downloads/app',
	globPatterns: [
		'**/*.{gif,jpg,js,html,css,png,json,mp3}'
	],
	swDest: 'C:/Users/mundo/Downloads/app/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};