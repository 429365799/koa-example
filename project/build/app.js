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

var _koaOnerror = require('koa-onerror');

var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _serverRender = require('./routers/serverRender.js');

var _serverRender2 = _interopRequireDefault(_serverRender);

var _login = require('./routers/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
const route = (0, _koaRouter2.default)();

// print error to html
(0, _koaOnerror2.default)(app);

// Logger
app.use((0, _koaLogger2.default)());

// Bodyparser
app.use((0, _koaBodyparser2.default)({
  onerror: function onerror(err, ctx) {
    ctx.throw('参数错误', 422);
  }
}));

// Serve static files
// app.use(serve(path.join(__dirname + '/../public/')));

// Routers
route.get('/', _serverRender2.default);
route.get('/login/doLogin', _login2.default.doLogin);
route.get('/login/doLogout', _login2.default.doLogout);

app.use(route.routes());
app.use(route.allowedMethods({
  throw: true
}));

// Compress
app.use((0, _koaCompress2.default)());

// listen port
if (!module.parent) {
  app.listen(3001);
  console.log('listening on port 3001');
}

// error handler
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

// export default app;
module.exports = app;