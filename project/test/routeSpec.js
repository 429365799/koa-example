'use strict'
const request = require('superagent');
const should = require('should');

const CtxPath = 'http://localhost:3001';

describe('Router test', function () {

  describe('GET /login/doLogin', function () {

    it('返回码应该是200', function (done) {
      request
        .get(CtxPath + '/login/doLogin')
        .end(function (err, res) {

          res.should.exit;

          res.statusCode.should.equal(200);

          res.body.should.be.eql({a: 100});
          
          done(err);
        });
    });

    // it('', () => {
    //
    // });
  });
});