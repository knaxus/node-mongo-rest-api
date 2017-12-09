const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes = require('./app/routes/linkRoute');
const config = require ('./app/config/config.js');
const db = require('./app/db/mongoose');

const app = express();

//middleware
app.use(bodyParser.json());
app.use('/api', routes );


app.listen(port, () => {
  console.log('app is running on port', port);
});