

const { options, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const { crearArchivoAsync } = require('./helpers/multplicarAsync');
const argv = require('./config/yargs');
require('colors');
console.clear()


/*const [,,arg3 = 'base = 5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);*/


//const base = 3;
/*
crearArchivo(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err))

*/
crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))

/*
Comandos:
npm init - Crea el archivo packge.json
npm install paquete --save-dev - no lo instala domo dependencia, solo para desarrrollo
npm unistall paquete - Para desintalar un paquete
npm install paquete@1.0.0 - Para instalar una versión específica de un paquete
npm update - Revisa posibles actualizaciones de paquetes

npm install para instalar todos los pquetes que necesita la aplicacion
------------------------------------------------------------
node app --help
node app --version - Muestra la version del software que aparece en el archivo package.json
------------------------------------------------------------
git init para incializar el repositorio
git add . -- Sive para añadir archivos al commit
git commit -m "Primer commit" -- Crear un commit
*/

