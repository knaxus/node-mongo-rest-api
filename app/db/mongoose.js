const mongoose = require('mongoose');
const { dev , test } = require('../config/config');

const { db } = dev || test;


const options = {
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  useNewUrlParser: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(db.url, options);
