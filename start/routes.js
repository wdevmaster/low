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

Route.group(() => {

  Route.get('/users', async ({ request }) => {
    return await User.all()
  })

}).prefix('/api')

Route.any('*', 'NuxtController.render')
