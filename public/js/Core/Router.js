const _ = require('lodash')

function Router(history, routes) {
	this.history = history
	this.routes = routes
}

Router.prototype = {
	run() {
		let url = this.history.current().pathname

		_.forEach(this.routes, (value, key) => {
			if (this.check(url, key)) {
				if (typeof value.before !== 'undefined') {
					value.before()
				}

				if (typeof value.redirect !== 'undefined') {
					this.history.go(value.redirect)
				}

				if (typeof value.template !== 'undefined') {
					this.template = value.template
				}

				if (typeof value.after !== 'undefined') {
					value.after()
				}
			}
		})

		return this.template
	},
	prepareUrl(url) {
		if (url.charAt(0) !== '/') {
			url = '/' + url
		}

		if (url.slice(-1) === '/') {
			url = url.substr(0, url.length, -1)
		}

		return url
	},
	formatRoute(route) {
		route = this.prepareUrl(route) 
		return route.split('/');
	},
	check(url, route) {
		let ret = true
		_.forEach(route, (param, key) => {
			if (param.charAt(0) == ':') {

			} else if (url[key] !== param) {
				ret = false;
			}
		})

		return ret
	}
}

export default Router