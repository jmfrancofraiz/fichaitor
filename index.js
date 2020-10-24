const fichaje = require('./fichaje');
const festivos = require('./festivos');
const cron = require('node-cron');

const user = 'pon-tu-usuario-aqui';
const password = 'pon-tu-contraseña-aquí';

//fichar a las 8 y a las 16 de lunes a viernes
cron.schedule('0 8,16 * * 1-5', () => {
    if (!festivos.isFestivo()) {
        const d = new Date().toLocaleString();
        fichaje.fichar(user,password).then(() => {
            console.log(d + ' => Fichaje OK');
        }).catch((err) => {
            console.log(d + ' => Error fichando. ' + err);
        });
    }
});