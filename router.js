const db = {
  ignacio: 0, 
  marco: 0, 
};

const Router = require('koa-router');
const router = new Router();

const ctrl = require('./controllers');

router.post('/vote/:votante', (ctx) => ctrl.handleVote(ctx, db));
router.get('/results/:votante', (ctx) => ctrl.showResults(ctx, db));

module.exports = router;