const fs = require('fs');
const crearArchivo = ( base = 5 ) => {
    return new Promise((resolve, reject) => {
        console.log('===========================');
        console.log(`Tabla del ${base}`);
        console.log('===========================');
        let salida = '';

        for(let i = 1; i <= 10; i++){
            let resultado = i * base;
            salida += `${base} x ${i} = ${resultado}\n`;
        }
        console.log(salida);

        fs.writeFileSync(`tabla-${3}.txt`, salida);
        resolve(`Tabla del ${ base }.txt`)
           

        
    })
        
}

module.exports = {
    crearArchivo
}
