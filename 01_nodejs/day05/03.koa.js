const Koa = require('koa');
const _ = require('koa-route');
const Router = require('koa-router');
//创建应用对象
const app = new Koa();
//创建路由器对象
const router = new Router();
//使用中间件
/*app.use(_.get('/pets', ctx => {
  ctx.body = 'hello pets';
}));
app.use(_.get('/pets/:id', ctx => {
  ctx.body = 'hello id';
}));
app.use(async ctx => {
  ctx.body = 'hello koa';
})*/
router.get('/pets', ctx => {
  ctx.body = 'hello pets';
});
router.get('/pets/:id', ctx => {
  ctx.body = 'hello id';
});

//应用路由器
app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async ctx => {
  ctx.body = 'hello koa';
})
//监听服务
app.listen(3000);

