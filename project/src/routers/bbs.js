const Router = require('koa-router');
const route = new Router({ prefix: '/bbs' });

route.get(
  '/bbslist',
  async (ctx, next) => {
    // ...
    console.log(ctx.request.params);
    ctx.res.end('List!');
  }
);

module.exports = route;
