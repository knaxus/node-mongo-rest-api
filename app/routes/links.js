const linksRoute = require('express').Router();
const {
  addLink, deleteLink, getAllLink, getOneLink,
} = require('../controllers/links');

linksRoute.use('/', addLink);
linksRoute.use('/', deleteLink);
linksRoute.use('/', getAllLink);
linksRoute.use('/', getOneLink);

module.exports = linksRoute;
