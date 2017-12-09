const LinkRoute = require('express').Router();
const Link = require('../models/links');
const bodyParser = require('body-parser');
const sendResponse = require('../helpers/sendResponse');

LinkRoute.route('/')
  .get((req, res) => {
    Link.find()
    .then((data) => {
      // console.log(data);
      return sendResponse(res, 200, data, 'Get data successfully');
    })
    .catch((err) => {
      console.log(err);
      return sendResponse(res, 404, [], 'data not found');      
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
      return sendResponse(res, 200, [], 'data saved successfully'); 
    })
    .catch((err) => {
      console.log(err);
      return sendResponse(res, 500, [], 'something went wrong'); 
    })
  });

LinkRoute.route('/:id')
  .get((req, res) => {
    req.check('id', 'id is required').exists().isInt();    
    const { id } = req.params;
    Link.findById( id )
    .then((data) => {
      return sendResponse(res, 200, data, 'Get data successfully');       
    })
    .catch((err) => {
      console.log(err);
      return sendResponse(res, 400, [], 'bad request');       
    })
  })
  .delete((req, res) => {
    //validate id
    req.check('id', 'id is required').exists().isInt();
    const { id } = req.params;
    Link.findByIdAndRemove( id )
    .then((response) => {
      // console.log(response);
      return sendResponse(res, 200, [], 'deleted data successfully');       
    })
    .catch((err) => {
      console.log(err)
      return sendResponse(res, 500, [], 'something went wrong');  
    })
  })
module.exports = LinkRoute;