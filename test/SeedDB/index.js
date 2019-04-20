// this file will contain the seed data
// get the Link model
const { ObjectID } = require('mongodb');
const Link = require('../../app/models/links');

// create an id for the user data
const linkOneID = new ObjectID();
const linkTwoID = new ObjectID();
const linkThreeID = new ObjectID();

const dummyData = [
  {
    _id: linkOneID,
    linkName: 'abc',
    linkAdd: 'abc.co',
  },
  {
    _id: linkTwoID,
    linkName: 'werdf',
    linkAdd: 'werdf.co',
  },
  {
    _id: linkThreeID,
    linkName: 'eresdf',
    linkAdd: 'eresdf.co',
  },
];

const populateData = (done) => {
  Link.remove({}).then(() => Link.insertMany(dummyData)).then(() => done());
};

module.exports = { populateData, dummyData };
