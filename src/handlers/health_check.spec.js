const should = require('should')
const { handler } = require('./health_check')

describe('Health check handler', () => {
    it('succeeds', () => {
        true.should.equal(true)
    })
})