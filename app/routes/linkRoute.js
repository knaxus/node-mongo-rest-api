const LinkRoute = require('express').Router();
const Link = require('../models/links');
const bodyParser = require('body-parser');

LinkRoute.route('/')
  .get((req, res) => {
    Link.find()
    .then((data) => {
      console.log(data);
      return res.status(200).json({
        data,
        status: 'Success',
        message: 'Get data successfully'
      })
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        data,
        status: 'failed',
        message: 'data not found'
      })
    })
  })
  .post((req, res) => {
    // const {linkName, linkAdd} = req.body;
    let linkData = new Link({
      linkName: req.body.linkName,
      linkAdd: req.body.linkAdd
    });

    linkData.save()
    .then((response) => {
      // console.log(response);
      return res.status(200).json({
        data: [],
        status:'success',
        message: 'data saved successfully'
      })
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        data: [],
        status: 'failed',
        message: 'something went wrong'
      })
    })
  })

module.exports = LinkRoute;