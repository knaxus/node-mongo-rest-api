const request = require('supertest');
const expect = require('expect');
const app = require('../server');
const { populateData, dummyData } = require('./SeedDB');

beforeEach(populateData);

describe('GET link ENDPOINT is : api/links/:linkId', () => {
  it('should return 400 if objectId is invalid', (done) => {
    const invalidLinkId = '433434343a';

    request(app)
      .get(`/api/links/${invalidLinkId}`)
      .expect(400)
      .end((err, response) => {
        expect(response.body.status).toBe('failed');
        expect(response.body.message).toBe('id is required/invalid');
        done();
      });
  });

  it('should return 200 if objectId is valid', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    const validLinkId = dummyData[0]._id;

    request(app)
      .get(`/api/links/${validLinkId}`)
      .expect(200)
      .end((err, response) => {
        expect(response.body.status).toBe('success');
        expect(response.body.message).toBe('Get data successfully');
        done();
      });
  });
});
