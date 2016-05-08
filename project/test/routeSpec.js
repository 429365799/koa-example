'use strict'
const superagent = require('supertest');
const app = require('../build/app.js');

function request() {
  return superagent(app.listen());
}

describe('Router test', function () {

  describe('GET /login/doLogin', function () {

    it('返回码应该是200', function (done) {
      request()
        .get('/login/doLogin')
        .expect(200, done);
    });

    // it('', () => {
    //
    // });
  });
});
