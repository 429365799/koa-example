import Koa from 'koa';
import compress from 'koa-compress';
import bodyparser from 'koa-bodyparser';
import path from 'path';
import serve from 'koa-static';
import logger from 'koa-logger';
import convert from 'koa-convert';

import Router from 'koa-router';
import Login from './routers/login.js';

const app = new Koa();
const route = Router();

// Logger
app.use(convert(logger()));

// Bodyparser
app.use(bodyparser({
  onerror: function (err, ctx) {
    ctx.throw('参数错误', 422);
  }
}));

// Routers
route.get('/login/doLogin', Login.doLogin);
route.get('/login/doLogout', Login.doLogout);
app.use(route.routes());
app.use(route.allowedMethods());

// Serve static files
app.use(serve(path.join(__dirname + '/../public/')));

// Compress
app.use(compress());

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
