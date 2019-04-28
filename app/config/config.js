const {
  DEVELOPMENT_PORT, MONGODB_URI, MONGODB_URI_TEST, TEST_PORT, NODE_ENV,
} = process.env;
const env = NODE_ENV; // 'dev' or 'test'
const config = {};
if (env === 'dev') {
  config.dev = {
    app: {
      port: DEVELOPMENT_PORT || 5000,
    },
    db: {
      url: MONGODB_URI || 'mongodb://localhost/LinkBin',
    },
  };
} else {
  config.test = {
    app: {
      port: TEST_PORT,
    },
    db: {
      url: MONGODB_URI_TEST || 'mongodb://localhost/LinkBinTest',
    },
  };
}

module.exports = config;
