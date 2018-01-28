module.exports = `
doctype html
html(lang='en')
  head
    meta(charset='UTF-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    meta(http-equiv='X-UA-Compatible', content='ie=edge')
    title Koa Server Html
    link(href='https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css', rel='stylesheet')
  body
    .container
      .row
        .col-md-8
          h1 Hi #{name}
          p This is #{me}
        .col-md-4
          p 页面测试Pug页
    script(src='https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
    script(src='https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js')

`