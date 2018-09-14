require('./../scss/bundle.scss')

const Mustache = require('mustache')
const Application = require('./Core/Application')
// const Router = require('./Core/Router')
import Router from './Core/Router'
import History from './Core/History'
const routes = require('./routes')

window.onload = function (e) {
	const dom = e.target
	
	let history = new History(window)
	let router = new Router(history, routes)


	let template = router.run()

	let app = dom.querySelector('#app')

	app.innerHTML = Mustache.render(template, {title: 'Welcome', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde voluptates repellat ipsa nihil earum minima ab nobis delectus impedit nisi labore saepe, sunt maxime quas aperiam odit illum aliquam?'})
}