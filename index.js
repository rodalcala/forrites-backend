require('dotenv').config({ path: '.env' });

const Koa = require('koa');
const app = new Koa();

const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router');


app.use(bodyParser());
app.use(cors());
app.use(router.routes());

app.listen(process.env.PORT, async () => {
  console.log(`Listening on port ${process.env.PORT}.`);
});
