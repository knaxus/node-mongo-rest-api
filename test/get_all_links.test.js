const request = require('supertest');
const app = require('../server');
const expect = require('expect');
const { populateData } = require('./SeedDB');

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

<<<<<<< HEAD:test/get_all_links.test.js
  it('should contain "success" in response body', done => [
    request(app)
      .get('/api/links')
      .end((err, response) => {
        // console.log('**Env =', process.env.NODE_ENV);
        // console.log(response.body.data);
        expect(response.body.status).toBe('success');
        done();
      }),
  ]);

  it('should contain 3 link objects in response', done => [
=======
  it('should return "success" as status', done => [
>>>>>>> master:test/addLink_test.test.js
    request(app)
      .get('/api/links')
      .end((err, response) => {
        // console.log('**Env =', process.env.NODE_ENV);
        // console.log(response.body.data);
<<<<<<< HEAD:test/get_all_links.test.js
        expect(response.body.data.length).toBe(3);
=======
        expect(response.body.status).toBe('success');
>>>>>>> master:test/addLink_test.test.js
        done();
      }),
  ]);
});
