1. `npm init -y` Inicializamos por defecto(node_modules, package.json...).

1. `npm install typescript` Instalamos typescript.

1. añadir a dependencias: "tsc": "tsc" y ejecuta `npm run tsc -- --init` para añadir el tsconfig.json y diseñar nuestro entorno de desarrollo con ts. "el -- de mas es para que se ejecute en tsc, no en el "run"

1. `npm install express` Instala express

1. https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express <- en el caso de no tener tipado en el paquete instalado.

1. `npm run tsc` Compila | `npm start` Inicia server en 3000

1. `npm install ts-node-dev` Este paquete nos mantiene la compilacion activa y el server escuchando. Ejecutar con `npm run dev`

1. `npm install ts-standard` linter 37.04 