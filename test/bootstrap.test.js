const { populateData } = require('./SeedDB');

before(() => populateData);

after(() => process.exit(0));
