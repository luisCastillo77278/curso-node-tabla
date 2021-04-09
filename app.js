const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
require('colors');

console.clear();

crearArchivoTabla(argv.base, argv.listar, argv.hasta)
    .then((resp) => console.log(resp.rainbow))
    .catch((err) => console.log(err));