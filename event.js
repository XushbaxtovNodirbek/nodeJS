const Events = require('events')

class Logger extends Events {
    log(message) {
        this.emit('message', message)
    }
}

const logger = new Logger()

logger.on('message', data => console.log('Called Listener', data))

logger.log('Hello World')