require('dotenv').config({ path: '.env' });

const Koa = require('koa');
const app = new Koa();

const fetch = require('node-fetch');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router');

setInterval(() => {
  fetch('https://forrites.herokuapp.com/fpFr67v')
    .then(() => console.log('KeepAlive (client) ran successfully!'))
    .catch(err => console.log(err))
  fetch('https://forrites-backend.herokuapp.com/results/fpFr67v')
    .then(() => console.log('KeepAlive (server) ran successfully!'))
    .catch(err => console.log(err))
}, 20 * 60 * 1000);

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

app.listen(process.env.PORT, async () => {
  console.log(`Listening on port ${process.env.PORT}.`);
});
