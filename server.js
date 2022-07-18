const Koa = require('koa')
const path = require('path')
const sendfile = require('koa-sendfile')
const static = require('koa-static')
const router = require('./server/api-router.js')
const assets = require('./server/assets-router')
const app = new Koa()

// static
app.use(static(path.resolve(__dirname, 'public')))

// api
app.use(router.routes()).use(router.allowedMethods())

// assets
app.use(assets.routes()).use(assets.allowedMethods())

// 404
app.use(async (ctx, next) => {
  await next()

  if (ctx.status === 404) {
    await sendfile(ctx, path.resolve(__dirname, 'public/index.html'))
  }
})

app.listen(5000, () => {
  console.log()
  console.log('App runing in port 5000...')
  console.log()
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m5000/\x1b[0m`)
})
