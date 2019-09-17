'use strict'
import { OK } from 'http-status'

export default function handler(state) {
    return (req, res, next) => {
        res.status(OK).send('')
    }
}
