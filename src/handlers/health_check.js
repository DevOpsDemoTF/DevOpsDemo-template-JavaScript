'use strict'
const status = require('http-status')
const client = require('prom-client')

const counter = new client.Counter({
    name: 'health_counter',
    help: 'Number of times health endpoint has been called'
})

let handler = (state) => {
    return (req, res, next) => {
        counter.inc();
        res.status(status.OK).send('')
    }
}

module.exports = Object.assign({}, { handler })