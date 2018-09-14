function History(window) {
	this.window = window
	this.init()
}

History.prototype = {
	init() {
		
	},
	current() {
		return this.window.location
	},
	go(url) {
		this.window.history.replaceState(null, null , url)
	},
	back() {
		this.window.history.back();
	},
	forward() {
		this.window.history.forward()
	}
}

export default History