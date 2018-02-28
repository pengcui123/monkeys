import * as config from 'config'
import * as Router from 'koa-router'
import * as os from 'os'
import * as moment from 'moment'

import * as requireDir from 'require.dir'

const router = new Router()

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    title: 'monkeys',
    moment,
    path: ctx.path,
    hostname: os.hostname(),
    env: config.get('env')
  })
  try {
    await next()
    if (ctx.status >= 400) {
      ctx.throw(ctx.status)
    }
  } catch (e) {
    ctx.status = e.status || 500
    await ctx.render('error', {
      status: e.status,
      message: e.message
    })
  }
})

// load routes in current folder
const routeList:any = requireDir('.')
;(<any>Object).entries(routeList)
  .forEach((mod:any) => {
    const [ name, route ] = mod
    if (route.default instanceof Router) {
      router.use(route.default.routes())
    }
    if (typeof route.default === 'function') {
      route.default(router)
    }
  })

// router.get('/*', async ctx => {
//   await ctx.render('index')
// })

// prevent files from request
router.get('/_*', async ctx => {
  ctx.throw(404)
})

export default router
