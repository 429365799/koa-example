'use strict'
const should = require('should')
const supertest = require('supertest')

const CtxPath = 'http://localhost:3001'
const api = supertest(CtxPath)

describe('Router test', function () {

  describe('POST /login/doLogin', () => {

    it('请求返回200', done => {
      api
        .post('/login/doLogin')
        .send({username: '429365799', password: 'chenfq123'})
        .end((err, res) => {

          res.should.exit

          res.statusCode.should.equal(200)

          done(err)
        })
    })

    it('登录成功返回用户信息', done => {
      api
        .post('/login/doLogint')
        .send({username: '429365799', password: 'chenfq123'})
        .end((err, res) => {
          res.body.should.have.keys('recode', 'msg', 'data')

          done(err)
        })
    });
  })

  describe('GET /login/doLogout', () => {
    it('请求返回200', done => {
      api
        .get('/login/doLogout')
        .end((err, res) => {
          res.statusCode.should.equal(200)
          done(err)
        })
    })

    it('登出成功后返回成功标志', done => {
      api
        .get('/login/doLogout')
        .end((err, res) => {
          res.body.should.have.keys('recode', 'msg', 'data')
          done(err)
        })
    })
  })
})
