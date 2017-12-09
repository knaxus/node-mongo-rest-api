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
    //validations
    req.check('linkName', 'link name is required').exists().isAlpha().isLength({min:5});
    req.check('linkAdd', 'link address is required').exists();    

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
  });

LinkRoute.route('/:id')
  .get((req, res) => {
    req.check('id', 'id is required').exists().isInt();    
    const { id } = req.params;
    Link.findById( id )
    .then((data) => {
      return res.status(200).json({
        data,
        status: 'success',
        message: 'Get data successfully'
      })
    })
    .catch((err) => {
      console.log(err);
    })
  })
  .delete((req, res) => {
    //validate id
    req.check('id', 'id is required').exists().isInt();
    const { id } = req.params;
    Link.findByIdAndRemove( id )
    .then((response) => {
      // console.log(response);
      return res.status(200).json({
        data: [],
        status: 'success',
        message: 'deleted data successfully'
      })
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).json({
        data: [],
        status: 'fail',
        message: 'something went wrong'
      })
    })
  })
module.exports = LinkRoute;