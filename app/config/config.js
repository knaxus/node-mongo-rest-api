const { DEVELOPMENT_PORT, MONGODB_URI, MONGODB_URI_TEST, TEST_PORT } = process.env;

// config.js
const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  app: {
    port: DEVELOPMENT_PORT || 5000,
  },
  db: {
    url: MONGODB_URI,
  },
};
const test = {
  app: {
    port: TEST_PORT,
  },
  db: {
    url: MONGODB_URI_TEST,
  },
};

const config = {
  dev,
  test,
};

module.exports = config;
