const koa = require('koa')
const koaRequest = require('koa-http-request')
const http = require('http')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const kstatic = require('koa-static')
const cors = require('koa-cors');
const app = new koa()
const staticCache = require('koa-static-cache')
const compress = require('koa-compress')
const router = require('koa-router')();
const logger = require('koa-logger')

app.use(cors());
app.use(logger())

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(
    compress({
        filter: () => {
            return true
        },
        threshold: 10 * 1024,
        flush: require('zlib').Z_SYNC_FLUSH
    })
)

// assets file
const assetsPath = path.join(__dirname, 'dist')
app.use(kstatic(assetsPath))

// views html
app.use(
    views(__dirname + '/dist', {
        map: {
            html: 'swig'
        },
        cache: process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test'
    })
)

// static cache
app.use(
    staticCache(assetsPath, {
        maxAge: 7 * 24 * 3600,
        gzip: true
    })
)

// use X-Real-IP for nginx proxy_pass
app.proxy = true

// body parser
app.use(
    bodyParser({
        jsonLimit: '12mb',
        textLimit: '12mb',
        formLimit: '12mb'
    })
)

/**
 * 路由
 */
router.get('/*', async (ctx, next) => {
    console.log('get in ');
    await ctx.render('index');
})
app.use(router.routes())

/**
 * 监控
 */
app.listen((process.env.PORT || 3000),()=>{
    console.log("server running on port " + (process.env.PORT || 3000))
})
