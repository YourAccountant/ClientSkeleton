function Application(options) {
	if (typeof options === 'undefined') {
		options = {}
	}

	this.options = this.setDefault(options)
}

Application.prototype = {
	setDefault(options) {
		return {

		}
	}
}

module.exports = Application
