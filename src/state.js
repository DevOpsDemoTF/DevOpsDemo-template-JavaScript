'use strict'
class State {
    constructor(config) {
        this.config = config
    }
}

export default function init(config, mediator) {
    mediator.once('boot.ready', () => {
        if (!config) {
            mediator.emit('state.error', new Error('config not supplied!'))
        }
        mediator.emit('state.ready', new State(config))
    })
}
