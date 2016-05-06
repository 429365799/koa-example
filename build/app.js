const koa = require('koa');
const app = new koa();

// Routers
let login = require('./routers/login.js').routes();

app.use(login);

app.listen(3000);

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx);
});