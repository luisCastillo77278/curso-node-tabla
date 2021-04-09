const colors = require('colors');
const fs = require('fs');

const crearArchivoTabla = async(num = 5, listar = false, hasta = 10) => {
    try {
        let salida = '',
            consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${num} ${'x'.green} ${i} ${'='.green} ${num*i}\n`;
            salida += `${num} x ${i} = ${num*i}\n`;
        }

        if (listar) {
            console.log("========================".green);
            console.log('===== TABLA DEL'.green, colors.blue(num), ' ====='.green);
            console.log("========================".green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tablaNum-${num}.txt`, salida);

        // console.log(`tabla del ${num} creada con exito`);
        return `tabla del ${num} creada con exito`;

    } catch (error) {
        throw error;
    }
};



module.exports = {
    crearArchivoTabla
};