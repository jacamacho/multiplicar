const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('====================='.green);
    console.log(` ==TABLA DE ${base}==`.blue);
    console.log('====================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} x ${base} = ${i * base}\n`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${i} x ${base} = ${i * base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};