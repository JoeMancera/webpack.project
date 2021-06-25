# js-portfolio

Este proyecto es la base para poder generar el empaquetado y exprimir las habilidades de webpack.

## Configuración inicial

Instalmos webpack con el comando `npm install webpack webpack-cli -D`, instalado el paquete de webpack y cli para tener comandos desde terminal y -D para agregarlo a una dependencia de desarrollo.

## Configuración (webpack config)

En este archivo, colocaremos las configuraciones necesarias para hacer que webpack nos empaquete nuestro proyecto.

Cuando se realice la configuración en este archivo, ejecutamos el comando `npx webpack --mode production --config webpack.config.js`, con esto leerá esta configuración y generará el build.

Para hacer más amigable el build de nuestro proyecto, pordemos agregar un script en el package.json llamado `build`.
