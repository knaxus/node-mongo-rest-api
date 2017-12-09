const addLink = require('express').Router();
const Link = require('../../models/links');
const sendResponse = require('../../helpers/sendResponse');

addLink.post('/', async (req, res) => {
  // const {linkName, linkAdd} = req.body;
  // validations
  req.check('linkName', 'link name is required').exists().isAlpha().isLength({ min: 5 });
  req.check('linkAdd', 'link address is required').exists();

  const error = req.validationErrors();
  if (error) {
    return sendResponse(res, 400, [], error[0].msg);
  }

  try {
    const linkData = new Link({
      linkName: req.body.linkName,
      linkAdd: req.body.linkAdd,
    });
    await linkData.save();
    return sendResponse(res, 200, [], 'data saved successfully');
  } catch (err) {
    console.log(err);
    return sendResponse(res, 500, [], 'something went wrong');
  }
});

module.exports = addLink;