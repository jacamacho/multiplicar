// TIPOS DE REQUIRE
// const fs = require('fs'); PROPIOS DE NODE
// const fs = require('express'); LIBRERIAS DE EXTERNO CUANDO SE LOS INSTALA 
// const fs = requiere('./fs'); CUANDO ESTAN EN EL MISMO FORMATO DE ARCHIVO

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log("Se ha creado el archivo exitosamente " + colors.green(resp)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}