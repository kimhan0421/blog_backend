const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return; //authorized=1이라는 쿼리 파라미터가 포함되어 있으면 이후 미들웨어 처리
  }
  await next();
  console.log('END');
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => (ctx.body = 'hello world'));
app.listen(4000, () => {
  console.log('Listening to port 4000');
});
