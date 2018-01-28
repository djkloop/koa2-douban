const koa = require('koa');
const app = new koa();
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')
// const ejs = require('ejs')
const pug = require('pug')

app.use(async(ctx, next) => {
  ctx.type = 'text/html;charset=utf-8'
  ctx.body = pug.render(pugTpl, {
    name: 'Look',
    me: 'djkloop'
  })
})
app.listen(2333)