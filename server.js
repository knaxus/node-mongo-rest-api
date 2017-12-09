const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes = require('./app/routes/linkRoute');
require ('./app/config/config.js');
const db = require('./app/db/mongoose');

const app = express();

//middlware
app.use('/api', routes );

app.listen(port, () => {
  console.log('app is running on port', port);
})