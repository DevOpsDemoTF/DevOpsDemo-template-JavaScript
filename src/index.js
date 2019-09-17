'use strict'
import { EventEmitter } from 'events'
import express from 'express'
import routing from './routing'
import { init } from './state'
import { config } from './config'
const mediator = new EventEmitter()

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})

mediator.on('state.ready', (state) => {
    new Promise((resolve, reject) => {
        const app = express()
        app.use((err, req, res, next) => {
            reject(new Error('Something went wrong!, err:' + err))
            res.status(500).send('Something went wrong!')
        })

        routing(app, state)

        const server = app.listen(8080, () => resolve(server))
    }).then(app => {
        console.log(`Service has been started`)
        app.on('close', () => {
            console.log(`Service is shutting down`)
        })
    })
})

mediator.on('state.error', (err) => {
    console.error(err)
})

init(config, mediator)
mediator.emit('boot.ready')