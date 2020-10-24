const fichaje = require('./fichaje');
const moment = require('moment-business-days');
const cron = require('node-cron');

moment.locale('es');
moment.updateLocale('es', {
    holidayFormat: 'DD/MM/YYYY',
    holidays: [
        // festivos de 2020
        '01/01/2020', '06/01/2020', '25/02/2020', '19/03/2020', '28/03/2020', '09/04/2020', '10/04/2020', 
        '01/05/2020', '24/06/2020', '25/07/2020', '15/08/2020', '12/10/2020', '08/12/2020', '25/08/2020'
    ],
});

//fichar a las 8 y a las 16 de lunes a viernes
cron.schedule('0 8,16 * * 1-5', () => {
    if (moment().isBusinessDay()) {
        fichaje.fichar('user','*******').then(() => {
            console.log(moment().format() + ' => Fichaje OK');
        }).catch((err) => {
            console.log(moment().format() + ' => Error fichando. ' + err);
        });
    }
});

