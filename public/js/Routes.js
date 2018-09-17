const _ = require('lodash')
const page = require('page')
import Policies from './Policies'
import Controllers from './Controllers'

page("/", e => page.redirect('/home'))
page("/dashboard", Policies.Auth.isLoggedIn, e => console.log('home'))

page("/administration", Policies.Auth.isLoggedIn, Controllers.Administration.index)
page("/administration/:adminId", Policies.Auth.isLoggedIn, Controllers.Administration.show)
page()