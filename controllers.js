exports.handleVote = (ctx, db) => {
  try {
    const { vote } = ctx.request.body;
    db[vote] ++;
    console.log(`${ctx.params.votante} acaba de votar por ${vote}`);
    ctx.status = 200;
  } catch (err) {
    console.log(err); // eslint-disable-line
    ctx.status = 500;
  }
};

exports.showResults = (ctx, db) => {
  try {
    console.log('Pidiendo los resultados');
    ctx.status = 200;
    ctx.body = JSON.stringify(db);
  } catch (err) {
    console.log(err); // eslint-disable-line
    ctx.status = 500;
  }
};
