'use strict'
const handlers = require('./handlers')

module.exports = (app, state) => {
    app.get('/health', handlers.health_check(state))
}