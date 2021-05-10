'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActionLogSchema extends Schema {
  up () {
    this.create('action_logs', (table) => {
      table.increments();
      table.string('ip', 15);
      table.string('description', 191);
      table.integer('user_id').unsigned();
      table.timestamp('created_at').defaultTo(this.fn.now());

      table.foreign('user_id').references('Users.id').onDelete('cascade');
    })
  }

  down () {
    this.drop('action_logs')
  }
}

module.exports = ActionLogSchema
