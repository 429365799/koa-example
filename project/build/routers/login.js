'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

const Login = {

  // Login
  doLogin: function doLogin(ctx, next) {
    return _asyncToGenerator(function* () {
      _superagent2.default.get('http://localhost:3001/login/doLogout').end(function (res) {
        console.log(res);
      });
      ctx.res.end('Hello!');
    })();
  },


  // Logout
  doLogout: function doLogout(ctx, next) {
    return _asyncToGenerator(function* () {
      ctx.res.end('Log out!!!');
    })();
  }
};

exports.default = Login;