const fs = require('fs');
const colors = require('colors');
const crearArchivoAsync = async( base = 5, listar=false, limite = 10 ) => {
    
        try{
            let salida, consola = '';

            for(let i = 1; i <= limite; i++){
                let resultado = i * base;
                salida += `${base} x ${i} = ${resultado}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${resultado}\n`;
            }
            if(listar){
                console.log('==========================='.green);
                console.log('Tabla del'.green, colors.blue(base));
                console.log('==========================='.green);
                console.log(consola);
            }

            fs.writeFileSync(`./salida/tabla-${3}.txt`, salida);
            return `Tabla del ${ base }.txt`;
        }catch(error){
            throw error;
        }
           
        
}

module.exports = {
    crearArchivoAsync
}