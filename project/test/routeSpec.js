'use strict'
const request = require('superagent');
const expect = require('expect.js');
const CtxPath = 'http://localhost:3001';

describe('Router test', function () {

  describe('GET /login/doLogin', function () {

    it('返回码应该是200', function (done) {
      request.get(CtxPath + '/login/doLogin')
        .end((res) => {
          console.log(res);
          expect(res).to.exit;
          expect(res.status).to.equal(200);
          done();
        });
    });

    // it('', () => {
    //
    // });
  });
});