const db = {
  ariel: 0, 
  evelin: 0, 
  federico: 0, 
  ignacio: 0, 
  marco: 0, 
  rodrigo: 0, 
  santiago: 0, 
  solana: 0, 
  yamila: 0
};

const Router = require('koa-router');
const router = new Router();

const ctrl = require('./controllers');

router.post('/vote/:votante', (ctx) => ctrl.handleVote(ctx, db));
router.get('/results', (ctx) => ctrl.showResults(ctx, db));

module.exports = router;