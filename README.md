# Fichaje programático
Uso:
```
const fichaje = require('./fichaje');
fichaje.fichar('usuario','contraseña');
```
El módulo solo tiene un método:
* `fichar(user, login, dryrun)`: realiza el fichaje con las credenciales indicadas. El tercer parámetro, `dryrun` es opcional y acepta un booleano. Si se le pasa true, se ejecutará el proceso completo pero sin llegar a hacer el fichaje real.

En el archivo `index.js` se muestra un ejemplo de uso combinado con `node-cron` y `moment-business-days`. Realizará fichajes todos los días laborales a las 08:00 y a las 16:00.
