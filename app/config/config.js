const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 5000;
  /**
   * use %40 for @ in password like dummy@dummy
   * Also add `uri_decode_auth: true` inn mongoose connection option
   */
  // this url is just for demostration purpose only
  process.env.MONGODB_URI = 'mongodb://dummy:dymmy%40dummy@ds145193.mlab.com:45193/node-mongo-rest';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost/LinkBinTest';
}
