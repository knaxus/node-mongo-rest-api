const { populateData } = require('./SeedDB');

before(() => {
  // eslint-disable-next-line no-console
  console.log('Test started....\n');
});

beforeEach((done) => {
  populateData(done);
});

after(() => {
  // eslint-disable-next-line no-console
  console.log('Test completed.');
  process.exit(0);
});
