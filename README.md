# js-portfolio

Este proyecto es la base para poder generar el empaquetado y exprimir las habilidades de webpack.

## Configuración inicial

Instalmos webpack con el comando `npm install webpack webpack-cli -D`, instalado el paquete de webpack y cli para tener comandos desde terminal y -D para agregarlo a una dependencia de desarrollo.

## Configuración (webpack config)

En este archivo, colocaremos las configuraciones necesarias para hacer que webpack nos empaquete nuestro proyecto.

Cuando se realice la configuración en este archivo, ejecutamos el comando `npx webpack --mode production --config webpack.config.js`, con esto leerá esta configuración y generará el build.

Para hacer más amigable el build de nuestro proyecto, pordemos agregar un script en el package.json llamado `build`.

## Babel

Babel nos permite preparar nuestro proyecto para que funcione en todos los navegadores. Para preparar el proyecto con babel, debemos agregar lo siguiente `npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime`. el primero es la dependencia para babel, el segundo es el core de babel, el siguiente es para trabajar JS moderno y el plugin transform permite asimilar el asincronismo aplicado en nuestro proyecto.

Para continuar, cramos un archivo de configuración a babel creando `.babelrc` en la raiz del proyecto.

Creamos un objeto para colocar los presets y plugins que vamos a utilizar, además de la configuración para babel. Adicional, lo agregamos al webpack.conf creando modules así:
````json
module: {
    rules: [ // Establesemos reglas
        {
            test: /\.m?js$/, // extensiones (Expresión regular para ubicar solo estos archivos .mjs o .js)
            exclude: /node_modules/, // excluye los archivos que estan dentro de node_modules
            use:{
                loader: 'babel-loader'
            }
        }
    ]
}
```

Y para recompilar nuestro proyecto podemos ejecutar el script creado antes `npm run build`.
