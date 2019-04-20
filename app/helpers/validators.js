const mongoose = require('mongoose');

const isValidObjectId = value => mongoose.Types.ObjectId.isValid(value);

module.exports = {
  isValidObjectId,
};
