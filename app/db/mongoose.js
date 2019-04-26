const mongoose = require('mongoose');
const { dev } = require('../config/config');

const { db } = dev;


const options = {
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  useNewUrlParser: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(db.url, options);
