const router = require('koa-router')()

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  console.log("我进来了2")
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
