// this file will contain the seed data
// get the Link model
const Link = require('../../app/models/links');

const dummyData = [
  {
    linkName: 'abc',
    linkAdd: 'abc.co',
  },
  {
    linkName: 'werdf',
    linkAdd: 'werdf.co',
  },
  {
    linkName: 'eresdf',
    linkAdd: 'eresdf.co',
  },
];

export default function populateData() {
  Link.remove({}).then(() => {
    Link.insertMany(dummyData);
  });
}
