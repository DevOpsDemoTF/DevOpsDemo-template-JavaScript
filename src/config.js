'use strict'
const config = {
    log_level: (process.env.LOG_LEVEL || 'warn').toLowerCase(),
}

module.exports = Object.assign({}, { config })