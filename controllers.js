const forrites = {
  M2tLnmk: 'ariel', 
  Xmwdme6: 'evelin', 
  voHVeGX: 'federico', 
  jTZX5Hh: 'ignacio', 
  kEw1P1x: 'marco', 
  fpFr67v: 'rodrigo', 
  DvQ3TW1: 'santiago', 
  WMNhGxh: 'solana', 
  eBHBQEh: 'yamila'
};

const asistencia = {
  ariel: false,
  evelin: false,
  federico: false,
  ignacio: false,
  marco: false,
  rodrigo: false,
  santiago: false,
  solana: false,
  yamila: false
}

exports.handleVote = (ctx, db) => {
  try {
    const votante = forrites[ctx.params.votante];
    const { vote } = ctx.request.body;
    if (asistencia[votante]) {
      ctx.status = 407;
      ctx.body = JSON.stringify({
        error: 'Un vote por forrite, campeon.',
      });
      console.log(`${votante} quizo votar de nuevo, esta vez por ${vote}`)
      return;
    }
    db[vote] ++;
    asistencia[votante] = true;
    console.log(`${votante} acaba de votar por ${vote}`);
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
    ctx.body = {
      resultados: db,
      asistencia
    };
  } catch (err) {
    console.log(err); // eslint-disable-line
    ctx.status = 500;
  }
};
