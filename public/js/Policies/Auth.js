const page = require('page')

export default {
	isLoggedIn(ctx, next) {
		if (false) {
			page.redirect('/home')
		}

		next()
	}
}