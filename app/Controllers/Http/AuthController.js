'use strict'

const { validate } = use('Validator');
const User = use('App/Models/User');
const Antl = use('Antl');

class AuthController {

  async register({request, auth, response}) {
    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required'
    }

    const validation = await validate(request.all(), rules);
      if (validation.fails())
        return response.status(422).json(validation.messages())

    let user = await User.create(request.except(['password_confirmation']))
    let token = await auth.generate(user)

    user.logs().create({
      ip: request.ip(),
      description: 'register'
    })

    //Object.assign(user, token)
    return response.json({
      user: user,
      token: token
    });
  }

  async login({request, auth, response}) {
    const rules = {
      email: 'required|email',
      password: 'required'
    }

    try {
      const validation = await validate(request.all(), rules);
      if (validation.fails())
        return response.status(422).json(validation.messages())

      let {email, password} = request.all();

      if (await auth.attempt(email, password)) {
        let user = await User.findBy('email', email)
        let token = await auth.generate(user)

        user.logs().create({
          ip: request.ip(),
          description: 'login'
        })

        //Object.assign(user, token)
        return response.json({
          user: user,
          token: token
        });
      }
    }
    catch (e) {
      return response.status(422).json({
        field: 'email',
        message: Antl.formatMessage('auth.failed')
      })
    }
  }

}

module.exports = AuthController
