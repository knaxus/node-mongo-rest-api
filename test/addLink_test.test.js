const request = require('supertest');
const app = require('../server');
const expect = require('expect');
const populateData = require('./SeedDB');

beforeEach(populateData);

describe('GET all links ENDPOINT is : api/links', () => {
  it('It should return 200', done => [
    request(app)
      .get('/api/links')
      .end((err, response) => {
        // console.log('**Env =', process.env.NODE_ENV);
        // console.log(response.status);
        expect(response.status).toBe(200);
        done();
      }),
  ]);

  it('data key should be present in response', done => [
    request(app)
      .get('/api/links')
      .end((err, response) => {
        // console.log('**Env =', process.env.NODE_ENV);
        // console.log(response.body.data);
        expect(response.body.data.length).toBe(4);
        done();
      }),
  ]);
});
