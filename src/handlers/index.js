'use strict'
let health_check = require('./health_check').handler

module.exports = Object.assign({}, { health_check })