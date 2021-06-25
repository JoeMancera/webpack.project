const path = require('path');

module.exports = {
    entry: "./src/index.js", // punto de entrada o archivo inicial
    output: {
        path: path.resolve(__dirname, 'dist'), // resolvemos el pat para la carpeta dist o de salida
        filename: 'main.js', // Nombre del archivo resultante de la compilación
    },
    resolve:{
        extensions: ['.js' ] // extenciones de los archivos que vamos a usar en el proyecto
    }
}