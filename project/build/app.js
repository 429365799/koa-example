'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _login = require('./routers/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
const route = (0, _koaRouter2.default)();

// Logger
app.use((0, _koaLogger2.default)());

// Bodyparser
app.use((0, _koaBodyparser2.default)({
  onerror: function onerror(err, ctx) {
    ctx.throw('参数错误', 422);
  }
}));

// Routers
app.use(route.get('/login/doLogin', _login2.default.doLogin).routes());
app.use(route.allowedMethods());

// Serve static files
app.use((0, _koaStatic2.default)(_path2.default.join(__dirname + '/../public/')));

// Compress
app.use((0, _koaCompress2.default)());

// listen port
if (!module.parent) {
  app.listen(3001);
  console.log('listening on port 3001');
}

// error handler
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx);
});

// export default app;
module.exports = app;