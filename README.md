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
Desde webpack cuatro el CLI nos permite generar nuestros archivos optimizados tanto en entorno de desarrollo como de producción. Si queremos cambiar de modo en el CLI debemos agregar la bandera `--mode` y elegir entre `development` o `production`. Por defecto el valor del modo es de producción,