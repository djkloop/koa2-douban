const koa = require('koa');
const app = new koa();
app.use(async (ctx, next) => {
  ctx.body = 'movie index.'
});

app.listen(2333);