require('dotenv').config({ path: '.env' });

const Koa = require('koa');
const app = new Koa();

const fetch = require('node-fetch');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router');

setInterval(() => {
  fetch('http://losforritos.herokuapp.com/resultados')
    .then(() => console.log('KeepAlive ran successfully!'))
    .error(err => console.log(err))
}, 20 * 60 * 1000);

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

app.listen(process.env.PORT, async () => {
  console.log(`Listening on port ${process.env.PORT}.`);
});
