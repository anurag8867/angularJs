const winston = require('winston');
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


var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();



function start() {

  setTimeout(function() {
    logger.info('What rolls down stairs');
    logger.info('alone or in pairs,');
    logger.info('and over your neighbors dog?');
    logger.warn('Whats great for a snack,');
    logger.info('And fits on your back?');
    logger.error('Its log, log, log');
    logger.error('Its log, log, log');
    logger.silly('Its silly, log, silly');
    logger.debug('Its debug, log, debug');
    logger.verbose('Its verbose, log, verbose');
    logger.error(datetime);
    logger.log({
      level: 'info',
      message: 'Hello distributed log files!'
    });
    logger.log({
      level: 'info',
      message: 'Hello distributed log files!'
    });

    // Again
    start();

    // Every 3 sec
  }, 300);
}

// Begins
start();
