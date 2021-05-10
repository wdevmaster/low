'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ActionLog extends Model {

  static get updatedAtColumn () {
    return null
  }


  user () {
    return this.belongsTo('App/Models/User')
  }

}

module.exports = ActionLog
