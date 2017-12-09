const getAllLinks = require('express').Router();
const Link = require('../../models/links');
const sendResponse = require('../../helpers/sendResponse');

getAllLinks.get('/', async (req, res) => {
  try {
    const data = await Link.find();
    return sendResponse(res, 200, data, 'Get data successfully');
  } catch (err) {
    console.error(err);
    return sendResponse(res, 404, [], 'data not found');
  }
});

module.exports = getAllLinks;
