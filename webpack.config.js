const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js", // punto de entrada o archivo inicial
    output: {
        path: path.resolve(__dirname, 'dist'), // resolvemos el pat para la carpeta dist o de salida
        filename: 'main.js', // Nombre del archivo resultante de la compilación
    },
    resolve:{
        extensions: ['.js' ] // extenciones de los archivos que vamos a usar en el proyecto
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, // extensiones (Expresión regular para ubicar solo estos archivos .mjs o .js)
                exclude: /node_modules/, // excluye los archivos que estan dentro de node_modules
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}