const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Determina hasta donde llegara la multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw `Error el valor que especifico no es un numero`;
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;