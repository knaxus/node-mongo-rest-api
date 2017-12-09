const mainRoute = require('express').Router();
const linkRoute = require('./links')

mainRoute.use('/links', linkRoute);
  
  
module.exports = mainRoute;
