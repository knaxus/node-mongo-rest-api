const LinkRoute = require('express').Router();
const Link = require('../models/links');
const bodyParser = require('body-parser');
const sendResponse = require('../helpers/sendResponse');

LinkRoute.route('/links')
  .get(async (req, res) => {
    try{
      const data = await Link.find();
      return sendResponse(res, 200, data, 'Get data successfully');      
    }
    catch(err){
      console.log(err);
      return sendResponse(res, 404, [], 'data not found');    
    }
  })
  .post(async (req, res) => {
    // const {linkName, linkAdd} = req.body;
    //validations
    req.check('linkName', 'link name is required').exists().isAlpha().isLength({min:5});
    req.check('linkAdd', 'link address is required').exists(); 
    
    const error = req.validationErrors();
    if(error){
      return sendResponse(res, 400, [], error[0].msg);
    }
    
    try{
       const linkData = new Link({
        linkName: req.body.linkName,
        linkAdd: req.body.linkAdd
      });
      await linkData.save();
      return sendResponse(res, 200, [], 'data saved successfully'); 
    }
    catch(err){
      console.log(err);
      return sendResponse(res, 500, [], 'something went wrong'); 
    }
  });

LinkRoute.route('/links/:id')
  .get(async (req, res) => {
    req.check('id', 'id is required').exists();
    
    const error = req.validationErrors();
    if(error){
      return sendResponse(res, 400, [], error[0].msg);
    } 

    try{
      const { id } = req.params;
      const data = await Link.findById(id);
      return sendResponse(res, 200, data, 'Get data successfully');      
    }   
    catch(err){
      console.log(err);
      return sendResponse(res, 400, [], 'bad request');
    }
  })
  .delete(async (req, res) => {
    //validate id
    req.check('id', 'id is required').exists().isInt();

    const error = req.validationErrors();
    if(error){
      return sendResponse(res, 400, [], error[0].msg);
    }

    try{
      const { id } = req.params;  
      await Link.findByIdAndRemove(id);
      return sendResponse(res, 200, [], 'deleted data successfully');             
    }
    catch(err){
      console.log(err)
      return sendResponse(res, 500, [], 'something went wrong'); 
    }
  })
module.exports = LinkRoute;