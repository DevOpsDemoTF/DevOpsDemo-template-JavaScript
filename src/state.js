'use strict'
const state = (config) => {
    return Object.create({ config })
}

const init = (config, mediator) => {
    mediator.once('boot.ready', () => {
        if (!config) {
            mediator.emit('state.error', new Error('config not supplied!'))
        }
        mediator.emit('state.ready', state(config))
    })
}

module.exports = Object.assign({}, { init })