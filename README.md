# Webpack 4

![](https://miro.medium.com/max/2000/1*oJj7VCITmRw4VLRm_ud8Sw.png)

Webpack es un empaquetador para Javascript y sus amigos. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden.

Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros.

#### User Experience

Se logra con una aplicación que:

- Funcione
- Sea rápida
- Cumpla sus necesidades
- Se actualice
- Responda a sus interacciones
- Producto de calidad

#### Developer Experience

Escribir aplicaciones de manera eficiente.

- Tener un código limpio.
- Aplicar tecnología para resolver sus problemas.
- Tener un conjunto de reglas y convenciones.
- Entorno de desarrollo optimizado en - productividad.

## Iniciar webpack

Para iniciar webpack se necesita crear un proyecto en Node a través de:

```
yarn init
```

y agregar como dependencias de desarrollo a webpack y a webpack-cli.

```
yarn add webpack webpack-cli -D
```

### CLI de webpack

El CLI (command line interface) de webpack nos permitira usar webpack desde nuestra terminal usando npx. Para empaquetar nuestros archivos optimizados y generar nuestro primer `bundle`, que es el que recibira el cliente, debemos ejecutar el cli de webpack, especificando el entry point (index.js) y especificar el archivo de salida que llamaremos `bundle.js`.

```
npx webpack --entry ./index.js --output .bundle.js --mode development
```

Desde webpack cuatro el CLI nos permite generar nuestros archivos optimizados tanto en entorno de desarrollo como de producción. Si queremos cambiar de modo en el CLI debemos agregar la bandera `--mode` y elegir entre `development` o `production`. Por defecto el valor del modo es de producción.

### Configuración de webpack

Podemos hacer la configuración de webpack de nuestro proyecto creando un archivo llamado `webpack.config.js`. En este archivo configuraremos el comportamiento que tendra webpack para empaquetar todos nuestros archivos de desarrollo.

Es importante recalcar que webpack funciona con CommonJS, por lo que para requerir modulos de NodeJS lo haremos con `requiere()`.

Por ejemplo, esta configuración de webpack nos crea un bundle como output usando como entry nuestro `index.js`.

```javascript
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  }
};
```

Y para que webpack funcione ejecutamos unicamente:

```
npx webpack
```

Si nosotros queremos, podemos agregar un script de `build` a nuesto archivo package.json. Esto con el fin de ser más claros al momento de definir que hace webpack.

```json
//package.json
 "scripts": {
    "build": "webpack"
  },
```

## Diferentes configuraciones de build

Con webpack podemos crear diferentes configuraciones al momento de hacer build. Por ejemplo si tenemos otro proyecto dentro de nuestra carpeta que queremos que lo precese webpack, podemos añadirle su propio archivo `webpack.config.json` y construir nuestro bundle. Algunos exemplos de configuraciones que se pueden hacer en nuestro proyecto pueden ser las siguientes:

```json
//package.json
  "scripts": {
    "build": "webpack",
    "build:local": "webpack --mode production",
    "build:external": "webpack --config ./external/webpack.config"
  },
```

## Configuracion de multiples entry points

En webpack es posible configurar multiples entry points, esto es necesario cuado tenemos un proyecto que no consume un único recurso. Para ello los puntos de entrada se deben configurar en un objeto. Y esos objetos pueden ser procesados a través de los templates que tiene webpack, estos se pueden usar con `[name]`. Aquí un ejemplo de como se hace:

```javascript
//webpack.config.js
const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  }
};
```

## Loaders

Los Loaders son la funcionalidad que nos da Webpack para interpretar tipos de archivos no soportados de forma nativa por Javascript.

style-loader sirve para inyectar un tag style (el CSS) al DOM de nuestro HTML, mientras que css-loader sólo sirve para interpretar archivos CSS.

La manera de agregarlos en nuestro `webpack.config.js` es añadiendo un module, configurando una regla que será la encargada de clasificar que archivos se les aplicaran los loaders, para preprocesar los archivos que no son soportados de manera nativa. Por ejemplo, esta configuración de webpack nos permite importar el css dentro de javascript.

```javascript
import "../css/index.css";

document.body.innerHTML = "<h1>Usando CSS en Webpack! 🎉</h1>";

```
Para que esto funcione usamos los loaders de css-loader y style-loader en nuestro `webpack.config.js` de la siguiente manera:

```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'src/js/index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        //Expresión regular que elige todos los archivos que terminen en css.
        test: /\.css$/,
        //Los loaders que procesarán los archivos css.
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

```

## Plugins

Los plugins nos permiten darle funcionalidades extra a webpack y extender las capacidades de los loaders. Con ellos por ejemplo podemos minificar nuestro css o incluso autogenerar el html optimizado para producción. Estos plugins se agregan a la configuración de webpack a través del key value `plugins`.

En este caso usaremos dos plugins:

- **mini-css-extract-plugin**: Este plugin nos generará nuestro archivo css ya procesado por webpack en la carpeta dist (producción)
- **html-webpack-plugin**: Nos genera un html para producción importando todos los archivos que generamos con webpack.

```javascript
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //En los loaders podemos especificar si un plugin
          //tendra alguna relacion con el loader.
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  },
  //Parte donde se configuran los plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Plugin'
    })
  ]
};

```