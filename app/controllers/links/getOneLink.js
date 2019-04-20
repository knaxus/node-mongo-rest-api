const log4js = require('log4js');
const getOneLink = require('express').Router();
const Link = require('../../models/links');
const sendResponse = require('../../helpers/sendResponse');

const logger = log4js.getLogger();
logger.level = 'error';

getOneLink.get('/:id', async (req, res) => {
  req.check('id', 'id is required/invalid').exists().isValidObjectId();

  const error = req.validationErrors();
  if (error) {
    return sendResponse(res, 400, [], error[0].msg);
  }

  try {
    const { id } = req.params;
    const data = await Link.findById(id);
    return sendResponse(res, 200, data, 'Get data successfully');
  } catch (err) {
    logger.error(err);
    return sendResponse(res, 400, [], 'bad request');
  }
});

module.exports = getOneLink;
