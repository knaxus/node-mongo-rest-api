const deleteLink = require('express').Router();
const Link = require('../../models/links');
const sendResponse = require('../../helpers/sendResponse');

deleteLink.delete('/:id', async (req, res) => {
  // validate id
  req.check('id', 'id is required/invalid').exists().isValidObjectId();

  const error = req.validationErrors();
  if (error) {
    return sendResponse(res, 400, [], error[0].msg);
  }

  try {
    const { id } = req.params;
    await Link.findByIdAndRemove(id);
    return sendResponse(res, 200, [], 'deleted data successfully');
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500, [], 'something went wrong');
  }
});

module.exports = deleteLink;
