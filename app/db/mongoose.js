const mongoose = require('mongoose');

const options = {
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  useNewUrlParser: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, options);
