require('dotenv').config();
require('./app/db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const log4js = require('log4js');

const { dev, test } = require('./app/config/config');

const { app } = dev || test;
const { port } = app;
const routes = require('./app/routes');

const { isValidObjectId } = require('./app/helpers/validators');

const logger = log4js.getLogger();
logger.level = 'debug';

const server = express();

// middleware
server.use(bodyParser.json());
server.use(expressValidator({
  customValidators: {
    isValidObjectId,
  },
}));
server.use('/api', routes);

if (!module.parent) {
  server.listen(port, () => {
    logger.debug('app is running on port', port);
  });
}

module.exports = app;
