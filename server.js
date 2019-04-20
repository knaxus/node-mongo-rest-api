require('./app/config/config.js');
console.log(process.env.MONGODB_URI);
require('./app/db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const port = process.env.PORT;
const routes = require('./app/routes');
const log4js = require('log4js');

const { isValidObjectId } = require('./app/helpers/validators');

const logger = log4js.getLogger();
logger.level = 'debug';

const app = express();

// middleware
app.use(bodyParser.json());
app.use(expressValidator({
  customValidators: {
    isValidObjectId,
  },
}));
app.use('/api', routes);

if (!module.parent) {
  app.listen(port, () => {
    logger.debug('app is running on port', port);
  });
}

module.exports = app;
