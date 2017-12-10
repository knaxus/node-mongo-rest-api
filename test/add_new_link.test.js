const request = require('supertest');
const app = require('../server');
const expect = require('expect');
const { populateData } = require('./SeedDB');

beforeEach(populateData);

describe('Create new links ENDPOINT is : api/links', () => {
  it('It should return 400 if missing key in data', (done) => {
    const linkObj = { linkAdd: 'fdfdd.fc' };

    request(app)
      .post('/api/links')
      .send(linkObj)
      .expect(400)
      .end((err, response) => {
        expect(response.body.status).toBe('failed');
        expect(response.body.message).toBe('link name is required');
        done();
      });
  });

  it('It should return 200 for valid data', (done) => {
    const linkObj = { linkName: 'asdasdas', linkAdd: 'fdfdd.fc' };

    request(app)
      .post('/api/links')
      .send(linkObj)
      .expect(200)
      .end((err, response) => {
        expect(response.body.status).toBe('success');
        done();
      });
  });
});
