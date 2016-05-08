'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

const Login = {

  // 登录

  doLogin: function doLogin(ctx, next) {
    return _asyncToGenerator(function* () {
      ctx.res.end('Hello!');
    })();
  },


  // 登出
  doLoginup: function doLoginup() {
    return _asyncToGenerator(function* () {
      ctx.res.end('Log up!');
    })();
  }
};

exports.default = Login;