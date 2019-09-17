'use strict'
const { EventEmitter } = require('events')
const express = require('express')
const routing = require('./routing')
const state = require('./state')
const metrics = require('./metrics')
const { config } = require('./config')
const mediator = new EventEmitter()
var log = console.error

process.on('uncaughtException', (err) => {
    log('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    log('Unhandled Rejection', err)
})

mediator.on('state.ready', (state) => {
    log = state.log.error

    new Promise((resolve, reject) => {
        const app = express()
        app.use((err, req, res, next) => {
            reject(new Error('Something went wrong!, err:' + err))
            res.status(500).send('Something went wrong!')
        })

        routing(app, state)

        const server = app.listen(8080, () => resolve(server))
    }).then(app => {
        state.log.info(`Service has been started`)
        app.on('close', () => {
            state.log.info(`Service is shutting down`)
        })
    })
})

mediator.on('state.error', (err) => {
    console.error(err)
})

metrics.init()
state.init(config, mediator)
mediator.emit('boot.ready')