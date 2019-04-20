# REST APIs using Node and MongoDB

[![Build Status](https://travis-ci.org/knaxus/node-mongo-rest-api.svg?branch=master)](https://travis-ci.org/knaxus/node-mongo-rest-api)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/edf9fdb4593042fe9685f930c733f705)](https://www.codacy.com/app/ashokdey/node-mongo-rest-api?utm_source=github.com&utm_medium=referral&utm_content=JSRockers/node-mongo-rest-api&utm_campaign=badger)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/edf9fdb4593042fe9685f930c733f705)](https://www.codacy.com/app/ashokdey/node-mongo-rest-api?utm_source=github.com&utm_medium=referral&utm_content=JSRockers/node-mongo-rest-api&utm_campaign=Badge_Coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/918083dfa968840a40c2/maintainability)](https://codeclimate.com/github/JSRockers/node-mongo-rest-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/918083dfa968840a40c2/test_coverage)](https://codeclimate.com/github/JSRockers/node-mongo-rest-api/test_coverage)

Learning Objectives:

- [x] Writing test cases
- [x] Setup CI using TravisCI
- [x] Setup code coverage
- [x] Getting famaliar with CodeClimate and Codacy
- [x] Integrating Github webhooks

### Note

- Change URL in this file `app/config/config.js` for mongodb connection
- Few lines on using `uri_decode_auth` as DB option
  - It should be used to decode the connection URI ([Read More](https://stackoverflow.com/questions/7486623/mongodb-password-with-in-it))
  - Use `%40` for `@` if password is like `dummy@dummy`~~
