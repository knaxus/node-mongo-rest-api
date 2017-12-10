require('./app/config/config.js');
require('./app/db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const port = process.env.PORT;
const routes = require('./app/routes');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(expressValidator({
  customValidators: {
    isValidObjectId: value => /^[0-9a-fA-F]{24}$/.test(value),
  },
}));
app.use('/api', routes);

if (!module.parent) {
  app.listen(port, () => {
    console.log('app is running on port', port);
  });
}

module.exports = app;
