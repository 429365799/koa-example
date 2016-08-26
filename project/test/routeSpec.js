'use strict'
const request = require('superagent');
const should = require('should');

const CtxPath = 'http://localhost:3001';

describe('Router test', function () {

  describe('POST /login/doLogin', function () {

    it('/', function (done) {
      request
        .post(CtxPath + '/login/doLogin')
        .send({username: '429365799', password: 'chenfq123'})
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
