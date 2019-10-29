winston = require ('winston')

var logger = winston.createLogger({
  transports: [
    new (winston.transports.File) ({
      level: 'info',
      filename: 'log/access.log',
      json: true
    }),
    new (winston.transports.File) ({
      level: 'error',
      filename: 'log/error.log',
      json: true
    })
  ]
});


    logger.info('What rolls down stairs');
    logger.info('alone or in pairs,');
    logger.info('and over your neighbors dog?');
    logger.warn('Whats great for a snack,');
    logger.info('And fits on your back?');
    logger.error('Its log, log, log');
    logger.silly('Its silly, log, silly');
    logger.debug('Its debug, log, debug');
    logger.verbose('Its verbose, log, verbose');
    logger.log({
      level: 'info',
      message: 'Hello distributed log files!'
    });
    logger.log({
      level: 'info',
      message: 'Hello distributed log files!'
    });
