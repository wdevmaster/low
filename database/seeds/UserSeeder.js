'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  return {
    email: data.email,
    username: faker.username(),
    password: await Hash.make('secret')
  }
})

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User').create({ email: 'admin@email.com'})
  }
}

module.exports = UserSeeder
