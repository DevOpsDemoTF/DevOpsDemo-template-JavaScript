const prometheus = require('prom-client')
const express = require('express')

let init = () => {
    prometheus.collectDefaultMetrics({ timeout: 5000 })

    const server = express();
    server.get('/metrics', (req, res) => {
        res.set('Content-Type', prometheus.register.contentType)
        res.end(prometheus.register.metrics())
    });

    server.listen(9102)
}

module.exports = Object.assign({}, { init })