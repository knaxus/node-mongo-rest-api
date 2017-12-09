const LinkRoute = require('express').Router;
const Link = require('../models/links');

LinkRoute('/')
  .get((req, res) => {
    res.send('Hellooooooooooooooooooo');
  })

module.exports = LinkRoute;