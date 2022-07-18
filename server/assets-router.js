const Router = require('@koa/router')

const staticReg = /\/src\/.+\.(svg|png|jpg|png|jpeg|mp4|ogv)$/ // 还可以添加其他格式
const router = new Router()

router.get(staticReg, (ctx, next) => {
  ctx.redirect(`http://localhost:5173/${ctx.path}`)
})

module.exports = router
