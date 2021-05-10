'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User')

const Uri = `/api`

Route.group(() => {

  Route.get('/users', async () => {
    return await User.all()
  })

}).prefix(`${Uri}`).middleware(['auth'])

Route.group(() => {

  Route.post('/login', 'AuthController.login')
  Route.post('/register', 'AuthController.register')

}).prefix(`${Uri}/auth`)

Route.any('*', 'NuxtController.render')
