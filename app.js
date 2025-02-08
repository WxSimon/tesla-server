const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', () => __dirname);


const Koa = require('koa');
const favicon = require('koa-favicon');
const helmet = require('koa-helmet');
const serve = require("koa-static");

require("./db");
const router = require('./router');
const mount = require('koa-mount');

const app = new Koa();
app.proxy = true;

app.use(favicon(__dirname + '/favicon.png'));
app.use(serve("./web"));
app.use(async (ctx, next) => {
    ctx.set({
        'Access-Control-Allow-Origin': "*",
        "Access-Control-Allow-Headers": "*"
    });

    await next();
});

app.use(helmet());

// router
app.use(mount('/', router.routes())).use(router.allowedMethods());

module.exports = app;