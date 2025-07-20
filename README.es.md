# Generador de dominios
Para ejecutar el script, utiliza `npm run start`.

Se generará un archivo `domains.json` con todas las combinaciones posibles de dominios en las matrices.

Si el nombre de dominio termina con letras que están disponibles como sufijo de dominio, el sufijo se incorporará como tal en el resultado final. La consola mostrará algunos ejemplos de ello.

Ejemplo: `thegreatpengu.in`

---

He aprovechado para aprender a configurar mi script por mi cuenta con node y npm (en lugar de usar la plantilla de 4Geeks).
- Configure el proyecto con `npm init` y `npm install` y cree el script `app.js`.
- Añadido `"type" : "module"` para poder usar la sintaxis `import {foo} from “bar”`, que me parece más limpia. Si más adelante descubro que no es una buena práctica hacer esto, actualizaré el código.
- Añadido `npm run start` para ejecutar `node app.js` solo para aprender a añadir mis propios comandos npm.

Después de darme cuenta de que mis arrays se combinaban en más de 20k dominios, decidí en su lugar escribirlos en un archivo `json`. Leí sobre el método `writeFileSync` y lo usé al final de mi script. Luego limpié mi salida de consola para que fuera más sucinta, informativa y legible. 

Disfruté trabajando en esto, y fue divertido descubrir un algoritmo limpio para hacerlo.
