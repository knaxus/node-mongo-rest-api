const linksRoute = require('express').Router();
const addLink = require('./addLink');
const deleteLink = require('./deleteLink');
const getAllLink = require('./getAllLinks');
const getOneLink = require('./getOneLink');

linksRoute.use('/', addLink);
linksRoute.use('/', deleteLink);
linksRoute.use('/', getAllLink);
linksRoute.use('/', getOneLink);

module.exports = linksRoute;
