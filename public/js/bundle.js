require('./../scss/bundle.scss')
const _ = require('lodash')
const page = require('page')



window.onload = function (e) {
	_.forEach(e.target.querySelectorAll('a'), a => {
		a.addEventListener('click', function (e) {
			page.redirect(this.getAttribute('href'))
			e.preventDefault();
		})
	})
	require('./Routes')
}
