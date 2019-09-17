'use strics'
const status = require('http-status')

let handler = (state) => {
    return (req, res, next) => {
        res.status(status.OK).send('')
    }
}

module.exports = Object.assign({}, { handler })