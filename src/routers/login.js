const Router = require('koa-router');
const route = new Router({ prefix: '/login' });

route.get(
  '/user/:id',
  async (ctx, next) => {
    // ...
    ctx.res.end('Hello!');
  }
);

module.exports = route;
