const winston = require('winston');

const create = (config) => {
    const format_json = winston.format.json()
    const my_format_json = winston.format((info, opts) => {
        info.time = new Date().toISOString()
        info.level = info.level.toUpperCase()
        info.msg = info.message
        delete info.message

        return format_json.transform(info)
    });

    return winston.createLogger({
        level: config.log_level,
        format: my_format_json(),
        transports: [
            new winston.transports.Console(),
        ]
    })
};

module.exports = Object.assign({}, { create })