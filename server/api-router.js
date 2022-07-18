const Router = require('@koa/router')
const router = new Router()

router.get('/api/v1', (ctx, next) => {
  ctx.body = [
    {
      id: 1,
      name: 'jack',
      age: 11
    },
    {
      id: 2,
      name: 'rose',
      age: 12
    },
    {
      id: 3,
      name: 'mike',
      age: 13
    }
  ]
})

module.exports = router
