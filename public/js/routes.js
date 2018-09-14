module.exports = {
	"/": {
		redirect: "/home"
	},
	"/home": {
		template: require('./../templates/hello.html'),
		before: e => {
			console.log('before')
		},
		after: e => {
			console.log('after')
		}
	},
	'/about': {
		template: require('./../templates/about.html')
	},

}