'use strict'
const config = {
    log_level: process.env.LOG_LEVEL || 'WARN',
}

module.exports = Object.assign({}, { config })