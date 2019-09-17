import should from 'should'
import { handler } from './health_check'

describe('Health check handler', () => {
    it('succeeds', () => {
        true.should.equal(true)
    })
})