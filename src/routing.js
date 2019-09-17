'use strict'
import * as handlers from './handlers'

export default function routing(app, state) {
    app.get('/health', handlers.health_check(state))
}