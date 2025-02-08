const app = require("./app");

const config = require('./config').value;
const logger = require('./utils/logger');

const server = app.listen(config.port, parseInt(config.listenInaddrAny) ? null : '127.0.0.1');
logger.info('Listening Port ' + config.port);
logger.info(`🎉 tesla-server start!!!`);

module.exports = server;